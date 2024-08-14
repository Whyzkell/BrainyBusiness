const db = require("../db/index");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const { enviarCodigoVerificacion } = require("../utils/emailService");

exports.register = async (req, res) => {
  const { nombre_usuario, contra_usuario, email_usuario } = req.body;
  try {
    // Verificar si el correo ya existe en la tabla "Usuarios"
    const existingUser = await db.query(
      'SELECT * FROM "Usuarios" WHERE email_usuario = $1',
      [email_usuario]
    );

    if (existingUser.rows.length > 0) {
      return res
        .status(400)
        .json({ error: "El correo electrónico ya está registrado" });
    }

    const hashedPassword = await bcrypt.hash(contra_usuario, 10);
    const codigo_verificacion = crypto.randomInt(100000, 999999).toString();

    const result = await db.query(
      'INSERT INTO "Usuarios" (nombre_usuario, contra_usuario, email_usuario, codigo_verificacion) VALUES ($1, $2, $3, $4) RETURNING *',
      [nombre_usuario, hashedPassword, email_usuario, codigo_verificacion]
    );

    await enviarCodigoVerificacion(email_usuario, codigo_verificacion);

    res.json({
      message: "Usuario registrado. Por favor, verifica tu correo electrónico.",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

exports.verificarCodigo = async (req, res) => {
  const { email_usuario, codigo } = req.body;
  try {
    const result = await db.query(
      'SELECT * FROM "Usuarios" WHERE email_usuario = $1',
      [email_usuario]
    );
    if (result.rows.length === 0)
      return res.status(404).json({ error: "Usuario no encontrado" });

    const user = result.rows[0];
    if (user.codigo_verificacion !== codigo)
      return res.status(400).json({ error: "Código incorrecto" });

    await db.query(
      'UPDATE "Usuarios" SET verificado = TRUE, codigo_verificacion = NULL WHERE id_usuario = $1',
      [user.id_usuario]
    );

    res.json({ message: "Cuenta verificada exitosamente" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

// authController.js
exports.login = async (req, res) => {
  const { email_usuario, contra_usuario } = req.body;
  try {
    const result = await db.query(
      'SELECT * FROM "Usuarios" WHERE email_usuario = $1',
      [email_usuario]
    );
    if (result.rows.length === 0)
      return res.status(401).json({ error: "Usuario no encontrado" });

    const user = result.rows[0];
    const validPassword = await bcrypt.compare(
      contra_usuario,
      user.contra_usuario
    );
    if (!validPassword)
      return res.status(401).json({ error: "Contraseña incorrecta" });

    if (!user.verificado) {
      const nuevo_codigo = crypto.randomInt(100000, 999999).toString();
      await db.query(
        'UPDATE "Usuarios" SET codigo_verificacion = $1 WHERE id_usuario = $2',
        [nuevo_codigo, user.id_usuario]
      );
      await enviarCodigoVerificacion(email_usuario, nuevo_codigo);
      return res.json({
        requiresVerification: true,
        message:
          "Por favor, verifica tu cuenta. Se ha enviado un nuevo código.",
      });
    }

    const token = jwt.sign({ id: user.id_usuario }, "tu_secreto_jwt", {
      expiresIn: "1h",
    });
    console.log("Token generado:", token);
    res.json({
      token,
      user: {
        id: user.id_usuario,
        nombre_usuario: user.nombre_usuario,
        email_usuario: user.email_usuario,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

exports.getCurrentUser = async (req, res) => {
  try {
    const user = await db.query(
      'SELECT id_usuario, nombre_usuario, email_usuario FROM "Usuarios" WHERE id_usuario = $1',
      [req.user.id]
    );
    if (user.rows.length === 0) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
    res.json(user.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error del servidor" });
  }
};

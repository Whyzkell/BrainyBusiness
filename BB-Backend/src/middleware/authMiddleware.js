// middleware/authMiddleware.js
const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const token = req.header("x-auth-token");
  console.log("Token recibido:", token);
  if (!token)
    return res.status(401).json({ msg: "No hay token, autorización denegada" });

  try {
    const decoded = jwt.verify(token, "tu_secreto_jwt");
    console.log("Token verificado:", decoded);
    req.user = decoded.user;
    next();
  } catch (err) {
    console.log("Error al verificar token:", err);
    res.status(401).json({ msg: "Token no válido" });
  }
};

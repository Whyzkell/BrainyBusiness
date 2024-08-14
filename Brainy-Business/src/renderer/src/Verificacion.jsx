// Verify.jsx
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useLocation } from 'react-router-dom'

export default function Verify() {
  const [code, setCode] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const location = useLocation()
  const email = location.state?.email

  useEffect(() => {
    if (!email) {
      navigate('/login')
    }
  }, [email, navigate])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('/auth/verify', { email_usuario: email, codigo: code })
      navigate('/app')
    } catch (error) {
      setError(error.response?.data?.error || 'Error al verificar el código')
    }
  }

  return (
    <div>
      <h2>Verificar Cuenta</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Código de verificación"
          required
        />
        <button type="submit">Verificar</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  )
}

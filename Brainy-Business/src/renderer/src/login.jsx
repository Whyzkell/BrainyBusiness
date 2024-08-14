import React, { useState } from 'react'
import axios from 'axios'
import laptop from '../../../resources/laptop.png'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../AuthContext'

export default function Login() {
  const [formData, setFormData] = useState({
    email_usuario: '',
    contra_usuario: ''
  })

  const [error, setError] = useState('')
  const navigate = useNavigate()
  const { login } = useAuth()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const success = await login(formData.email_usuario, formData.contra_usuario)
      if (success) {
        navigate('/app') // Redirigimos al dashboard después de un login exitoso
      } else {
        setError('Credenciales inválidas')
      }
    } catch (error) {
      setError(error.response?.data?.error || 'Error al iniciar sesión')
    }
  }

  //const handleSubmit = async (e) => {
  //  e.preventDefault()
  //  try {
  //     const response = await axios.post('/auth/login', formData)
  //    if (response.data.requiresVerification) {
  //      navigate('/verificar', { state: { email: formData.email_usuario } })
  //    } else {
  //      localStorage.setItem('token', response.data.token)
  //      // Redirigir al usuario a la página principal o dashboard
  //      navigate('/')
  //    }
  //  } catch (error) {
  //    setError(error.response?.data?.error || 'Error al iniciar sesión')
  //  }
  //}

  return (
    <>
      <div className="flex static w-full items-center bg-white">
        <section className="w-4/6 flex h-full flex-col items-center gap-3">
          <h1 className="font-bold">Welcome Back!</h1>
          <form onSubmit={handleSubmit} className="w-2/4 flex flex-col gap-3">
            <div className="flex flex-col">
              <label
                htmlFor="email_usuario"
                className="block mb-1 text-sm font-medium text-gray-900 dark:text-black"
              >
                Email:
              </label>
              <input
                type="email"
                id="email_usuario"
                className="h-8 border border-indigo-500 rounded-xl pl-3 bg-white"
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="contra_usuario"
                className="block mb-1 text-sm font-medium text-gray-900 dark:text-black"
              >
                Password:
              </label>
              <input
                type="password"
                id="contra_usuario"
                className="h-8 border border-indigo-500 rounded-xl pl-3 bg-white"
                onChange={handleChange}
                required
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className="bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-800 w-full h-8 rounded-xl text-white mt-4 transition-colors duration-300"
            >
              Login
            </button>
          </form>
          <h1 className="mt-2">
            Don't have an account?{' '}
            <span className="font-bold border-b-2 border-black" id="register-btn">
              <a href="/registro">Register</a>
            </span>
          </h1>
        </section>
        <section className="w-2/4 bg-indigo-300 min-h-screen flex justify-center items-center">
          <img src={laptop} className="w-11/12" alt="Laptop" />
        </section>
      </div>
    </>
  )
}

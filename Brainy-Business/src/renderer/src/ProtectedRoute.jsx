// ProtectedRoute.jsx
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../AuthContext'

const ProtectedRoute = () => {
  const { user, loading } = useAuth()

  if (loading) {
    return <div>Cargando...</div> // O cualquier componente de carga que prefieras
  }

  return user ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoute

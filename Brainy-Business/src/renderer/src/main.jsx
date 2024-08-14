import '../src/tailwind/index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { AuthProvider } from '../AuthContext'
import App from './App'
import Categorias from './Categorias'
import Productos from './Productos'
import Comparacion from './Comparacion'
import Categorias_Comparacion from './Categorias_Comparacion'
import Registro from './Register'
import Login from './login'
import TopComVen from './Top-Compradores-Vendedores'
import NuevosClientes from './Nuevos_Clientes'
import Ajustes from './Ajustes'
import VerifyCode from './Verificacion'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/categorias" element={<Categorias />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/productos-comparacion" element={<Comparacion />} />
        <Route path="/categorias-comparacion" element={<Categorias_Comparacion />} />
        <Route path="/nuevos_clientes" element={<NuevosClientes />} />
        <Route path="/registro" element={<Registro />} />
        <Route
          path="/login"
          element={
            <AuthProvider>
              <Login />
            </AuthProvider>
          }
        />

        <Route
          path="/"
          element={
            <AuthProvider>
              <App />
            </AuthProvider>
          }
        />
        <Route
          path="/app"
          element={
            <AuthProvider>
              <App />
            </AuthProvider>
          }
        />

        <Route path="/top-Com-Ven" element={<TopComVen />} />
        <Route
          path="/ajustes"
          element={
            <AuthProvider>
              <Ajustes />
            </AuthProvider>
          }
        />
        <Route path="/verificar" element={<VerifyCode />} />
      </Routes>
    </Router>
  </React.StrictMode>
)

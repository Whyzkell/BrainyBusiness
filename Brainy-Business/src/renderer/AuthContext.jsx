import React, { createContext, useState, useContext, useEffect } from 'react'
import axios from 'axios'

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      fetchUserData(token)
    } else {
      setLoading(false)
    }
  }, [])

  const fetchUserData = async (token) => {
    try {
      const response = await axios.get('/auth/me', {
        headers: { Authorization: `Bearer ${token}` }
      })
      console.log('User data fetched:', response.data)
      setUser(response.data)
      console.log('User state set:', user)
    } catch (error) {
      console.error('Error fetching user data:', error)
      localStorage.removeItem('token')
    } finally {
      setLoading(false)
    }
  }

  const login = async (email, password) => {
    try {
      const response = await axios.post('/auth/login', {
        email_usuario: email,
        contra_usuario: password
      })
      const { token, user } = response.data
      localStorage.setItem('token', token)
      setUser(user)
      console.log('Login successful, returning true')
      return true
    } catch (error) {
      console.error('Login error:', error)
      console.log('Login failed, returning false')
      return false
    }
  }

  const logout = () => {
    localStorage.removeItem('token')
    setUser(null)
  }

  const value = {
    user,
    login,
    logout,
    loading,
    fetchUserData
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)

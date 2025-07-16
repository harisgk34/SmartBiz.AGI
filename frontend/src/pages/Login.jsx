import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('http://localhost:5000/api/login', formData)
      localStorage.setItem('token', res.data.token)
      window.confirm('Login successful!')
      navigate('/')
    } catch (err) {
      alert('Wait for a Production version still We working on it contact us for production Date ')
       navigate('/')
      console.error(err)
      
      
    }
     setFormData({ email: '', password: '' })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 ">
      <form onSubmit={handleSubmit} className="bg-gray-700 p-8 shadow-black shadow-2xl rounded  w-full max-w-sm">
        <h2 className="text-xl font-bold mb-4 text-center">Login</h2>
        <input name="email" onChange={handleChange} placeholder="Email" type="email" className="w-full mb-3 px-4 py-2 border rounded" required />
        <input name="password" onChange={handleChange} placeholder="Password" type="password" className="w-full mb-3 px-4 py-2 border rounded" required />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">Login</button>
      </form>
    </div>
  )
}

export default Login

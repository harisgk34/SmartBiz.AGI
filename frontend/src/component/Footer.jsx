import React from 'react'
import { FaInstagram, FaLinkedin, FaWhatsapp, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 block" data-aos="fade-up">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold mb-2">SmartBiz</h2>
          <p className="text-sm text-gray-400">AI Agents that grow with your business.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            
            <Link to="/Agents" className="hover:underline">Agents</Link>
            <li><Link to="/pricing" className="hover:underline">Pricing</Link></li>
            <li><Link to="/consultancy" className="hover:underline">Consultation</Link></li>
            <li><Link to="/blog" className="hover:underline">Blog</Link></li>
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
          <p className="text-sm text-gray-400">📞 +91 88705 75425 / 88381 19414</p>
          <p className="text-sm text-gray-400 mb-4">✉️ rajasekaranhari630@gmail.com</p>
          <div className="flex space-x-4 text-xl">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-400"><FaLinkedin /></a>
            <a href="https://wa.me/918870575425" target="_blank" rel="noreferrer" className="hover:text-green-400"><FaWhatsapp /></a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-red-500"><FaYoutube /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} SmartBiz. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer


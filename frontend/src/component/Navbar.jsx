import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { FiMenu, FiX } from 'react-icons/fi' // hamburger and close icons

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false) // for mobile menu toggle

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    })
  }, [])

  const controlNavbar = () => {
    const currentScroll = window.scrollY
    setScrolled(currentScroll > 80)

    if (currentScroll > lastScrollY && currentScroll > 100) {
      setShowNavbar(false)
    } else {
      setShowNavbar(true)
    }

    setLastScrollY(currentScroll)
  }

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar)
    return () => window.removeEventListener('scroll', controlNavbar)
  }, [lastScrollY])

  return (
    <nav
      data-aos="fade-down"
      className={`
        fixed w-screen z-50 transition-all duration-300
        ${showNavbar ? 'translate-y-0' : '-translate-y-full'}
        ${scrolled ? 'bg-slate-900 text-white shadow-md' : 'bg-transparent '}
      `}
    >
      <div className="flex justify-between items-center px-6 py-4">
        <div className="text-2xl font-bold">SmartBiz.AGI</div>

        {/* Hamburger icon for mobile */}
        <div className="lg:hidden text-white text-2xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>

        {/* Desktop menu */}
        <ul className="hidden lg:flex gap-6 text-sm font-medium">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Agents">Agents</Link></li>
          <li><Link to="/consultancy">Consultancy</Link></li>
          

          <li><Link to="/pricing">Subscription</Link></li>
          <li><Link to="/blog">Blog</Link></li>
        </ul>

        <div className="hidden lg:flex">
          <Link to="/login" className="bg-black text-white px-4 py-2 rounded">Login</Link>
          <Link to="/Register" className="ml-2 border border-white px-4 py-2 rounded">Get Started</Link>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="lg:hidden bg-slate-900 text-white px-6 py-4 flex flex-col gap-4 ">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/Agents" onClick={() => setMenuOpen(false)}>Agents</Link>
          <Link to="/consultancy" onClick={() => setMenuOpen(false)}>Consultancy</Link>
          <Link to="/pricing" onClick={() => setMenuOpen(false)}>Subscription</Link>
          <Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
          <Link to="/login" onClick={() => setMenuOpen(false)} className="bg-black flex justify-center text-white px-4 py-2 rounded">Login</Link>
          <Link to="/Register" onClick={() => setMenuOpen(false)} className="border flex justify-center bg-white text-gray-900 font-bold border-white px-4 py-2 rounded">Get Started</Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar

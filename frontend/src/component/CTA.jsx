import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section
      className="h-screen bg-blue-600 text-white py-16 px-6 text-center justify-center flex flex-col items-center"
      data-aos="zoom-in"
    >
      <h2 className="text-3xl font-bold mb-4">
        Ready to Power Your Business with AI?
      </h2>
      <p className="mb-6 text-lg max-w-xl mx-auto">
        Start automating your workflow, boosting customer experience, and growing faster with SmartBiz AI agents.
      </p>
      <div className="flex justify-center flex-wrap gap-4">
        <Link
          to="/signup"
          className="bg-white text-blue-600 px-6 py-3 rounded font-semibold hover:bg-gray-200 transition"
        >
          Get Started
        </Link>
        <Link
          to="/consultancy"
          className="border border-white px-6 py-3 rounded hover:bg-white hover:text-blue-600 transition"
        >
          Book Free Consultation
        </Link>
      </div>
    </section>
  )
}

export default CTA

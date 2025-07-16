import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const MadeByDeveloper = () => {
  return (
    <section className="bg-slate-900 text-white py-16 px-6 text-center mt-9 items-center h-screen flex flex-col justify-center" data-aos="fade-up">
      <div className="max-w-xl mx-auto flex flex-col items-center gap-6">

        <img src="Profile.png" alt="AI-Agents-Profile" className=' rounded-full w-1/2' />

        <h2 className="text-2xl font-bold mb-4">Built & Designed by Hariharan Rajasekar</h2>

        <p className="text-gray-400 mb-6">
          I'm a full stack developer passionate about coding, automation, and AI. I created this platform to help businesses scale smarter with intelligent agents.
        </p>
        <p className="text-sm text-gray-500 mb-6">
          Tech Stack: React, Tailwind CSS, Node.js, MongoDB, Express, OpenAI API,AI Agents ,
        </p>
        <div className="flex justify-center gap-6 text-xl">
          <a href="https://github.com/yourgithub" target="_blank" rel="noreferrer" className="hover:text-gray-300">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noreferrer" className="hover:text-blue-400">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  )
}

export default MadeByDeveloper

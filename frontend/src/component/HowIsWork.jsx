import React from 'react'
import { FaComments, FaRobot, FaPlug, FaCheckCircle } from 'react-icons/fa'

const steps = [
  {
    id: 1,
    title: 'Customer Requirement Discussion',
    icon: <FaComments size={32} />,
    description:
      'We begin by understanding your business goals, pain points, and automation needs. This ensures the AI agent we build truly fits your use case.',
  },
  {
    id: 2,
    title: 'Agent Setup & Customization',
    icon: <FaRobot size={32} />,
    description:
      'Our team configures a tailored AI agent — from conversation tone to task handling. You’ll see previews and suggest edits before launch.',
  },
  {
    id: 3,
    title: 'App Integration',
    icon: <FaPlug size={32} />,
    description:
      'We integrate the AI agent into your website or app — chatbot, workflow bot, or CRM — all synced to your systems.',
  },
  {
    id: 4,
    title: 'Delivery & Ongoing Support',
    icon: <FaCheckCircle size={32} />,
    description:
      'After testing and approval, we deliver the final setup with full performance tracking and continuous support.',
  },
]

const HowItWorks = () => {
  return (
    <div className="px-6 py-16 bg-white text-gray-800">
      <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">
        How It Works
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className="bg-slate-100 rounded-xl p-6 text-center shadow hover:shadow-lg transition"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className=" flex justify-center text-blue-600 mb-4 items-center">{step.icon}</div>
            <h3 className="text-lg font-semibold mt-8 mb-2">{step.title}</h3>
            <p className="text-sm text-slate-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HowItWorks

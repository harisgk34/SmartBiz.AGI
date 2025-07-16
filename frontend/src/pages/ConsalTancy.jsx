import { Link } from 'react-router-dom'

const ConsulTancy = () => {
  return (
    <div className="min-h-screen px-4 py-10 bg-gray-50 text-gray-800 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-blue-700 mb-4">AI Consultancy Services</h1>
        <p className="text-lg mb-8">
          We help you integrate AI tools and automation into your business. Whether you're starting fresh or upgrading, our experts guide you every step.
        </p>

        <img src="/Service/ServiceBot2.jpg" alt="AI consultancy" className="mx-auto mb-8 rounded-lg shadow-md max-h-80" />

        <div className="grid md:grid-cols-2 gap-6 text-left mt-8">
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">Tailored AI Solutions</h2>
            <p>We assess your business needs and implement custom AI agents, automation flows, and tools to increase efficiency.</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">End-to-End Guidance</h2>
            <p>From ideation to deployment, we support you with strategy, tool selection, system setup, and employee training.</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">24/7 AI Agent Setup</h2>
            <p>Get AI agents that handle support, marketing, or sales 24/7 — tailored to your business workflow.</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">Affordable Plans</h2>
            <p>Pay only for what you need — starter automation or full digital transformation. We scale with you.</p>
          </div>
        </div>

        <div className="mt-10">
          <Link to="/contact" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
            Book a Free Consultation
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ConsulTancy

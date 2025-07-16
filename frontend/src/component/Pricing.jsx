import React from 'react'

const plans = [
  {
    name: 'Starter',
    price: '₹999/month',
    features: [
      '1 AI Agent',
      'Basic Workflow Automation',
      'Email Support',
    ],
    buttonText: 'Get Started',
    highlight: false,
  },
  {
    name: 'Pro',
    price: '₹1999/month',
    features: [
      '3 AI Agents',
      'Advanced Integrations',
      'Priority Support',
    ],
    buttonText: 'Upgrade Now',
    highlight: true, // Most popular
  },
  {
    name: 'Custom',
    price: 'Contact Us',
    features: [
      'Unlimited Agents',
      'Custom Workflow Setup',
      'Dedicated AI Consultant',
    ],
    buttonText: 'Contact Sales',
    highlight: false,
  },
]

const Pricing = () => {
  return (
    <div className="py-16 px-6 bg-white text-gray-800">
      <h2 className="text-3xl font-bold text-center mb-4" data-aos="fade-up">Our Subcription</h2>
      <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto" data-aos="fade-up" data-aos-delay="100">
        Choose a plan that fits your business. Start small or scale fast — you’re always backed by powerful AI.
      </p>

      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={plan.name}
            className={`rounded-xl p-6 border shadow-md transition transform hover:scale-105 ${
              plan.highlight ? 'border-blue-600 bg-blue-50' : 'bg-gray-50'
            }`}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <h3 className="text-xl font-bold mb-2 text-center">{plan.name}</h3>
            <p className="text-2xl text-center font-semibold mb-4">{plan.price}</p>
            <ul className="space-y-2 text-sm mb-6">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center">
                   <span className="ml-2">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="text-center">
              <button className={`px-5 py-2 rounded text-white font-semibold ${
                plan.highlight ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-800 hover:bg-gray-900'
              }`}>
                {plan.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Pricing

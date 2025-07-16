// import React from 'react'

// const Testimonial = () => {

//   const Selectdata=[
//     {
//       image:"agentic-ai-testimonial.jpg",
//       name:"Kowsalya Rajasekar",
//       company:"Gayu Tech Solution",
//       testimonial:"Agentic AI has transformed our business operations. Their AI agents are efficient and reliable."
//     }
//   ]
//   return (


//     <div>

//       <section>
//         {Selectdata.map((data, index) => (
//         <div>
//         <h1>Kowsalya Rajasekar</h1>
//         <h3> gayu tech sollution  </h3>
//       </div> ))}
//       </section>
//     </div>
//   )
// }

// export default Testimonial;




import React from 'react'
import { FaQuoteLeft } from 'react-icons/fa'

const testimonials = [
  {
    id: 1,
    name: 'Anjali Rao',
    role: 'Founder, CraftNest',
    quote: 'The AI agent from SmartBiz has completely automated our customer support. We now resolve queries in seconds, not hours.',
    image: '../testimonial/agentic-ai-testimonial.jpeg', 
  },
  {
    id: 2,
    name: 'Vignesh K',
    role: 'Marketing Head, MyShop',
    quote: 'Thanks to the Sales Assistant AI, we’ve doubled our lead conversion without hiring extra reps. It works around the clock!',
    image: '../testimonial/testimonial.jpg',
  },
  {
    id: 3,
    name: 'Divya S',
    role: 'Product Manager, QuickTrack',
    quote: 'Setup was easy, and the team gave full support. We love how customized the AI feels for our business.',
    image: '../testimonial/testimonial3.jpg',
  },
]

const Testimonials = () => {
  return (
    <div className="py-16 bg-slate-50 px-6 text-gray-800">
      <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">
        What Our Clients Say
      </h2>

      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {testimonials.map((t, index) => (
          <div
            key={t.id}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-center"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <img
              src={t.image}
              alt={t.name}
              className="w-40 h-40 mx-auto rounded-full object-cover mb-4 border-2 border-blue-500"
            />
            <FaQuoteLeft className="text-blue-500 mb-3 text-2xl mx-auto" />
            <p className="text-slate-700 mb-4 italic">"{t.quote}"</p>
            <div className="text-sm font-semibold">{t.name}</div>
            <div className="text-xs text-slate-500">{t.role}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials

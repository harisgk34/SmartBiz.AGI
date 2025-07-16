import React from 'react'



const ServiceList =[ 
  {
  
    title: "AI-Powered Services",
    description: "Discover a suite of intelligent tools designed to automate repetitive business tasks, enhance team productivity, and deliver consistent customer experiences. Our AI-powered services adapt to your workflow and grow with your business—saving time, reducing errors, and scaling effortlessly.",
    image: "Service.jpg",
    btn:"Learn More"

  },
    {
    title:"AI-Powered Business Solutions",
    description: `Active,Passive,Portfolio,Business,Royalty,
     Interest,Capital Gain,Subscription`,
    image: "/Service/serviceBot.jpg",
   
  },
  {
    title:"Selling Automation Integrated App",
    description: "Transform your sales process with AI-driven automation. From lead generation to customer engagement",
    image: "/Service/ServiceBot4.jpg",
    btn:"See Products"
  },
  {
    title:"We are Selling AI Agents. Just Hire Him..!",
    description: " Empower your business with our AI agents that can handle customer inquiries, manage workflows, and provide insights. Our agents are designed to learn and adapt, ensuring they meet your specific business needs.",
    image: "/Service/ServiceBot3.jpg",
    btn:"Buy Now"
  },
  {
    title:"24/7 Customer Support",
    description: "Ensure your customers receive round-the-clock support with our AI agents. They can.",
    image: "/Service/ServiceBot2.jpg",
    btn:"Contact Us"

  },

]

const Service = () => {
  
  return (


    <div className= ' p-8 bg-gray-100 text-gray-800 text-xs  '>
        <h2 data-aos="fade-left" className='   flex justify-center text-3xl font-bold mb-6 '>Our Services </h2> 

        <section  className=' service m-3 w-full grid grid-flow-col grid-cols-3 grid-rows-2 gap-5 justify-between '>
        

          {ServiceList.map((item,index) => {

            return (
            <div key={index} data-aos="flip-left" className='shadow-2xl shadow-black mt-14 m-5 text-white   p-4 bg-slate-700 flex flex-col items-baseline justify-between '>
            <img src={item.image} alt="AI-Powered-App"  />
            <h1 className='font-bold mt-9 text-2xl '>{item.title}</h1>
            <p className='mt-4 font-mono'>{item.description}</p>
            <button className='bg-black text-white px-4 py-2 rounded mt-6'>{item.btn}</button>
          </div> 


         ) })}
        </section>


    </div>
  )
}

export default Service
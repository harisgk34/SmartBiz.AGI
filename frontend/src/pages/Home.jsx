
import HowItWorks from '../component/HowIsWork'
import Service from '../component/Service'
import Testimonial from '../component/Testimonial'
import Pricing from '../component/Pricing'
import CTA from '../component/CTA'
import MadeByDeveloper from '../component/MadeByDevelper'
import Chatbot from '../component/ChatBot'


const Home = () => {
  return (

    <div>
    
    <div  className=' bg-gray-700 text-white banner-top  '>
        <img src="Cover.jpg" alt="Agentic-AI-automation-expert-image" className='relative ' />

<div data-aos="fade-left" className='flex banner items-center justify-between  absolute  top-1/2 left-10 p-4 bg-gray-800 bg-opacity-75'> 
        <div className='text-center  mt-4 '>
          <h1 className='text-4xl font-bold m-4'>Automate Your Business with <br />smart AI Agents </h1>
         <p className='font-thin'> Let our AI agents handle your workflows, customer support, <br />and sales—so you can focus on scaling your business.</p>
         <button className='ml-6 p-4 bg-black rounded-md '>Book a Demo</button>
          <button className='ml-6 mt-6 p-4  bg-transparent rounded-md'>Get Started</button>

        </div>
        <div>
       
        </div>
        </div>



</div>
        <Service />
        <HowItWorks />
        <Testimonial />
        <div>
          <h1 className='mt-5 text-2xl font-bold flex justify-center items-center text-gray-800'>
 SmartBiz Comming Soon in all AppStores Aug 9, 2025
</h1>

<p className='mt-3 text-sm font-normal flex justify-center items-center '> 
  "We’re working on something amazing. Please check back soon."
<br />
"Our AI Agents are learning... come back in a bit!"
</p>

          <img className='mt-5' src="Agents/app.jpg" alt="SmartBiz Automation is app Store" />
        </div>
        <Pricing />
        <MadeByDeveloper />
        <CTA />
        <div>
           <Chatbot data-aos="fade-left"  />

          <img data-aos="fade-right" src="/chat/Bot.png" alt=" chat-AI-agents-full-stack-app" />
         

        </div>
        
        

    </div>




  )
}

export default Home
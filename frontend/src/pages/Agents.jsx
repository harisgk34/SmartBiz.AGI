// import React, { useState } from 'react'

// const agents = [
//   {
//     id: 1,
//     name: "Sales AI Agent",
//     description: "Handles customer inquiries, captures leads, and follows up with automation to close more deals.",
//     image: "/agent-sales.jpg"
//   },
//   {
//     id: 2,
//     name: "Support AI Agent",
//     description: "Provides 24/7 chat support for your website visitors, answers FAQs, and resolves issues instantly.",
//     image: "/agent-support.jpg"
//   },
//   {
//     id: 3,
//     name: "Content AI Agent",
//     description: "Generates blog posts, social media content, product descriptions, and marketing emails with ease.",
//     image: "/agent-content.jpg"
//   }
// ]

// const Agents = () => {
//   const [selectedAgent, setSelectedAgent] = useState(null)

//   const handleBuy = (agent) => {
//     setSelectedAgent(agent)
//   }

//   const closeModal = () => setSelectedAgent(null)

//   return (
//     <div className="min-h-screen bg-gray-100 py-10 pt-28 px-4">
//       <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Our AI Agents</h1>

//       <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
//         {agents.map(agent => (
//           <div key={agent.id} className="bg-white rounded-lg shadow hover:shadow-lg p-4">
//             <img src={agent.image} alt={agent.name} className="rounded-md h-48 w-full object-cover mb-4" />
//             <h2 className="text-xl font-semibold mb-2">{agent.name}</h2>
//             <p className="text-sm text-gray-600">{agent.description}</p>
//             <button
//               className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//               onClick={() => handleBuy(agent)}
//             >
//               Buy Now
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Modal */}
//       {selectedAgent && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//           <div className="bg-white rounded-lg p-6 w-96 text-center">
//             <h2 className="text-xl font-semibold mb-2">Buy {selectedAgent.name}</h2>
//             <p className="text-sm text-gray-700 mb-4">{selectedAgent.description}</p>

//             <button
//               onClick={() => {
//                 // 👇 Replace this with real payment or redirect logic
//                 window.location.href = `https://wa.me/918870575425?text=Hi, I'm interested in buying the ${selectedAgent.name}`
//               }}
//               className="bg-green-600  text-white px-4 py-2 rounded hover:bg-green-700"
//             >
//               Contact via WhatsApp
//             </button>

//             <button
//               className="block mt-4 text-sm text-gray-500 hover:underline"
//               onClick={closeModal}
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// export default Agents




import React from 'react'


const Agents = () => {

  const agents = [
  {
    id: 1,
    name: "YouTube AI Agent",
    description:
      "Boost your YouTube channel with automation tools for content planning, title generation, and publishing schedules.",
    image: "/Agents/yutupeAI.png",
    bgImage: "/Agents/AgentbBg.avif",
    rating: 4.5,
    price: "₹415/Month",
    delivery: "1 Day Delivery"
  },
  {
    id: 2,
    name: "Email AI Agent",
    description:
      "Supercharge your email campaigns with smart automation for scheduling, personalization, and analytics.",
    image: "/Agents/Worker/Email.png",
    bgImage: "/Agents/AgentbBg.avif",
    rating: 3.5,
    price: "₹415/Month",
    delivery: "1 hr Delivery"
  },
  
 
  {
    id: 5,
    name: "Upwork AI Agent",
    description:
      "Streamline your Upwork experience with automated bidding, proposal writing, and tracking.",
    image: "/Agents/Worker/Upwork.png",
    bgImage: "/Agents/AgentbBg.avif",
    rating: 4.3,
    price: "₹470/Month",
    delivery: "Same Day"
  },
 
  {
    id: 7,
    name: "WhatsApp AI Agent",
    description:
      "Integrate AI into WhatsApp for automated replies, lead capture, and 24/7 support.",
    image: "/Agents/Worker/WhatsUp.png",
    bgImage: "/Agents/AgentbBg.avif",
    rating: 4.6,
    price: "₹499/Month",
    delivery: "Instant Setup"
  },
  {
    id: 8,
    name: "Facebook AI Agent",
    description:
      "Auto-reply to comments, messages, and generate Facebook content using AI.",
    image: "/Agents/Worker/Fb.png",
    bgImage: "/Agents//AgentbBg.avif",
    rating: 4.0,
    price: "₹400/Month",
    delivery: "1 Day Delivery"
  },
  {
    id: 9,
    name: "Instagram AI Agent",
    description:
      "Grow your Insta with automated captions, posting schedule, and DM replies.",
    image: "/Agents/Worker/insta.png",
    bgImage: "/Agents/AgentbBg.avif",
    rating: 4.4,
    price: "₹460/Month",
    delivery: "1 Day Delivery"
  },
  {
    id: 10,
    name: "Twitter (X) AI Agent",
    description:
      "Craft tweets, automate replies, and monitor trends with AI power.",
    image: "/Agents/Worker/Twitter.png",
    bgImage: "/Agents/AgentbBg.avif",
    rating: 4.2,
    price: "₹440/Month",
    delivery: "Same Day"
  },
  {
    id: 11,
    name: "Reddit AI Agent",
    description:
      "Participate in Reddit threads, schedule posts, and monitor subreddits automatically.",
    image: "/Agents/Worker/Reddit.png",
    bgImage: "/Agents/AgentbBg.avif",
    rating: 3.9,
    price: "₹410/Month",
    delivery: "Next Day"
  },
  {
    id: 12,
    name: "Discord AI Agent",
    description:
      "Add bots to your server for chat moderation, command automation, and role management.",
    image: "/Agents/Worker/Discard.png",
    bgImage: "/Agents/AgentbBg.avif",
    rating: 4.3,
    price: "₹425/Month",
    delivery: "1 hr Setup"
  },
  
   {
    id: 6,
    name: "Fiverr AI Agent",
    description:
      "Manage Fiverr gigs, client responses, and order tracking with smart automation.",
    image: "/Agents/Worker/fiverr.png",
    bgImage: "/Agents/AgentbBg.avif",
    rating: 4.1,
    price: "₹430//Month",
    delivery: "2 hr Delivery"
  },
  {
    id: 3,
    name: "LinkedIn AI Agent",
    description:
      "Automate LinkedIn outreach, post scheduling, and engagement with AI-driven workflows.",
    image: "/Agents/Worker/Freelancer.png",
    bgImage: "/Agents/AgentbBg.avif",
    rating: 4.2,
    price: "₹499/Month",
    delivery: "Same Day"
  }, {
    id: 4,
    name: "Freelancer AI Agent",
    description:
      "Automatically apply to jobs, send proposals, and chat with clients on Freelancer.com using AI.",
    image: "/Agents/Worker/Freelancer.png",
    bgImage: "/Agents/AgentbBg.avif",
    rating: 4.0,
    price: "₹450/Month",
    delivery: "Same Day"
  },
];

  return (
    <div>

      <h1 className='text-3xl font-bold text-center text-gray-800 mb-8 pt-28'  data-aos="fade-up">Our AI Agents</h1>
      <p className="text-center max-w-2xl mx-auto text-gray-600 text-sm mb-8"  data-aos="fade-up">
  Explore a range of intelligent AI agents built to simplify your work—from automating emails and chats to managing content and boosting sales. Each agent is tailored to help grow your business faster, smarter, and more efficiently.
</p>


    <div className='grid md:grid-cols-4 gap-6 max-w-6xl mx-auto ' data-aos="fade-up"  > 
    

{agents.map(agents=>(



    <section className=' pt-28 ' 
key={agents.id} > 
 

      <div className='max-w-2xl mx-auto mt-6'>
        <ul>
          
          <li className='relative flex  '>
           

            

{/* right side section */}
      
      <div className='  p-6 flex flex-col justify-between'>
              <div className="group relative w-fit">
  {/* Image Section */}
  <img src="/Agents/AgentbBg.avif" alt="Agent Background" className="w-60 h-56 rounded-t-full shadow-2xl" />
  <img src={agents.image} alt="Agent" className="absolute h-72 bottom-7 right-4" />
              <h1 className=' absolute bottom-0 text-gray-100 decoration-transparent left-7 p-2  shadow-2xl  shadow-black flex justify-center text-2xl font-bold '>{agents.name}</h1>
              


  {/* Info Section (Hidden by default, visible on hover) */}
  <div className="absolute top-0 left-64 w-[300px] bg-white p-4 shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
    <h2 className="text-2xl font-bold text-gray-800 mb-2 ">{agents.name}</h2>
    <p className="text-gray-600 text-sm mb-4">
    {agents.description}</p>
    <div className="text-yellow-500 mb-2">⭐ {agents.rating} / 5.0</div>
    <p className="text-lg font-semibold text-green-700 mb-1">{agents.price}</p>
    <p className="text-sm text-blue-600 mb-2">{agents.delivery}</p>

    <a
      href={`https://wa.me/918870575425?text=Hi, I'm interested in buying the Agents`}
      target="_blank"
      rel="noreferrer"
      className="inline-block bg-gray-900 text-white px-5 py-2 rounded hover:bg-blue-700"
    >
      Subscribe Now
    </a>
  </div>
</div>
            </div>
            </li>
        </ul>
      </div>

    
    </section>

    ))}
    
    
    
         </div>

    {/* maintanace image  */}
    <div className=' maintance_2 mt-10 ' data-aos="fade-up" >
      <div className='headdmaintain  mt-10 flex justify-center items-center text-gray-800 text-xs font-bold '> 

        <h1 className=' text-2xl font-bold'>"Next Agentic AI section is under maintenance 🚧"</h1> 
        <p>
          
        </p>
       </div>  
       <p className='text-sm font-normal flex justify-center items-center '> 
  "We’re working on something amazing. Please check back soon."
     <br />
"Our AI Agents are learning... come back in a bit!"
       </p>

<div className=' flex flex-col maitn-img  justify-center items-center '>
<h1 className='mt-5 text-2xl font-bold flex justify-center items-center text-gray-800'>
 SmartBiz Comming Soon in all AppStores Aug 9, 2025
</h1>

  <img className='h-1/2 w-1/2 p-5 m-4  ' src="Agents/maintenance.jpg " alt="this section under  maintanace "  />
</div>
    </div>

        </div>

   
  )
}

export default Agents


// import React from 'react';

// const agents = [
//   {
//     id: 1,
//     name: "YouTube AI Agent",
//     description:
//       "Boost your YouTube channel with automation tools for content planning, title generation, and publishing schedules.",
//     image: "/Agents/yutupeAI.png",
//     bgImage: "/Agents/AgentbBg.avif",
//     rating: 4.5,
//     price: "₹415",
//     delivery: "1 Day Delivery"
//   },
// ];

// const Agents = () => {
//   return (
//     <section className="min-h-screen bg-gray-100 py-10 pt-28 px-4">
//       <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Our AI Agents</h1>

//       <div className="max-w-6xl mx-auto grid gap-10">
//         {agents.map((agent) => (
//           <div
//             key={agent.id}
//             className="group relative flex bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-500"
//           >
//             {/* Image Section */}
//             <div className="relative w-full md:w-1/2">
//               <img
//                 src={agent.bgImage}
//                 alt="Background"
//                 className="h-full w-full object-cover"
//               />
//               <img
//                 src={agent.image}
//                 alt={agent.name}
//                 className="absolute bottom-5 right-5 h-64"
//               />
//             </div>

//             {/* Hover Reveal Info */}
//             <div className="absolute right-0 top-0 h-full w-full md:w-1/2 bg-white p-6 opacity-0 group-hover:opacity-100 transform translate-x-full group-hover:translate-x-0 transition-all duration-500 shadow-lg">
//               <h2 className="text-2xl font-bold text-gray-800 mb-2">{agent.name}</h2>
//               <p className="text-sm text-gray-600 mb-4">{agent.description}</p>

//               <div className="flex items-center text-yellow-500 mb-2">⭐ {agent.rating} / 5.0</div>
//               <p className="text-lg font-semibold text-green-700 mb-1">Price: {agent.price}</p>
//               <p className="text-sm text-blue-600 mb-4">{agent.delivery}</p>

//               <a
//                 href={`https://wa.me/918870575425?text=Hi, I'm interested in buying the ${agent.name}`}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
//               >
//                 Buy Now
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Agents;



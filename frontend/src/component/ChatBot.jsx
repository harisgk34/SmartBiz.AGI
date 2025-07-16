import React, { useState } from 'react'
import axios from 'axios'

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Hi! I'm your AI assistant. How can I help you?", sender: 'bot' }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSend = async () => {
    if (!input.trim()) return

    const newMessages = [...messages, { text: input, sender: 'user' }]
    setMessages(newMessages)
    setInput('')
    setLoading(true)

    try {
      const res = await axios.post('https://smartbiz-agi.onrender.com/api/v1/chatApi/chat', { message: input })
      const botReply = res.data.reply
      setMessages([...newMessages, { text: botReply, sender: 'bot' }])
    } catch (err) {
      setMessages([...newMessages, { text: "Oops! Server error.", sender: 'bot' }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col max-w-md mx-auto mt-10 shadow-2xl shadow-black  rounded-lg overflow-hidden max-h-screen">
      <div className="bg-gray-800 text-white p-4 font-bold text-center">SmartBiz AI</div>

      <div className="flex-1 h-4 overflow-y-auto p-4 bg-gray-50 space-y-4  overflow-scroll ">
        {messages.map((msg, index) => (
          <div key={index} className={`text-sm p-2 rounded max-w-[80%]  ${msg.sender === 'user' ? 'bg-blue-200 self-end ml-auto' : 'bg-gray-300 self-start mr-auto'}`}>
            {msg.text}
          </div>
        ))}
        {loading && <div className="text-xs text-gray-500">AI is thinking...</div>}
      </div>

      <div className="flex border-t p-2 bg-white">
        <input
          type="text"
          className="flex-1 border rounded px-3 py-2 text-sm focus:outline-none"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend} className="ml-2 bg-blue-600 text-white px-4 py-2 rounded text-sm">
          Send
        </button>
      </div>
    </div>
  )
}

export default Chatbot

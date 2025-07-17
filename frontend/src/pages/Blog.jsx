
const blogPosts = [
  {
    id: 1,
    title: "How AI Is Transforming Small Businesses",
    description: "Discover how AI tools are helping small businesses automate sales, support, and marketing.",
    image: "/Blog/How AI Is Transforming Small Businesses using our SmartBiz.jpg", 
  },
  {
    id: 2,
    title: "5 Ways to Automate Your Sales with SmartBiz",
    description: "Learn practical strategies to boost your sales pipeline using SmartBiz automation tools.",
    image: "/Blog/5 Ways to Automate Your Sales with SmartBiz.jpg",
  },
  {
    id: 3,
    title: "The Future of AI Assistants in 2025",
    description: "A look at where conversational AI is headed, and how to prepare your business.",
    image: "/Blog/The Future of AI Assistants in 2025.jpg",
  },
]

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 pt-28">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">Our Blog</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h2>
              <p className="text-gray-600 text-sm">{post.description}</p>
              <button className="mt-4 inline-block text-blue-600 hover:underline text-sm">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog

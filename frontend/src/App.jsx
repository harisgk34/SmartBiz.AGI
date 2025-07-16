
import'aos/dist/aos.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { useEffect } from "react";
import Aos from 'aos'
import Navbar from './component/Navbar';
import Pricing from './component/Pricing';
import ConsulTancy from './pages/ConsalTancy';
import Agents from './pages/Agents';
import Blog from './pages/Blog';
import Footer from './component/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
import AgenticAI from './pages/AgenticAI';




function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing:'ease-in-out',
      once:true
    })
  
  }, [])
  
 

  return (


    <BrowserRouter>
    <Navbar  />
    <Routes>
      <Route path='/'  element={ <Home/>}/>
     < Route path='/price' element={<Pricing />} />
      <Route path='/ConsulTancy' element={<ConsulTancy/>} />
      <Route path='/Agents' element={<Agents/>} />
      <Route path='/blog' element={<Blog/>} />
     <Route path="/login" element={<Login />} />
<Route path="/Register" element={<Register />} />
      <Route path='/pricing' element={<Pricing/>} />
      <Route path='/AgenticAI' element={<AgenticAI/>} />


      
      </Routes>
      <Footer />
    </BrowserRouter>
      

  )
}

export default App;

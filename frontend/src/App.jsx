import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import ServicePage from './pages/ServicePage'
import ProjectPage from './pages/ProjectPage'
import ContactPage from './pages/ContactPage'
import Footer from './components/Footer'

function App() {


  return (
    <div className='bg-gradient-to-r from-teal-300 to-blue-300 to-gray-500'>
       <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/service' element={<ServicePage/>} />
        <Route path='/project' element={<ProjectPage/>} />
        <Route path='/contact' element={<ContactPage/>} />
      </Routes>
      <Footer/>
      </div>
  )
}

export default App

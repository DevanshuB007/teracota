import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Header from './Components/Header/Header'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Herocontain/Hero'
import Footer from './Components/Footer/Footer'
import Middlecontain from './Components/Middlecontain/Middlecontain'

function App() {
  const [] = useState(0)

  return (
    <div className='App'>
   
      <Header/>
      <Hero/>
      <Middlecontain/>
      <Navbar/>
      <Footer/>
    </div>
  )
}

export default App

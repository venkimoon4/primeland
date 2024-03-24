import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import "./mediaQueries.css"
import HamburgerMenu from './components/HamburgerMenu'

function App() {

  return (
    <>
     <Header/>
     <Navbar/>
     <HamburgerMenu/>
     <Outlet/>
     <Footer/>
    </>
  )
}

export default App

import { useState } from 'react'
import {Outlet} from "react-router-dom"
import './App.css'
import { Box,Button,Container,Flex,Text ,Center} from '@chakra-ui/react'
import Header from './component/Header'
import Footer from './component/Footer'
import HomePage from './pages/HomePage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Outlet/>
    <HomePage/>
    <Footer/>
    </>
  )
}

export default App

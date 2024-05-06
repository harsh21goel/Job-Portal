import { useState } from 'react'
import {Outlet, Routes,Route} from "react-router-dom"
import './App.css'
import { Box,Button,Container,Flex,Text ,Center} from '@chakra-ui/react'
import Header from './component/Header'
import Footer from './component/Footer'
import HomePage from './pages/HomePage'
import Job from './component/Job'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/job" element={<Job/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App

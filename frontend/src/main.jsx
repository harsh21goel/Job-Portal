import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {ChakraProvider,ColorModeScript  } from "@chakra-ui/react"
import { extendTheme } from '@chakra-ui/react'


const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}
const colors={
  gray:{
   200:"#E2E8F0",
   400:"#A0AEC0",
   600:"#4A5568"
  },
  purple:{
   100:"#805AD5",
   500:"#6B46C1",
   900:"#553C9A"
  },
  btn:{
    100:"#eb6e14"
  }

}

const theme = extendTheme({ config,colors})


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
    </ChakraProvider>
  </React.StrictMode>,
)

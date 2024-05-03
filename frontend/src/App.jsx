import { useState } from 'react'

import './App.css'
import { Box,Button,Container,Flex,Text ,Center} from '@chakra-ui/react'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Container bg={"purple.900"} maxW={"full"} h={"100px"}>
   
    <Center h="100%" justifyContent={"space-around"}>
        <Button bg={"btn.100"} border={`1px solid gray`}>
          Hello
        </Button>
        <Button bg={"btn.100"} border={`1px solid gray`}>
          Hello
        </Button>
        <Button bg={"btn.100"} border={`1px solid gray`}>
          Hello
        </Button>
        <Button bg={"btn.100"} border={`1px solid gray`}>
          Hello
        </Button>
      </Center>
   </Container>
    </>
  )
}

export default App

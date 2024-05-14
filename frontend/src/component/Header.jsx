import { Container, Flex } from '@chakra-ui/react'
import React from 'react'
import LoginBtn from './LoginBtn'

function Header() {
  return (
    <Container maxW={"full"} bg={"purple.900"} h={"90px"} mb={20} >
        <Flex justifyContent={"space-between"} color={"gray.100"} h={"full"} alignItems={"center"} p={5}  >
            <h1>LOGO</h1>
            <Flex >
            <LoginBtn text={"Login as Company"} nav={"company-login"} />
            
        <LoginBtn text={"Job Seeker"} nav={"login"}/>
            </Flex>
        
        </Flex>
    </Container>
  )
}

export default Header
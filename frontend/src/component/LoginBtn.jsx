import React from 'react'
import { Button } from '@chakra-ui/react'
function LoginBtn({text}) {
  return (
    <Button
    variant="outline"
    borderColor="btn.100"
    color="gray.100"
   bg={"btn.100"}
    _hover={{transform: "scale(1.1)" }}
    _focus={{ outline: "none" }}
    borderRadius="md"
    size="md"
    width={"auto"}
    mr={6}
    h={"45px"}
  >
    {text}
  </Button>
  )
}

export default LoginBtn
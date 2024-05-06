import React, { useEffect } from 'react'
import { Box, Heading, Text, Link,Button } from "@chakra-ui/react";

function Job({job}) {
  useEffect(() => {
    
      const getJobs=async()=>{
        try {
        const res =await fetch("/api/job/jobs",{
          method:"GET",
          headers:{
            "Content-Type":"application/json"
          }
        })
        const data = await res.json()
        console.log(data)
      }
      catch (error) {
        console.error(error)
      }
    } 
   
    getJobs()
  },[])
  return (
  //   <Box p={4} borderWidth="1px" borderRadius="md" borderColor="purple.100" mb={4}>
  //   <Heading as="h3" size="md" mb={2}>{job.title|| "Mern Developer"}</Heading>
  //   <Text fontWeight="bold" mb={2}>{job.company  || "TCS"}</Text>
  //   <Text mb={2}>{job.location|| "PAN India"}</Text>
  //   <Text>{job.salary|| "15000"}</Text>
  //   <Link href={"/"} textDecoration="underline" mt={2} display="block" isExternal>
  //     <Button bg="btn.100" color="white" _hover={{ bg: "btn.200" }}>Apply Now</Button>
  //   </Link>
  // </Box>
  <h1>Hello</h1>
  )
}

export default Job
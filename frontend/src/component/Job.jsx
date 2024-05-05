import React from 'react'
import { Box, Heading, Text, Link,Button } from "@chakra-ui/react";

function Job({job}) {
  return (
    <Box p={4} borderWidth="1px" borderRadius="md" borderColor="purple.100" mb={4}>
    <Heading as="h3" size="md" mb={2}>{job.title}</Heading>
    <Text fontWeight="bold" mb={2}>{job.company}</Text>
    <Text mb={2}>{job.location}</Text>
    <Text>{job.salary}</Text>
    <Link href={"/"} textDecoration="underline" mt={2} display="block" isExternal>
      <Button bg="btn.100" color="white" _hover={{ bg: "btn.200" }}>Apply Now</Button>
    </Link>
  </Box>
  )
}

export default Job
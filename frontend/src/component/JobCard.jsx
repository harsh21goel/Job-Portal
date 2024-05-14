import React, { useEffect, useState } from "react";
import { Box, Heading, Text, Link, Button, Badge } from "@chakra-ui/react";

function Job({ jobs }) {
  const [companies, setCompanies] = useState({});

  useEffect(() => {
    const getCompanies = async () => {
      const companyIds = jobs.map((job) => job.company);
      const newCompanies = {};
      for (let companyId of companyIds) {
        if (!companies[companyId]) {
          const res = await fetch(`http://localhost:3000/api/company/${companyId}`);
          const data = await res.json();
          newCompanies[companyId] = data;
        }
      }
      setCompanies((prevCompanies) => ({ ...prevCompanies, ...newCompanies }));
    };

    getCompanies();
  }, [jobs, companies]);
// console.log(companies);
  return (
    <>
      {jobs.map((job) => (
        <Box
          w={"90%"}
          key={job._id}
          m={"auto"}
          p={4}
          borderWidth="1px"
          borderRadius="lg"
          borderColor="purple.100"
          boxShadow="md"
          mb={4}
          bg="white"
          transition="transform 0.2s"
          _hover={{ transform: "scale(1.02)" }}
        >
          <Heading as="h3" size="md" mb={2} color="purple.600">
            {job.title}
          </Heading>

          <Text fontWeight="semibold" mb={2}>
            {companies[job.company]?.name || "Company"}
          </Text>
          <Text fontSize="sm" color="gray.600" mb={2}>
            {job.description || "No description provided"}
          </Text>
          <Text fontSize="sm" color="gray.600" mb={2}>
            Location: {job.location || "PAN India"}
          </Text>
          <Text fontSize="sm" color="gray.600" mb={4}>
            Salary:{" "}
            {job.salary ? `${job.salary.toLocaleString()}` : "Not specified"}
          </Text>
          <Link href={"/" || "/"} textDecoration="underline" isExternal>
            <Button bg="btn.100" color="gray.100" _hover={{ transform: "scale(1.04)" }}>
              Apply Now
            </Button>
          </Link>
          <Badge mt={2} fontSize="sm" colorScheme="green">
            {job.isRemote ? "Remote" : "On-site"}
          </Badge>
        </Box>
      ))}
    </>
  );
}

export default Job;

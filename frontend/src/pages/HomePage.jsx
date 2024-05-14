import React, { useEffect, useState } from "react";
import Job from "../component/JobCard";
import {  Heading } from "@chakra-ui/react";

function HomePage() {
  const [jobs, setjobs] = useState([]);
  useEffect(() => {
    const getfeed = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/job/jobs");
        const data = await res.json();
        const limitedJobs = data.slice(0, 3);
        setjobs(limitedJobs);
      } catch (error) {
        console.error(error.message);
      }
    };
    getfeed();
  }, []);

  return (
    <>
       <Job jobs={jobs} />
       <Heading as="h3" size="md" fontWeight="bold" color="gray.500" textAlign={"center"} mt={0} fontStyle={"oblique"}>
        Log in to see jobs which suits you
      </Heading>
    </>
  
)
}

export default HomePage;

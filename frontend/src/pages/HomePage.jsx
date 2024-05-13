import React, { useEffect, useState } from "react";
import Job from "../component/JobCard";
// import { Box, Heading, Text, Link, Button } from "@chakra-ui/react";

function HomePage() {
  const [jobs, setjobs] = useState([]);
  useEffect(() => {
    const getfeed = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/job/jobs");
        const data = await res.json();

        setjobs(data);
      } catch (error) {
        console.error(error.message);
      }
    };
    getfeed();
  }, []);

  return <Job jobs={jobs} />;
}

export default HomePage;

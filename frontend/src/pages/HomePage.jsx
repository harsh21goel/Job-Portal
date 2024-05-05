import React, { useEffect,useState } from 'react'
import Job from '../component/Job';
function HomePage() {
    const [job, setjob] = useState("")
    useEffect(() => {
        const getfeed= async ()=>{
          try {
            const res = await fetch('/api/job',{
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              }
            });
            if (!res.ok) {
              throw new Error(res.statusText);
            }
            
           
            
            const data = await res.json();
            setjob(data);
        } catch (error) {
            console.error(error.message);
            
        }
       
        }
        getfeed()
    },[])
  return (
   <Job job={job}/>
    
  )
}

export default HomePage
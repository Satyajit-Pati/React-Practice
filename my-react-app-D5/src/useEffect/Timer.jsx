import React, {useState, useEffect, use} from 'react'

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
   const interval =  setInterval(()=> {
    setSeconds(prev => prev + 1);
   },1000);

   return () => clearInterval(interval);
  },[])
  return (
    <>
      <h3>Timer: {seconds}</h3>
    </>
  )
}

export default Timer
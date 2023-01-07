import Head from 'next/head';
import React, { useState } from 'react'

const Counter = () => {   
    const [count ,setCount]=useState(0);

  return (
    <>
     <Head><title>Counter App</title></Head>
    <div style={{marginLeft:"45%" ,marginTop:"10%"}}>
      <h1 style={{color:"cyan",marginLeft:"10px"}}>Counter</h1>
      <h1>Counter:{count}</h1>
      <button style={{marginLeft:"20px",padding:"7px"}} onClick={()=>setCount(count-1)}>Dec</button>
      <button style={{marginLeft:"20px",padding:"7px"}} onClick={()=>setCount(count+1)}>Inc</button>
    </div>
    </>
  )
}

export default Counter;

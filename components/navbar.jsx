import React from 'react'
import Link from "next/link"


const Navbar = () => {
  return (
  
    <div style={{backgroundColor:"lightcoral",height:"50px"}}>
         
      <Link style={{marginLeft:"50%",fontSize:"20px",fontWeight:"bold",marginTop:"10px"}} href="counter">Counter</Link>
    </div>
  )
}

export default Navbar

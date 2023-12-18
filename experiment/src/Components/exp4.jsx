import React from 'react'
import {useState,useEffect} from "react"
function Exp4() {
  const [first,setFirst]=useState(null)
  // useEffect(() => {
  //   first
  
  //   return () => {
  //     second
  //   }
  // }, [third])
  
  console.log(first)
  
  useEffect(()=>{
    console.log("Helllos")
  },[])
  return (
    <div onClick={()=>setFirst(true)}>Exp4</div>
  )
}

export default Exp4
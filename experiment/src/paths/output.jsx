
import { set } from 'mongoose'
import React from 'react'
import { useState } from 'react'
function Output() {
    const [user,setUser]=useState('')
    async function GetOutput(){
        try {
            const res=await fetch('/prediction',{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({
                    data:[57,1,0,130,131,0,1,115,1,1.2,1,1,0],
                  }),
            })
            console.log("HEl")
            const data=await res.json()
          
            setUser(data)
            console.log(user)
            const {prediction}=user
            
            
        } catch (error) {
            console.log(error)
        }
    }
    return (
    
    <>
    <div>Output</div>
    <button onClick={GetOutput}>Click</button>
    <h1>{user}</h1>
    </>
    
  )
}

export default Output
import { useNavigate } from 'react-router-dom';
import React from 'react'
import { useState,useEffect } from 'react'
function Output() {
    const navigate=useNavigate()
    const [medicaldata,setMedicalData]=useState('')
    const [user,setUser]=useState('')
    const [data1,setData1]=useState('')
    useEffect(() => {
        HandleClick2();
    
      }, []);
    async function HandleClick2(event) {
    
        try {
          const res = await fetch("/about", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: "Hello",
              password: "password",
            }),
          });
    
          if (res.ok) {
            const { name,medicalHistory } = await res.json();
            console.log(medicalHistory)
            setMedicalData(medicalHistory)
            const {age}=medicaldata
            console.log(name)
            
          } else {
            console.error("Login pass");
            navigate("/");
          }
        } catch (error) {
          console.error("Error during login:", error);
        }
      }
    async function GetOutput(){
        try {
            const {age,sex,cp,rbp,sc,fbs,rer,mhr,eia,olds,st,mvs,thal}=medicaldata;
            const res=await fetch('/genai',{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },

                body: JSON.stringify({
                    
                        age:age,
                        sex:sex,
                        cp:cp,
                        rbp:rbp,
                        sc:sc,
                        fbs:fbs,
                        rer:rer,
                        mhr:mhr,
                        eia:eia,
                        olds:olds,
                        st:st,
                        mvs:mvs,
                        thal:thal
                    
                  }),
            })
            if (res.ok){
                const data=await res.json();
                setData1(data)
            }
            
            
        } catch (error) {
            console.log(error)
        }
    }
    return (
    
    <>
    <div>Output</div>
    <button onClick={GetOutput}>Click</button>
    <pre>{data1}</pre>
    <h1>{user}</h1>
    </>
    
  )
}

export default Output
import { useNavigate } from 'react-router-dom';
import React from 'react'
import { useState,useEffect } from 'react'
function Output() {
    const navigate=useNavigate()
    const [medicaldata,setMedicalData]=useState('')
    const [user,setUser]=useState('')
    const [data1,setData1]=useState('')
    const [id,setId]=useState('')
    
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
            const { name,medicalHistory,data,risk } = await res.json();
            console.log(medicalHistory,risk)
            setMedicalData(medicalHistory)
            const {age}=medicaldata
            console.log(name,data )
            setId(data)
            
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
            console.log(id)
            console.log("ladsjfo")
            const res=await fetch('/genai',{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({
                        id:id,
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
                console.log(typeof data)
                const keywordsPattern = /Keywords:(.*?)(?=\d+\.)|Keywords:(.*)$/s;

// Extract the content of the Keywords section
               const match = data.match(keywordsPattern);
              const keywordsContent = match ? match[1] || match[2] : null;
              console.log(keywordsContent)
            }
            
            
        } catch (error) {
            console.log(error)
        }
    }
    async function GetOutput1(){
        try {
            const {age,sex,cp,rbp,sc,fbs,rer,mhr,eia,olds,st,mvs,thal}=medicaldata;
            console.log(id)
            const res=await fetch('/genai',{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },

                body: JSON.stringify({

                        age:age,
                        id:id,
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
                console.log('Hllo')
//                 const keywordsPattern = /Keywords:(.*?)(?=\d+\.)|Keywords:(.*)$/s;

// // Extract the content of the Keywords section
//                const match = data.match(keywordsPattern);
//               const keywordsContent = match ? match[1] || match[2] : null;
//               console.log(keywordsContent)
            }
            
            
        } catch (error) {
            console.log(error)
        }
    }
    return (
    
   <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
    <div style={{height:"700px",width:"700px",backgroundColor:"aqua",display:"flex",justifyContent:"center",alignItems:"center"}}>
      <div style={{backgroundColor:"aliceblue",height:"500px",width:"500px",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <div style={{fontSize:"3rem",fontFamily:"fantasy"}}>Output</div>
      </div>

    </div>

   </div>
    
  )
}

export default Output
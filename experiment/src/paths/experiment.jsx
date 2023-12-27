import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
const Experiment = () => {
  
  const [username,setUsername]=useState('')
  const [username1,setUsername1]=useState('')
  const [username2,setUsername2]=useState('')
  const [username3,setUsername3]=useState('')
  const [username4,setUsername4]=useState('')
  const [username5,setUsername5]=useState('')
  const [username6,setUsername6]=useState('')
  const [username7,setUsername7]=useState('')
  const [username8,setUsername8]=useState('')
  const [username9,setUsername9]=useState('')
  const [username10,setUsername10]=useState('')
  const [username11,setUsername11]=useState('')
  const [username12,setUsername12]=useState('')
  const navigate=useNavigate()
  useEffect(()=>{
    HandleClick2();
  },[])
  function Handle(e){
    setUsername(e.target.value)
    console.log(username)
  }
  function Handle1(e){
    setUsername1(e.target.value)
    console.log(username1)
  }
  function Handle2(e){
    setUsername2(e.target.value)
    console.log(username2)
  }
  function Handle3(e){
    setUsername3(e.target.value)
    console.log(username3)
  }
  function Handle4(e){
    setUsername4(e.target.value)
    console.log(username4)
  }
  function Handle5(e){
    setUsername5(e.target.value)
    console.log(username5)
  }
  function Handle6(e){
    setUsername6(e.target.value)
    console.log(username6)
  }
  function Handle7(e){
    setUsername7(e.target.value)
    console.log(username7)
  }
  function Handle8(e){
    setUsername8(e.target.value)
    console.log(username8)
  }
  function Handle9(e){
    setUsername9(e.target.value)
    console.log(username9)
  }
  function Handle10(e){
    setUsername10(e.target.value)
    console.log(username10)
  }
  function Handle11(e){
    setUsername11(e.target.value)
    console.log(username11)
  }
  function Handle12(e){
    setUsername12(e.target.value)
    console.log(username12)
  }
  async function handleClick1() {
    try {
      const res = await fetch("/filldata", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name:username,
          medicalHistory: {
            age:username11,
            sex:username1,
            cp:username2,
            rbp:username3,
            sc:username4,
            fbs:username5,
            rer:username6,
            mhr:username7,
            eia:username8,
            olds:username9,
            st:username10,
            mvs:username12,
          },
        }),
      });
  
      if (res.ok) {
        console.log("Updated");
      } else {
        console.error("Registration failed");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  }
  async function HandleClick2(event) {
  
    try {
      const res = await fetch("/about", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: 'Hello',
          password: 'password',
        }),
      });

      if (res.ok) {
        const {name}=await res.json();
        setUsername(name)
        
      } else {
        console.error("Login pass");
        navigate("/")
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  }
  return (
    <div>
      <h1>My Component</h1>
      
      <input style={{border:'1px solid black'}} type="text" onChange={Handle1}/>
      <input style={{border:'1px solid black'}} type="text" onChange={Handle2}/>
      <input style={{border:'1px solid black'}} type="text" onChange={Handle3}/>
      <input style={{border:'1px solid black'}} type="text" onChange={Handle4}/>
      <input style={{border:'1px solid black'}} type="text" onChange={Handle5}/>
      <input style={{border:'1px solid black'}} type="text" onChange={Handle6}/>
      <input style={{border:'1px solid black'}} type="text" onChange={Handle7}/>
      <input style={{border:'1px solid black'}} type="text" onChange={Handle8}/>
      <input style={{border:'1px solid black'}} type="text" onChange={Handle9}/>
      <input style={{border:'1px solid black'}} type="text" onChange={Handle10}/>
      <input style={{border:'1px solid black'}} type="text" onChange={Handle11}/>
      <input style={{border:'1px solid black'}} type="text" onChange={Handle12}/>
      <br/>
      <button onClick={handleClick1}>click</button>
      
    </div>
  );
};
export default Experiment
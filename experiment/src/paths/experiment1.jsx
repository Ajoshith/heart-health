import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
function Experiment1() {
  const navigate = useNavigate();
  const [userdata,setUserData]=useState('')

  async function HandleClick2(event) {
    try {
      const res = await fetch("/genai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "age": 63,
          "sex": 1,
          "cp": 3,
          "rbp": 145,
          "sc": 233,
          "fbs": 1,
          "rer": 0,
          "mhr": 150,
          "eia": 0,
          "olds": 2.3,
          "st": 0,
          "mvs": 0
        }),
      });

      if (res.ok) {
        // Wait for the json() method to resolve
        const data = await res.json();
        setUserData(data)
        console.log(data);
      } else {
        console.error("Login pass");
        navigate("/registration");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  }

  return (
    <>
      <button onClick={HandleClick2}>Click me</button>
      <pre style={{fontFamily:"cursive",color:"red",fontSize:'1.25rem'}}>
        {userdata}
      </pre>
    </>
  );
}

export default Experiment1;

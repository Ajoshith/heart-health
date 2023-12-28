import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function Experiment1() {
  const navigate = useNavigate();
  const [userdata, setUserData] = useState("");

  async function HandleClick2(event) {
    try {
      const res = await fetch("/genai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          age: 63,
          sex: 1,
          cp: 3,
          trestbps: 145,
          chol: 233,
          fbs: 1,
          restecg: 0,
          thalach: 150,
          exang: 0,
          oldpeak: 2.3,
          slope: 0,
          ca: 0,
          thal: 1,
        }),
      });

      if (res.ok) {
        // Wait for the json() method to resolve
        const data = await res.json();
        setUserData(data);
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
      <pre style={{ fontFamily: "cursive", color: "red", fontSize: "1.25rem" }}>
        {userdata}
      </pre>
    </>
  );
}

export default Experiment1;

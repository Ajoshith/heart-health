import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './ran.css'; // Import your CSS file
import { useUserData } from "./confirmation";
let userData1 = '';

function Registrationform() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useUserData(false);
  
  const navigate = useNavigate();
  
  

  async function handleClick() {
    try {
      const res = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: username,
          password: password,
        }),
      });

      if (res.ok) {
        const { token } = await res.json();
        localStorage.setItem('jwtToken', token);
        console.log("Login successful");
        setUserData(token);
       
      } else {
        console.error("Login passed");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  }

  function handleChange(e) {
    setUsername(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  async function handleClick1() {
    try {
      const res = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: username,
          password: password,
        }),
      });

      if (res.ok) {
        console.log("Registration successful");
      } else {
        console.error("Registration passed");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  }
  async function HandleClick2(event) {
    event.preventDefault()
    try {
      const res = await fetch("/about", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: username,
          password: password,
        }),
      });

      if (res.ok) {
        console.log("Hello")
        setUserData(true)
        navigate("/")
        
      } else {
        console.error("Login pass");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  }

  useEffect(() => {
    console.log(username);
  }, [username]);

  useEffect(() => {
    console.log(password);
  }, [password]);

  return (
    <>
      {/* Container */}
      <div id="container">
        {/* Cover Box */}
        <div id="cover">
          {/* Sign Up Section */}
          <h1 className="sign-up">Hello, Friend!</h1>
          <p className="sign-up">Enter your personal details<br /> and start a journey with us</p>
          <button className="button sign-up" >Sign Up</button>
          {/* Sign In Section */}
          <h1 className="sign-in">Welcome Back!</h1>
          <p className="sign-in">To keep connected with us please<br /> login with your personal info</p>
          <br />
          <a className="button sub sign-in" href="#">Sign In</a>
        </div>

        {/* Login Box */}
        <div id="login">
          <h1>Sign In</h1>
          <a href="#"><img className="social-login" src="https://image.flaticon.com/icons/png/128/59/59439.png" alt="Social Icon" /></a>
          <a href="#"><img className="social-login" src="https://image.flaticon.com/icons/png/128/49/49026.png" alt="Social Icon" /></a>
          <a href="#"><img className="social-login" src="https://image.flaticon.com/icons/png/128/34/34227.png" alt="Social Icon" /></a>
          <p>or use your email account:</p>
          <form>
          <input onChange={handleChange} className="input1" placeholder="Username" /><br />
            <input onChange={handleChangePassword} className="input1" placeholder="Password" /><br />
            <a id="forgot-pass" href="#">Forgot your password?</a><br />
            <button className="submit-btn" type="button" onClick={handleClick}>Sign In</button>
          </form>
        </div>

        {/* Register Box */}
        <div id="register">
          <h1>Create Account</h1>
          <a href="#"><img className="social-login" src="https://image.flaticon.com/icons/png/128/59/59439.png" alt="Social Icon" /></a>
          <a href="#"><img className="social-login" src="https://image.flaticon.com/icons/png/128/49/49026.png" alt="Social Icon" /></a>
          <a href="#"><img className="social-login" src="https://image.flaticon.com/icons/png/128/34/34227.png" alt="Social Icon" /></a>
          <p>or use your email for registration:</p>
          <form>
            <input onChange={handleChange} placeholder="Name" autoComplete="off" /><br />
            <input onChange={handleChange} placeholder="Email" autoComplete="off" /><br />
            <input onChange={handleChangePassword} placeholder="Password" autoComplete="off" /><br />
            <button className="submit-btn" type="button" onClick={handleClick}>Sign Up</button>
            <button type="button" style={{width:"50px",height:"100px"}} onClick={handleClick}>
          Login
        </button>
          </form>
        </div>
      </div> {/* END Container */}

      {/* Rest of your JSX */}
      <form>
        <input onChange={handleChange} className="input1" placeholder="Username" />
        <input onChange={handleChangePassword} className="input1" placeholder="Password" />

        <button type="button" onClick={handleClick}>
          Login
        </button>
        <button type="button" onClick={handleClick1}>
          Register
        </button>
        <button onClick={HandleClick2}>
          Get data from /protected
        </button>
      </form>
      <h1>{userData}</h1>
      <h1></h1>
    </>
  );
}

// Export userData state
export const getUserData = () => userData1;
export default Registrationform;

import React, { useEffect, useState } from 'react';
import './hello.css';
import pjLogo from '../images/pjlogo.png';
import docteam from '../images/docteam.jpeg';
import card1 from '../images/card1.jpeg';
import card2 from '../images/card2.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useUserData } from './confirmation';
import Registrationform from './login';
function Home() {
  function onC(){
    navigate("/experiment")
  }
  async function handleClick1() {
    try {
      const res = await fetch("/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          
          
        }),
      });
  
      if (res.ok) {
        navigate('/registration')
      } else {
        console.error("Registration passed");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  }
  const [ud,Setud]=useState('')
  const navigate=useNavigate()
  useEffect(()=>{
    HandleClick2();
  },[])

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
        const data=await res.json();
        const {name}=data;
        console.log(name)
        Setud(name);
        console.log("Hello")
        
      } else {
        console.error("Login pass");
        navigate("/registration")
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  }
  return (
    <div>
      <header className="header1">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <Link to="/" id="header" className="navbar-brand navbarcolorfont scale-in-center">
              <img className='imagezoomer' src={pjLogo} style={{ height: '60px' }} alt="logo" />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to='/' className="nav-link" style={{ color: '#e11127' }} aria-current="page" >Home</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" style={{ color: '#e11127' }} href="#">About us</a>
                </li>
                <Link to="/docsearch" style={{ paddingTop: "9px", paddingLeft: "10px", color: "#e11127", textDecoration: "none" }}>Search <i style={{ color: '#e11127' }} className="bi bi-search"></i></Link>
                <a style={{ position: 'absolute', left: '1400px', top: '17px', fontSize: '25px', fontWeight: '100', color: '#e11127' }} data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                  <i className="bi bi-person-circle"></i>
                </a>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
          <h1 style={{ color: '#e11127' }}>Profile</h1>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <div className="details">
            <h3 style={{ display: 'block' }}>Patients details</h3>
            <div className="details1">
             
             {ud} <br />
              Name, age, blood group, etc .......
            
            </div>
          </div>
          <button className='btn btn-lg' style={{backgroundColor:"#e11127",color:'aliceblue'}}  onClick={handleClick1}>Logout</button>
        </div>
      </div>

      <div className="body1" style={{ height: '400px', width: '100%', backgroundColor: 'aliceblue' }}>
        <h1 className="heartbeat" style={{ display: 'flex', position: 'absolute', top: '200px', left: '540px', fontSize: '5rem', color: '#e11127', backgroundColor: 'aliceblue', fontWeight: '200' }}>
          <div>Heart</div> <div style={{ margin: "0", marginLeft: "20px" }}><i className="bi bi-heart-pulse  coloranimation"></i></div> <div className='' style={{ position: "absolute", left: "290px" }}>Health</div>
        </h1>
        <h3 style={{ display: 'block', position: 'absolute', top: '300px', left: '530px', color: '#e11127', wordSpacing: '5px', fontWeight: '200' }}>
          Precaution: Safeguarding Your Future Health
        </h3>
        <button onClick={onC} style={{ fontWeight: '200', borderRadius: '50px', display: 'block', position: 'absolute', top: '350px', left: '650px', backgroundColor: '#e11127', color: 'aliceblue', width: '250px', height: '50px', fontSize: '1.5rem' }} className="btn" type="submit">Get your report</button>
      </div>

      <div className="middle" style={{ height: '600px', width: '100%' ,backgroundColor:"aliceblue"}}>
        <div className="middle1 shadow-lg" style={{ height: '500px', backgroundColor: 'aliceblue', width: '600px', position: 'absolute', left: '700px', marginTop: '60px' }}></div>
        <div className="shadow" style={{ height: '400px', width: '600px', backgroundColor: 'white', position: 'absolute', marginTop: '100px', left: '300px', borderBottom: '15px #e11127 solid' }}>
          <div className="text1" style={{ fontWeight: '400', fontSize: '3rem', display: 'inline-block', position: 'absolute', left: '20px', top: '30px' }}>
            Be alert
          </div>
          <div className="text2" style={{ fontWeight: '200', fontSize: '1.5rem', position: 'absolute', top: '120px', left: '20px' }}>
            High blood pressure often has no signs. That's why it's called the silent killer. Help stop the silent killer and other causes of heart disease with your gift now.
          </div>
          <Link to="/symptompage">
          <button style={{ position: 'absolute', top: '270px', backgroundColor: '#e11127', width: '240px', color: 'aliceblue', left: '150px', borderRadius: '50px' }} className="btn btn-lg">Check your symptoms</button>
          </Link>
        </div>
      </div>

      <div className="dash" style={{ height: '70px', backgroundColor: '#e11127', width: '100%' }}></div>

      <div className="next" style={{ display: 'flex', marginTop: '30px' }}>
        <div className="card text-center shadow" style={{ width: '18rem', height: '400px', marginRight: '10px', marginLeft: '20%' }}>
          <img src={card1} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Get checked</h5>
            <p className="card-text">Consult the best cardiologist nearby</p>
            <Link to="/docsearch" className="btn" style={{ backgroundColor: '#e11127', color: 'aliceblue' }}>Book an appointment now</Link>
          </div>
        </div>
        <div className="card text-center shadow" style={{ width: '18rem', marginRight: '10px' }}>
          <img src={card2} style={{ height: '200px', backgroundSize: 'cover' }} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Know your heart</h5>
            <p className="card-text">Get to know about your heart. With our advanced tool</p>
            <a href="#" className="btn" style={{ backgroundColor: '#e11127', color: 'aliceblue' }}>Heartbeat</a>
          </div>
        </div>
        <div className="card text-center shadow" style={{ width: '18rem', height: '400px' }}>
          <img src={docteam} style={{ height: '200px' }} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">About us</h5>
            <p className="card-text">Know more about our app and its features and the team behind it.</p>
            <Link to='/consultation' className="btn" style={{ backgroundColor: '#e11127', color: 'aliceblue' }}>Let's see</Link>
          </div>
        </div>
      </div>

      <footer style={{ width: '100%', height: '30px', backgroundColor: '#e11127', color: 'aliceblue', textAlign: 'center', marginTop: '40px', fontWeight: '200' }}>Copyright belongs to American Heart Association</footer>
    </div>
  );
}

export default Home;

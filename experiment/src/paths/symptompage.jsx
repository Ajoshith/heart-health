import React from 'react';
import './hello.css';
import { Link } from 'react-router-dom';
import pjlogo from '../images/pjlogo.png'
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
function Symptom() {
  const navigate=useNavigate()
  useEffect(()=>{
    window.scrollTo(0, 0);
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
            <Link to="/" id="header " className="navbar-brand navbarcolorfont scale-up-center" >
              <img src={pjlogo} style={{ height: '60px' }} alt="logo" />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" style={{ color: '#e11127' }} aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" style={{ color: '#e11127' }} href="#">About us</a>
                </li>
                <a style={{ position: 'absolute', left: '1430px', top: '17px', fontSize: '25px', fontWeight: '100', color: '#e11127' }} data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
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
              Name, age, blood group, etc .......
            </div>
          </div>
        </div>
      </div>
      <div className="symptomdetails" style={{ backgroundColor: 'aliceblue', height: '270px', width: '100%' }}>
        <div className="title" style={{ fontWeight: '400', fontSize: '3rem', position: 'absolute', top: '100px', left: '150px', display: 'inline-block' }}>
          Cardiac arrest, Stroke and other problems
        </div>
        <div className="title" style={{ fontWeight: '400', fontSize: '3rem', position: 'absolute', top: '155px', left: '150px', display: 'inline-block' }}>
          related to heart symptoms:
        </div>
        <h1 style={{ color: '#e11127', display: 'inline-block', fontWeight: '400', fontSize: '1.2rem', position: 'absolute', top: '230px', left: '150px' }}>
          If you are having any of the following symptoms, please consult the nearest cardiologist
        </h1>
        <button className="btn btn-lg" style={{ backgroundColor: '#e11127', position: 'absolute', top: '280px', left: '150px', borderRadius: '50px', color: 'aliceblue' }}>
          Get emergency Help
        </button>
      </div>
      <div className="info">
        <div className="card" style={{ width: '18rem', position: 'absolute', top: '400px', left: '250px', width: '500px', height: '500px' }}>
          <div className="card-body">
            <h5 className="card-title" style={{ fontSize: '2rem' }}>Cardiac Arrest Symptoms</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">Check carefully</h6>
            <p className="card-text">
              <div style={{ fontSize: '1.2rem', fontWeight: '500px', color: '#e11127' }}>Discomfort in the upper body</div>
              <div>
                Symptoms can include pain or discomfort in one or both arms, the back, neck, jaw, or stomach.
              </div>
              <div style={{ fontSize: '1.2rem', color: '#e11127' }}>Chest discomfort</div>
              <div>
                Most heart attacks involve discomfort in the center of the chest that lasts more than a few minutes, or that goes away and comes back. It can feel like uncomfortable pressure, squeezing, fullness, or pain.
              </div>
              <div style={{ fontSize: '1.2rem', color: '#e11127' }}>Shortness of breath</div>
              <div>
                with or without chest discomfort.
              </div>
              <div style={{ fontSize: '1.2rem', color: '#e11127' }}>Other signs</div>
              <div>
                may include breaking out in a cold sweat, nausea, or lightheadedness.
              </div>
            </p>
            <a href="#" style={{ color: '#e11127' }}>If you feel any of these symptoms, please seek immediate help</a>
          </div>
        </div>
        <div className="card" style={{ width: '18rem', position: 'absolute', top: '400px', left: '800px', width: '500px', height: '500px' }}>
          <div className="card-body">
            <h5 className="card-title" style={{ fontSize: '2rem' }}>Cardiac Arrest Symptoms</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">Check carefully</h6>
            <p className="card-text">
              <div style={{ fontSize: '1.2rem', fontWeight: '500px', color: '#e11127' }}>Discomfort in the upper body</div>
              <div>
                Symptoms can include pain or discomfort in one or both arms, the back, neck, jaw, or stomach.
              </div>
              <div style={{ fontSize: '1.2rem', color: '#e11127' }}>Chest discomfort</div>
              <div>
                Most heart attacks involve discomfort in the center of the chest that lasts more than a few minutes, or that goes away and comes back. It can feel like uncomfortable pressure, squeezing, fullness, or pain.
              </div>
              <div style={{ fontSize: '1.2rem', color: '#e11127' }}>Shortness of breath</div>
              <div>
                with or without chest discomfort.
              </div>
              <div style={{ fontSize: '1.2rem', color: '#e11127' }}>Other signs</div>
              <div>
                may include breaking out in a cold sweat, nausea, or lightheadedness.
              </div>
            </p>
            <a href="#" style={{ color: '#e11127' }}>If you feel any of these symptoms, please seek immediate help</a>
          </div>
        </div>
      </div>
      <footer style={{ position: 'absolute', top: '900px', width: '100%', height: '30px', backgroundColor: '#e11127', color: 'aliceblue', textAlign: 'center', marginTop: '40px', fontWeight: '200' }}>
        Copyright belongs to American Heart Association
      </footer>
    </div>
  );
}

export default Symptom;

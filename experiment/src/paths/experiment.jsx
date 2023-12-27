import { useEffect, useState } from "react";
import pjlogo from '../images/pjlogo.png';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../images/image.png"
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
            age:username1,
            sex:username2,
            cp:username3,
            rbp:username4,
            sc:username5,
            fbs:username6,
            rer:username7,
            mhr:username8,
            eia:username9,
            olds:username10,
            st:username11,
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
    <>
                        <header className="header1" style={{backgroundColor:"#e11127"}}>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <Link to="/afterlogin" id="header " className="navbar-brand navbarcolorfont scale-in-center" >
              <img src={logo} style={{ height: '60px' }} alt="logo" />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" style={{ color: 'aliceblue' }} aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" style={{ color: 'aliceblue' }} href="#">About us</a>
                </li>
                <a style={{ paddingTop: "9px", paddingLeft: "7px",position: 'absolute', left: '1430px', top: '17px', fontSize: '25px', fontWeight: '100', color: 'aliceblue' }} data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
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
      <button className="btn" style={{backgroundColor:"#e11127",color:"aliceblue"}} onClick={handleClick1}>click</button>
      
    </>
  );
};
export default Experiment
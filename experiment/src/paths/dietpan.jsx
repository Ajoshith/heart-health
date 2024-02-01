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
import backp from "../images/backprofile.png"
import dietb from "../images/5.png"
import dieta from "../images/b.png"
import dietc from "../images/d.png"
import dietd from "../images/e.jpg"
import diete from "../images/81970.jpg"
import dietf from "../images/f.png"
import dietg from "../images/g.jpg"
import dieth from "../images/dietb.jpg"
import dietk from "../images/k.png"
import dietl from "../images/81970.jpg"
import dietl2 from "../images/n.png"
import dietm from "../images/l.png"
function DietPlan() {
  const [loaing , setLoaing]=useState(true)
  const [height,setHeight]=useState(0)
  const [width,setWidth]=useState(0)
  const [foodpref,setFoodpref]=useState("")
  const [diet,setDiet]=useState("")
  function onC() {
    navigate("/experiment")
  }
  const [name,setName]=useState("")
  const [riskfactors,setRiskFactors]=useState("")
  const [ud, Setud] = useState('')
  const navigate = useNavigate()
  const [med,setMed]=useState('')
  useEffect(() => {
    HandleClick2();
  }, [])

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
        const data = await res.json();
        const { name, medicalHistory,risk,riskfactors } = data;
        console.log(name)
        Setud(name);
        setName(name);
        setRiskFactors(riskfactors)
        
       
        console.log("Hello")
        console.log(med)
      

      } else {
        console.error("Login pass");
        navigate("/registration")
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  }
  async function HandleClick3(event) {

    try {
      const res = await fetch("http://localhost:8000/diet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          
          risk:riskfactors,
          food:foodpref,
          height:height,
          width:width
        }),
      });

      if (res.ok) {
        const data = await res.json();
        setDiet(data)
        console.log(diet)

      } else {
        console.error("Login pass");
        navigate("/registration")
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  }
  return (
    <>
    {
      loaing?(
        <>
        <div style={{height:"500px",width:"400px",backgroundColor:"brown",display:"flex",justifyContent:"center"}}>
          <input  style={{outline:"none",width:"300px",height:"40px",border:"none",position:"absolute",top:"150px",backgroundColor:"rgb(243,211,158)"}}/>
          
          <input  style={{outline:"none",width:"300px",height:"40px",border:"none",position:"absolute",top:"80px",backgroundColor:"rgb(243,211,158)"}}/>
          <button onClick={HandleClick3} className='btn btn-lg' style={{position:"absolute",top:"200px",backgroundColor:"rgb(243,211,158)"}}>Submit</button>
        </div>
        </>
      )
      :(
        <>
        <div>
      <header className="header1" style={{backgroundColor:"rgb(243,211,158)"}}>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <Link to="/" id="header" className="navbar-brand navbarcolorfont scale-up-center">
              <img className='imagezoomer' src={pjLogo} style={{ height: '60px' }} alt="logo" />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to='/' className="nav-link" style={{ color: '#e11127' }} aria-current="page" >DietPlan</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" style={{ color: '#e11127' }} href="#">About us</a>
                </li>
                <Link to="/docsearch" style={{ paddingTop: "9px", paddingLeft: "10px", color: "#e11127", textDecoration: "none" }}>Search <i style={{ color: '#e11127' }} className="bi bi-search"></i></Link>
                <div style={{ position: 'absolute', left: '1300px', top: '17px', fontSize: '25px', fontWeight: '100', color: '#e11127' }} data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                  <i className="bi bi-person-circle"></i><a style={{ fontSize: "1.2rem", marginLeft: "10px" }}>{ud}</a>
                   
                </div>

              </ul>
            </div>
          </div>
        </nav>
      </header>

      <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" style={{backgroundColor:""}}>
        <div className="offcanvas-header">
          <Link to="/" id="header" className="navbar-brand navbarcolorfont scale-in-center" style={{marginLeft:"150px"}}>
            <img className='imagezoomer' src={pjLogo} style={{ height: '60px' }} alt="logo" />
          </Link>
          
        </div>
        <div className="offcanvas-body">
          <div className="details">
            <div className="details1">

              <div style={{ height: "70px", width: "70px", border: "solid 5px #e11127 ", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }} >
                <img src={backp} style={{ height: "50px", width: "50px" }} alt="..." />
              </div>
              <div style={{ position: "absolute", top: "130px", right: "1", left: "100px", fontSize: "1.5rem", fontWeight: "400" }}>Hello</div>
            </div>
          <button className='btn btn-lg' style={{ color: "#e11127", backgroundColor: '', borderRadius: "50px", position:"absolute",left:250,top:125}} ><i class="bi bi-box-arrow-right"></i> Logout</button>

            <div style={{height:"200px",width:"200px",borderRadius:"50% ",border:"7px solid red",marginTop:"50px",marginLeft:"80px",display:'flex',alignItems:"center",justifyContent:"center",fontSize:'2 rem'}}>
              <div style={{fontSize:"2.2rem",marginLeft:"10px"}} >{med}%</div>
              <div style={{position:"absolute",top:"340px"}}>at risk  </div>
            </div>
            <div style={{marginTop:"20px",marginLeft:"60px",fontSize:"1.2rem"}}>Navigate throught our tools</div>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"20px"}}>
            <div style={{height:"100px",borderRadius:"25px",width:"100px",backgroundColor:"#D7ECFF",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <i class="bi bi-archive-fill" style={{fontSize:"1.7rem",color:"#e11127"}}></i>
            </div>
            <Link to="/waterfilloutput" style={{height:"100px",width:"100px",backgroundColor:"#D7ECFF",marginLeft:"10px",borderRadius:"25px",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <i class="bi bi-bandaid" style={{fontSize:"1.7rem",color:"#e11127"}}></i>
            </Link>
            <Link to="/map" style={{height:"100px",width:"100px",backgroundColor:"#D7ECFF",marginLeft:"10px",borderRadius:"25px",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <i class="bi bi-compass" style={{fontSize:"1.7rem",color:"#e11127"}}></i>
            </Link>
            
            </div>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"20px"}}>
            <Link to="/fillform" style={{height:"100px",width:"100px",backgroundColor:"#D7ECFF",borderRadius:"25px",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <i class="bi bi-file-earmark-medical" style={{fontSize:"1.7rem",color:"#e11127"}}></i>
            </Link>
            <Link to="/experiment" style={{height:"100px",width:"100px",backgroundColor:"#D7ECFF",marginLeft:"10px",borderRadius:"25px",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <i class="bi bi-files" style={{fontSize:"1.7rem",color:"#e11127"}}></i>
            </Link>
            <div style={{height:"100px",width:"100px",backgroundColor:"#D7ECFF",marginLeft:"10px",borderRadius:"25px",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <i class="bi bi-universal-access" style={{fontSize:"1.7rem",color:"#e11127"}}></i>
            </div>
            
            </div>
            </div>
        </div>
        <footer style={{width:"100%",backgroundColor:"#e11127",height:"15px"}}></footer>

      </div>

      <div  className='dietb' style={{height:"8000px",width:"100vw",backgroundColor:"rgb(243,211,158)"}}>
        
      <div style={{backgroundColor:"",height:"500px",width:"1200px",borderRadius:"2%",border:"10px solid rgb(250,242,193)",position:"absolute",top:"100px",left:"200px"}}>
      <img  src={dieta} className="card-img-top roll-in-left" style={{height:"550px",width:"700px",position:"relative",left:"500px",bottom:"130px"}} />
      </div>
      <div style={{backgroundColor:"",height:"500px",width:"1200px",borderRadius:"2%",border:"10px solid rgb(250,242,193)",position:"absolute",top:"630px",left:"200px",marginBottom:"40px"}}>
      <img src={dietc} className="card-img-top roll-in-left" style={{height:"470px",width:"700px",position:"relative",left:"60px",bottom:"0px"}} />
      </div>
      <div style={{backgroundColor:"",height:"1020px",width:"460px",borderRadius:"2%",border:"10px solid rgb(250,242,193)",position:"absolute",top:"1160px",left:"20px"}}>
        <img src={dietd} className="card-img-top"  />
      </div>

      <div style={{backgroundColor:"",height:"600px",width:"460px",borderRadius:"2%",border:"10px solid rgb(250,242,193) ",position:"absolute",top:"1160px",left:"510px"}}>
      <img src={dietl} className="img-fluid rounded-start" style={{height:"260px"}}   />
      
      </div>
      <div style={{backgroundColor:"",height:"600px",width:"460px",borderRadius:"2%",border:"10px solid rgb(250,242,193)",position:"absolute",top:"1160px",left:"1000px"}}>
      <img src={dieth} className="img-fluid rounded-start" style={{height:"270px",width:"100%"}}   />
      
      </div>
      <div style={{backgroundColor:"",height:"400px",width:"950px",borderRadius:"2%",border:"10px solid rgb(250,242,193)",position:"absolute",top:"1780px",left:"500px"}}>
      <img src={dietm} className="img-fluid rounded-start" style={{height:"270px",position:"relative"}}   />

      </div>
      </div>
      <footer style={{ width: '100%', height: '30px', backgroundColor: '#e11127', color: '', textAlign: 'center', marginTop: '40px', fontWeight: '200' }}>Copyright belongs to American Heart Association</footer>
    </div>

        </>
      )
    }
    </>
      );
}

export default DietPlan;

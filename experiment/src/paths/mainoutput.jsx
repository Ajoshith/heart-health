import React from 'react';
import { useState,useEffect } from 'react';
import "./style.css"


import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import kimage from "../images/doctr.jpg"
import k1image from "../images/to.jpg"

import pjLogo from '../images/pjlogo.png';
import backp from "../images/backprofile.png"

const Jpp = () => {
  const [first, setfirst] = useState(`1. **Age**: At 50 years old, you are entering an age range where the risk of heart disease starts to rise gradually.

  2. **Gender**: Being female (gender = 0) may provide some protection against heart disease compared to males, but it's important to note that heart disease can still affect women.
  
  3. **Chest Pain Type**: The value of 4 indicates "asymptomatic," meaning you have not experienced chest pain. This doesn't rule out the possibility of heart disease, so it's essential to continue monitoring your heart health.
  
  4. **Resting Blood Pressure**: With a value of 7, your resting blood pressure appears to be within the normal range, which is less than 120/80 mmHg. Maintaining a healthy blood pressure is crucial for reducing heart disease risk.
  
  5. **Serum Cholesterol**: Your serum cholesterol level of 8 mg/dl is considered desirable. Maintaining healthy cholesterol levels, particularly low LDL cholesterol, is important for preventing plaque buildup in your arteries.
  
  6. **Fasting Blood Sugar**: The value of 5 indicates that your fasting blood sugar is greater than 120 mg/dl, suggesting a significant risk factor for heart disease. Managing your blood sugar levels is crucial to reduce this risk.
  
  7. **Resting Electrocardiographic Results**: The value of 4 indicates potential problems requiring further investigation. It's important to consult with your doctor to determine the underlying cause and receive appropriate treatment.
  
  8. **Maximum Heart Rate Achieved**: Your maximum heart rate achieved during exercise is not provided, but it should typically be within the range of 50% to 85% of your predicted maximum heart rate, which is approximately 170 beats per minute (bpm) for a 50-year-old person.
  
  9. **Exercise-Induced Angina**: The value of 4 indicates the absence of chest pain during exercise. This is a positive sign, as chest pain during exercise is a significant indicator of coronary artery disease.
  
  10. **Oldpeak**: The value of 5 suggests that your ST depression increased significantly after exercise. This indicates a potential issue with blood flow to the heart and warrants further evaluation.
  
  11. **Slope of the Peak Exercise ST Segment**: The value of 1 indicates an upsloping ST segment during exercise, which may indicate ischemia or reduced blood flow to the heart.
  
  12. **Number of Major Vessels (0-3) Colored by Fluoroscopy**: The value of 5 suggests that you may have blockages in your major coronary arteries. The severity of these blockages should be further assessed and managed to reduce the risk of heart attack.
  
  13. **Thallium (Thal)**: The value of 4 indicates potentially reversible defects in your heart that may improve with treatment. This suggests that your heart condition may be treatable, and further evaluation and management are necessary.
  
  **Keywords**: high blood pressure, high cholesterol, diabetes, smoking, obesity, physical inactivity, family history of heart disease, chest pain, breathlessness, fatigue, sweating, nausea, vomiting.`
)

    function onC() {
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
            const { name, medicalHistory,risk } = data;
            console.log(name)
            Setud(name);
            setMed(risk)
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
  const [k,setK]=useState(70)
  const getCircleStyles = () => {
    // Adjust this function based on your circle positioning requirements
    return {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      // Add other styles as needed
    };
  };

  function K(){
    console.log(k)
    if (k<30 && k>20){
      return (
        <>
        <div className="circle-container  " style={{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center"}}>
          <div className='scale-in-center1 ' style={{borderRadius:"50%",backgroundColor:"red",height:"400px",width:"400px",position:"relative",left:"20px",top:"20px"}} ></div>
          
          <div className="circle" style={{borderRadius:"50%",backgroundColor:"aliceblue",backgroundColor:"white",marginLeft:"30px",marginTop:"30px"}}></div>
          <div className="wave _25 " style={{marginLeft:"30px",marginTop:"30px",}} ></div>
          <div className="wave _25"  style={{marginLeft:"30px",marginTop:"30px" }}></div>
          <div className="wave _25" style={{marginLeft:"30px",marginTop:"30px",}} ></div>
          <div className="wave-below _25"  style={{marginLeft:"30px",marginTop:"30px"}}></div>
          <div style={{border:"5px red solid",borderRadius:"50%",backgroundColor:"transparent",height:"400px",width:"400px",position:"absolute",left:"20px",top:"20px"}}></div>

          <div className="desc _0" style={{marginLeft:"40px",marginTop:"20px"}}>
            <h2>Today</h2>
            <p>
              <b style={{color:"aliceblue"}}>{k}<span>%</span></b>
            </p>
          </div>
        </div>
        </>
      )
    }
    else if(k<20 ){
      return (
        <div className="circle-container  " style={{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center"}}>
          <div className='scale-in-center ' style={{borderRadius:"50%",backgroundColor:"red",height:"400px",width:"400px",position:"relative",left:"20px",top:"20px"}} ></div>
          
          <div className="circle" style={{borderRadius:"50%",backgroundColor:"aliceblue",backgroundColor:"white",marginLeft:"30px",marginTop:"30px"}}></div>
          <div className="wave _0 " style={{marginLeft:"30px",marginTop:"30px",}} ></div>
          <div className="wave _0"  style={{marginLeft:"30px",marginTop:"30px" }}></div>
          <div className="wave _0" style={{marginLeft:"30px",marginTop:"30px",}} ></div>
          <div className="wave-below _0"  style={{marginLeft:"30px",marginTop:"30px"}}></div>
          <div style={{border:"5px red solid",borderRadius:"50%",backgroundColor:"transparent",height:"400px",width:"400px",position:"absolute",left:"20px",top:"20px"}}></div>

          <div className="desc _0" style={{marginLeft:"40px",marginTop:"20px"}}>
            <h2>Today</h2>
            <p>
              <b style={{color:"aliceblue"}}>{k}<span>%</span></b>
            </p>
          </div>
        </div>
      )
    }
    else if (k>40 && k<60){
      return (
    
        <div className="circle-container  " style={{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center"}}>
          <div className='scale-in-center ' style={{borderRadius:"50%",backgroundColor:"red",height:"400px",width:"400px",position:"relative",left:"20px",top:"20px"}} ></div>
          
          <div className="circle" style={{borderRadius:"50%",backgroundColor:"aliceblue",marginLeft:"30px",marginTop:"30px"}}></div>
          <div className="wave _50 " style={{marginLeft:"30px",marginTop:"30px",}} ></div>
          <div className="wave _50"  style={{marginLeft:"30px",marginTop:"30px" }}></div>
          <div className="wave _50" style={{marginLeft:"30px",marginTop:"30px",}} ></div>
          <div className="wave-below _50"  style={{marginLeft:"30px",marginTop:"30px"}}></div>
          <div style={{border:"5px red solid",borderRadius:"50%",backgroundColor:"transparent",height:"400px",width:"400px",position:"absolute",left:"20px",top:"20px"}}></div>

          <div className="desc _0" style={{marginLeft:"40px",marginTop:"20px"}}>
            <h2>Today</h2>
            <p>
              <b style={{color:"aliceblue"}}>{k}<span>%</span></b>
            </p>
          </div>
        </div>
      )
    }
    else if(k<80 && k>60){
      return (
<div className="circle-container  " style={{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center"}}>
          <div className='scale-in-center ' style={{borderRadius:"50%",backgroundColor:"red",height:"400px",width:"400px",position:"relative",left:"20px",top:"20px"}} ></div>
          
          <div className="circle" style={{borderRadius:"50%",backgroundColor:"aliceblue",backgroundColor:"white",marginLeft:"30px",marginTop:"30px"}}></div>
          <div className="wave _75 " style={{marginLeft:"30px",marginTop:"30px",}} ></div>
          <div className="wave _75"  style={{marginLeft:"30px",marginTop:"30px" }}></div>
          <div className="wave _75" style={{marginLeft:"30px",marginTop:"30px",}} ></div>
          <div className="wave-below _75"  style={{marginLeft:"30px",marginTop:"30px"}}></div>
          <div style={{border:"5px red solid",borderRadius:"50%",backgroundColor:"transparent",height:"400px",width:"400px",position:"absolute",left:"20px",top:"20px"}}></div>

          <div className="desc _0" style={{marginLeft:"40px",marginTop:"20px",fontFamily:"initial",color:"aliceblue"}}>

            <h2 style={{fontFamily:"initial",color:"aliceblue"}}>Risk level:</h2>
            <p>
              <b style={{color:"aliceblue",color:"aliceblue"}}>{k}<span>%</span></b>
            </p>
          </div>
        </div>
      )
    }
 
    else {
      return (
        <div className="circle-container  " style={{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center"}}>
        <div className='scale-in-center ' style={{borderRadius:"50%",backgroundColor:"red",height:"400px",width:"400px",position:"relative",left:"20px",top:"20px"}} ></div>
        
        <div className="circle" style={{borderRadius:"50%",backgroundColor:"aliceblue",backgroundColor:"white",marginLeft:"30px",marginTop:"30px"}}></div>
        <div className="wave _100 " style={{marginLeft:"30px",marginTop:"30px",}} ></div>
        <div className="wave _100"  style={{marginLeft:"30px",marginTop:"30px" }}></div>
        <div className="wave _100" style={{marginLeft:"30px",marginTop:"30px",}} ></div>
        <div className="wave-below _100"  style={{marginLeft:"30px",marginTop:"30px"}}></div>
        <div style={{border:"5px red solid",borderRadius:"50%",backgroundColor:"transparent",height:"400px",width:"400px",position:"absolute",left:"20px",top:"20px"}}></div>

        <div className="desc _0" style={{marginLeft:"35px",marginTop:"40px"}}>
          <h2 style={{color:"aliceblue"}}>Today</h2>
          <p>
            <b style={{color:"aliceblue"}}>{k}<span>%</span></b>
          </p>
        </div>
      </div>
              )
    }
  }
  return (
    <>
    
    <header className="header1">
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
                  <Link to='/' className="nav-link" style={{ color: '#e11127' }} aria-current="page" >Home</Link>
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
      
      <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" style={{backgroundColor:"aliceblue"}}>
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
          <button className='btn btn-lg' style={{ color: "#e11127", backgroundColor: 'aliceblue', borderRadius: "50px", position:"absolute",left:250,top:125}} onClick={handleClick1}><i class="bi bi-box-arrow-right"></i> Logout</button>

            <div style={{height:"200px",width:"200px",borderRadius:"50% ",border:"7px solid red",marginTop:"50px",marginLeft:"80px",display:'flex',alignItems:"center",justifyContent:"center",fontSize:'2 rem'}}>
              <div style={{fontSize:"2.2rem",marginLeft:"10px"}} >{med[2]}{med[3]}%</div>
              <div style={{position:"absolute",top:"340px"}}>at risk  </div>
            </div>
            <div style={{marginTop:"20px",marginLeft:"60px",fontSize:"1.2rem"}}>Navigate throught our tools</div>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"20px"}}>
            <div style={{height:"100px",borderRadius:"25px",width:"100px",backgroundColor:"#D7ECFF",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <i class="bi bi-archive-fill" style={{fontSize:"1.7rem",color:"#e11127"}}></i>
            </div>
            <Link to="/output" style={{height:"100px",width:"100px",backgroundColor:"#D7ECFF",marginLeft:"10px",borderRadius:"25px",display:"flex",justifyContent:"center",alignItems:"center"}}>
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
            <div style={{height:"100px",width:"100px",backgroundColor:"#D7ECFF",marginLeft:"10px",borderRadius:"25px",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <i class="bi bi-files" style={{fontSize:"1.7rem",color:"#e11127"}}></i>
            </div>
            <div style={{height:"100px",width:"100px",backgroundColor:"#D7ECFF",marginLeft:"10px",borderRadius:"25px",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <i class="bi bi-universal-access" style={{fontSize:"1.7rem",color:"#e11127"}}></i>
            </div>
            
            </div>
            </div>
        </div>


      </div>
    <div style={{width:"100%",height:"1600px",backgroundColor:"aliceblue"}}>
      
      
      <main style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <div className='slide-in-bottom'>
        <K/>
        </div>
        

        {/* Repeat similar blocks for other circle containers */}
        
  
      </main>
      <div className='  shadow-lg' style={{height:"1000px",width:"650px",backgroundColor:"red",marginLeft:"80px",marginTop:"50px",color:"aliceblue",display:"flex",paddingRight:"20px"}}>
        
          <div className='text-focus-in title ' style={{position:"absolute",top:"640px",left:"100px",color:"aliceblue"}}>    <div style={{marginLeft:"10px",color:"aliceblue"}}>Report</div>
          
          </div>
          <p className='text-focus-in' style={{marginTop:"100px",marginLeft:"20px",fontSize:"1rem"}}>
            {first}
          </p>
       </div>
         <div className='text-focus-in' style={{height:"350px",width:"670px",position:"absolute",top:"700px",left:"780px",border:"9px red solid"}}>
         <h2 style={{marginLeft:"180px",marginTop:"30px"}}>Life expantansy</h2>
          <div style={{display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"transparent",height:"150px",width:"150px",borderRadius:"50%",border:"7px solid forestgreen",marginLeft:"20px",marginTop:"30px"}}>
          <div style={{fontFamily:"fantasy",fontSize:"2rem"}}>30%</div>
          <div style={{fontSize:"1.2rem",height:"120px",width:"400px",position:"absolute",left:"200px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam minima facilis distinctio nesciunt non id eos, iure perspiciatis. Soluta nisi voluptas similique esse doloribus itaque tenetur unde deserunt eius culpa.</div>
          </div>
         </div>
         <div className='text-focus-in' style={{height:"350px",width:"670px",position:"absolute",top:"1100px",left:"780px",border:"9px red solid"}}>
         <h2 style={{marginLeft:"180px",marginTop:"30px"}}>Recovery rate</h2>
          
          <i class="bi bi-graph-up-arrow" style={{display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"transparent",height:"150px",width:"150px",borderRadius:"50%",marginLeft:"20px",marginTop:"30px",color:"red",fontSize:"5rem"}}></i>
          <div style={{height:"120px",width:"400px",position:"absolute",fontSize:"1.2rem",left:"190px",top:"100px"}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam minima facilis distinctio nesciunt non id eos, iure perspiciatis. Soluta nisi voluptas similique esse doloribus itaque tenetur unde deserunt eius culpa.
          </div>
         </div>
    </div>
    <footer style={{ width: '100%', height: '30px', backgroundColor: '#e11127', color: 'aliceblue', textAlign: 'center', marginTop: '40px', fontWeight: '200' }}>Copyright belongs to American Heart Association</footer>

    </>
  );
};

export default Jpp;

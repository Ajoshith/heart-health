import React from 'react'
import Pf from "../images/profile1.jpg"
import "./hello.css"
function Cards(props) {
  
  
  return (
    <>
      <div className="slit-in-vertical" style={{margin:"50px"}}>
        <div className="card shadow-lg slit-in-vertical" style={{height:"300px",width:"300px"}}>
          <img className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{(props.title[0].toUpperCase()+props.title.slice(1,props.title.length))}</h5>
            <p className="card-text">{props.description}</p>
            <a href="#" class="btn" style={{textDecoration:"none",border:"none",borderRadius:"50px",color:"aliceblue",backgroundColor:"#e11127"}}>Go somewhere</a>
          </div>
        </div>
      </div>
     
    </>
  )
}

export default Cards
// style={{height:"200px",width:"200px"}}
import { useEffect, useState } from "react";
import pjlogo from "../images/pjlogo.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../images/image.png";

const Experiment = () => {
  const [username, setUsername] = useState("");
  const [username1, setUsername1] = useState("");
  const [username2, setUsername2] = useState("");
  const [username3, setUsername3] = useState("");
  const [username4, setUsername4] = useState("");
  const [username5, setUsername5] = useState("");
  const [username6, setUsername6] = useState("");
  const [username7, setUsername7] = useState("");
  const [username8, setUsername8] = useState("");
  const [username9, setUsername9] = useState("");
  const [username10, setUsername10] = useState("");
  const [username11, setUsername11] = useState("");
  const [username12, setUsername12] = useState("");
  const [username13, setUsername13] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    HandleClick2();
  }, []);
  function Handle(e) {
    setUsername(e.target.value);
    console.log(username);
  }
  function Handle1(e) {

    setUsername1(e.target.value);
    console.log(username1);
  }
  function Handle2(e) {
    const k=e.target.value;
    if (k=="Male")
    {setUsername2(1);}
    else{
      setUsername2(0)
    }

    console.log(username2);
  }
  function Handle3(e) {
    setUsername3(e.target.value);
    console.log(username3);
  }
  function Handle4(e) {
    setUsername4(e.target.value);
    console.log(username4);
  }
  function Handle5(e) {
    setUsername5(e.target.value);
    console.log(username5);
  }
  function Handle6(e) {
    setUsername6(e.target.value);
    console.log(username6);
  }
  function Handle7(e) {
    setUsername7(e.target.value);
    console.log(username7);
  }
  function Handle8(e) {
    setUsername8(e.target.value);
    console.log(username8);
  }
  function Handle9(e) {
    setUsername9(e.target.value);
    console.log(username9);
  }
  function Handle10(e) {
    setUsername10(e.target.value);
    console.log(username10);
  }
  function Handle11(e) {
    setUsername11(e.target.value);
    console.log(username11);
  }
  function Handle12(e) {
    setUsername12(e.target.value);
    console.log(username12);
  }
  function Handle13(e) {
    setUsername13(e.target.value);
    console.log(username13);
  }
  async function handleClick1() {
    try {
      const res = await fetch("/filldata", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: username,
          medicalHistory: {
            age: username1,
            sex: username2,
            cp: username3,
            rbp: username4,
            sc: username5,
            fbs: username6,
            rer: username7,
            mhr: username8,
            eia: username9,
            olds: username10,
            st: username11,
            mvs: username12,
            thal: username13,
          },
        }),
      });

      if (res.ok) {
        console.log("Updated");
      } else {
        console.error("Registration passed");
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
          name: "Hello",
          password: "password",
        }),
      });

      if (res.ok) {
        const { name } = await res.json();
        setUsername(name);
      } else {
        console.error("Login pass");
        navigate("/");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  }
  return (
    <>
      <header className="header1" style={{ backgroundColor: "#e11127" }}>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <Link
              to="/afterlogin"
              id="header "
              className="navbar-brand navbarcolorfont scale-in-center"
            >
              <img src={logo} style={{ height: "60px" }} alt="logo" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    style={{ color: "aliceblue" }}
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    style={{ color: "aliceblue" }}
                    href="#"
                  >
                    About us
                  </a>
                </li>
                <a
                  style={{
                    paddingTop: "9px",
                    paddingLeft: "7px",
                    position: "absolute",
                    left: "1430px",
                    top: "17px",
                    fontSize: "25px",
                    fontWeight: "100",
                    color: "aliceblue",
                  }}
                  data-bs-toggle="offcanvas"
                  href="#offcanvasExample"
                  role="button"
                  aria-controls="offcanvasExample"
                >
                  <i className="bi bi-person-circle"></i>
                </a>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h1 style={{ color: "#e11127" }}>Profile</h1>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="details">
            <h3 style={{ display: "block" }}>Patients details</h3>
            <div className="details1">Name, age, blood group, etc .......</div>
          </div>
        </div>
      </div>


      <div className="" style={{ backgroundColor: "aliceblue", height: "710px" }}>

        {/* <input
        styl  e={{ border: "1px solid black" }}
        type="text"
        onChange={Handle1}
      /></div>
      <input
        style={{ border: "1px solid black" }}
        type="text"
        onChange={Handle2}
      />
      <input
        style={{ border: "1px solid black" }}
        type="text"
        onChange={Handle3}
      />
      <input
        style={{ border: "1px solid black" }}
        type="text"
        onChange={Handle4}
      />
      <input
        style={{ border: "1px solid black" }}
        type="text"
        onChange={Handle5}
      />
      <input
        style={{ border: "1px solid black" }}
        type="text"
        onChange={Handle6}
      />
      <input
        style={{ border: "1px solid black" }}
        type="text"
        onChange={Handle7}
      />
      <input
        style={{ border: "1px solid black" }}
        type="text"
        onChange={Handle8}
      />
      <input
        style={{ border: "1px solid black" }}
        type="text"
        onChange={Handle9}
      />
      <input
        style={{ border: "1px solid black" }}
        type="text"
        onChange={Handle10}
      />
      <input
        style={{ border: "1px solid black" }}
        type="text"
        onChange={Handle11}
      />
      <input
        style={{ border: "1px solid black" }}
        type="text"
        onChange={Handle12}
      />
      <input
        style={{ border: "1px solid black" }}
        type="text"
        onChange={Handle13}
      /> */}
        <br />


        <div
          className="container slide-in-form "
          style={{
            marginTop: "20px",
            marginLeft: "85px",
            position: "relative",
            border: "#e11127 solid 10px",
            width: "2000px",
            borderRadius: 6,

            backgroundColor: "#fff",
            boxShadow: "0 5px 10px rgba(0,0,0,0.1)"
          }}
        >

          <form
            action="#"
            className=""
            id=""
            style={{
              position: "relative",
              marginTop: 16,
              minHeight: 580,
              backgroundColor: "#fff",

            }}
          >
            <div className="form first">
              <div className="details personal" style={{ marginTop: 30 }}>
                <span
                  className="title"
                  style={{
                    display: "block",
                    marginBottom: 16,
                    fontSize: 16,
                    fontWeight: 500,
                    margin: "6px 0",
                    color: "#333",
                    textAlign: "center"
                  }}
                >
                  <h2>Health data form</h2>
                </span >
                <div
                  className="fields"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap"
                  }}
                >

                  <div
                    className="input-field"
                    style={{
                      display: "flex",
                      width: "calc(100% / 3 - 50px)",
                      flexDirection: "column",
                      margin: "4px 0",
                      marginLeft: "80px"
                    }}
                  >
                    <label htmlFor="" style={{marginLeft:"0px"}}>Age</label>
                    <input onChange={Handle1}
                      type="text"
                      placeholder="Enter your age"
                      required=""
                      style={{
                        outline: "none",
                        borderRadius: 5,
                        border: "1px solid #aaa",
                        padding: "0 10px",
                        height: 42,
                        marginLeft:"0px"
                        
                      }}
                    />
                  </div>
                  <div
                    className="input-field"
                    style={{
                      
                      display: "flex",
                      width:"300px",
                      flexDirection: "column",
                      margin: ""
                    }}
                  >
                    <label htmlFor="" style={{marginLeft:"30px ",marginBottom:"8px"}}>Gender</label>
                    <select id="gender" 
                    onChange={Handle2}
                    type="text"
                    placeholder="Enter your gender"
                    required=""
                    style={{
                      outline: "none",
                      borderRadius: 5,
                      border: "1px solid #aaa",
                      padding: "0 10px",
                      height: 42,
                      backgroundColor:"rgba(244,248,247,255)",
                      fontWeight:"100",
                      color:"gray",
                      marginLeft:"30px",
                      width:"280px",
                      
                    }}>
                      <option value="" disabled>Enter your gender</option>
                      <option value="male">Male</option>
                      <option value="female" >Female</option>
                    </select>
                    
                  </div>
                  <div
                    className="input-field"
                    style={{
                      display: "flex",
                      width: "calc(100% / 3 - 50px)",
                      flexDirection: "column",
                      margin: "4px 0",
                      marginLeft:"130px"
                    }}
                  >
                    <label htmlFor="">CP</label>
                    <input onChange={Handle3}
                      type="text"
                      placeholder="Enter your cp"
                      required=""
                      style={{
                        outline: "none",
                        borderRadius: 5,
                        border: "1px solid #aaa",
                        padding: "0 10px",
                        height: 42,
                        margin: "8px 0",
                    
                      }}
                    />
                  </div>
                  <div
                    className="input-field"
                    style={{
                      display: "flex",
                      width: "calc(100% / 3 - 50px)",
                      flexDirection: "column",
                      margin: "4px 0",
                      marginLeft: "80px"
                    }}
                  >
                    <label htmlFor="">RBP</label>
                    <input onChange={Handle4}
                      type="text"
                      placeholder="Enter your rbp"
                      required=""
                      style={{
                        outline: "none",
                        borderRadius: 5,
                        border: "1px solid #aaa",
                        padding: "0 10px",
                        height: 42,
                        margin: "8px 0"
                      }}
                    />
                  </div>
                  <div
                    className="input-field"
                    style={{
                      display: "flex",
                      width: "calc(100% / 3 - 50px)",
                      flexDirection: "column",
                      margin: "4px 0"
                    }}
                  >
                    <label htmlFor="">SC</label>
                    <input onChange={Handle5}
                      type="text"
                      placeholder="Enter your sc"
                      required=""
                      style={{
                        outline: "none",
                        borderRadius: 5,
                        border: "1px solid #aaa",
                        padding: "0 10px",
                        height: 42,
                        margin: "8px 0"
                      }}
                    />
                  </div>
                  <div
                    className="input-field"
                    style={{
                      display: "flex",
                      width: "calc(100% / 3 - 50px)",
                      flexDirection: "column",
                      margin: "4px 0"
                    }}
                  >
                    <label htmlFor="">Fbs</label>
                    <input onChange={Handle6}
                      type="text"
                      placeholder="Enter your fbs"
                      required=""
                      style={{
                        outline: "none",
                        borderRadius: 5,
                        border: "1px solid #aaa",
                        padding: "0 10px",
                        height: 42,
                        margin: "8px 0"
                      }}
                    />
                  </div>
                  <div
                    className="input-field"
                    style={{
                      display: "flex",
                      width: "calc(100% / 3 - 50px)",
                      flexDirection: "column",
                      margin: "4px 0"
                    }}
                  >
                    <label htmlFor="" style={{ marginLeft: "80px" }}>Rer</label>
                    <input onChange={Handle7}
                      type="text"
                      placeholder="Enter your rer"
                      required=""
                      style={{
                        outline: "none",
                        borderRadius: 5,
                        border: "1px solid #aaa",
                        padding: "0 10px",
                        height: 42,
                        margin: "8px 0",
                        marginLeft: "80px"
                      }}
                    />
                  </div>
                  <div
                    className="input-field"
                    style={{
                      display: "flex",
                      width: "calc(100% / 3 - 50px)",
                      flexDirection: "column",
                      margin: "4px 0"
                    }}
                  >
                    <label htmlFor="" style={{ marginLeft: "35px" }}>MHR</label>
                    <input onChange={Handle8}
                      type="text"
                      placeholder="Enter your mhr"
                      required=""
                      style={{
                        outline: "none",
                        borderRadius: 5,
                        border: "1px solid #aaa",
                        padding: "0 10px",
                        height: 42,
                        margin: "8px 0",
                        marginLeft: "35px"
                      }}
                    />
                  </div>
                  <div
                    className="input-field"
                    style={{
                      display: "flex",
                      width: "calc(100% / 3 - 50px)",
                      flexDirection: "column",
                      margin: "4px 0"
                    }}
                  >
                    <label htmlFor="">Eia</label>
                    <input onChange={Handle9}
                      type="text"
                      placeholder="Enter your eia"
                      required=""
                      style={{
                        outline: "none",
                        borderRadius: 5,
                        border: "1px solid #aaa",
                        padding: "0 10px",
                        height: 42,
                        margin: "8px 0"
                      }}
                    />
                  </div>
                  <div
                    className="input-field"
                    style={{
                      display: "flex",
                      width: "calc(100% / 3 - 50px)",
                      flexDirection: "column",
                      margin: "4px 0"
                    }}
                  >
                    <label htmlFor="" style={{ marginLeft: "80px" }}>Olds</label>
                    <input onChange={Handle10}
                      type="text"
                      placeholder="Enter your olds"
                      required=""
                      style={{
                        outline: "none",
                        borderRadius: 5,
                        border: "1px solid #aaa",
                        padding: "0 10px",
                        height: 42,
                        margin: "8px 0",
                        marginLeft: "80px"
                      }}
                    />
                  </div>
                  <div
                    className="input-field"
                    style={{
                      display: "flex",
                      width: "calc(100% / 3 - 50px)",
                      flexDirection: "column",
                      margin: "4px 0"
                    }}
                  >
                    <label htmlFor="" style={{ marginLeft: "35px" }}>ST</label>
                    <input onChange={Handle11}
                      type="text"
                      placeholder="Enter your st"
                      required=""
                      style={{
                        outline: "none",
                        borderRadius: 5,
                        border: "1px solid #aaa",
                        padding: "0 10px",
                        height: 42,
                        margin: "8px 0",
                        marginLeft: "35px"
                      }}
                    />
                  </div>
                  <div
                    className="input-field"
                    style={{
                      display: "flex",
                      width: "calc(100% / 3 - 50px)",
                      flexDirection: "column",
                      margin: "4px 0"
                    }}
                  >
                    <label htmlFor="">MVS</label>
                    <input onChange={Handle12}
                      type="text"
                      placeholder="Enter your mvs"
                      required=""
                      style={{
                        outline: "none",
                        borderRadius: 5,
                        border: "1px solid #aaa",
                        padding: "0 10px",
                        height: 42,
                        margin: "8px 0"
                      }}
                    />
                  </div>
                  <div
                    className="input-field"
                    style={{
                      display: "flex",
                      width: "calc(100% / 3 - 50px)",
                      flexDirection: "column",
                      margin: "4px 0"
                    }}
                  >
                    <label htmlFor="" style={{ marginLeft: "480px" }}>Thal</label>
                    <input onChange={Handle13}
                      type="text"
                      placeholder="Enter your st"
                      required=""
                      style={{
                        outline: "none",
                        borderRadius: 5,
                        border: "1px solid #aaa",
                        padding: "0 10px",
                        height: 42,
                        margin: "8px 0",
                        marginLeft: "480px"
                      }}
                    />
                  </div>
                </div>

              </div>

              <button
                className="btn btn-lg"
                style={{ backgroundColor: "#e11127", color: "aliceblue", marginTop: "20px", marginLeft: "580px", borderRadius: "25px", fontSize: "1.1rem" }}
                onClick={handleClick1}
              >
                Submit
              </button>

            </div>
          </form>
        </div>
      </div>




      <footer
        style={{
          width: "100%",
          height: "30px",
          backgroundColor: "#e11127",
          color: "aliceblue",
          textAlign: "center",

          fontWeight: "200",
        }}
      >
        Copyright belongs to American Heart Association
      </footer>
    </>
  );
};
export default Experiment;

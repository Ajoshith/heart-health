import logo from "./logo.svg";
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./paths/hello";
import Symptom from "./paths/symptompage";
import Experiment from "./paths/experiment";
import Doctorshomepage from "./paths/doctorshomepage";
import Searchpage from "./paths/docsea";
import Consult from "./paths/consultation";
import Registrationform from "./paths/login";
import Experiment1 from "./paths/experiment1";
import Output from "./paths/output";
import MyNewsComponent from "./paths/experiment1";
import NearbyHospitalsMap from "./paths/map";
import Jpp from "./paths/mainoutput";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exp" element={<Experiment1 />} />
          <Route path="/registration" element={<Registrationform />} />
          <Route path="/symptompage" element={<Symptom />} />
          <Route path="/doctorspage" element={<Doctorshomepage />} />
          <Route path="/docsearch" element={<Searchpage />} />
          <Route path="/consultation" element={<Consult />} />
          <Route path="/fillform" element={<Experiment />} />
          <Route path="/output" element={<Output/>}/>
          <Route path="/experiment" element={<MyNewsComponent/>}/>
          <Route path="/map" element={<NearbyHospitalsMap />}/>
          <Route path="/waterfilloutput" element={<Jpp/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;

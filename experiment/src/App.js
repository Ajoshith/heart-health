import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ReactDom from 'react-dom'
import Home from "./Components1/exp7";
import AboutPage from "./Components1/about";


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<AboutPage/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;


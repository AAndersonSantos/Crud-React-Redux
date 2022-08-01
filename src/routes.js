import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar";
import Tutorial from "./components/Tutorial";
import TutorialsList from "./pages/tutorials/TutorialsList";
import TeacherList from "./pages/teachers";
import Students from "./pages/students"

function Routers() {
    return (
      <Router>
        <NavBar />
            <div className="container mt-3">
                <Routes>
                    <Route exact path="/" element={ <TutorialsList /> } />
                    <Route exact path="/tutorials" element={ <TutorialsList /> } />
                    <Route exact path="/teachers" element={ <TeacherList /> } />
                    <Route exact path="/students" element={ <Students /> } />
                    <Route path="/tutorials/:id" element={ <Tutorial /> } />
                </Routes>
            </div>
        </Router>
    );
  }
  
  export default Routers;
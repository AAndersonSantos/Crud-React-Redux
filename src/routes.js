import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar";
import AddTutorial from "./components/AddTutorial";
import Tutorial from "./components/Tutorial";
import TutorialsList from "./components/TutorialsList";
import TeacherList from "./components/componentTeachersList";

function Routers() {
    return (
      <Router>
        <NavBar />
            <div className="container mt-3">
                <Routes>
                    <Route exact path="/" element={ <TutorialsList /> } />
                    <Route exact path="/tutorials" element={ <TutorialsList /> } />
                    <Route exact path="/add" element={ <AddTutorial /> } />
                    <Route exact path="/teachers" element={ <TeacherList /> } />
                    <Route path="/tutorials/:id" element={ <Tutorial /> } />
                </Routes>
            </div>
        </Router>
    );
  }
  
  export default Routers;
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddTutorial from "./components/AddTutorial";
import Tutorial from "./components/Tutorial";
import TutorialsList from "./components/TutorialsList";
import TeacherList from "./components/componentTeachersList";

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/tutorials" className="navbar-brand">
          bezKoder
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/tutorials"} className="nav-link">
              Tutorials
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/teachers"} className="nav-link">
              Teachers
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Routes>
          <Route exact path="/" element={<TutorialsList />} />
          <Route exact path="/tutorials" element={<TutorialsList />} />
          <Route exact path="/add" element={<AddTutorial />} />
          <Route exact path="/teachers" element={<TeacherList />} />
          <Route path="/tutorials/:id" element={<Tutorial />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

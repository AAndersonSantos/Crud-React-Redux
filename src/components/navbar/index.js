import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){
    return(
        <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/tutorials" className="navbar-brand">
          bezKoder
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink to={"/tutorials"} className="nav-link">
              Tutorials
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/teachers"} className="nav-link">
              Teachers
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/students"} className="nav-link">
              Students
            </NavLink>
          </li>
        </div>
      </nav>
    )
}
export default NavBar;
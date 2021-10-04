import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';
const Navigation = () => {
    return (
      <div className="NavBar-container">
      <div className="container">
        <div className="row">
          <div className="col-md-2">
          </div>
          {/* Menu Options */}
          <div className="col-md-10">
            <nav className="menu-container">
              <ul className="d-flex align-items-end justify-content-end">
                <NavLink activeStyle = {{fontweight: "bold", color: "red"}} to="/home" className="items">
                  <li>Home</li>
                </NavLink>
                <NavLink activeStyle = {{fontweight: "bold", color: "red"}} to="/subjects" className="items">
                  <li>Our Courses</li>
                </NavLink>
                <NavLink activeStyle = {{fontweight: "bold", color: "red"}} to="/about" className="items">
                  <li>About Us</li>
                </NavLink>
                <NavLink activeStyle = {{fontweight: "bold", color: "red"}} to="/contact" className="items">
                  <li>Contact us</li>
                </NavLink>
                <NavLink to = "*"></NavLink>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
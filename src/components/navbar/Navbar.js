import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom'; 

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-title">
        <h1>Animals & Farms</h1>
      </div>
      <Link to="/bookings">Bookings</Link>
      <Link to="/">Home</Link>
    </div>
  );
}

export default Navbar;

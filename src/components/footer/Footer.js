import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom'; 

function Footer() {
  return (
    <div className="footer">
      <p>&copy; 2023 Animals & Farms</p>
      <p>
        <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
      </p>
    </div>
  );
}

export default Footer;

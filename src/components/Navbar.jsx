import React from 'react';
import './Navbar.css';
import logo from '../assets/logoo.jpg';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo Icon" className="logo-img" />
      </div>
      <div className="nav-buttons">
        <Link to="/about" className="nav-link">About Us</Link>
        <button className="btn">Login</button>
        <button className="btn">Sign Up</button>
      </div>
    </nav>
  );
}

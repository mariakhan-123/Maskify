import React from 'react';
import { FaFacebookF, FaInstagram, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Contact Us</h3>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="mailto:support@example.com" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
        <p>© 2025 Your App Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

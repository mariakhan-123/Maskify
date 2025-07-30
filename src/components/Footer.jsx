import React from 'react';
import { FaFacebookF, FaTwitter, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Contact Us</h3>
        <div className="social-icons">
          <a href="https://www.facebook.com/profile.php?id=61578885020037" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="https://x.com/MaskifyA61137" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaTwitter />
          </a>
          <a href="mailto:support@example.com" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
        <p>© 2025 Maskify. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

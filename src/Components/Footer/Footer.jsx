import React from 'react';
import './Footer.css'; // Import the corresponding CSS file for styling
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'; // FontAwesome icons

const Footer = () => {
  return (
    <div className="footer">
      <div className="col-1">
        <h3>USEFUL LINKS</h3>
        <a href="/about">About</a>
        <a href="/services">Services</a>
        <a href="/contact">Contact</a>
        <a href="/shop">Shop</a>
        <a href="/blog">Blog</a>
      </div>

      <div className="col-3">
        <h3>CONTACT</h3>
        <p>123, XYZ Road. BSK 3<br /> Bangalore, Karnataka, IN</p>
        <div className="social-icons">
          <a href="https://facebook.com" aria-label="Facebook">
            <FaFacebook />
          </a>
          <a href="https://instagram.com" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://twitter.com" aria-label="Twitter">
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

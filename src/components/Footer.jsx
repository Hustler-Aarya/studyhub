import React from 'react';
import './Footer.css'

function Footer() {
  return (
    <footer>
      <div className="con_foot">
        <div className='con_footer'>
      <h2>About Your Company</h2>
            <p>Address: 123 Main Street, City, Country</p>
            <p>Email: contact@example.com</p>
            <p>Phone: +1 (123)999999999</p>
        <p>&copy; {new Date().getFullYear()} eLearn</p>
      </div>
      <div className="footer-key-points">
            <h2>Key Points</h2>
            <ul>
              <li>High-quality products</li>
              <li>Fast and reliable service</li>
              <li>Customer satisfaction</li>
            </ul>
          </div>
          </div>
    </footer>
  );
}

export default Footer;

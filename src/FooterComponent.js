// Footer.js
import React from "react";
import "./FooterComponent.css";

const FooterComponent = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer-container">
      <p>&copy; {currentYear} NutriFresh. All rights reserved.</p>
    </footer>
  );
};

export default FooterComponent;

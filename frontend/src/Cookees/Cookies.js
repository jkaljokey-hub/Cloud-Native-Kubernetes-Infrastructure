import React, { useState, useEffect } from "react";
import "./Cookies.css";

const Cookies = () => {
  const [IsOpen, setIsOpen] = useState(false);

  useEffect(() => {
 const timee= setTimeout(() => {
    setIsOpen(true);
}, 8000);
    
    

    return () => clearTimeout(timee); // Cleanup function
  }, []);

  return IsOpen ? (
    <div className="Cookies">
      <p className="as">
        We use our own and third-party cookies and tracking technologies to give
        you the best shopping experience. For more information, see our{" "}
        <span className="privicy">
          <a href="https://bouqs.com/about-us/privacy"> Privacy Policy </a>
        </span>
        <span className="x" onClick={() => setIsOpen(false)}>X</span>
      </p>
    </div>
  ) : null;
};

export default Cookies;

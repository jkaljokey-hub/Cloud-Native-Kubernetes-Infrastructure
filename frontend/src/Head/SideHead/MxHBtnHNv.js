import React, { useState, useEffect } from "react";

import {Link } from "react-router-dom";
import BtnSideNav from "./BtnSideNavComp/BtnSideNav";

const MxHBtnHNv = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);
  const [menuOpen, setMenuOpen] = useState(false);
console.log(menuOpen)
  // Check screen width dynamically
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isSidebarOpen]);


  return (
    <>
      {isMobile && (
        <>
          {/* Sidebar Toggle Button */}
          <button
            className="menu-toggle"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            ☰
          </button>

          {/* Sidebar Container */}
          <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
            <div className="head-side">
              <img
                className="close-btn"
                onClick={() => setIsSidebarOpen(false)}
                src="https://img.icons8.com/?size=30&id=EYnXuvqJDgzX&format=png&color=000000"
                alt="da"
              />

              <Link to="/">
                <img
                  src="https://i.imgur.com/BaLXCfa.jpeg"
                  alt="Logo"
                  className="logo-img-side"
                />
              </Link>
            </div>
            <div className="side-searchRoot">
              <Link to="/">
                {" "}
                <button className="side-search">
                  Log In / Sign Up to Save $7 on Every Delivery
                </button>
              </Link>
            </div>
            <BtnSideNav menuOpen={setMenuOpen}/>
          </div>

          {/* Overlay to close sidebar when clicking outside */}
          {isSidebarOpen && (
            <div
              className="overlay"
              onClick={() => setIsSidebarOpen(false)}
            ></div>
          )}
        </>
      )}
    </>
  );
};

export default MxHBtnHNv;

 
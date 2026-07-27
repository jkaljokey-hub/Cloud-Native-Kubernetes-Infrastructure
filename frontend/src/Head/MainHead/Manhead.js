import React, { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import "../Headcss.css";
import CardNave from "../HeadNav/CardNave";
import Acount from "../HeadNav/Acount";
import Help from "../HeadNav/Help";
import TrackOrder from "../HeadNav/TrackOrder";
import StoreLocation from "../HeadNav/StoreLocation";

const Manhead = () => {
  const [menuOpen, setMenuOpen] = useState(false);
 
  return (
    <div>
      {/* 🟢 Navbar Section */}
      <div className="secroor">
        {/* 🌟 Logo in the center */}
        <div className="logo">
          <Link to="/">
            <img src="https://i.imgur.com/BaLXCfa.jpeg" alt="Logo" className="logo-img" />
          </Link>
        </div>

        {/* 🍔 Toggle Button next to Navbar */}
        
   
        
        {/* 🟢 Main Navigation */}
        <div className={`parenthead ${menuOpen ? "open" : ""}`}>
          <nav>
            <ul>
              <li>
                <Link to="/storelocation" onClick={() => setMenuOpen(false)}>Store Location</Link>
              </li>
              <li>
                <Link to="/trackorder" onClick={() => setMenuOpen(false)}>Track Order</Link>
              </li>
              <li className="nav-item-help">
                <span>Help</span>
                <div className="dropdown-help">
                  <Link to="/help#flower-care" onClick={() => setMenuOpen(false)}>Flower Care</Link>
                  <Link to="/help#help-center" onClick={() => setMenuOpen(false)}>Help Center</Link>
                </div>
              </li>
              <li>
                <Link to="/acount" onClick={() => setMenuOpen(false)}>
                  <img src="https://i.imgur.com/QG6BjL4.png" alt="Account" className="acountHead" />
                </Link>
              </li>
              <li className="basketnavconst">
                <Link to="/cardnave" onClick={() => setMenuOpen(false)}>
                  <img src="https://i.imgur.com/GWGKofX.png" alt="Cart" className="basketnavimg" />
                </Link>
              </li>

            </ul>
          </nav>
          
        </div>
      </div>
<div>

</div>
      {/* Routes */}
      <Routes>
        <Route path="/storelocation" element={<StoreLocation />} />
        <Route path="/trackorder" element={<TrackOrder />} />
        <Route path="/help" element={<Help />} />
        <Route path="/cardnave" element={<CardNave />} />
        <Route path="/acount" element={<Acount />} />
      </Routes>
    </div>
  );
};

export default Manhead;

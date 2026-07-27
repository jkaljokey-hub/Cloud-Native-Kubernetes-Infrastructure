import React from "react";
import { Link } from "react-router-dom";

const Nextday = () => {
  return (
    <nav className="navbar">
      <div className="liheadbtn">
        <ul>
          <li>
            <Link to="/help">
              <li className="twicearoow">
                <span>Nextday</span>
                <img
                  src="https://i.imgur.com/I3pPDs5.png"
                  className="imgheart"
                  alt="ArrowIcon"
                />
              </li>
            </Link>

            {/* Dropdown Menu inside the same <li> */}
            <div className="drop">
              <div className="drop-grid">
                <div className="category">
                  <h4>Featured Occaasons</h4>
                  <ul>
                    <li>
                      <Link to="#">Succulents</Link>
                    </li>
                    <li>
                      <Link to="#">Tropical</Link>
                    </li>
                    <li>
                      <Link to="#">Tlips</Link>
                    </li>
                  </ul>
                </div>
                <div className="category">
                  <h4>Seasonal Occan</h4>
                  <ul>
                 <li><Link to="#">Liles</Link></li>
                                 <li><Link to="#">Orchids</Link></li>
                                 <li><Link to="#">Peonies</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nextday;

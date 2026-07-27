import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Collapse from "react-bootstrap/Collapse";
const WeddingBtn = () => {//iif the close on button dost work in moble revew this page special prp
  const [open, setOpen] = useState(false);

  return (
    <div className="BtnSideNav">
      <div
        className="BtnSideNavFlex"
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        {" "}
        <span>WeddingBtn</span>
        <img
          src={
            open
              ? "https://img.icons8.com/?size=25&id=37783&format=png&color=000000"
              : "https://i.imgur.com/p93Hlkt.png"
          }
          className="add"
            alt="as"
        />
      </div>
      <Collapse in={open}>
        <div id="example-collapse-text">
          <div className="BtnSideNavlist">
            <ul>
              <li className="BtnSideNavlistRoot">Shop</li>
              <li>
                <Link to="#">Shop AllFlowers</Link>
              </li>
              <li>
                <Link to="#">Shop All Plants</Link>
              </li>
              <li>
                <Link to="#">Shop All Gifts</Link>
              </li>
            </ul>

            <ul>
              <li className="BtnSideNavlistRoot">WellWo</li>

            
              <li>
                <Link to="#"></Link>Flowers Under $50
              </li>
            </ul>

            <ul>
              <li className="BtnSideNavlistRoot">SetMenuOpen</li>

              <li>
                <Link to="#">The Valentine's Day Collection</Link>
              </li>
             
            </ul>
            <ul>
              <li className="BtnSideNavlistRoot">Wedding Type</li>

              <li>
                <Link to="#">Anemoones</Link>
              </li>
              <li>
                <Link to="#">Dried Flowers</Link>
              </li>
             
            </ul>
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default WeddingBtn;

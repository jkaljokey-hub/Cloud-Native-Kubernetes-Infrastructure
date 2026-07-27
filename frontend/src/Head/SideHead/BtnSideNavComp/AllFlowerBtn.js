import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Collapse from "react-bootstrap/Collapse";
const BtnSideNav = () => {//iif the close on button dost work in moble revew this page special prp
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
        <span>All Flowers</span>
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
              <li className="BtnSideNavlistRoot">Fetureed</li>

              <li>
                <Link to="#">Same Day Delivery</Link>
              </li>
              <li>
                <Link to="#">Best Selliers</Link>
              </li>
              <li>
                <Link to="#"></Link>Flowers Under $50
              </li>
            </ul>

            <ul>
              <li className="BtnSideNavlistRoot">Collections</li>

              <li>
                <Link to="#">The Valentine's Day Collection</Link>
              </li>
              <li>
                <Link to="#">Davd Austin Roses</Link>
              </li>
              <li>
                <Link to="#">PArty Boxes</Link>
              </li>
              <li>
                <Link to="#"></Link>Corporate
              </li>
            </ul>
            <ul>
              <li className="BtnSideNavlistRoot">Flowers Type</li>

              <li>
                <Link to="#">Anemoones</Link>
              </li>
              <li>
                <Link to="#">Dried Flowers</Link>
              </li>
              <li>
                <Link to="#">Hydrangeas</Link>
              </li>
              <li>
                <Link to="#">Liles</Link>
              </li>
              <li>
                <Link to="#">Orchids</Link>
              </li>
              <li>
                <Link to="#">Peonies</Link>
              </li>
              <li>
                <Link to="#">Ranuculus</Link>
              </li>
              <li>
                <Link to="#">Roses</Link>
              </li>
              <li>
                <Link to="#">Sunflowers</Link>
              </li>
              <li>
                <Link to="#">Succulents</Link>
              </li>
              <li>
                <Link to="#">Tropical</Link>
              </li>
              <li>
                <Link to="#">Tlips</Link>
              </li>
              <li>
                <Link to="#">Unique Stems</Link>
              </li>
            </ul>
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default BtnSideNav;

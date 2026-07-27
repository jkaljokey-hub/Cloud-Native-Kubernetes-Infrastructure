import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Collapse from "react-bootstrap/Collapse";
const NextdayBtn = () => {
  //iif the close on button dost work in moble revew this page special prp
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
        <span>NextdayBtn</span>
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
              <li className="BtnSideNavlistRoot">Featured Occaasons</li>

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

            <ul>
              <li className="BtnSideNavlistRoot">Liles</li>

              <li>
                <Link to="#">Orchids</Link>
              </li>
              <li>
                <Link to="#">Peonies</Link>
              </li>
            </ul>

       
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default NextdayBtn;

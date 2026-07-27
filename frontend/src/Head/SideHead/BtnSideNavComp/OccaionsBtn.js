import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Collapse from "react-bootstrap/Collapse";
const OccaionsBtn = () => {
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
        <span>OccaionsBtn</span>
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
              <li className="BtnSideNavlistRoot">Seasonal Occaasons</li>

              <li>
                <Link to="#">Galentaine's Day(2/13)</Link>
              </li>
              <li>
                <Link to="#">Galentaine's Day(2/14)</Link>
              </li>
            </ul>
            <ul>
              <li className="BtnSideNavlistRoot">Featured Occaasons</li>

              <li>
                <Link to="#">Birthday</Link>
              </li>
              <li>
                <Link to="#">Sympathy</Link>
              </li>
              <li>
                <Link to="#">Just Because</Link>
              </li>
              <li>
                <Link to="#">Anniversary</Link>
              </li>
              <li>
                <Link to="#">Houswarrninmg</Link>
              </li>
              <li>
                <Link to="#">Get Well</Link>
              </li>
              <li>
                <Link to="#">Congrates</Link>
              </li>
              <li>
                <Link to="#">I'm Sorry</Link>
              </li>
              <li>
                <Link to="#">New Baby</Link>
              </li>
              <li>
                <Link to="#">Thank You</Link>
              </li>
              <li>
                <Link to="#">Party Boxes</Link>
              </li>
            </ul>
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default OccaionsBtn;

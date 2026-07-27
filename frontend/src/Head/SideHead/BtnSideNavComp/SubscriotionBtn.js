import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Collapse from "react-bootstrap/Collapse";
const SubscriotionBtn = () => {
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
        <span>
          {" "}
          <img
            src="https://i.imgur.com/fFZiDiB.png"
            className="imgheart"
            alt="ArrowIcon"
          />{" "}
          SubscriotionBtn
        </span>
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
                <Link to="#">Peonies</Link>
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

export default SubscriotionBtn;


import React from 'react';
import { Link } from 'react-router-dom';


const Peonies = () => {
  return (
    <nav className="navbar">
      <div className="liheadbtn">
        <ul>
          <li>
            <Link to="/help">
              <div className="twicearoow">
                <span>Peonies</span>
              </div>
            </Link>

            {/* Dropdown Menu inside the same <li> */}
           
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Peonies;

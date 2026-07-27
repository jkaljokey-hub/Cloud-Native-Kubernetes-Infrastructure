
import React from 'react';
import { Link } from 'react-router-dom';


const Occaasons = () => {
  return (
    <nav className="navbar">
      <div className="liheadbtn">
        <ul>
          <li>
            <Link to="/help">
              <div className="twicearoow">
                <span>Occaasons</span>
                <img src="https://i.imgur.com/I3pPDs5.png" className="imgheart" alt="ArrowIcon" />
              </div>
            </Link>

            {/* Dropdown Menu inside the same <li> */}
            <div className="drop">
              <div className="drop-grid">
                <div className="category">
                  <h4>Featured Occaasons</h4>
                  <ul>
                    <li><Link to="#">Birthday</Link></li>
                    <li><Link to="#">Sympathy</Link></li>
                    <li><Link to="#">Just Because</Link></li>
                    <li><Link to="#">Anniversary</Link></li>
                    <li><Link to="#">Houswarrninmg</Link></li>
                    <li><Link to="#">Get Well</Link></li>
                    <li><Link to="#">Congrates</Link></li>
                    <li><Link to="#">I'm Sorry</Link></li>
                    <li><Link to="#">New Baby</Link></li>
                    <li><Link to="#">Thank You</Link></li>
                    <li><Link to="#">Party Boxes</Link></li>
                  </ul>
                </div>
                <div className="category">
                  <h4>Seasonal Occaasons</h4>
                  <ul>
                    <li><Link to="#">Galentaine's Day(2/13)</Link></li>
                    <li><Link to="#">Galentaine's Day(2/14)</Link></li>
                    
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

export default Occaasons;

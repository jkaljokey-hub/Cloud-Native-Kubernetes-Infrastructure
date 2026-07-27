
import React from 'react';
import { Link } from 'react-router-dom';


const Valentine = () => {
  return (
    <nav className="navbar">
      <div className="liheadbtn">
        <ul>
          <li>
            <Link to="/help">
              <div className="twicearoow">
                <span>Valentine</span>
                <img src="https://i.imgur.com/I3pPDs5.png" className="imgheart" alt="ArrowIcon" />
              </div>
            </Link>

            {/* Dropdown Menu inside the same <li> */}
            <div className="drop">
              <div className="drop-grid">
                <div className="category">
                  <h4>Shop</h4>
                  <ul>
                    <li><Link to="#">Valentine'sDay Flowers</Link></li>
                    <li><Link to="#">Valentine'S dAY</Link></li>
                    <li><Link to="#">Valentine Day PLants</Link></li>
                    <li><Link to="#">Valentine Day Gifts</Link></li>
              
                  </ul>
                </div>
               
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
              </div>
            </div>

          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Valentine;

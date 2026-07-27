import React from 'react';
import { Link } from 'react-router-dom';


const AllFlowers = () => {
  return (
    <nav className="navbar">
      <div className="liheadbtn">
        <ul>
          <li>
            <Link to="/help">
              <div className="twicearoow">
                <span>All Flowers</span>
                <img src="https://i.imgur.com/I3pPDs5.png" className="imgheart" alt="Arrow Icon" />
              </div>
            </Link>

            {/* Dropdown Menu inside the same <li> */}
            <div className="drop" id="drop-special">
              <div className="drop-grid">
                <div className="category">
                  <h4>Shop</h4>
                  <ul>
                    <li><Link to="#">Shop AllFlowers</Link></li>
                    <li><Link to="#">Shop All Plants</Link></li>
                    <li><Link to="#">Shop All Gifts</Link></li>
                    <div className="category">
                  <h4 style={{paddingTop:"3rem"}}>Fetureed</h4>
                  
                  <ul>
                    <li><Link to="#">Same Day Delivery</Link></li>
                    <li><Link to="#">Best Selliers</Link></li>
                    <li><Link to="#"></Link>Flowers Under $50</li>

                  </ul>
                </div>
                  </ul>
                </div>
                <div className="category">
                  <h4>Collections</h4>
                  <ul>
                    <li><Link to="#">The Valentine's Day Collection</Link></li>
                    <li><Link to="#">Davd Austin Roses</Link></li>
                    <li><Link to="#">PArty Boxes</Link></li>
                    <li><Link to="#">Corporate</Link></li>
                    
                  </ul>
                </div>
                <div className="category">
                  <h4>Flowers Type</h4>
          
                    <li><Link to="#">Anemoones</Link></li>
                    <li><Link to="#">Dried Flowers</Link></li>
                    <li><Link to="#">Hydrangeas</Link></li>
                    <li><Link to="#">Liles</Link></li>
                    <li><Link to="#">Orchids</Link></li>
                    <li><Link to="#">Peonies</Link></li>
                    <li><Link to="#">Ranuculus</Link></li>
                    <li><Link to="#">Roses</Link></li>
                    <li><Link to="#">Sunflowers</Link></li>
                    <li><Link to="#">Succulents</Link></li>
                    <li><Link to="#">Tropical</Link></li>
                    <li><Link to="#">Tlips</Link></li>
                    <li><Link to="#">Unique Stems</Link></li>
                    
                 
                 
                </div>
                <div className="category">
                  <h4>Flowers Type</h4>
                  <ul>
                    <li><Link to="#">Pinkflowers </Link></li>
                    <li><Link to="#">Red Flowers</Link></li>
                    <li><Link to="#">White Flowers</Link></li>
                    <li><Link to="#">Yellow Flowers</Link></li>

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

export default AllFlowers;

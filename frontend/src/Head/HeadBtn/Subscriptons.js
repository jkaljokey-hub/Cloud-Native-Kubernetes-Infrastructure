
import React from 'react';
import { Link } from 'react-router-dom';


const Subscriptons = () => {
  return (
    <nav className="navbar">
      <div className="liheadbtn">
        <ul>
          <li>
            <Link to="/help">
              <div className="twicearoow">
              <li><img src='https://i.imgur.com/fFZiDiB.png' className='imgrealheart' alt="ArrowIcon" /></li>

                <span>Subscriptons</span>
                <img src="https://i.imgur.com/I3pPDs5.png" className="imgheart" alt="ArrowIcon" />
              </div>
            </Link>

            {/* Dropdown Menu inside the same <li> */}
            <div className="drop">
              <div className="drop-grid">
                <div className="category">
                  <h4>Category 1</h4>
                  <ul>
                    <li><Link to="#">Option 1</Link></li>
                    <li><Link to="#">Option 2</Link></li>
                    <li><Link to="#">Option 3</Link></li>
                  </ul>
                </div>
                <div className="category">
                  <h4>Category 2</h4>
                  <ul>
                    <li><Link to="#">Option 4</Link></li>
                    <li><Link to="#">Option 5</Link></li>
                    <li><Link to="#">Option 6</Link></li>
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

export default Subscriptons;

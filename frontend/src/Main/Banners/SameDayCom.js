import React, { useContext } from "react";
import "../Main.css";
import { BannerContext } from "../../Context/ContextMainbanner";
const SameDayCom = () => {
    
 const isMobile = useContext(BannerContext)
  return (
    <div className="Samedaycom">
      <img
        src={
          isMobile
            ?"https://bouqs.com/media/W1siZiIsIjIwMjUvMDEvMjAvMTYvNTkvNTgvNjllZDg5M2UtNjA3NS00MDYyLWFkMWEtMmMyYmI0OWY0M2ZkLzAxMjFfSFBVcGRhdGVfVkRheVNhbGVfU2FtZWRheU1vYmlsZS5qcGciXSxbInAiLCJvcHRpbSJdXQ/0121_HPUpdate_VDaySale_SamedayMobile.jpg?sha=e61d4e7e5f978f8c"
          :"https://bouqs.com/cdn-cgi/image/quality=65,width=1536,format=auto/media/W1siZiIsIjIwMjUvMDEvMzEvMTUvMjAvNTIvNjU4NjBlMzgtOTQ3Ny00ZjMyLWJjMzMtZTEzMjcwOTVkOTI0LzAxMjFfSFBVcGRhdGVfVkRheVNhbGVfU2FtZWRheV9EZXNrdG9wX1IuanBnIl0sWyJwIiwib3B0aW0iXV0/0121_HPUpdate_VDaySale_Sameday_Desktop_R.jpg?sha=b3732c98d3fb3538"    
        }
        
        alt="Sample"
        className="Samedaycom-img"
      />
      <div className="overlay-text-Samedaycom">
        <div>
          <p className="p-overlay-Samedaycom">NYC, LA, CHI + MORE</p>
          <h2>Same-Day Flower Delivery</h2>
          <p className="p-overlay-text-Samedaycom">
            Procrastinate much? No problem. Order same-day flower delivery in select cities
               Pre and —(no one will know).
          </p>
          <button className="button">Order Same Day</button>
        </div>
      </div>
    </div>
  );
};

export default SameDayCom;

import React, { useContext } from "react";
import { BannerContext } from "../../Context/ContextMainbanner";

const Visit = () => {
 const isMobile = useContext(BannerContext)

  return (
    <div className="topbaner" style={{paddingTop:"30px"}}>
      <img
        src={
          isMobile
            ? "https://bouqs.com/media/W1siZiIsIjIwMjUvMDIvMTIvMjEvNDEvMTAvYjNjNTk0ZjAtZDA4OS00ODA0LTg1YjAtN2ZlYWE2NmUxYTI0LzAyMTBfSFBVcGRhdGVfTGFzdENoYW5jZV9TaG9wSVJMX01vYmlsZS5qcGciXSxbInAiLCJvcHRpbSJdXQ/0210_HPUpdate_LastChance_ShopIRL_Mobile.jpg?sha=be9366017dad4d36"
            : "https://bouqs.com/cdn-cgi/image/quality=65,width=1536,format=auto/media/W1siZiIsIjIwMjUvMDIvMTIvMjEvNDAvMDMvNjdmMDM5YzQtZWFhNi00YTIwLWI2NzktZjFmODk5Mjc0YTcxLzAyMTBfSFBVcGRhdGVfTGFzdENoYW5jZV9TaG9wSVJMX1JfMi5qcGciXSxbInAiLCJvcHRpbSJdXQ/0210_HPUpdate_LastChance_ShopIRL_R_2.jpg?sha=e741f6589c315abd"
        }
        alt="Sample"
        className="Samedaycom-img"
      />

      <div className="overlay-text-Samedaycom">
        <p className=" p-overlay-Samedaycom">OPEN IN SF, SD, LA + OC</p>
        <h1 className="largfont">Visit Our Flower Shops</h1>
        <p className=" p-overlay-Samedaycom">
          Shop for Bouqs at select Whole Foods Markets or at our retail location
          in LA
        </p>
        <button className="button" >Shop lRL</button>
      </div>
    </div>
  );
};

export default Visit;

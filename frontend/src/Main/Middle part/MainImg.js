import React from "react";
import "../Main.css";
import './MiddlePart.css'
import { useState, useEffect } from "react";
const MainImg = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 576);
  

  // Check screen width dynamically
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 576);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="image-container">
      <img
        srcset={
          isMobile
            ? "https://bouqs.com/cdn-cgi/image/quality=65,width=960,format=auto/media/W1siZiIsIjIwMjUvMDIvMDcvMjAvMTgvMTcvZTYxMjFjZjYtYTUxZS00MDZmLTgyMTUtNmE4MDQwMGIyZDQ2L0ZvcmJlcy1Mb2dvLURlc2lnbi1QbGFjZW1lbnRfSFAtSEVST19WRGF5X01vYmlsZV9Gb3JiZXNCYWRnZS5qcGciXSxbInAiLCJvcHRpbSJdXQ/Forbes-Logo-Design-Placement_HP-HERO_VDay_Mobile_ForbesBadge.jpg?sha=d36eb78a165ea320 960w"
            : "https://bouqs.com/cdn-cgi/image/quality=65,width=1536,format=auto/media/W1siZiIsIjIwMjUvMDIvMDcvMTgvNDYvMzMvMjkwOWZlODktNWNjNS00YjdmLWJjZDUtN2EwMjZkZDZmZmMwLzAyMTBfTGFzdENoYW5jZV9IUC1IRVJPX1ZEYXlfRGVza3RvcF9Gb3JiZXNCYWRnZSAoMSkuanBnIl0sWyJwIiwib3B0aW0iXV0/0210_LastChance_HP-HERO_VDay_Desktop_ForbesBadge1.jpg?sha=dd4b7323ccbc9f10"
        }
        alt="Sample"
        className="image"
      />
      <div className="overlay-text">
        <div>
          <p className="p-overlay">V-DAY IS COMING!</p>
          <h2>25% Off Roses</h2>
          <p className="p-overlay-text">
            Send your Valentine some love before the clock runs out! Get 25% off
            with code VDAY. ! Treat someone
            specia.
          </p>
          <button className="button">shop now</button>
        </div>
      </div>
    </div>
  );
};

export default MainImg;

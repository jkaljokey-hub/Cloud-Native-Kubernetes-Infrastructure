import React, { useState, useEffect, useRef } from "react";
import "./LargAds.css";
import { Button } from "react-bootstrap";

const LargAds = () => {
   const [Isopen, setIsopen] = useState(false);
   const adref = useRef(null);
 
   useEffect(() => {
     const timeing = setTimeout(() => {
       setIsopen(true);
     }, 15000);
 
     return () => clearTimeout(timeing); // Fix: Using clearTimeout, not clearInterval
   }, []);
 
   useEffect(() => {
     const handleClickOutside = (event) => {
       if (adref.current && !adref.current.contains(event.target)) {
         console.log("iam close outside", Isopen); // Debugging
         setIsopen(false); // Fix: Using setState properly
       }
     };
 
     // Attach event listener when Isopen is true
     if (Isopen) {
       document.addEventListener("mousedown", handleClickOutside);
     }
 
     // Cleanup function: Remove event listener when component unmounts
     return () => {
       document.removeEventListener("mousedown", handleClickOutside);
     };
   }, [Isopen]); // Fix: Add Isopen as a dependency

   useEffect(() => {
    if (Isopen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [Isopen]);


  return (
    <>    {Isopen && <div className="overlay-larg" />}
    <   div className="container-larg-ads">

      {Isopen && (
        <div className="large-ads" ref={adref}>
          <div className="flower-img">
            <img
              alt="asd"
              className="img-boug"
              src="https://assets.bounceexchange.com/assets/uploads/clients/7236/creatives/cec9c0c713ef01958b2fa3241d46a64d.jpg"
            />
          </div>
          <div className="otherSide">
            <div
              className="Xclos"
              onClick={() => {
                setIsopen(false);
              }}
            >
              <img
                src="https://i.imgur.com/XkIQFJd.png"
                alt="asd"
                className="Xclose"
              />
            </div>
            <div className="logo-other-side-div">
              <img
                src="//assets.bounceexchange.com/assets/uploads/clients/7236/creatives/db6466bfb1dd6d2dc21df1eddd43807c.png"
                alt="Logo"
                className="logo-other-side"
              />
            </div>

            <div className="otherSide-child">
              <p className="Instant">INSTANT MOOD BOOSTERS</p>
              <h2 className="Here"> HERE'S 20% OFF</h2>
              <p className="your">your first order of farm-fresh flowers.</p>
              <Button>Get 20% Off</Button>
              <p className="Decline"       onClick={() => {
                setIsopen(false);
              }}>Decline</p>

              <p className="Not">
                *Not combinable with any other offers. One per customer and
                valid only on a customer's first order. Not applicable on
                subscriptions, gift trios, deal of the week, same-day Bouqs,
                vases, DIY party boxes, and wedding flowers. Exclusions apply.
              </p>
            </div>
          </div>
        </div>
      )}</div> 
    </>
  );
};

export default LargAds;

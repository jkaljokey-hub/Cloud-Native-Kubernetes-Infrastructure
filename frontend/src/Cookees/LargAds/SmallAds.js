import React, { useState, useEffect, useRef } from "react";
import "./LargAds.css";
import { Button } from "react-bootstrap";

const SmallAds = () => {
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


  /* stop moving background on scrool*/
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

  return (<> 
   {Isopen && <div className="overlay-larg-samll" />}
    
    <   div className="container-larg-ads-small">
    {Isopen && (
    <div className="small-otherSide" ref={adref}>
      <div className="close-and-img">
      <div
        className="Xclos-small"
        onClick={() => {
          setIsopen(false);
        }}
      >
        <img
          src="https://i.imgur.com/XkIQFJd.png"
          alt="asd"
          className="Xclose-small"
        />
      </div>
      <div className="small-logo-other-side-div">
      <img
              alt="asd"
              className="small-img-boug"
              src="//assets.bounceexchange.com/assets/uploads/clients/7236/creatives/e990b89f250d90b95fa249462253195b.jpg"            />
      </div></div>

      <div className="otherSide-child">
        <p className="Instant-small">INSTANT MOOD BOOSTERS</p>
        <h2 className="Here-small"> HERE'S 20% OFF</h2>
        <p className="your-small">your first order of farm-fresh flowers.</p>
       <div className="btn-small"> <Button>Get 20% Off</Button></div>
        <p
          className="Decline-small"
          onClick={() => {
            setIsopen(false);
          }}
        >
          Decline
        </p>

        <p className="Not-small">
          *Not combinable with any other offers. One per customer and valid only
          on a customer's first order. Not applicable on subscriptions, gift
          trios, deal of the week, same-day Bouqs, vases, DIY party boxes, and
          wedding flowers. Exclusions apply.
        </p>
      </div>
    </div>)}</div>
  </> 
  );
};

export default SmallAds;

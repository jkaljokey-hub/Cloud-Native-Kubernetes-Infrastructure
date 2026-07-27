
    import React, { useState, useEffect } from "react";

import LargAds from "./LargAds";
import SmallAds from "./SmallAds";

    
    const ContainerAds = () => {
      const [screenSize, setScreenSize] = useState(window.innerWidth);
    
      useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);
    
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);
    
      return (
        <>
          {screenSize < 600 &&   <SmallAds/>}
          {screenSize >= 600 && screenSize < 1024 && <LargAds/>}
          {screenSize >= 1024 && <LargAds />}
        </>
      );
    };
    
    export default ContainerAds;
    
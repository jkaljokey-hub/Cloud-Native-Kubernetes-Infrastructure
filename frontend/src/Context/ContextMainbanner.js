import React, {  createContext ,useEffect, useState} from 'react'


export const BannerContext=createContext()

const ContextMainbanner = ({children}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 576);
    setIsMobile(window.innerWidth <= 576); // Set initial value correctly
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <BannerContext.Provider value={isMobile}>

      {children}

      </BannerContext.Provider>


    </div>
  )
}

export default ContextMainbanner
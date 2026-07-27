import React from "react";
import HeadAds from "./Ads/HeadAds";
import "./Headcss.css";
import Manhead from "./MainHead/Manhead";
import HeadBtn from "./HeadBtn/HeadBtn";
import MxHBtnHNv from "./SideHead/MxHBtnHNv";

const Head = () => {


  return (
    <div className="rootHead" >
      <div className="parentchild">
      <HeadAds />
      </div>
      <Manhead/>
      <HeadBtn/>
      <MxHBtnHNv/>
      </div>
      
  );
};

export default Head;

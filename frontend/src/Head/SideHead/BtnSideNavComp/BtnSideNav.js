import React from "react";
import AllFlowerBtn from './AllFlowerBtn'
import NextdayBtn from "./NextdayBtn";
import OccaionsBtn from "./OccaionsBtn";
import ValntineBtn from "./ValntineBtn";
import SubscriotionBtn from "./SubscriotionBtn";
import WeddingBtn from "./WeddingBtn";
import Sameday from "./SamedayBtn";
import Peonies from "./PeoniesBtn";
import AccountBtn from "./AccountBtn";
import HelpBtn from "./HelpBtn";
import TrackOrderBtn from "./TrackOrderBtn";
import StoreLocationBtn from "./StoreLocationBtn";
const BtnSideNav = () => {//iif the close on button dost work in moble revew this page special prp

  return (
    
    <>
    <AllFlowerBtn/>
    <NextdayBtn/>
    <OccaionsBtn/>
    <ValntineBtn/>
    <Sameday/>
    <Peonies/>
    <SubscriotionBtn/>
    <WeddingBtn/>
 <hr/>
   <AccountBtn/>
   <HelpBtn/>
   <TrackOrderBtn/>
   <StoreLocationBtn/>
    
    </>
  );
};

export default BtnSideNav;

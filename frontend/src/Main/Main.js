import React from 'react'
import "./Main.css";
import MainImg from './Middle part/MainImg';
import Banner from './Banners/Banner';
import Cards from './Card/Cards';
import TextAreaCard from './TextAreaAndCard/TextAreaCard';
import ApiInfo from './ApiInfo/ApiInfo';


const Main = () => {
  return (
    <div className='main'>
       
    <MainImg/>
    <Cards/>
    <Banner/>
    <TextAreaCard/>
    <ApiInfo/>

    </div>
  )
}

export default Main

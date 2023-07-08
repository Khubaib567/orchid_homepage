import React from "react";
import Carousel from "../components/Carousel";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Subscribe from "../components/Subscribe";


export default function Home(props) {
  return (
    // <Typography>
    // <Carousel />
    <>
     {/* <div className="flex flex-col h-screen"> */}
        <Carousel
          title={props.config.title}
          pages={props.config.pages}
          themes={props.config.themes}
        />
    <Categories />
    <br />
    <Subscribe />

    <Footer />


      {/* </div> */}
    </>
   
      
    // </Typography>
  );
}

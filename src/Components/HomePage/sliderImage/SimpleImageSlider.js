import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import "./slider.css";

function SimpleImageSliders() {
  const sliderImages = [
    {
      url: "https://m.media-amazon.com/images/I/71Fn14fLNnL._SX3000_.jpg",
    },
    {
      url: "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_jpg",
    },
    {
      url: "https://m.media-amazon.com/images/I/61rvqubrGCL._SX3000_.jpg",
    },
  ];
  return (
    <div className="homeImage">
      <SimpleImageSlider
        width="100%"
        height={550}
        images={sliderImages}
        showNavs={true}
      />
    </div>
  );
}
export default SimpleImageSliders;

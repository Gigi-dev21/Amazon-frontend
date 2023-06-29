import React from "react";
import "./home.css";
import Products from "./Products";
// import ImageSlider from "react-simple-image-slider";
import SimpleImageSlider from "./sliderImage/SimpleImageSlider";
function Home() {
  return (
    <div>
      <div className="homeContainer ">
        <SimpleImageSlider className="homeImage" />
      </div>

      <div className="homeRow ">
        <Products
          id="1"
          title="NANOOER Fathers Day Birthday Gifts Dad Gifts from Daughter Gifts for Dad Cross Bracelets for Men Halloween Thanksgiving Christmas Gifts for Men Dad Father-in-Law Step-Dad"
          price={45.99}
          rating={1}
          image="https://images-na.ssl-images-amazon.com/images/I/81Jy3fvaL6L._AC_UL675_SR675,480_.jpg"
        />
        <Products
          id="2"
          title="harpfeas 30 PCS Guitar Picks, 3 Different Thickness Abstract Art Colorful Celluloid Guitar Pick Plectrums For Bass, Electric, Acoustic Guitars Includes 0.46mm, 0.71mm, 0.96mm(Color Random)"
          price={30.99}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/71HniyGy9+L._AC_UL900_SR900,600_.jpg"
        />
      </div>
      <div className="homeRow ">
        <Products
          id="4"
          title="Car Handheld Vacuum 10000PA Suction, Wireless Vacuum Cleaner with Low Noise,Car Vacuum Cordless Rechargeable,Portable Compressed Air Duster for Car and Home…"
          price={29.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61fhpdasBQL._AC_UL675_SR675,480_.jpg"
        />
        <Products
          id="5"
          title="Dog Grooming Brush and Metal Comb, Undercoat Rake for Dogs Grooming Supplies Dematting Deshedding Brush for Shedding, Cat Brush Deshedder Brush Dogs Shedding Tool for Long matted Haired Pets, Blue"
          price={46.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71E5LtSAb1L._AC_UL675_SR675,480_.jpg"
        />
        <Products
          id="6"
          title="Women Y2k Bodycon Long Dress Spaghetti Strap Low Cut Dress Sexy Backless High Split Maxi Dress Clubwear"
          price={26.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51dnQwQtkoL._AC_UL675_SR675,480_.jpg"
        />
      </div>
      <div className="homeRow ">
        <Products
          id="3"
          title="Introducing Amazon Fire Max 11 tablet, built for entertainment, vibrant 11” display, octa-core processor, 4 GB RAM, lightweight sleek metal design, 64 GB, Gray"
          price={296.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51gj5oQXbnL._AC_UL675_SR675,480_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;

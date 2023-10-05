import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import { useNavigate } from "react-router-dom";
import "../Styles/sliding.css";

const images = [
    { url: "https://i.ibb.co/hX10FyL/top-view-table-full-delicious-food-assortment-23-2149141340.jpg"},
    { url: "https://i.ibb.co/nL9FqyL/man-woman-date-restaurant-meeting-love-couple-122818-47.jpg" },
    { url: "https://i.ibb.co/QJwDMfR/factors-which-influence-the-consumer-to-use-an-online-food-delivery-system.jpg"},
    
  ];
const SlidingImg=()=>{
    const navigate = useNavigate()
      const handleHome=(e)=>{
        e.preventDefault()
        navigate("/login")
      }
    return(
        <div>
            <div>
      <SimpleImageSlider
        width={1350}
        height={650}
        autoPlay={true}
        images={images}
        showBullets={false}
        showNavs={true}
      />
      <div className="button-slidder">
      <button className="button-sliding" onClick={(e)=>handleHome(e)}>login</button>
      </div>
      
    </div>
        </div>
    )
}
export default SlidingImg;
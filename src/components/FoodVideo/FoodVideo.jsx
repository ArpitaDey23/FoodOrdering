import React from "react";
import "../../Styles/FoodVideo.css";

const FoodVideo =()=>{

    return(
        
        <div className="video-container">
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/dA0VGEbbw4g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      
    )
}
export default FoodVideo;
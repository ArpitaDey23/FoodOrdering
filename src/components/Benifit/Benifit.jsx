import React from "react";
import "../../Styles/Benifit.css"


const Benifit =()=>{

    return(
        <>
        <div className="benifit-container">
            <h1>why choose us</h1>
            <div className="benifit-content" style={{height:"78%", width:"100%"}}>
                
                <div className="benifit-img1">
                <img src="https://i.ibb.co/7n7TZDN/way-concept-illustration-114360-1191.jpg"
                style={{height:"100%" ,width:"100%"}}
                />
                </div>
                <div className="benifit-img2" >
                <img src="https://i.ibb.co/nCWWPXQ/one-hundred-percent-100-fresh-label-white-background-vector-illustration-618588-253.jpg"
                style={{height:"100%" ,width:"100%"}} />
                </div>
                <div className="benifit-img3">
                <img src="https://i.ibb.co/7pKmrX2/1000-F-335134626-fm-V3-Xa-Aqw-RCg-Pku-BBQw-JLka-FRs-MXChhi.jpg"
                style={{height:"100%" ,width:"100%"}} />
                </div>
            </div>
        </div>

        
        </>
    )
}
export default Benifit;
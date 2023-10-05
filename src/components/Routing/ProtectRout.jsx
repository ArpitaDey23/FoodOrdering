import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectRoute =(props)=>{
      const  navigate = useNavigate();
      
    useEffect=(()=>{
        const token = localStorage.getItem('login');
        if(!token){
            navigate("/login")
        }
    },[])
    return(
        <>
            <props.component/>
        </>
    )
}
export default ProtectRoute;
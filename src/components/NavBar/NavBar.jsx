import React from 'react';
import "./NavBar.css"
import { useNavigate } from 'react-router-dom';

const NavBar = ({isLogin, setIsLogin}) => {

  const navigate = useNavigate();
  
  const handleHome=()=>{
    navigate("/home")
  }
  const handleCart=()=>{
    navigate("/cart")
  }
  const handleAbout=()=>{
    navigate("/about")
  }
  const handleReview=()=>{
    navigate("/review")
  }
  const handleContact=()=>{
    navigate("/contact")
  }
  const handleLogin=()=>{
   
    if(isLogin){
      setIsLogin(false)
      navigate("/")
    }
    else{
      navigate("/login")
    }
    
  }
  const handleLogo=()=>{
    navigate("/")
  }
  
  return(

    <div className='navbar'>
<div className='resturent-name' style={{width: "12%", height: "100%", marginLeft:"10px"}}> 
<img 
    style={{width: "100%", height: "100%",}}
    src="https://i.ibb.co/4jb6S3D/pngtree-food-logo-png-image-5687717.png"
    onClick={handleLogo}
/>
     <p style={{paddingTop:"7px"}}>FoodNess</p>
</div>
<div className='nav-item'>
    <h5 style={{marginRight:"20px", color:'crimson', cursor:"pointer"}}onClick={handleHome}>Home</h5> 
    <h5 style={{marginRight:"50px", color:'crimson', cursor:"pointer"}}onClick={handleCart}>Cart</h5>
    <h5 style={{marginRight:"50px", color:'crimson', cursor:"pointer"}}onClick={handleAbout}>AboutUs</h5>
    <h5 style={{marginRight:"50px", color:'crimson', cursor:"pointer"}}onClick={handleContact}>Contact-Us</h5>
    <h5 style={{marginRight:"50px", color:'crimson', cursor:"pointer"}}onClick={handleReview}>Client Review</h5>
    <h5 style={{marginRight:"20px", color:"crimson", cursor:"pointer"}}onClick={()=>handleLogin()}>{isLogin?"Logout":"Login"}</h5>
</div>     
    </div>
  ) 
};

export default NavBar;
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import SlidingImg from "./components/SlidingImg";
import Home from "./Pages/Home";
import LogIn from "./Pages/LogIn";
import Cart from "./Pages/Cart";
import { useEffect, useState } from "react";
import Footer from "./footersection/Footer";
import AboutUs from "./Pages/AboutUs";
import Review from "./Pages/Review";
import ContactUs from "./Pages/ContactUs";


function App() {
  const [isLogin,setIsLogin]= useState(false)
  const[menuitems,setMenuitems] = useState("breakfast");
  const[cart,setCart]= useState(false);
  const[selectedProduct, setSelectedProduct] = useState();
   useEffect(()=>{
    if(selectedProduct){
      localStorage.setItem("isCart",true)
    }else{
      localStorage.setItem("isCart",false)
    }
   },[selectedProduct])
  console.log(selectedProduct)

 

  return (
    <div>
      
      <NavBar  isLogin={isLogin} setIsLogin={setIsLogin} Cart={cart} setCart={setCart}>
  
      </NavBar>
      
      <Routes>
        <Route path="/" element={<SlidingImg/>}/>
        <Route path="/home" element={<Home setMenuitems={setMenuitems} menuitems={menuitems} setSelectedProduct={setSelectedProduct}/>} />
        <Route path="/cart" element={<Cart setCart={setCart} selectedProduct={selectedProduct}></Cart>} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/review" element={<Review/>}/>
        <Route path="/login" element={<LogIn setIsLogin={setIsLogin}></LogIn>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

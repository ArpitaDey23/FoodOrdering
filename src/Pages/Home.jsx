import React from "react";
import TopBanner from "../components/TopBanner/TopBanner";
import Benifit from "../components/Benifit/Benifit";
import FoodVideo from "../components/FoodVideo/FoodVideo";
import Category from "../components/Menu/Category";
import Menu from "../components/Menu/Menu";


const Home=({setMenuitems,menuitems,setSelectedProduct})=>{
    return(
        <>
        <TopBanner />
        <Benifit />
        <FoodVideo />
        <Category setMenuitems={setMenuitems}/>
        <Menu menuitems={menuitems} setSelectedProduct={setSelectedProduct} />
        </>
    )
}
export default Home ;
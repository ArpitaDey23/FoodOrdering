import React from 'react';
import BreakFast from './BreakFast';
import Lunch from './Lunch';
import Dinner from './Dinner';

const Menu = ({menuitems,setSelectedProduct}) => {

    return (
        <div>
           {menuitems==="breakfast"?<BreakFast setSelectedProduct={setSelectedProduct} />:menuitems==="lunch"?<Lunch setSelectedProduct={setSelectedProduct} />:menuitems==="dinner"?<Dinner setSelectedProduct={setSelectedProduct}/>:null}
        </div>
    );
};

export default Menu;
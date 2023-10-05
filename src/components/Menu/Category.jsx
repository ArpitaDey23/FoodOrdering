import React from 'react';
import "../../Styles/Category.css"

const Category = ({setMenuitems}) => {
    return (
        <div className="button-parent">
        <div className='button-container'>
            <div>
                <button className='button-desing'onClick={()=>{
                    setMenuitems("breakfast")
                }}>Breakfast</button>
            </div>
            <div>
                <button className='button-desing'onClick={()=>{
                    setMenuitems("lunch")
                }} >Lunch</button>
            </div>
            <div>
                <button className='button-desing'onClick={()=>{
                    setMenuitems("dinner")
                }} >Dinner</button>
            </div>
        </div>
        </div>
    );
};

export default Category;
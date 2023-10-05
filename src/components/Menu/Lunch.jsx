import React from 'react';
import { useNavigate } from 'react-router-dom';


const Lunch = ({setSelectedProduct}) => {
    const navigate = useNavigate()
    const handleCart=(product)=>{
        navigate("/cart")
        setSelectedProduct(product)
    }
    return (
        <div>
           <div>
            <div className='breakfastimg-container'>
            <div className='breakfastimg-containt'>
            <div className="breakfast-img">
           <img src= "https://i.ibb.co/jLz6dhz/q6zhec9iilrnyxwpcfoa.jpg" alt="" 
           style={{height:"45%",width:"100%"}}
           />
           
            <div className='item-detail' style={{height:"50%"}}>
            <p>Name : Briyani</p>
            <p>Serves : 2 person</p>
            <p>Price : $50</p>
            <button className='button-desing' style={{backgroundColor:"brown",color:"white"}} onClick={()=>{
                const product = {
                    Name :" Briyani",
                    price : 50,
                    image : "https://i.ibb.co/jLz6dhz/q6zhec9iilrnyxwpcfoa.jpg",
                }
            handleCart(product)}}>Add to cart</button>
            </div>
            </div>
            <div className="breakfast-img">
                <img src="https://i.ibb.co/jgNDCrW/1662493894-new-project-14.jpg" alt=""
                 style={{height:"45%",width:"100%"}}
                />
                 <div className='item-detail' style={{height:"50%"}}>
            <p>Name : Sizzler</p> 
            <p>Serves : 2 person</p>
            <p>Price : $95</p>
            <button className='button-desing' style={{backgroundColor:"brown",color:"white"}} onClick={()=>{
                const product = {
                    Name : "Sizzler",
                    price : 95,
                    image : "https://i.ibb.co/jgNDCrW/1662493894-new-project-14.jpg",
                }
                handleCart(product)}}>Add to cart</button>
            </div>
            </div>
            <div className="breakfast-img">
                <img src="https://i.ibb.co/Sw0qY7L/xa6uclkdtckgvqnkdjbe.jpg" alt=""
                 style={{height:"45%",width:"100%"}}
                />
                 <div className='item-detail' style={{height:"50%"}}>
            <p>Name : Mix Veg</p>
            <p>Serves : 1 person</p>
            <p>Price : $55</p>
            <button className='button-desing' style={{backgroundColor:"brown",color:"white"}} onClick={()=>{
                 const product = {
                    Name : "Mix veg",
                    price : 55,
                    image : "https://i.ibb.co/Sw0qY7L/xa6uclkdtckgvqnkdjbe.jpg",
                }
                handleCart(product)}}>Add to cart</button>
                
            </div>
            </div>
            </div>
            <div className='breakfastimg-containt'>
            <div className="breakfast-img">
                <img src=" https://i.ibb.co/nQvybjF/l367licjpryewkvetpgs.jpg" alt="" 
                 style={{height:"45%",width:"100%"}}
                />
                 <div className='item-detail' style={{height:"50%"}}>
            <p>Name : NonVeg Combo</p>
            <p>Serves : 1 person</p>
            <p>Price : $45</p>
            <button className='button-desing' style={{backgroundColor:"brown",color:"white"}} onClick={(e)=>{
                 const product = {
                    Name : "NonVeg Combo",
                    price : 45,
                    image : "https://i.ibb.co/nQvybjF/l367licjpryewkvetpgs.jpg",
                }
                handleCart(product)}}>Add to cart</button>
            </div>
            </div>
            <div className="breakfast-img">
                <img src="https://i.ibb.co/BTjK6Z5/kcn6k0fck8cnz6ud7jg2.jpg" alt=""
                 style={{height:"45%",width:"100%"}}
                />
                 <div className='item-detail' style={{height:"50%"}}>
            <p>Name :Chicken Platter</p>
            <p>Serves : 2 person</p>
            <p>Price : $85</p>
            <button className='button-desing' style={{backgroundColor:"brown",color:"white"}} onClick={()=>{
                 const product = {
                    Name : "Chicken Kebab Platter",
                    price : 85,
                    image : "https://i.ibb.co/BTjK6Z5/kcn6k0fck8cnz6ud7jg2.jpg",
                }
                handleCart(product)}}>Add to cart</button>
            </div>
            </div>
            <div className="breakfast-img">
                <img src="https://i.ibb.co/mTQ9v26/h0bswpa8bniqcaupsclw.jpg" alt="" 
                 style={{height:"45%",width:"100%"}}
                />
                 <div className='item-detail' style={{height:"50%"}}>
            <p>Name : Chicken Pepper Fry</p>
            <p>Serves : 2 person</p>
            <p>Price : $65</p>
            <button className='button-desing' style={{backgroundColor:"brown",color:"white"}} onClick={()=>{
                 const product = {
                    Name : "Pepper Fry",
                    price : 65,
                    image : "https://i.ibb.co/mTQ9v26/h0bswpa8bniqcaupsclw.jpg",
                }
                handleCart(product)}}>Add to cart</button>
            </div>
            </div>
            </div>
           </div>
           </div>
        </div>
    );
};

export default Lunch;
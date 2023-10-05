import React from 'react';
import"../../Styles/breakfast.css"
import { useNavigate } from 'react-router-dom';

const BreakFast = ({setSelectedProduct}) => {
        
        const navigate = useNavigate()
        const handleCart=(product)=>{
             navigate("/cart")
            setSelectedProduct(product)
        }
        
    return (
      
            <div className='breakfastimg-container'>
            <div className='breakfastimg-containt'>
            <div className="breakfast-img">
           <img src= "https://i.ibb.co/4Mtcmfm/36ff50e388b6125f8022f68008e17d43.jpg" alt=''
           style={{height:"45%",width:"100%"}}
            />
            <div className='item-detail' style={{height:"50%"}}>
            <p>Name : Sandwich</p>
            <p>Serves : 2 person</p>
            <p>Price : 30$</p>
            <button className='button-desing' style={{backgroundColor:"brown",color:"white"}} onClick={()=>{
                const product = {
                    name : "Sandwich",
                    price : 30,
                    image : "https://i.ibb.co/4Mtcmfm/36ff50e388b6125f8022f68008e17d43.jpg",
                }
                handleCart(product)
                
                }}>Add to cart</button>
            </div>
            </div>
            <div className="breakfast-img">
                <img src="https://i.ibb.co/Z1yMv3H/yioukgsaap9tiwj2sjpo.jpg" alt=""
                 style={{height:"45%",width:"100%"}}
                />
                 <div className='item-detail' style={{height:"50%"}}>
                 <p>Name : Pasta</p>
                 <p>Serves : 3 person</p>
                 <p>Serves : 60$</p>
                 <button className='button-desing' style={{backgroundColor:"brown",color:"white"}} onClick={()=>{
                const product = {
                    name : "pasta",
                    price : 60,
                    image : "https://i.ibb.co/Z1yMv3H/yioukgsaap9tiwj2sjpo.jpg",
                }
                handleCart(product)
                
                }}>Add to cart</button>
            </div>
            </div>
            <div className="breakfast-img">
                <img src="https://i.ibb.co/LvQHP7y/ec25c39746483f68ec229eeabec42b36.jpg" alt=""
                 style={{height:"45%",width:"100%"}}
                />
                 <div className='item-detail' style={{height:"50%"}}>
                 <p>Name: Chocolate Brownie</p>
            <p>Serves : 2 person</p>
            <p>Serves : 48$</p>
            <button className='button-desing' style={{backgroundColor:"brown",color:"white"}} onClick={()=>{
                const product = {
                    name : "Chocolate Brownie",
                    price : 48,
                    image : "https://i.ibb.co/LvQHP7y/ec25c39746483f68ec229eeabec42b36.jpg",
                }
                handleCart(product)
                
                }}>Add to cart</button>
            </div>
            </div>
            </div>
            <div className='breakfastimg-containt2'>
            <div className="breakfast-img">
                <img src=  "https://i.ibb.co/M71Sj5d/y8tckx0vdoqdo0xsqbf2.jpg" alt="" 
                 style={{height:"45%",width:"100%"}}
                />
                 <div className='item-detail' style={{height:"50%"}}>
                 <p>Name : Cheesecake</p>
            <p>Serves : 2 person</p>
            <p>Serves : 50$</p>
            <button className='button-desing' style={{backgroundColor:"brown",color:"white"}} onClick={()=>{
                const product = {
                    name : "Cheesecake",
                    price : 50,
                    image : "https://i.ibb.co/M71Sj5d/y8tckx0vdoqdo0xsqbf2.jpg",
                }
                handleCart(product)
                
                }}>Add to cart</button>
            </div>
            </div>
            <div className="breakfast-img">
                <img src="https://i.ibb.co/TqBSNTz/jopamt3rqu9wayib3esd.jpg" alt=""
                 style={{height:"45%",width:"100%"}}
                />
                 <div className='item-detail' style={{height:"50%"}}>
                 <p>Name : Fruit Salad</p>
            <p>Serves : 1 person</p>
            <p>Serves : 30$</p>
            <button className='button-desing' style={{backgroundColor:"brown",color:"white"}} onClick={()=>{
                const product = {
                    name : "Fruit Salad",
                    price : 30,
                    image : "https://i.ibb.co/TqBSNTz/jopamt3rqu9wayib3esd.jpg",
                }
                handleCart(product)
                
                }}>Add to cart</button>
            </div>
            </div>
            <div className="breakfast-img">
                <img src="https://i.ibb.co/yBnzw3S/ymsey934wglypdaoklxi.jpg" alt="" 
                 style={{height:"45%",width:"100%"}}
                />
                 <div className='item-detail' style={{height:"50%"}}>
                 <p>Name : Smiley</p>
            <p>Serves :  1 person</p>
            <p>Serves : 70$</p>
            <button className='button-desing' style={{backgroundColor:"brown",color:"white"}} onClick={()=>{
                const product = {
                    name : "Smiley",
                    price : 70,
                    image : "https://i.ibb.co/yBnzw3S/ymsey934wglypdaoklxi.jpg",
                }
                handleCart(product)
                
                }}>Add to cart</button>
            </div>
            </div>
            </div>
           </div>
         
           
       
    );
};

export default BreakFast;
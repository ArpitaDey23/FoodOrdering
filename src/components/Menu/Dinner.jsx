import React from 'react';
import "../../Styles/dinner.css";
import { useNavigate } from 'react-router-dom';

const Dinner = ({setSelectedProduct}) => {
    
    const navigate = useNavigate()
    const handleCart=(product)=>{
        navigate("/cart")
        setSelectedProduct(product)
    }
    return (
       
            <div className="dinnerimg-container ">
                <div className="dinnerimg-contain">
                    <div className="dinner-img">
                        <img src="https://i.ibb.co/HtYB9bt/zk4gamsbjc9hvx4yj1co.jpg" alt="" 
                        style={{height:"45%", width:"100%"}}
                        />
                        <div className='item-detail' style={{height:"50%"}}>
            <p>Name :Crispy Chicken</p>
            <p>Serves : 1 person</p>
            <p>Price : $45</p>
            <button className='button-desing' style={{backgroundColor:"brown",color:"white"}} onClick={(e)=>{
                 const product ={
                    name:"Crispy Chicken",
                    price: 45,
                    image:"https://i.ibb.co/HtYB9bt/zk4gamsbjc9hvx4yj1co.jpg",
                }
                handleCart(product)}}>Add to cart</button>
            </div>
            </div>
                    <div className="dinner-img">
                         <img src="https://i.ibb.co/2jBp6sS/wzybnil9wcncx7cwhftd.jpg" alt="" 
                        style={{height:"45%", width:"100%"}}
                        />
                    <div className='item-detail' style={{height:"50%"}}>
                    <p>Name : Mixed Hakka Noodles</p>
                    <p>Serves : 3 person</p>
                    <p>Price : $55</p>
                    <button className='button-desing' style={{backgroundColor:"brown", color:"white"}} onClick={(e)=>{
                        const product ={
                            name:"Mixed Hakka Noodles",
                            price: 55,
                            image:"https://i.ibb.co/2jBp6sS/wzybnil9wcncx7cwhftd.jpg",
                        }
                        handleCart(product)}}>Add to cart</button>
             </div>
             </div>
                    <div className="dinner-img">
                         <img src="https://i.ibb.co/xHZHW5N/cdqw8mcfxbsz3jzqicjs.jpg" alt="" 
                        style={{height:"45%", width:"100%"}}
                        />
                        <div className='item-detail' style={{height:"50%"}}>
            <p>Name : Schezwan Rice</p>
            <p>Serves : 2 person</p>
            <p>Price : $85</p>
            <button className='button-desing' style={{backgroundColor:"brown" ,color:"white"}} onClick={()=>{
                 const product ={
                    name:"Schezwan Rice",
                    price: 85,
                    image:"https://i.ibb.co/xHZHW5N/cdqw8mcfxbsz3jzqicjs.jpg",
                }
                handleCart(product)}}>Add to cart</button>
            </div>
                        </div>
                    </div>

                    <div className='dinnerimg-contain1'>
                    <div className="dinner-img">
                    <img src="https://i.ibb.co/1zVyfrD/a4b4bf1c94b005b6abe25c3cffca3f68.jpg" alt="" 
                        style={{height:"45%", width:"100%"}}
                        />
                        <div className='item-detail' style={{height:"50%"}}>
            <p>Name : Chicken Tandoori</p>
            <p>Serves : 2 person</p>
            <p>Price : $75</p>
            <button className='button-desing' style={{backgroundColor:"brown",color:"white"}} onClick={()=>{
                 const product ={
                    name:" Chicken Tandoori",
                    price: 75,
                    image:"https://i.ibb.co/1zVyfrD/a4b4bf1c94b005b6abe25c3cffca3f68.jpg",
                }
                handleCart(product)}}>Add to cart</button>
            </div>
                        </div>
                    <div className="dinner-img">
                         <img src="https://i.ibb.co/cT5KCPD/jxiyystmgxr9v4dqkxvh.jpg" alt="" 
                        style={{height:"45%", width:"100%"}}
                        />
                         <div className='item-detail' style={{height:"50%"}}>
            <p>Name : Yummy Pizza</p>
            <p>Serves : 2 person</p>
            <p>Price : $65</p>
            <button className='button-desing' style={{backgroundColor:"brown",color:"white"}} onClick={()=>{
                 const product ={
                    name:"Yummy Pizza",
                    price: 65,
                    image:"https://i.ibb.co/cT5KCPD/jxiyystmgxr9v4dqkxvh.jpg",
                }
                handleCart(product)}}>Add to cart</button>
            </div>
                        </div>
                    <div className="dinner-img">
                         <img src="https://i.ibb.co/P4zTmVD/c0c441d4e736ba10c128010431e142ba.jpg" alt="" 
                        style={{height:"45%", width:"100%"}}
                        />
                        <div className='item-detail' style={{height:"50%"}}>
            <p>Name : Coriander Soup</p>
            <p>Serves : 2 person</p>
            <p>Price : $75</p>
            <button className='button-desing' style={{backgroundColor:"brown",color:"white"}} onClick={(e)=>{
                 const product ={
                    name:"Coriander Soup",
                    price: 75,
                    image:"https://i.ibb.co/P4zTmVD/c0c441d4e736ba10c128010431e142ba.jpg",
                }
                handleCart(product)}}>Add to cart</button>
            </div>
                    </div>
                    </div>
                </div>
    );
};

export default Dinner;
import React,{useState} from "react";
import "../Styles/cart.css";
import Swal from 'sweetalert2';
import { Navigate, useNavigate } from "react-router-dom";

const Cart=({selectedProduct})=>{
     const [quantity,setQuantity] = useState(1);
     const navigate = useNavigate();
     const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        
      });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };
      console.log(formData)
      const handleDelivery=()=>{
        Swal.fire({
            title: 'YAY!',
            text: "Your food is on the way",
            icon: 'success',
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'ok',
          }).then((result) => {
            if (result.isConfirmed) {
              navigate("/home")
            }
          })
      }
    //   console.log(a)
    //   let a = 30
    //   console.log(a)
    return(
        <div className="cart-container">
            <div className="form-container">
                
            <form>
                <p className="cart-hello">hello</p>
                <br/>
                <h2>Register for our great Service</h2>
                <br/>
      <div>
        <label htmlFor="nameInput">Name: </label>
        <input
          type="text"
          id="nameInput"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
     
        <label htmlFor="emailInput">Email: </label>
        <input
          type="email"
          id="emailInput"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <div>
        <label htmlFor="addressInput">Address: </label>
        <input
          type="text"
          id="addressInput"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </div>
        </form>
      </div>
     
      <div>
                </div>
        <div className="cart-contain">
        <button className="shipping-button">Free Delivery</button>
        <h2>{selectedProduct?.name}</h2>
        <br/>
        <h3>$ {selectedProduct?.price*quantity+30 ||""}</h3>
        <img src={ selectedProduct?.image} width="50%" alt="product"/>
        <h1> $ {selectedProduct?.price *quantity ||""}</h1>
       <div> 
        <label>
            Quantity
        </label>
        <input type="number" min={1} max={30}value={quantity} onChange={(e)=>setQuantity(e.target.value)}/>
        </div>
        <br/>
        {formData?.name?.length>0 && formData?.address?.length>0 && formData?.email?.length>0?(<button className="cart-button" onClick={()=>handleDelivery()}>Delivery</button>):null}
       
        </div>
        </div>
    )
}
export default Cart ;
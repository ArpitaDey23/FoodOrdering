import React from "react";
import "../Styles/Login.css";
import { useNavigate } from "react-router-dom";
import {useFormik} from "formik";
import * as Yup from 'yup';


const LogIn=({setIsLogin})=>{
    const formikobj = useFormik({
        initialValues:{
            firstname:" ",
            lastname:" ",
            email:" ",
        },
    
           validationSchema : Yup.object({
            firstname:Yup.string()
            .required("Required")
            .min(2,"*minimum 2 character length*")
            .max(10,"*minimum 10 character length*"),
            lastname:Yup.string()
            .required("Required")
            .min(2,"*minimum 2 character length*")
            .max(10,"*minimum 10 character length*"),
            email:Yup.string()
            .required("Required")
            .min(2,"*minimum 5 character length*")
            .max(10,"*minimum 10 character length*")
            .matches(/[0-9]/,"one number")
            .matches(/[^\w]/,"one special character")
            
    }),
    onSubmit:(values)=>{
        console.log(values);
    }
})
    const navigate = useNavigate()
    
     formikobj.handleLogin =(e)=>{
        e.preventDefault()
        setIsLogin(true)
        navigate("/home")
    }
    // const validate =(values)=>{
    //     const errors = {};
    //     if(!values.firstnamename){
            
    //     }
    // }
    // const formik = useFormik({
    //     initialValues:{
    //         firstname:'',
    //         lastname:'',
    //         email:'',
    //     },
    //     validate,
    //     onSubmit:(values)=>{
    //         console.log(values);
    //     }
    // })
    
    return(
        <div className="login-container">
        <div className="login-content" style={{height:"100%" , width:"100%" }}>
        <div className="login-pic">
            {/* first div */}
        <div  className="img-1">
        <img src="https://i.ibb.co/Yftkvjg/photo-1623062553275-39028026d7be-ixlib-rb-4-0.jpg" style={{height:"100%", width:"100%"}} />
          </div>
          {/* 2nd div */}
          <div className="img-2">
            <div className="img-2-content">
                <img src="https://i.ibb.co/Tk3W96R/photo-1504674900247-0877df9cc836-ixlib-rb-4-0.jpg" style={ {height:"100%", width:"100%"} }/>
            </div>
            <div className="img-2-content">
            <img src="https://i.ibb.co/7QYFz9Q/photo-1546069901-ba9599a7e63c-ixlib-rb-4-0.jpg" style={ {height:"100%", width:"100%"} }/>

            </div>
            <div className="img-2-content">
            <img src="https://i.ibb.co/CnpbddY/photo-1475090169767-40ed8d18f67d-ixlib-rb-4-0.jpg" style={ {height:"100%", width:"100%"} }/>

            </div>
          </div>
          {/* 3rd div */}
          <div className="img-3">
          <img src="https://i.ibb.co/C5BcFLx/photo-1497034825429-c343d7c6a68f-ixlib-rb-4-0.jpg" style={{height:"100%", width:"100%"}} />

          </div>
            </div>      
            <div className="login-form">
                <div className="form">
                <form onSubmit={formikobj.handleSubmit}>
                    <h1>Sign in</h1>
                <label for="firstname">First name: </label>
                <br/>
               <input type="text" name="firstname"  required className="login-input" value={formikobj.values.firstname} onChange={formikobj.handleChange} />
               {formikobj.errors.firstname && <em>{formikobj.errors.firstname}</em>}
                <br />
               <label for="lastname">Last name: </label>
               <br/>
               <input type="text" name="lastname"  required className="login-input" value={formikobj.values.lastname}onChange={formikobj.handleChange} />
               {formikobj.errors.lastname && <em>{formikobj.errors.lastname}</em>}
               <br />
               <label for="email">email: </label>
               <br/>
               <input type="email" name="email"  required className="login-input" value={formikobj.values.email}  onChange={formikobj.handleChange}/>
               {formikobj.errors.email && <em>{formikobj.errors.email}</em>}

               <br />
                <label for="password">password: </label>
                <br/>
               <input type="password" name="password"  required className="login-input"onChange={formikobj.handleChange}/>
               <br />
               <div className="login-submit-desing">
              <input type="submit" className="login-button" value="Login!"onClick={(e)=>{formikobj.handleLogin(e)}} /> 
              <input type="submit" className="login-button" value="sign in!"onClick={(e)=>{formikobj.handleLogin(e)}} /> 
              <br/>
              </div>
              <h6>Forgot Password?</h6>
              
              <h6>-----------------Or connect with</h6>
               </form>
               <div className="icon-desing">

                <a href="https://in.linkedin.com/?original_referer=https%3A%2F%2Fwww.google.com%2F"><i className="fa-brands fa-google"></i></a>
                <a href="https://www.facebook.com/help/188157731232424"><i className="fa-brands fa-facebook"></i></a>
                <a href="https://www.instagram.com/"> <i className="fa-brands fa-instagram"></i></a>
           
               </div>
                </div>
            </div>
        </div>
        </div>
       
    )
}
export default LogIn ;
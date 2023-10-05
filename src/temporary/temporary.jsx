import React from "react";
import { useFormik } from "formik";
import * as Yup   from "yup";

const FormvalidationYup = ()=>{

    const formik = useFormik({
        initialValues :{
            name : "",
            email : "",
            pass: "",
            cpass:"",
        },
        validationSchema : Yup.object({
        name : Yup.string()
            .required("*Required*")
            .min(4, "min 4 characters")
            .max(10, "max 10 characters"),

        email:   Yup.string()
            .required("*Required*")
            .email("Invalid email"),

        pass:    Yup.string()
            .required("*Required*")
            .min(5, "min 4 characters")
            .matches(/[A-Z]/,"one upper case is needed")
            .matches(/[a-z]/,"one lower case is needed")
            .matches(/[0-9]/,"one number is needed")
            .matches(/[!@#$%*&]/,"one special"),

        cpass :    Yup.string()
                 .required("*Required*")
                .oneOf([Yup.ref('pass'),"password not match"])
        }),

        
        onSubmit:(values) =>{
            console.log(values);
        }
    })
    return(
        <div>
               <form onSubmit={formik.handleSubmit}>
                Name<br/>
                <input type="text" name="name" value={formik.values.name} onChange={formik.handleChange} />
                {formik.errors.name && <em>{formik.errors.name}</em>}
                <br/>
                Email<br/>
                <input type="email" name="email" value={formik.values.email} onChange={formik.handleChange} />
                {formik.errors.email && <em>{formik.errors.email}</em>}
                <br/>
                Password<br/>
                <input type="text" name="pass" value={formik.values.pass} onChange={formik.handleChange} />
                {formik.errors.pass && <em>{formik.errors.pass}</em>}
                
                <br/>
                Confirm Password<br/>
                <input type="text" name="cpass" value={formik.values.cpass} onChange={formik.handleChange} />
                {formik.errors.cpass && <em>{formik.errors.cpass}</em>}
                
                <br/>
                <button type="submit">Submit</button>
                <button onClick={formik.handleReset}>Reset</button>
            </form>
        </div>
    )
}
export default FormvalidationYup;
<form>
<label for="firstname">First name: </label>
  <input type="text" name="firstname"  required />
   <br />
  <label for="lastname">Last name: </label>
      <input type="text" name="lastname"  required />
           <br />
        <label for="email">email: </label>
        <input type="email" name="email"  required />
        <br />
        <label for="password">password: </label>
         <input type="password" name="password"  required />
         <br />
         <input type="submit" value="Login!" onClick={(e)=>handleLogin(e)} />
</form>
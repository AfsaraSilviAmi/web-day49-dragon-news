'use client'
import { authClient } from '@/lib/auth-client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const RegisterPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
     const [showPassword, setShowPassword] = useState(false);

        const handleRegister = async(data) =>{
            const {name, photo, email, password} = data;
          
          const { data:res, error } = await authClient.signUp.email({
    name: name, // required
    email: email, // required
    password: password, // required
    image: photo,
    callbackURL: "/",
});

if(error){
    alert(error.message)
}
if(res){
    alert("Registration Successful")
}
        }
    return (
        <div>
            <div className='container mx-auto flex justify-center items-center h-[80vh]'>
           
  
   
    <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl justify-center">
      <div className="card-body">
        <h1 className='text-2xl mb-3 text-center font-semibold'>Register your account</h1>
        <form onSubmit={handleSubmit(handleRegister)}>
            <fieldset className="fieldset">
                <label className="font-semibold text-lg">Name</label>
          <input type="text" {...register("name", { required: "Name field is required" })} className="input w-[95%] bg-gray-100" placeholder="Enter your name" />
          {errors.name && <p className='text-red-500'>{errors.name.message}</p>}

          <label className="font-semibold text-lg">Photo URL</label>
          <input type="text" {...register("photo", { required: "Photo field is required" })} className="input w-[95%] bg-gray-100" placeholder="Enter your photo URL" />
          {errors.photo && <p className='text-red-500'>{errors.photo.message}</p>}

          <label className="font-semibold text-lg">Email address</label>
          <input type="email" {...register("email", { required: "Email field is required" })} className="input w-[95%] bg-gray-100" placeholder="Enter your email address" />
          {errors.email && <p className='text-red-500'>{errors.email.message}</p>}

          <label className="font-semibold text-lg">Password</label>
          <div className='relative'>
            <input type={showPassword? "text" : "password"} {...register("password", { required: "Password field is required" })} className="input w-[95%] bg-gray-100" placeholder="Enter your password" />
            <span className='absolute top-4 right-9' onClick={()=>setShowPassword(!showPassword)}>{showPassword? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>} </span>
             {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
          </div>
         

         
          <button className="btn bg-gray-800 text-white mt-4">Register</button>
        </fieldset>
        
        </form>
      </div>
    </div>
  </div>
        </div>
    );
};

export default RegisterPage;
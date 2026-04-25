'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const LoginPage = () => {
   const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  
    const handleLogin = async(data) =>{
      console.log(data);
      const { data:res, error } = await authClient.signIn.email({
    email: data.email, // required
    password: data.password, // required
    rememberMe: true,
    callbackURL: "/",
});
      
      if(error){
          alert(error.message)
      }
      if(res){
          alert("Login Successful")
      }
    }
    return (
        <div className='container mx-auto flex justify-center items-center h-[80vh]'>
           
  
   
    <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl justify-center">
      <div className="card-body">
        <h1 className='text-2xl mb-10 text-center font-semibold'>Login your account</h1>
        <form onSubmit={handleSubmit(handleLogin)}>
            <fieldset className="fieldset">
          <label className="font-semibold text-lg">Email address</label>
          <input type="email" {...register("email", { required: "Email field is required" })} className="input w-[95%] bg-gray-100" placeholder="Enter your email address" />
          {errors.email && <p className='text-red-500'>{errors.email.message}</p>}

          <label className="font-semibold text-lg">Password</label>
          <input type="password" {...register("password", { required: "Password field is required" })} className="input w-[95%] bg-gray-100" placeholder="Enter your password" />
          {errors.password && <p className='text-red-500'>{errors.password.message}</p>}

         
          <button className="btn bg-gray-800 text-white mt-4">Login</button>
        </fieldset>
        <div>
            <p className='text-center'>Don't have an account? <Link href={"/register"} className='text-blue-500'>Register</Link></p>
        </div>
        </form>
      </div>
    </div>
  </div>

    );
};

export default LoginPage;
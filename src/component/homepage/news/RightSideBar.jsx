'use client'
import { authClient } from '@/lib/auth-client';
import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSideBar = () => {
    const handleGoogleSignIn = async() =>{
      const data = await authClient.signIn.social({
    provider: "google",
  });
  
    }
    const handleGithubSignIn = async() => {
    const data = await authClient.signIn.social({
        provider: "github"
    })
}
    return (
        <div>
            <h1 className='font-semibold text-xl'>Login with</h1>
           <div className='flex flex-col gap-2 my-3'>
             <button onClick={handleGoogleSignIn} className='btn border-blue-500 text-blue-500'><FaGoogle />Login with Google</button>
            <button onClick={handleGithubSignIn} className='btn'><FaGithub />Login with Github</button>
           </div>
        </div>
    );
};

export default RightSideBar;
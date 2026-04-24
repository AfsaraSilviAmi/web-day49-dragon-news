import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSideBar = () => {
    return (
        <div>
            <h1 className='font-semibold text-xl'>Login with</h1>
           <div className='flex flex-col gap-2 my-3'>
             <button className='btn border-blue-500 text-blue-500'><FaGoogle />Login with Google</button>
            <button className='btn'><FaGithub />Login with Github</button>
           </div>
        </div>
    );
};

export default RightSideBar;
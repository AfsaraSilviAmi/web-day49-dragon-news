import React from 'react';
import Logo from '@/assets/logo.png'
import Image from 'next/image';
import { format } from "date-fns";


const Header = () => {
    return (
        <div className='text-center space-y-3 py-8'>
            <Image src={Logo} width="300px" height ="300px" alt = "logo" className='mx-auto'></Image>
            <p className='text-gray-400'>Journalism Without Fear or Favour</p>
            <p>{format(new Date(), "EEEE, MMM dd, yyyy")}</p>
        </div>
    );
};

export default Header;
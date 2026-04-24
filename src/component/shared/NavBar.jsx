import Link from 'next/link';
import React from 'react';
import userAvatar from "@/assets/user.png"
import Image from 'next/image';
import NavLink from './NavLink';

const NavBar = () => {
    
    return (
        <div className='container mx-auto flex justify-between my-4'>
            <div></div>
            <ul className='flex gap-2.5 text-gray-600'>
                <li><NavLink href={"/"}>Home</NavLink></li>
                <li><NavLink href={"/about"}>About</NavLink></li>
                <li><NavLink href={"/career"}>Career</NavLink></li>
            </ul>
            <div className='flex items-center gap-3'>
             <Image src={userAvatar} alt="user Avatar" width={40} height={40}></Image>
             <button className='btn bg-gray-700 text-white px-5'><Link href={"/login"}>Login</Link></button>
            </div>
        </div>
    );
};

export default NavBar;
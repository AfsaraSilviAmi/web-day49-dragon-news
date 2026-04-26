'use client'
import Link from 'next/link';
import React from 'react';
import userAvatar from "@/assets/user.png"
import Image from 'next/image';
import NavLink from './NavLink';
import { authClient } from '@/lib/auth-client';

const NavBar = () => {
    const {data:session, isPending} = authClient.useSession();
    const user = session?.user;
    console.log(user);
    return (
        <div className='container mx-auto flex justify-between my-4'>
            <div></div>
            <ul className='flex gap-2.5 text-gray-600'>
                <li><NavLink href={"/"}>Home</NavLink></li>
                <li><NavLink href={"/about"}>About</NavLink></li>
                <li><NavLink href={"/career"}>Career</NavLink></li>
            </ul>
            {
               isPending? (<span className="loading loading-dots loading-xl text-red-500"></span>) : user? (<div className='flex items-center gap-3'>
                <h2>Welcome, <span className='font-semibold'>{user?.name}</span></h2>
             <Image src={user?.image || userAvatar} alt="user Avatar" width={40} height={40} className='rounded-full'></Image>
             <button onClick={async()=>await authClient.signOut()} className='btn bg-gray-700 text-white px-5'>Logout</button>
            </div>): (<button className='btn bg-gray-700 text-white px-5'><Link href={"/login"}>Login</Link></button>)
            }
        </div>
    );
};

export default NavBar;
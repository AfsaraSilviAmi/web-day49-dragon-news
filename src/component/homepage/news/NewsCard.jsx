import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiShare2 } from 'react-icons/ci';
import { FaEye, FaRegBookmark, FaStar } from 'react-icons/fa';

const NewsCard = ({n}) => {
    return (
        <div>
           <div className="card bg-base-100 shadow-sm">
  <div className="card-body">
    {/* author */}
    <div className='flex justify-between bg-gray-200 p-2 rounded-lg'>
      <div className='flex gap-2'>
        <Image src={n.author?.img} alt={n.author.name} width={50} height={50} className='rounded-full'></Image>
        <div>
            <h2 className='font-semibold text-lg'>{n.author.name}</h2>
            <h2 className='text-gray-500'>{n.author.published_date}</h2>
        </div>
      </div>
      <div className='text-gray-500 text-lg flex gap-2'>
        <FaRegBookmark />
        <CiShare2 />
      </div>
    </div>
    <h2 className="card-title">{n.title}</h2>
    <figure>
    <Image src={n.image_url} alt={n.title} width={300} height={400} className='w-full p-3'></Image>
  </figure>
  <p className='line-clamp-3'>{n.details}</p>
  <div className='flex justify-between'>
    <div className='flex gap-4'>
      <h1 className='flex gap-2 items-center'><FaStar className='text-yellow-400' />{n.rating.number}</h1>
      <h1 className='flex gap-2 items-center'><FaEye className='text-gray-500'/>{n.total_view}</h1>
    </div>
    <Link href={`/news/${n._id}`}>
    <button className='btn bg-orange-400 text-white'>See Details</button>
    </Link>
   </div>
  </div>
   
  
</div>
        </div>
    );
};

export default NewsCard;
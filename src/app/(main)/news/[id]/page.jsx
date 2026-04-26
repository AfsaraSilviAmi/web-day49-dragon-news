import { getNewsDetailsById } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiShare2 } from 'react-icons/ci';
import { FaEye, FaRegBookmark, FaStar } from 'react-icons/fa';

export async function generateMetadata({ params }) {
  const {id} = await params
  const news = await getNewsDetailsById(id)
 
 
  return {
    title: news.title,
    description: news.details,
  }
}
 


const NewsDetailsPage = async({params}) => {
    const {id} = await params;
    const news = await getNewsDetailsById(id);
    return (
        <div className='text-center'>
          <h1 className='text-2xl font-bold'>News Details Page</h1>
            <div>
                       <div className="card bg-base-100 shadow-sm max-w-4xl mx-auto">
              <div className="card-body">
                {/* author */}
                <div className='flex justify-between bg-gray-200 p-2 rounded-lg'>
                  <div className='flex gap-2'>
                    <Image src={news.author.img} alt={news.author.name} width={50} height={50} className='rounded-full'></Image>
                    <div>
                        <h2 className='font-semibold text-lg'>{news.author.name}</h2>
                        <h2 className='text-gray-500'>{news.author.published_date}</h2>
                    </div>
                  </div>
                  <div className='text-gray-500 text-lg flex gap-2'>
                    <FaRegBookmark />
                    <CiShare2 />
                  </div>
                </div>
                <h2 className="card-title">{news.title}</h2>
                <figure>
                <Image src={news.image_url} alt={news.title} width={300} height={400} className='w-full p-3'></Image>
              </figure>
              <p>{news.details}</p>
              <div className='flex justify-between'>
                <div className='flex gap-4'>
                  <h1 className='flex gap-2 items-center'><FaStar className='text-yellow-400' />{news.rating.number}</h1>
                  <h1 className='flex gap-2 items-center'><FaEye className='text-gray-500'/>{news.total_view}</h1>
                </div>
                <div>
                    <Link href={`/category/${news.category_id}`}><button className='btn btn-error'>Read all news in this category</button></Link>
                </div>
                
               </div>
              </div>
               
              
            </div>
                    </div>
        </div>
    );
};

export default NewsDetailsPage;
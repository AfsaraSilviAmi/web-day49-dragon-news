import LeftSideBar from '@/component/homepage/news/LeftSideBar';
import NewsCard from '@/component/homepage/news/NewsCard';
import RightSideBar from '@/component/homepage/news/RightSideBar';
import { getCategory, getNewsByCategory } from '@/lib/data';
import React from 'react';



const NewsCategoryPage = async({params}) => {
    const {id} = await params;
     const categories = await getCategory();
  const news = await getNewsByCategory(id);
    return (
        <div>
            <div className="grid grid-cols-12 container mx-auto my-4 gap-2">
      <div className="col-span-3">
        <LeftSideBar categories={categories} activeId={id}></LeftSideBar>
      </div>
      <div className="col-span-6">
        <h1 className='font-semibold text-xl mb-2'>Dragon News Home</h1>
        {
          news.length >0 ? news.map(n =>{
            return ( <NewsCard key={n._id} n={n}></NewsCard>)
          }) : (<h1 className='font-bold text-center flex justify-center items-center h-[50vh] text-3xl'>No News Found!</h1>)
        }
      </div>
      <div className="col-span-3">
           <RightSideBar></RightSideBar>
      </div>
    </div>
        </div>
    );
};

export default NewsCategoryPage;
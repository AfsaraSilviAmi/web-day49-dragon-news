import Link from 'next/link';
import React from 'react';

const LeftSideBar = ({categories, activeId}) => {
    return (
        <div>
             <h1 className="font-semibold mb-2 text-xl">All Category</h1>
        <ul className="flex flex-col gap-2">
           {
          categories.news_category.map(category =>{
            return <li key ={category.category_id} className={`${activeId === category.category_id && "bg-red-300"} font-semibold rounded-md text-center`}>
                <Link href={`/category/${category.category_id}`} className='block py-3'>{category.category_name}</Link>
                
                </li>
          })
         }
        </ul>
        </div>
    );
};

export default LeftSideBar;
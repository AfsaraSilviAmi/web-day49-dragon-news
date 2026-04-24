import React from 'react';
import Marquee from 'react-fast-marquee';

const BreakingNews = () => {

    const news = [
  { "id": 1, "title": "Global Markets React to Sudden Economic Shift" },
  { "id": 2, "title": "Major Tech Company Unveils New AI Breakthrough" },
  { "id": 3, "title": "Severe Weather Alert Issued Across Coastal Regions" },
  { "id": 4, "title": "International Sports Event Draws Record Crowd" },
  { "id": 5, "title": "New Health Guidelines Released by Experts" }
]
    return (
        <div className='flex justify-between gap-4 items-center bg-gray-100 py-3 px-2 container mx-auto'>
            <button className='btn bg-red-700 text-white'>Latest</button>
            <Marquee pauseOnHover={true} speed={100}>
                {
                    news.map(n => (<span key={n.id} className='block ml-10'>{n.title} </span>))
                }
            </Marquee>
        </div>
    );
};

export default BreakingNews;
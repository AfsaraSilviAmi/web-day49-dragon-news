import React from 'react';

const loadingNews = () => {
    return (
        <div className='flex justify-center items-center h-[85vh]'>
            <span className="loading loading-dots loading-xl text-error"></span>
        </div>
    );
};

export default loadingNews;
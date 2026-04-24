import React from 'react';

const GlobalLoading = () => {
    return (
        <div>
            <div className='flex justify-center items-center h-[85vh]'>
            <span className="loading loading-dots loading-xl text-error"></span>
        </div>
        </div>
    );
};

export default GlobalLoading;
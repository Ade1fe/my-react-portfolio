import React from 'react';
import { Link } from 'react-router-dom';

const BlogBox = ({ imageSrc, blogType, blogTitle }) => {
  return (
    <div className="sm:w-1/2 order-1 my-3 sm:my-0 md:w-1/3 rounded-lg  p-4" style={{  boxShadow: 'rgba(17, 17, 26, 0.05)  0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px',}}>
      <Link to="/notfound" className="block">
        <div className="h-56 rounded-tr-lg overflow-hidden rounded-tl-lg ">
          <img src={imageSrc} className="w-full h-full object-cover transform 
      transition duration-1000 
      hover:scale-125" alt="" />
        </div>
        <div className='py-2 px-4'>
          <p className="uppercase text-gray-600  text-sm">{blogType}</p>
          <h1 className="font-bold text-lg sm:text-xl">{blogTitle}</h1>
        </div>
      </Link>
    </div>
  );
};

export default BlogBox;

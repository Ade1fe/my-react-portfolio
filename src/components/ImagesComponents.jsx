import React from 'react';
import blog from "../assets/Image 13-10-2023 at 20.09.jpg";
import bloggy from "../assets/moda.png";
import imgthree from "../assets/kin.png";
import imgfour from "../assets/port.png";
import imgfive from "../assets/coinease.png";
import foodimg from "../assets/foodimg.png";
import sellImg from "../assets/Screenshot 2024-07-08 at 19.39.33.png";


const ImagesComponents = () => {
  const images = [
    {
      url: blog,
      isPortrait: false,
      alt: "Fashion Blog",
      description: "Deife-Luxe ",
      externalURL: "https://deife-luxe.netlify.app/", 
    },
    {
      url: bloggy,
      isPortrait: true,
      alt: "Fashion",
      description: "Cut2Fit-Moda",
      externalURL: "https://cut2fit-moda.netlify.app/", 
    },
    {
      url: foodimg,
      isPortrait: true,
      alt: "Recipe App",
      description: "Tasty-trail",
      externalURL: "https://tasty-trail.netlify.app/", 
    },
     
    {
      url: imgthree,
      isPortrait: true,
      alt: "Kin",
      description: "fintech",
      externalURL: "https://ki-n.netlify.app/", 
    },

    {
      url: imgfour,
      isPortrait: true,
      alt: "portfolio",
      description: "Portfolio",
      externalURL: "https://iamjoshua.netlify.app/", 
    },
    {
      url: imgfive,
      isPortrait: true,
      alt: "Fintech",
      description: "CoinEase",
      externalURL: "https://coinease.netlify.app/", 
    },

    {
      url: sellImg,
      isPortrait: true,
      alt: "e-commerce",
      description: "SellZone",
      externalURL: "https://sellzone.netlify.app/", 
    },

  ];

  const TextItem = ({ title, description, image }) => {
    return (
      <a
        href={image.externalURL}
        target="_blank" 
        rel="noopener noreferrer"
        className='grid-item'
        
      >
        <div className="p-2 sm:p-3" style={{ boxShadow: "rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset" }}>
          <img src={image.url} alt={image.alt} className=' transform 
                                        transition duration-1000 
                                        hover:scale-125' />
        </div>
        <div className='p-2 sm:p-3 text-xs sm:text-[15px]' style={{ boxShadow: "rgba(0, 0, 0, 0.04) 0px 3px 5px" }}>
          <h4 className='uppercase text-sm text-gray-400'>{title}</h4>
          <h2 className='capitalize text-[15px] font-bold my-1 py-1'>{description}</h2>
        </div>
      </a>
    );
  };

  return (
       <div className="container w-[95%] mt-2 mb-8 md:w-[90%] mx-auto">
      <div className="grid grid-cols-2 items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <h1 className="text-2xl sm:text-5xl font-bold col-span-2 md:col-span-2 lg:col-span-2 text-center px-4">ALL PROJECTS</h1>
        {images.map((image, index) => (
          <TextItem
            key={index}
            title={image.alt}
            description={image.description} 
            image={image}
          />
          
        ))}
      </div>
    </div>
  );
};

export default ImagesComponents;

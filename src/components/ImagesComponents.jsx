import React from 'react';
import blog from "../assets/Image 13-10-2023 at 20.09.jpg";
import bloggy from "../assets/Image 13-10-2023 at 20.21.jpg";
import peakone from "../assets/Image 13-10-2023 at 20.32.jpg";
import peaktwo from "../assets/Image 13-10-2023 at 20.37.jpg";
import peakthree from "../assets/Image 13-10-2023 at 20.45.jpg";
import imgone from "../assets/Image 13-10-2023 at 20.42.jpg";
import imgtwo from  "../assets/Image 13-10-2023 at 20.26.jpg";
import imgthree from "../assets/Image 13-10-2023 at 20.48.jpg";
import imgfour from "../assets/Image 13-10-2023 at 20.59.jpg";
import imgfive from "../assets/Image 13-10-2023 at 20.55.jpg";
// import sign from "../assets/Image 13-10-2023 at 21.00.jpg";


const ImagesComponents = () => {
  const images = [
    {
      url: blog,
      isPortrait: false,
      alt: "Fashion Blog",
      description: "Deife-Luxe ",
      externalURL: "https://www.google.com", 
    },
    {
      url: bloggy,
      isPortrait: true,
      alt: "Random Jokes",
      description: "Dad Jokes",
      externalURL: "https://www.youtube.com", 
    },
    {
      url: peakthree,
      isPortrait: true,
      alt: "Recipe App",
      description: "Deife-Food.",
      externalURL: "https://getcssscan.com/css-box-shadow-examples", 
    },

  
    {
      url: peakone,
      isPortrait: false,
      alt: "Anime Website",
      description: "Dee-Movies (Anime)",
      externalURL: "https://getcssscan.com/css-box-shadow-examples", 
    },
    {
      url: imgone,
      isPortrait: false,
      alt: "Recipe App",
      description: "Deife-Food.",
      externalURL: "https://getcssscan.com/css-box-shadow-examples",  
    },
    {
      url: peaktwo,
      isPortrait: true,
      alt: "Movie Webiste",
      description: "Dee-Movies (Movie)",
      externalURL: "https://getcssscan.com/css-box-shadow-examples", 
      
    },
    {
      url: imgtwo,
      isPortrait: true,
      alt: "Portrait Photo Two",
      description: "My fourth",
      externalURL: "https://getcssscan.com/css-box-shadow-examples", 
    },
    {
      url: imgthree,
      isPortrait: true,
      alt: "Portrait Photo Three",
      description: "My fourth",
      externalURL: "https://getcssscan.com/css-box-shadow-examples", 
    },
    {
      url: imgfour,
      isPortrait: true,
      alt: "Portrait Photo Four",
      description: "My fourth",
      externalURL: "https://getcssscan.com/css-box-shadow-examples", 
    },
    {
      url: imgfive,
      isPortrait: true,
      alt: "Portrait Photo Five",
      description: "My fourth",
      externalURL: "https://getcssscan.com/css-box-shadow-examples", 
    },
    // {
    //   url: sign,
    //   isPortrait: false,
    //   alt: "Welcome Sign",
    //   description: "My fourth",
    //   externalURL: "https://getcssscan.com/css-box-shadow-examples", 
    // },
    // Add more image objects here as needed
  ];

  const TextItem = ({ title, description, image }) => {
    return (
      <a
        href={image.externalURL}
        target="_blank" // Open the link in a new tab/window
        rel="noopener noreferrer" // Required for security and to prevent tab-nabbing
        className='grid-item'
      >
        <div className="p-2 sm:p-3" style={{ boxShadow: "rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset" }}>
          <img src={image.url} alt={image.alt} />
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
            description={image.description} // Replace with the actual description
            image={image}
          />
          
        ))}
      </div>
    </div>
  );
};

export default ImagesComponents;

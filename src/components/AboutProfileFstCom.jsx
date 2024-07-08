import React from 'react'
import Carousel from '../components/Carousel';
import Header from '../components/Header';
import Education from './Education';
import CredentialsBox from './CredentialsBox';
import sign from '../assets/black-female-character-based-oncurly-hair-y2k-fashion-style-pixar-and-anime-style-girl-full-hea-996323882.png';
import ProfilesSection from './ProfilesSection';
import SocialMediaSection from './SocialMediaSection';
import { Link } from 'react-router-dom';

const AboutProfileFstCom = () => {
    const images = [
      require('../assets/black-female-character-based-oncurly-hair-y2k-fashion-style-pixar-and-anime-style-girl-full-hea-741536843.png'),
      require('../assets/black-female-character-based-oncurly-hair-y2k-fashion-style-pixar-and-anime-style-girl-full-hea-741536843.png'),
      ];
    
  return (
        <div>
        <div className="first block mx-auto rounded-[20px] one sm:flex gap-5 justify-between items-center pt-7 mb-0 md:mb-7 w-auto px-5">
          <div className='p-2 md:p-3 flex justify-center w-[80%] mx-auto md:w-[30%] rounded-[20px]' style={{ boxShadow: 'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px' }}>
            <div className=" flex-1 w-[280px] h-[full] rounded-[20px] overflow-hidden ">
              <Carousel images={images} />
            </div>
          </div>
          <div className='w-full  md:w-[73%]'>
            <div>
              <h2 className='text-xl sm:text-3xl text-center px-2 py-2 my-2 mx-auto'>SELF-SUMMARY</h2>
            </div>
            <div className="px-5 py-4  rounded-[20px] " style={{ boxShadow: 'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px' }}>
              <Header first="Oluwadamisi Damilola Adeife" headerClassName="font-bold text-xl sm:text-2xl mb-0 my-0 sm:my-3"
              pClassame="text-xl sm:text-2xl mb-2 my-0 sm:my-6" second="I'm a Lagos-based frontend developer deeply engaged in the tech scene. Proficient in React, Tailwind CSS, Bootstrap, ChakraUi  and more, I specialize in creating visually appealing websites and applications. Inspired by Lagos' tech community, I aim to push frontend development boundaries and contribute to tech growth locally and globally." />
            </div>
          </div>
        </div>

        <div className="">
               <Education />
            </div>

<div className="grid grid-cols-2 place-items-center gap-0.5 md:flex md:gap-4 items-center justify-evenly w-[97%] mx-auto my-0 md:my-8">
    
<div className="w-[97%] mx-auto md:w-1/3  my-3 md:my-0 rounded-[20px]">
            <CredentialsBox
        imageSrc={sign}
        aboutTitle="More about me"
        credentialsTitle="Credentials"
      />
            </div>

            <Link className="pl-2 sm:px-4 flex justify-center items-start font-bold rounded-[20px] flex-col w-[97%] mx-auto h-[150px] sm:h-[200px]  md:w-2/3  md:my-0"style={{ boxShadow: 'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px' }} to="/contact">
            <div className="my-[30px] md:my-[50px]">

<h1 className='text-xl sm:text-3xl'>Let's</h1>
<h1 className='whitespace-nowrap text-lg sm:text-3xl'>Work <span className='text-[#DEAAFF]'>Together</span></h1>
</div>
</Link>

            <div className="w-[90%] col-span-2 rounded-[20px] my-3 md:my-0 pt-3 md:pt-0 mx-auto md:w-1/3 px-4"style={{ boxShadow: 'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px' }} >
          

            <SocialMediaSection
        tiktokText="Tiktok"
        globeText="Globe"
      />
      <Link to="/letUsTalk" >
            <ProfilesSection
        stayWithMeText="Stay with me"
        profilesText="Profiles"
      />
          </Link>
   
            </div>
        

</div>
      </div>

      
  )
}

export default AboutProfileFstCom
import React from 'react';
import Carousel from './Carousel';
import sign from '../assets/black-girl-with-on-a-laptop-with-a-knife-professional-ominous-concept-art-by-artgerm-and-greg-rutk-610657426.png';
import sign2 from '../assets/black-character-sitting-in-a-gamer-room-with-gamer-headset-perfect-beautiful-hair-creating-3d-game-i-303953139.png';
import workOne from '../assets/vector-design--cute-african-american-trendy-y2k-teen-girl-with-curly-hair-62059328.png';
import ProfileCard from './ProfileCard';
import MarqueeComponent from './MarqueeComponent';
import CredentialsBox from './CredentialsBox';
import ProjectsBox from './ProjectsBox';
import BlogBox from './BlogBox';
import ServicesBox from './ServicesBox';
import SocialMediaSection from './SocialMediaSection';
import ProfilesSection from './ProfilesSection';
import DataBlock from './DataBlock';
import DataBlockItem from './DataBlockItem';
import { Link } from 'react-router-dom';




const Intro = () => {
  const images = [
    require('../assets/black-female-character-based-oncurly-hair-y2k-fashion-style-pixar-and-anime-style-girl-full-hea-741536843.png'),
    require('../assets/black-female-character-based-oncurly-hair-y2k-fashion-style-pixar-and-anime-style-girl-full-hea-741536843.png'),
  ];

  return (
    <div className="intro mt-2 px-2">
      <div className="block md:flex gap-2 items-center ">
        <div className="first block rounded-[20px] one sm:flex gap-2 justify-center items-center py-7 w-auto  md:w-[50%] px-5 " style={{boxShadow: 'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px' }}>
          <div className="w-[270px] h-full mx-auto rounded-tl-[20px] rounded-br-[20px] overflow-hidden">
            <Carousel images={images} />
          </div>
          <ProfileCard first="Oluwadamisi Damilola Adeife" headerClassName="font-bold text-lg md:text-xl mb-2"
        second="I am based in Lagos, Nigeria"/>
        </div>

        <div className="w-auto md:w-[50%] h-full my-2 md:my-0 px-2">
       <MarqueeComponent />
        
             <div className="flex gap-4 py-3 flex-1">
      <CredentialsBox
        imageSrc={sign}
        aboutTitle="More about me"
        credentialsTitle="Credentials"
      />
      <ProjectsBox
        imageSrc={sign2}
        showcaseTitle="Showcase"
        projectsTitle="Projects"
      />
    </div>
        </div>
      </div>

      <div className="block md:flex  mt-2 gap-2 items-center">

   <div className="block sm:flex w-[100%] gap-2 items-center">
   
     <BlogBox
        imageSrc={workOne}
        blogType="Blog"
        blogTitle="G-Fonts"
      />
      <ServicesBox
        specialization="Specialization"
        servicesTitle="Services Offering"
      />
    </div>

<div className="w-full md:w-[30%] my-2 md:my-0 rounded-[20px] px-4 pt-1 sm:pt-1 order-2" style={{ boxShadow: 'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px' }}>

   <div className=''>
      <SocialMediaSection
        tiktokText="Tiktok"
        globeText="Globe"
      />
      <Link to="/letUsTalk">
      <ProfilesSection
        stayWithMeText="Stay with me"
        profilesText="Profiles"
      />
      </Link>
    </div>
    
</div>

</div>

<div className="block md:flex justify-between w-full gap-3 bg-black py-[3rem] mt-6 mb-7 px-3">

<DataBlock>
  <DataBlockItem number="4+" title1="Years" title2="Experience" />
  {/* <DataBlockItem number="2" title1="Happy" title2="Clients" /> */}
  <DataBlockItem number="5+" title1="Total" title2="Projects" />
</DataBlock>

<Link to="/contact" className="font-bold pt-5 md:pt-0 px-10 text-xl flex flex-col justify-center text-white bg-[#222] sm:text-2xl w-full md:w-[38%] rounded-[15px]"style={{boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px'}}>
<div >
{/* <Link to="/contact"> */}
  <h1>Let's</h1>
  <h1 className='pb-5 md:pb-0'>Work <span className='text-[#DEAAFF]'>Together</span></h1>
  {/* </Link> */}
</div>
</Link>

</div>


    </div>
  );
};

export default Intro;

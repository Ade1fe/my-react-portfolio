import React from 'react'
import SocialMediaSection from './SocialMediaSection'
import ProfilesSection from './ProfilesSection'
import { Link } from 'react-router-dom'
import CredentialsBox from './CredentialsBox'
import sign from '../assets/black-female-character-based-oncurly-hair-y2k-fashion-style-pixar-and-anime-style-girl-full-hea-996323882.png';
const ServiceFinalPage = () => {
  return (
    <div>
        
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



<div className="w-[90%] col-span-2 rounded-[20px] my-3 md:my-0 pt-3 md:pt-0 mx-auto md:w-1/3 px-4"style={{ boxShadow: 'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px' }}>

                <div >
                <SocialMediaSection
            tiktokText="Tiktok"
            globeText="Globe"
          />
          <Link to='/letUsTalk' > 
                <ProfilesSection
            stayWithMeText="Stay with me"
            profilesText="Profiles"
          />
            </Link>
                </div>

              
</div>

                
    
       
    
    </div>
    </div>
  )
}

export default ServiceFinalPage
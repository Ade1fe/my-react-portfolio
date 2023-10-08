import React from 'react'
import Marquee from 'react-fast-marquee'

const MarqueeComponent = () => {
  return (
    <div>
           <div className="py-3 px-3 mb-2 rounded-[20px]" style={{boxShadow: 'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px' }}>
            <Marquee className="text-[#6c757d] text-xs md:text-sm">
              Connect with me on all major social platforms under the handle <span className="font-bold mx-2 text-black">@deife_syntax.</span>
              For the best experience, please access this website on a<span className="font-bold mx-2 text-black">larger screen</span>
              Feel free to drop me an <span className="font-bold mx-2 text-black">email,</span>
              and I'll get back to you promptly.
            </Marquee>

           
          </div>
    </div>
  )
}

export default MarqueeComponent
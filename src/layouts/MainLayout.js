import React from 'react'
import Navbar from '../components/Navbar'
import Footer from './../components/Footer';

const MainLayout = ({children}) => {
  return (
 <div className='max-w-[1340px] mx-auto logo'>
    <Navbar></Navbar>
    <div className='mt-16 mb-[8rem]'>{children}</div>
    <Footer></Footer> 
 </div>
  )
}

export default MainLayout
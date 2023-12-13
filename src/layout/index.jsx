
import React from 'react';
import Home from '../Page/Home';
import Footer from './Footer/Footer';
import Navbar from './Navbar';




const Layout = ({handelClick}) => {
    return (
        <div className='relative'>
            <div className='mb-[6rem] xs:mb-[3rem] sm:mb-[3rem] md:mb-[3rem]'>
            <Navbar handelClick={handelClick} className="bg-[#111010] " />
            </div>
            <div>
            <Home className="" />
            </div>
            <div>
            <Footer className="bg-[#111010]" />
            </div>
        </div>
    )
}
export default Layout;
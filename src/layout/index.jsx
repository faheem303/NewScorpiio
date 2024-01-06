
import React, { useState, useEffect } from 'react';
import Home from '../Page/Home';
import Footer from './Footer/Footer';
import Navbar from './Navbar';
import Loader from '../components/Loader';




const Layout = ({handelClick}) => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false); // Set loading to false after the delay
      }, 2000); // Change the duration as needed
  
      // Clean up the timer when unmounting or if the effect runs again
      return () => clearTimeout(timer);
    }, []);

    return (
       <>
        {loading ? (
        <Loader />
      ) : (
        /* Render your main app content here */
        <div className='relative'>
            <div className='mb-[4rem] xs:mb-[3rem] sm:mb-[3rem] md:mb-[3rem]'>
            <Navbar handelClick={handelClick} className="bg-[#111010] " />
            </div>
            <div className=''>
            <Home className="" />
            </div>       
            <div>
            <Footer className="bg-[#111010]" />
            </div>
        </div>
      )}
      
       </>
    )
}
export default Layout;
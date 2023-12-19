
import React, { useState, useEffect } from 'react';
import Button from "../../components/Button/button";


import Logo from "../../assects/logo/Logo.png";
import wallet from "../../assects/images/Wallet.png";
import WalletBlue from "../../assects/svgs/walletsvg.svg";
import globe from "../../assects/images/globe.png";
import flg from "../../assects/svgs/fg (13).svg"

import i18n from 'i18next';
import { useMoralis } from 'react-moralis';
import { useTranslation } from 'react-i18next';
import HoverDropDn from '../../components/HoverDropDn';




const Navbar = ({ handelClick }) => {

    const [lang, setLang] = useState("Eng");
    const [langStatus, setLangStatus] = useState(false);

    const [navBarOpen, setNavBarOpen] = useState(false);



    const handleLangDropdown = () => {
        setLangStatus(!langStatus)
    }
    const handleNavbarMenu = () => {
        setNavBarOpen(!navBarOpen)
    }
    const handleNavbarMenuClose = () => {
        setNavBarOpen(false)
    }




    return (
        <nav className=" z-10 bg-[#111010] fixed  top-0 2xl:px-[90px] xl:px-[90px] lg:px-[90px] md:px-[90px] sm:px-4 xs:px-4  py-3 sm:py-0 xs:py-3 w-full " >
            <header className="flex justify-between">
                <div
                    className="flex items-center space-x-10 h-16 max-w-screen-2xl sm:px-0 xs:px-0 lg:px- "
                >
                    <div className="flex items-center">
                        <button type="button" onClick={handleNavbarMenu} className="p-1 sm:mr-4 xl:hidden lg:hidden 2xl:hidden">
                            <svg
                                className="w-6 h-6 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                    fill='white'
                                />
                            </svg>
                        </button>
                        <div className="flex items-center w-[160px]">
                            <a href="#hero"  >
                                <img src={Logo} className="h-[55px] xs:h-[52px] sm:h-[53px] w-[100%]" alt="Metropoly Logo" />
                            </a>
                        </div>


                    </div>
                    <div className='flex items-center justify-between xs:justify-start space-x-5 xs:space-x-0 '>
                        <div className='flex justify-between space-x-6 xs:hidden sm:hidden md:hidden '>
                            <h4 className='text-white font-[Inter] text-[16px] lg:text-[10px] xl:text-[12px] font-[400] hover:text-[#a0a0a0]' > <a href="#scorpion">What is Scorpion Casino?</a> </h4>
                            <h4 className='text-white font-[Inter] text-[16px] lg:text-[10px] xl:text-[12px] font-[400] hover:text-[#a0a0a0]'>  <a href="#howto">How to Buy</a></h4>
                            <h4 className='text-white font-[Inter] text-[16px] lg:text-[10px] xl:text-[12px] font-[400] hover:text-[#a0a0a0]' > <a href="#whitepaper">Whitepaper</a> </h4>
                            <h4 className='text-white font-[Inter] text-[16px] lg:text-[10px] xl:text-[12px] font-[400] hover:text-[#a0a0a0]' > <a href="#token">Tokenomics</a> </h4>
                            <h4 className='text-white font-[Inter] text-[16px] lg:text-[10px] xl:text-[12px] font-[400] hover:text-[#a0a0a0]' > <a href="#success">Growth Potential</a> </h4>
                            <h4 className='text-white font-[Inter] text-[16px] lg:text-[10px] xl:text-[12px] font-[400] hover:text-[#a0a0a0]'> <a href="#faqs">FAQ</a> </h4>

                        </div>

                        <li className='flex items-center xs:hidden sm:hidden md:hidden'>
                            <div className='relative '>

                                <button onClick={handleLangDropdown} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-white font-medium rounded-lg text-sm w-[full]  py-2.5 text-center inline-flex items-center px-2"
                                    style={{
                                    }} type="button" >
                                    <img src={flg} width={20} className=" mr-2" />
                                    {lang}
                                    <svg className={`fill-current text-white h-4 w-4 transform ${langStatus ? "rotate-180" : ""}`} aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>

                                {
                                    langStatus &&
                                    <>
                                    <div id="dropdown" class="absolute w-[1000px] hoverdropbg -right-[203%] top-[181%]   z-10 bg-white divide-y divide-gray-100 rounded-lg shadow " >
                                        <ul class="text-sm text-black " aria-labelledby="dropdownDefaultButton">
                                            <div className='relative'>
                                                <HoverDropDn />
                                               
                                            </div>
                                            <div className="pointer-events-none  absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">

                                            </div>


                                        </ul>
                                    </div>
                                        <div onClick={handleLangDropdown} className='relative'>
                                            <div className='bg-[#faebd700] !w-[1400px] -top-[2] right-[-513%] h-[100vh] absolute '></div>
                                        </div>
                                        </>
                                }

                            </div>

                        </li>

                    </div>
                </div>
                <div className='flex items-center '>
                    <button className='bgcolor  2xl:text-[18px] xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[16px] text-[12px] font-[Inter] font-[700] rounded-full px-4 h-[40px]'>Connect Wallet</button>
                 {/* <button className='2xl:hidden xl:hidden lg:hidden md:hidden sm:block block px-3  rounded-full items-center justify-start w-[165px] xs:w-[150px] lg:w-[150px] h-[38px] flex items-center  p-1.5 text-[13px] xs:text-[12px] font-semibold font-[poppins] text-white space-x-1 relative bg-[#3f3f3f]' >
                                        <div className='absolute bg-white -right-[2.5px] h-[40px] w-[40px] rounded-full border border-[#3f3f3f] flex justify-center items-center'>
                                            <span className='  '>
                                                <img className='' src={WalletBlue} alt="" />
                                            </span>
                                        </div>
                                        <span>
                                            Connect Wallet
                                        </span>

                                    </button> */}
                </div>
            </header >
            {
                navBarOpen &&
                <div className='' >

                    <div className=' relative  space-y-8 py-12 px-6 2xl:hidden xl:hidden lg:hidden h-[990px] bg-[#111010] w-full left-0 absolute'>
                        <button className='text-white font-[Inter] text-[16px] font-[400] hover:text-[#a0a0a0]' onClick={handleNavbarMenuClose}  >What is Scorpion Casino?</button>
                        <h4 className='text-white font-[Inter] text-[16px] font-[400] hover:text-[#a0a0a0]' onClick={handleNavbarMenuClose} > Growth Potential </h4>
                        <h4 className='text-white font-[Inter] text-[16px] font-[400] hover:text-[#a0a0a0]' onClick={handleNavbarMenuClose} > Whitepaper </h4>
                        <h4 className='text-white font-[Inter] text-[16px] font-[400] hover:text-[#a0a0a0]' onClick={handleNavbarMenuClose} > Tokenomics </h4>
                       
                        <h4 className='text-white font-[Inter] text-[16px] font-[400] hover:text-[#a0a0a0]' onClick={handleNavbarMenuClose}>FAQ</h4>
                     

                    </div>
                </div>
            }


        </nav >
    )
}
export default Navbar;

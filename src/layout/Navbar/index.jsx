
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
        <nav className=" z-10 bg-[#111010] fixed  top-0 2xl:px-[90px] xl:px-[90px] lg:px-[90px] md:px-[90px] sm:px-4 xs:px-4  py-6 sm:py-0 xs:py-3 w-full " >
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
                            <a href="#"  >
                                <img src={Logo} className="h-[55px] xs:h-[52px] sm:h-[53px] w-[100%]" alt="Metropoly Logo" />
                            </a>
                        </div>


                    </div>
                    <div className='flex items-center justify-between xs:justify-start space-x-5 xs:space-x-0 '>
                        <div className='flex justify-between space-x-6 xs:hidden sm:hidden md:hidden '>
                            <h4 className='text-white font-[poppins] text-[16px] lg:text-[10px] xl:text-[12px] font-[400] hover:text-[#a0a0a0]' > <a href="#future">What is Scorpion Casino?</a> </h4>
                            <h4 className='text-white font-[poppins] text-[16px] lg:text-[10px] xl:text-[12px] font-[400] hover:text-[#a0a0a0]' > <a href="#groth">Growth Potential</a> </h4>
                            <h4 className='text-white font-[poppins] text-[16px] lg:text-[10px] xl:text-[12px] font-[400] hover:text-[#a0a0a0]' > <a href="#whitepaper">Whitepaper</a> </h4>
                            <h4 className='text-white font-[poppins] text-[16px] lg:text-[10px] xl:text-[12px] font-[400] hover:text-[#a0a0a0]' > <a href="#tokenomics">Tokenomics</a> </h4>
                            <h4 className='text-white font-[poppins] text-[16px] lg:text-[10px] xl:text-[12px] font-[400] hover:text-[#a0a0a0]'>  <a href="#howtobuy">How to Buy</a></h4>
                            <h4 className='text-white font-[poppins] text-[16px] lg:text-[10px] xl:text-[12px] font-[400] hover:text-[#a0a0a0]'> <a href="#faqs">FAQ</a> </h4>

                        </div>

                        <li className='flex items-center xs:hidden sm:hidden md:hidden'>
                            <div className='relative '>

                                <button onClick={handleLangDropdown} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-white font-medium rounded-lg text-sm w-[full]  py-2.5 text-center inline-flex items-center px-2"
                                    style={{
                                    }} type="button" >
                                    <img src={flg} width={20} className=" mr-2" />
                                    {lang}
                                    <svg  className={`fill-current text-white h-4 w-4 transform ${langStatus ? "rotate-180" : ""}`} aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>

                                {
                                    langStatus &&
                                    <div id="dropdown" class="absolute w-[1000px] hoverdropbg -right-[70%]   z-10 bg-white divide-y divide-gray-100 rounded-lg shadow " >
                                        <ul class="text-sm text-black " aria-labelledby="dropdownDefaultButton">
                                            <div>
                                                <HoverDropDn />
                                            </div>
                                            <div className="pointer-events-none  absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                               
                                            </div>
                                          

                                        </ul>
                                    </div>
                                }

                            </div>

                        </li>

                    </div>
                </div>
                <div className='flex items-center'>
                    <button className='bgcolor text-[18px] font-[Poppins] font-[600] rounded-full px-4 h-[40px]'>Connect Wallet</button>
                </div>
            </header >
            {
                navBarOpen &&
                <div className='' >

                    <div className=' relative  space-y-8 py-12 px-6 2xl:hidden xl:hidden lg:hidden h-[990px] bg-[#111010] w-full left-0 absolute'>
                        <button className='text-white font-[poppins] text-[16px] font-[400] hover:text-[#a0a0a0]' onClick={handleNavbarMenuClose}  >What is Scorpion Casino?</button>
                        <h4 className='text-white font-[poppins] text-[16px] font-[400] hover:text-[#a0a0a0]' onClick={handleNavbarMenuClose} > Growth Potential </h4>
                        <h4 className='text-white font-[poppins] text-[16px] font-[400] hover:text-[#a0a0a0]' onClick={handleNavbarMenuClose} > Whitepaper </h4>
                        <h4 className='text-white font-[poppins] text-[16px] font-[400] hover:text-[#a0a0a0]' onClick={handleNavbarMenuClose} > Tokenomics </h4>
                        <h4 className='text-white font-[poppins] text-[16px] font-[400] hover:text-[#a0a0a0]' onClick={handleNavbarMenuClose}> How to Buy</h4>
                        <h4 className='text-white font-[poppins] text-[16px] font-[400] hover:text-[#a0a0a0]' onClick={handleNavbarMenuClose}>FAQ</h4>
                        <li className='flex items-center'>
                            <div className='relative '>

                                <button onClick={handleLangDropdown} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-white font-medium rounded-lg text-sm w-[full]  py-2.5 text-center inline-flex items-center px-2"
                                    style={{
                                        border: "1px solid #727272",
                                        width: "100%"
                                    }} type="button" >
                                    <img src={globe} width={20} className=" mr-2" />
                                    {lang}
                                    <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>

                                {
                                    langStatus &&
                                    <div id="dropdown" class="absolute w-[100%]  z-10 bg-white divide-y divide-gray-100 rounded-lg shadow " >
                                        <ul class="text-sm text-black " aria-labelledby="dropdownDefaultButton">
                                            <li>
                                                <button onClick={() => {
                                                    handelClick('en')
                                                    setLangStatus(!langStatus)
                                                    setLang("English")

                                                }
                                                } style={{ width: "100%" }} class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" >English</button>
                                            </li>
                                            <li>
                                                <button onClick={() => {
                                                    setLangStatus(!langStatus)
                                                    handelClick('de')
                                                    setLang("German")
                                                }} style={{ width: "100%" }} class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">German</button>
                                            </li>
                                            <li>
                                                <button onClick={() => {
                                                    setLangStatus(!langStatus)
                                                    handelClick('fr')
                                                    setLang("French")

                                                }} style={{ width: "100%" }} class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">French</button>
                                            </li>

                                        </ul>
                                    </div>
                                }

                            </div>

                        </li>

                    </div>
                </div>
            }

            {/* <div className="z-999 relative w-full  xl:hidden lg:hidden ">
                <ul
                    className="text-base text-gray-700 pt-4   md:pt-0 mb-4"
                >




                    <li >






                    </li>
                </ul>
            </div> */}

        </nav >
    )
}
export default Navbar;

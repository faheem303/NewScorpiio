
import React from 'react';

import Button from '../../components/Button/button';
import facebook from "../../assects/images/facebook.svg"
import Twitter from "../../assects/svgs/twittersvg.svg"
import Tle from "../../assects/svgs/tle.svg"
import Tme from "../../assects/svgs/tmesvg.svg"
import Discord from "../../assects/svgs/discordsvg.svg"
import Instagram from '../../assects/svgs/Instagramsvg.svg'



const Footer = () => {
    return (
        <div className=' bg-[#000000] py-12'>
            <div className='px-20 sm:px-10 xs:px-6 py-6 space-y-10'>
                <div className=''>
                    <div className='space-y-3'>
                        <div className='flex justify-between'>
                            <h3 className='text-[white] text-[20px] font-[poppins] font-[700]'>Join Our Growing Community</h3>
                            <div className='flex space-x-3'>
                                <a href='3' target="_blank">
                                    <Button classes=" flex items-center justify-center border hover:border border text-[9px] p-1  w-[30px] h-[30px] rounded-md" wallet={Twitter} />
                                </a>
                                <a href='3' target="_blank">
                                    <Button classes="flex items-center justify-center border hover:border border text-[9px] p-1  w-[30px] h-[30px] rounded-md" wallet={Tle} />
                                </a>
                            </div>
                        </div>
                        <div>
                            <p className='text-[white] text-[12px] font-[poppins] font-[400]'>Join the Scorpion Casino community today and start experiencing all 
                                the benefits  of the world's first social cryptocurrency ecosystem
                                powered by $SCORP.</p>
                        </div>
                    </div>
                    <div className='xs:space-y-2'>
                        <div className='flex justify-between items-center pt-[5rem]'>
                            <h3 className='text-[white] text-[20px] xs:text-[15px] font-[poppins] font-[700]'>Scorpion Casino</h3>
                            <p className='text-[white] text-[12px] xs:text-[11px] font-[poppins] font-[400]'>Copyright 2023. Scorpion Casino</p>
                        </div>
                        <div>
                            <p className='text-[white] text-[12px] font-[poppins] font-[400]'>Registration Number: 116331</p>

                        </div>
                        <div className='flex justify-between items-center'>

                            <div className='flex space-x-4'>
                                <p className='text-[white] text-[12px] xs:text-[10px] font-[poppins] font-[400]'>Terms of Service</p>
                                <p className='text-[white] text-[12px] xs:text-[10px] font-[poppins] font-[400]'>Privacy Policy</p>
                                <p className='text-[white] text-[12px] xs:text-[10px] font-[poppins] font-[400]'>Contact Us</p>
                                <p className='text-[white] text-[12px] xs:text-[10px] font-[poppins] font-[400]'>Token Sale Agreement</p>

                            </div>
                        </div>
                    </div>
                    <div className='pt-[1rem]'>
                        <p className='text-[#B4A5A5] text-[12px] font-[poppins] font-[400]'>
                            Scorpion Casino LTD operates the website scorpioncasino.org
                            (“Platform”). By using the Platform, you accept our Terms of
                            Service, Privacy Policy, Cookie Policy and SCORP Token sale
                            agreement. Cryptocurrency may be unregulated in your
                            jurisdiction. The value of cryptocurrencies may go down as well as
                            the up. Profits may be subject to capital gains or other taxes
                            applicable in your jurisdiction. Nothing on this website s hould be
                            construed as an offer or recommendation to buy, sell or invest.
                            You are solely responsible for determining whether any purchase
                            or related transaction is appropriate for you based on your
                            personal objectives, financial situation and risk tolerance. You
                            should consult with trusted, licensed legal professionals and
                            advisor for any legal, tax, insurance or business advice. Scorpion
                            Casino does not g uarantee any performance, outcome or return
                            of capital for any cryptocurrency posted on this website. By
                            accessing this site and any pages thereof, you agree to be bound
                            by the SCORP sales agreement. Buying cryptocurrencies involve
                            risk and may result in partial or total loss.
                        </p>
                    </div>
                    {/* <div className="flex  space-x-2">
                        <a href='https://www.instagram.com/metropoly_io' target="_blank">
                            <Button classes=" flex items-center justify-center border hover:border-2 border-blue-300 text-[9px]  w-[61px] h-[46px] rounded-md" wallet={Instagram} />
                        </a>
                        <a href='https://twitter.com/metropoly_io' target="_blank">
                            <Button classes="flex items-center justify-center border hover:border-2 border-blue-300 text-[9px]  w-[61px] h-[46px] rounded-md" wallet={Twitter} />
                        </a>
                        <a href='https://t.me/metropoly_official' target="_blank">
                            <Button classes=" flex items-center justify-center border hover:border-2 border-blue-300 text-[9px]  w-[61px] h-[46px] rounded-md" wallet={Tme} />
                        </a>
                        <a href='https://discord.gg/Metropoly' target="_blank">
                            <Button classes=" flex items-center justify-center border hover:border-2 border-blue-300 text-[9px]  w-[61px] h-[46px] rounded-md" wallet={Discord} />
                        </a>

                    </div> */}
                </div>


            </div>
        </div>
    )
}
export default Footer;
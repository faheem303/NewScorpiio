import React, { useState } from "react";
import Button from "../../components/Button/button";
import Beta from "../../assects/images/beta.png"




const BiggestSection = () => {

    const [show, setShow] = useState(false);
    const [showmob, setShowmob] = useState(false);

    const handelShowMore = () => {
        setShow(!show)
    }
    
    const handelShowMoremob = () => {
        setShowmob(!showmob)
    }
    // console.log("check", handelShowMoremob)
    return (
        <div>
            <div className="overflow-scroll scroll  2xl:block xl:block lg:block md:hidden sm:hidden hidden">
                <div className="Biggestbg relative z-[2] w-[100%] min-w-[900px]" >
                    <div className="flex items-center px-[29px] py-[40px] justify-between xs:block sm:block md:block">
                        <div className=" flex ">
                            <h3 className="w-[100%] max-w-[26%] text-[32px] gradientText uppercase font-[900] font-[Inter] leading-[45px] text-white border-r ">BIGGEST BUY-IN COMPETITION</h3>
                            <p className="w-[80%] text-white text-[18px] font-[inter] pl-5 font-[400] leading-[28px]">We’ve established a Top 10 Biggest Buy-in competition for all pre-sale participants, with a prize pool of 25,000 USD (in $SCORP). This is our way of rewarding those who recognize the immense potential before others and have made a significant contribution to the success of the Scorpion Casino ecosystem.</p>
                        </div>
                    </div>
                    <div className="px-[20px] pb-[40px] 2xl:block xl:block lg:block md:hidden sm:hidden hidden space-y-3">
                        <div className="px-6">
                            <ul className="flex justify-between ">
                                <li className="text-[#F9C333] w-[120px]  text-[18px] font-[800] leading-[28px] font-[inter]" >Rank</li>
                                <li className="text-[#F9C333] w-[180px] text-center  text-[18px] font-[800] leading-[28px] font-[inter]" >Wallet</li>
                                <li className="text-[#F9C333] w-[180px] text-center  text-[18px] font-[800] leading-[28px] font-[inter]" >Date</li>
                                <li className="text-[#F9C333] w-[180px] text-center  text-[18px] font-[800] leading-[28px] font-[inter]" >No. of TX</li>
                                <li className="text-[#F9C333] w-[180px] text-center  text-[18px] font-[800] leading-[28px] font-[inter]" >Total Buy</li>
                                <li className="text-[#F9C333] w-[180px] text-center  text-[18px] font-[800] leading-[28px] font-[inter]" >NFT</li>
                                <li className="text-[#F9C333] w-[120px] text-end  text-[18px] font-[800] leading-[28px] font-[inter]" >Prize</li>
                            </ul>
                        </div>
                        <div className="px-6 tablerow">
                            <ul className="flex justify-between ">
                                <li className="text-[#FFF9AD] w-[120px]  py-2 text-[18px] font-[600] leading-[28px] font-[inter]" >1st</li>
                                <li className="text-[#FFF9AD] w-[180px] text-center py-2 text-[18px] font-[600] leading-[28px] font-[inter]" >0x589...18e01</li>
                                <li className="text-[#FFF9AD] w-[180px] text-center py-2 text-[18px] font-[600] leading-[28px] font-[inter]" >2023-07-27</li>
                                <li className="text-[#FFF9AD] w-[180px] text-center py-2 text-[18px] font-[600] leading-[28px] font-[inter]" >5</li>
                                <li className="text-[#FFF9AD] w-[180px] text-center py-2 text-[18px] font-[600] leading-[28px] font-[inter]" >$100,590.58</li>
                                <li className="text-[#FFF9AD] w-[180px] text-center py-2 text-[18px] font-[600] leading-[28px] font-[inter]" >Diamond</li>
                                <li className="text-[#FFF9AD] w-[120px] text-end py-2 text-[18px] font-[600] leading-[28px] font-[inter]" >$10,000</li>
                            </ul>
                        </div>
                        <div className="px-6 tablerow2">
                            <ul className="flex justify-between ">
                                <li className="text-[#FFF9AD] w-[120px]  py-2 text-[18px] font-[600] leading-[28px] font-[inter]" >2st</li>
                                <li className="text-[#FFF9AD] w-[180px] text-center py-2 text-[18px] font-[600] leading-[28px] font-[inter]" >0xbbf...c627c</li>
                                <li className="text-[#FFF9AD] w-[180px] text-center py-2 text-[18px] font-[600] leading-[28px] font-[inter]" >2023-11-02</li>
                                <li className="text-[#FFF9AD] w-[180px] text-center py-2 text-[18px] font-[600] leading-[28px] font-[inter]" >1</li>
                                <li className="text-[#FFF9AD] w-[180px] text-center py-2 text-[18px] font-[600] leading-[28px] font-[inter]" >$63,560</li>
                                <li className="text-[#FFF9AD] w-[180px] text-center py-2 text-[18px] font-[600] leading-[28px] font-[inter]" >Platinum</li>
                                <li className="text-[#FFF9AD] w-[120px] text-end py-2 text-[18px] font-[600] leading-[28px] font-[inter]" >$5,000</li>
                            </ul>
                        </div>
                        <div className="px-6 tabalerow3">
                            <ul className="flex justify-between ">
                                <li className="text-[#FFF9AD] w-[120px]  py-2 text-[18px] font-[600] leading-[28px] font-[inter]" >3rd</li>
                                <li className="text-[#FFF9AD] w-[180px] text-center py-2 text-[18px] font-[600] leading-[28px] font-[inter]" >0xc6e...62f8e</li>
                                <li className="text-[#FFF9AD] w-[180px] text-center py-2 text-[18px] font-[600] leading-[28px] font-[inter]" >2023-10-06</li>
                                <li className="text-[#FFF9AD] w-[180px] text-center py-2 text-[18px] font-[600] leading-[28px] font-[inter]" >3</li>
                                <li className="text-[#FFF9AD] w-[180px] text-center py-2 text-[18px] font-[600] leading-[28px] font-[inter]" >$30,192.16</li>
                                <li className="text-[#FFF9AD] w-[180px] text-center py-2 text-[18px] font-[600] leading-[28px] font-[inter]" >Platinum</li>
                                <li className="text-[#FFF9AD] w-[120px] text-end py-2 text-[18px] font-[600] leading-[28px] font-[inter]" >$3,000</li>
                            </ul>
                        </div>
                        <div className="px-6 ">
                            <ul className="flex justify-between ">
                                <li className="text-[#fff] w-[120px]  py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >4th</li>
                                <li className="text-[#fff] w-[180px] text-center py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >0x9cb...5965b</li>
                                <li className="text-[#fff] w-[180px] text-center py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >2023-10-06</li>
                                <li className="text-[#fff] w-[180px] text-center py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >12</li>
                                <li className="text-[#fff] w-[180px] text-center py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >$26,103.44</li>
                                <li className="text-[#fff] w-[180px] text-center py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >Platinum</li>
                                <li className="text-[#fff] w-[120px] text-end py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >$2,000</li>
                            </ul>
                        </div>
                        <div className="px-6 ">
                            <ul className="flex justify-between ">
                                <li className="text-[#fff] w-[120px]  py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >5th</li>
                                <li className="text-[#fff] w-[180px] text-center py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >0x112...950a6</li>
                                <li className="text-[#fff] w-[180px] text-center py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >2023-09-04</li>
                                <li className="text-[#fff] w-[180px] text-center py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >2</li>
                                <li className="text-[#fff] w-[180px] text-center py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >$25,350.69</li>
                                <li className="text-[#fff] w-[180px] text-center py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >Platinum</li>
                                <li className="text-[#fff] w-[120px] text-end py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >$1,500</li>
                            </ul>
                        </div>
                        {
                            show &&
                            <>

                                <div className="px-6 ">
                                    <ul className="flex justify-between ">
                                        <li className="text-[#fff] w-[120px]  py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >6th</li>
                                        <li className="text-[#fff] w-[180px] text-center py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >0x9cb...5965b</li>
                                        <li className="text-[#fff] w-[180px] text-center py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >2023-10-06</li>
                                        <li className="text-[#fff] w-[180px] text-center py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >12</li>
                                        <li className="text-[#fff] w-[180px] text-center py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >$26,103.44</li>
                                        <li className="text-[#fff] w-[180px] text-center py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >Platinum</li>
                                        <li className="text-[#fff] w-[120px] text-end py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >$2,000</li>
                                    </ul>
                                </div>
                                <div className="px-6 ">
                                    <ul className="flex justify-between ">
                                        <li className="text-[#fff] w-[120px]  py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >7th</li>
                                        <li className="text-[#fff] w-[180px] text-center py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >0x112...950a6</li>
                                        <li className="text-[#fff] w-[180px] text-center py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >2023-09-04</li>
                                        <li className="text-[#fff] w-[180px] text-center py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >2</li>
                                        <li className="text-[#fff] w-[180px] text-center py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >$25,350.69</li>
                                        <li className="text-[#fff] w-[180px] text-center py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >Platinum</li>
                                        <li className="text-[#fff] w-[120px] text-end py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >$1,500</li>
                                    </ul>
                                </div>
                                <div className="px-6 ">
                                    <ul className="flex justify-between ">
                                        <li className="text-[#fff] w-[120px]  py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >8th</li>
                                        <li className="text-[#fff] w-[180px] text-center py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >0x112...950a6</li>
                                        <li className="text-[#fff] w-[180px] text-center py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >2023-09-04</li>
                                        <li className="text-[#fff] w-[180px] text-center py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >2</li>
                                        <li className="text-[#fff] w-[180px] text-center py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >$25,350.69</li>
                                        <li className="text-[#fff] w-[180px] text-center py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >Platinum</li>
                                        <li className="text-[#fff] w-[120px] text-end py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >$1,500</li>
                                    </ul>
                                </div>
                                <div className="px-6 ">
                                    <ul className="flex justify-between ">
                                        <li className="text-[#fff] w-[120px]  py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >9th</li>
                                        <li className="text-[#fff] w-[180px] text-center py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >0x112...950a6</li>
                                        <li className="text-[#fff] w-[180px] text-center py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >2023-09-04</li>
                                        <li className="text-[#fff] w-[180px] text-center py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >2</li>
                                        <li className="text-[#fff] w-[180px] text-center py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >$25,350.69</li>
                                        <li className="text-[#fff] w-[180px] text-center py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >Platinum</li>
                                        <li className="text-[#fff] w-[120px] text-end py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >$1,500</li>
                                    </ul>
                                </div>
                                <div className="px-6 ">
                                    <ul className="flex justify-between ">
                                        <li className="text-[#fff] w-[120px]  py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >10th</li>
                                        <li className="text-[#fff] w-[180px] text-center py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >0x112...950a6</li>
                                        <li className="text-[#fff] w-[180px] text-center py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >2023-09-04</li>
                                        <li className="text-[#fff] w-[180px] text-center py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >2</li>
                                        <li className="text-[#fff] w-[180px] text-center py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >$25,350.69</li>
                                        <li className="text-[#fff] w-[180px] text-center py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >Platinum</li>
                                        <li className="text-[#fff] w-[120px] text-end py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >$1,500</li>
                                    </ul>
                                </div>
                            </>

                        }

                    </div>



                </div>
                {
                    !show &&
                    <div className="flex justify-center pt-[30px]">
                        <button onClick={handelShowMore} className="bgcolor text-[18px] font-[600] font-[inter] h-[64px] px-[44px] rounded-full">Load More</button>
                    </div>
                }

                <p id='howto'></p>
            </div>
            <div className="2xl:hidden xl:hidden lg:hidden md:block sm:block block space-y-8">
                <div className="text-center space-y-5">
                    <h3 className="gradientText text-[30px] font-[900]">BIGGEST BUY-IN COMPETITION</h3>
                    <p className="text-[14px] text-white">We’ve established a Top 10 Biggest Buy-in competition for all pre-sale participants, with a prize pool of 25,000 USD (in $SCORP). This is our way of rewarding those who recognize the immense potential before others and have made a significant contribution to the success of the Scorpion Casino ecosystem.</p>
                </div>
                <div className="">
                    <table className=" ">
                        <tr className="">
                            <th className="text-white p-2 w-[120px] text-center  border border-3 border-[#d2ac47] text-[14px] font-[800] leading-[28px] font-[inter]" >Rank</th>
                            <th className="text-white p-2 w-[180px] text-center border border-3 border-[#d2ac47] text-[14px] font-[800] leading-[28px] font-[inter]" >Wallet</th>
                            <th className="text-white p-2 w-[180px] text-center border border-3 border-[#d2ac47] text-[14px] font-[800] leading-[28px] font-[inter]" >Total Buy</th>
                            <th className="text-white p-2 w-[120px] text-center  border border-3 border-[#d2ac47] text-[14px] font-[800] leading-[28px] font-[inter]" >Prize</th>
                        </tr>
                        <tbody>
                            <tr className="bg-[#9a7f37]">
                                <td className="text-[14px] text-center text-white p-2 border border-3 border-[#d2ac47]">1ST</td>
                                <td className="text-[14px] text-center text-white p-2 border border-3 border-[#d2ac47]">0x145...122eb</td>
                                <td className="text-[14px] text-center text-white p-2 border border-3 border-[#d2ac47]">$103,213.42</td>
                                <td className="text-[14px] text-center text-white p-2 border border-3 border-[#d2ac47]">$10,000</td>
                            </tr>
                            <tr className="bg-[#5f5f5f]">
                                <td className="text-[14px] text-center text-white p-2 border border-3 border-[#d2ac47]">2ND</td>
                                <td className="text-[14px] text-center text-white p-2 border border-3 border-[#d2ac47]">0x589...18e01</td>
                                <td className="text-[14px] text-center text-white p-2 border border-3 border-[#d2ac47]">$100,590.58</td>
                                <td className="text-[14px] text-center text-white p-2 border border-3 border-[#d2ac47]">$5,000</td>
                            </tr>
                            <tr className="bg-[#3c3121]">
                                <td className="text-[14px] text-center text-white p-2 border border-3 border-[#d2ac47]">3RD</td>
                                <td className="text-[14px] text-center text-white p-2 border border-3 border-[#d2ac47]">0xbbf...c627c</td>
                                <td className="text-[14px] text-center text-white p-2 border border-3 border-[#d2ac47]">$100,327.64</td>
                                <td className="text-[14px] text-center text-white p-2 border border-3 border-[#d2ac47]">$3,000</td>
                            </tr>
                            <tr>
                                <td className="text-[14px] text-center text-white p-2 border border-3 border-[#d2ac47]">4TH</td>
                                <td className="text-[14px] text-center text-white p-2 border border-3 border-[#d2ac47]">0xc6e...62f8e</td>
                                <td className="text-[14px] text-center text-white p-2 border border-3 border-[#d2ac47]">$30,192.16</td>
                                <td className="text-[14px] text-center text-white p-2 border border-3 border-[#d2ac47]">$2,000</td>
                            </tr>
                            <tr>
                                <td className="text-[14px] text-center text-white p-2 border border-3 border-[#d2ac47]">5TH</td>
                                <td className="text-[14px] text-center text-white p-2 border border-3 border-[#d2ac47]">0x9cb...5965b</td>
                                <td className="text-[14px] text-center text-white p-2 border border-3 border-[#d2ac47]">$26,103.44</td>
                                <td className="text-[14px] text-center text-white p-2 border border-3 border-[#d2ac47]">$1,500</td>
                            </tr>


                        </tbody>
                            {
                                showmob &&
                                <>
                                 <tr>
                                <td className="text-[14px] text-center text-white p-2 border border-3 border-[#d2ac47]">6TH</td>
                                <td className="text-[14px] text-center text-white p-2 border border-3 border-[#d2ac47]">0x112...950a6</td>
                                <td className="text-[14px] text-center text-white p-2 border border-3 border-[#d2ac47]">$25,350.69</td>
                                <td className="text-[14px] text-center text-white p-2 border border-3 border-[#d2ac47]">$900</td>
                            </tr>
                            <tr>
                                <td className="text-[14px] text-center text-white p-2 border border-3 border-[#d2ac47]">7TH</td>
                                <td className="text-[14px] text-center text-white p-2 border border-3 border-[#d2ac47]">	0xcb7...47de2</td>
                                <td className="text-[14px] text-center text-white p-2 border border-3 border-[#d2ac47]">$25,284.29</td>
                                <td className="text-[14px] text-center text-white p-2 border border-3 border-[#d2ac47]">$800</td>
                            </tr>
                            <tr>
                                <td className="text-[14px] text-center text-white p-2 border border-3 border-[#d2ac47]">8TH</td>
                                <td className="text-[14px] text-center text-white p-2 border border-3 border-[#d2ac47]">0xd1a...63445</td>
                                <td className="text-[14px] text-center text-white p-2 border border-3 border-[#d2ac47]">$25,125.30</td>
                                <td className="text-[14px] text-center text-white p-2 border border-3 border-[#d2ac47]">$700</td>
                            </tr>
                            <tr>
                                <td className="text-[14px] text-center text-white p-2 border border-3 border-[#d2ac47]">9TH</td>
                                <td className="text-[14px] text-center text-white p-2 border border-3 border-[#d2ac47]">0x94e...bbb32</td>
                                <td className="text-[14px] text-center text-white p-2 border border-3 border-[#d2ac47]">$22,195.92</td>
                                <td className="text-[14px] text-center text-white p-2 border border-3 border-[#d2ac47]">$600</td>
                            </tr>
                            <tr>
                                <td className="text-[14px] text-center text-white p-2 border border-3 border-[#d2ac47]">10TH</td>
                                <td className="text-[14px] text-center text-white p-2 border border-3 border-[#d2ac47]">	0x7c4...a4dda</td>
                                <td className="text-[14px] text-center text-white p-2 border border-3 border-[#d2ac47]">$18,624</td>
                                <td className="text-[14px] text-center text-white p-2 border border-3 border-[#d2ac47]">$500</td>
                            </tr>
                                </>
                            }
                                {
                                    !showmob &&
                                    <div className="flex justify-center pt-[30px]">
                                        <button onClick={handelShowMoremob} className="bgcolor text-[14px] font-[600] font-[inter] h-[40px] px-[22px] rounded-full">Load More</button>
                                    </div>
                                }

                    </table>
                </div>
            </div>
        </div>
    )
}
export default BiggestSection 

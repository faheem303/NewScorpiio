import React from "react";


import Scro from "../../assects/images/gam (1).png"
import BB from "../../assects/images/gam (2).png"
import third from "../../assects/images/gam (3).png"
import fourth from "../../assects/images/gam (4).png"
import Abc from "../../assects/images/gam (5).png"
import Six from "../../assects/images/gam (6).png"
import tbl from "../../assects/svgs/tbl.svg"
import WhitepaperSection from "./Whitepaper";



const CasinoIndustry = () => {


    const TableData = [
        {
            id: 1,
            title: "Accept Crypto"
        },
        {
            id: 1,
            title: "Live Bets"
        },
        {
            id: 1,
            title: "Affiliate System"
        },
        {
            id: 1,
            title: "Own Token"
        },
        {
            id: 1,
            title: "Staking"
        },
        {
            id: 1,
            title: "Passive Income"
        }
    ]


    const TableColDataP = [
        {
            id: 1,
            img: Scro,
            para: "Scorpion",
            TableDataCol: [
                {
                    id: 1,
                    img: tbl,
                },
                {
                    id: 2,
                    img: tbl,
                },
                {
                    id: 3,
                    img: tbl,
                },
                {
                    id: 4,
                    img: tbl,
                },
                {
                    id: 5,
                    img: tbl,
                },
                {
                    id: 6,
                    img: tbl,
                },
            ]

        },
        {
            id: 2,
            img: BB,
            para: "Bc.Games",
            TableDataCol: [
                {
                    id: 1,
                    img: tbl,
                },
                {
                    id: 2,
                    img: tbl,
                },
                {
                    id: 3,
                    img: tbl,
                },
                {
                    id: 4,
                },
                {
                    id: 5,
                },
                {
                    id: 6,
                },
            ]

        },
        {
            id: 3,
            img: third,
            para: "Roobit",
            TableDataCol: [
                {
                    id: 1,
                    img: tbl,
                },
                {
                    id: 2,
                    img: tbl,
                },
                {
                    id: 3,
                    img: tbl,
                },
                {
                    id: 4,
                },
                {
                    id: 5,
                },
                {
                    id: 6,
                },
            ]

        },
        {
            id: 4,
            img: fourth,
            para: "Roobit",
            TableDataCol: [
                {
                    id: 1,
                    img: tbl,
                },
                {
                    id: 2,
                    img: tbl,
                },
                {
                    id: 3,
                    img: tbl,
                },
                {
                    id: 4,
                    img: tbl,
                },
                {
                    id: 5,
                    img: tbl,
                },
                {
                    id: 6,
                },
            ]

        },
        {
            id: 5,
            img: Abc,
            para: "owl games",
            TableDataCol: [
                {
                    id: 1,
                    img: tbl,
                },
                {
                    id: 2,
                    img: tbl,
                },
                {
                    id: 3,
                    img: tbl,
                },
                {
                    id: 4,
                    img: tbl,
                },
                {
                    id: 5,
                   
                },
                {
                    id: 6,
                },
            ]

        },
        {
            id: 6,
            img: Six,
            para: "Stake",
            TableDataCol: [
                {
                    id: 1,
                    img: tbl,

                },
                {
                    id: 2,
                    img: tbl,

                },
                {
                    id: 3,
                    img: tbl,

                },
                {
                    id: 4,
                },
                {
                    id: 5,
                },
                {
                    id: 6,
                },
            ]

        },


    ]


    return (
        <div className=" space-y-[95px]" >
            <p style={{ top: "-100px", position: "relative" }} id="howItWork"></p>
            {/* <h5 className="text-[16px] text-center font-[500] text-gray-500 font-[Poppins]">Nothing can compare with us in theScorpion Casino with extremely innovative features.</h5> */}
            <div className="gambloingbg py-12 xs:py-8 sm:py-6 space-y-4  xs:w-[100%] sm:w-[100%] md:w-[100%] lg:w-[100%] m-auto   ">
            <h3 className="text-[43px] text-center font-[900] leading-[40px] uppercase xs:text-[30px] text-white font-[Inter] gradientText">DISRUPTING THE GAMBLING INDUSTRY </h3>

                <div className="flex w-[87%] mx-auto justify-around items-end ">
                    <div className="2xl:w-[25%] xl:[25%]  xs:w-[30%] sm:w-[30%] md:w-[30%] lg:w-[30%] mr-4 xs:mr-1">
                        {
                            TableData.map((item, id) => (

                                <div className="text-start xs:text-[8px] xs:font-[500] sm:text-[12px] w-[240px] xs:w-[100%] sm:w-[100%] md:w-[100%] font-[inter]  font-[700]  px-3 xs:px-1  xs:py-2 py-3  text-white"><h5>{item.title}</h5></div>
                            ))
                        }

                    </div>
                    <div className="w-[72%]">
                    <div className="flex justify-between">
                                    {
                                        TableColDataP.map((item) => (

                                            <div className="flex flex-col ">


                                                <div className="flex items-center flex-col pb-4">
                                                    <img className="h-[40px] xs:h-[20px] sm:h-[30px] sm:h-[35px]" src={item.img} alt="" />
                                                    <p className="text-white xs:text-[7px] sm:text-[12px] md:text-[12px] ">{item.para}</p>
                                                </div>


                                                <div  className=" ">

                                                    {item.TableDataCol.map((i) => (
                                                        <div
                                                            key={i.id}
                                                            className=" w-[110px] xs:w-[38px] sm:w-[55px] md:w-[65px] lg:w-[85px] py-[4px] flex justify-center   text-white"
                                                        >
                                                            <img className="h-[40px] xs:h-[20px] sm:h-[34px] md:h-[40px]" src={i.img} alt="" />
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>

                    </div>
                </div>
                <p id="whitepaper"></p>
            </div>
          
            <div  className="gambloingbg   m-auto md:w-[100%] sm:w-[100%] xs:w-[100%] lg:w-[100%]">
                <WhitepaperSection />
                <p id="token"></p>

            </div>
        </div>
    )
}
export default CasinoIndustry
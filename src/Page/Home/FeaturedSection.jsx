import React from "react";

import img1 from "../../assects/icons/fe (9).png"
import img2 from "../../assects/icons/fe (12).png"
import img3 from "../../assects/icons/fe (3).png"
import img4 from "../../assects/icons/fe (6).png"
import img5 from "../../assects/icons/fe (10).png"
import img6 from "../../assects/icons/fe (1).png"
import img7 from "../../assects/icons/fe (4).png"
import img8 from "../../assects/icons/fe (7).png"
import img9 from "../../assects/icons/fe (11).png"
import img10 from "../../assects/icons/fe (2).png"
import img11 from "../../assects/icons/fe (5).png"
import img12 from "../../assects/icons/fe (8).png"

const imgData = [
    
    {
        id: 1,
        imgName: img1,
    },
    {
        id: 2,
        imgName: img2,
    },
    {
        id: 3,
        imgName: img3,
    },
    {
        id: 4,
        imgName: img4,
    },
    {
        id: 5,
        imgName: img5,
    },
    {
        id: 6,
        imgName: img6,
    },
    {
        id: 7,
        imgName: img7,
    },
    {
        id: 8,
        imgName: img8,
    },
    {
        id: 9,
        imgName: img9,
    },
    {
        id: 10,
        imgName: img10,
    },
    {
        id: 11,
        imgName: img11,
    },
    {
        id: 12,
        imgName: img12,
    },
]




const FeaturedSection = () => {
    return (
        <>
            <div className="w-ful   px-10  bg-[#090909] py-12" >
                <div className="text-center">
                    <h2 className="font-[900] font-[inter] color text-[40px] xs:text-[30px] gradientText uppercase">Featured In</h2>
                </div>
                <div className="mx-auto px-4 pt-5 grid grid-cols-4 lg:grid-cols-4 md:grid-cols-2 gap-2 xs:grid-cols-2 sm:grid-cols-2 w-full flex 2xl:justify-between xl:justify-between lg:justify-between md:justify-evenly sm:justify-evenly justify-evenly flex-wrap">
                    {
                        imgData.map((item, id) => (
                            <a href={item.link} key={id} className="flex justify-center w-[170px] mx-auto md:flex md:justify-center sm:flex sm:justify-center xs:flex xs:justify-center">
                                <img className=" 2xl:w-[170px] xl:w-[170px] lg:w-[170px] md:w-[170px] sm:w-[125px] w-[125px]" src={item.imgName}  alt="" />
                            </a>
                        ))
                    }

                </div>

               <div id='future'></div>
            </div>

        </>
    )
}
export default FeaturedSection
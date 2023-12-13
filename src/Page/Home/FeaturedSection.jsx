import React from "react";

import img1 from "../../assects/svgs/evo.e50f73eb35beb77cc2ea.png.svg"
import img2 from "../../assects/svgs/image (2).svg"
import img3 from "../../assects/svgs/image (3).svg"
import img4 from "../../assects/svgs/image (4).svg"
import img5 from "../../assects/svgs/image (5).svg"
import img6 from "../../assects/svgs/image (6).svg"
import img7 from "../../assects/svgs/image (7).svg"
import img8 from "../../assects/svgs/image (8).svg"
import img9 from "../../assects/svgs/image (9).svg"
import img10 from "../../assects/svgs/image (10).svg"
import img11 from "../../assects/svgs/image (11).svg"

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
        imgName: img6,
    },
    {
        id: 8,
        imgName: img7,
    },
    {
        id: 9,
        imgName: img8,
    },
    {
        id: 10,
        imgName: img9,
    },
    {
        id: 11,
        imgName: img10,
    },
    {
        id: 12,
        imgName: img11,
    },
]




const FeaturedSection = () => {
    return (
        <>
            <div className="w-full 2xl:px-44 xl:px-44 px-10  bg-[#090909] py-12" >
                <div className="text-center">
                    <h2 className="font-[800] font-[Poppins] color text-[34px] xs:text-[30px] gradientText uppercase">Featured In</h2>
                </div>
                <div className="pt-5 grid grid-cols-4 lg:grid-cols-4 md:grid-cols-2 gap-2 xs:grid-cols-2 sm:grid-cols-2 w-full flex 2xl:justify-between xl:justify-between lg:justify-between md:justify-evenly sm:justify-evenly justify-evenly flex-wrap">
                    {
                        imgData.map((item, id) => (
                            <a href={item.link} key={id} className="md:flex md:justify-center sm:flex sm:justify-center xs:flex xs:justify-center">
                                <img className="items-center content-center w-[200px] h-[100px]" src={item.imgName}  alt="" />
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
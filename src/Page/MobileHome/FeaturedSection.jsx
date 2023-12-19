import React from "react";
import yahoo from "../../assects/images/company/yahoo.png";
import journal from "../../assects/images/company/journal.png";
import azcentral from "../../assects/images/company/azcentral.png";
import market from "../../assects/images/company/market.png";

const imgData = [
    {
        id: 7,
        imgName: yahoo,
    },
    {
        id: 5,
        imgName: journal,
    },
    {
        id: 3,
        imgName: azcentral,
    },
    {
        id: 4,
        imgName: market,
    }
]




const FeaturedSection = () => {
    return (
        <>
            <div className="w-full 2xl:px-44 xl:px-44 px-10  bg-[#151414] py-12" >
                <div className="text-center">
                    <h2 className="font-[800] font-[Poppins] color text-[34px] xs:text-[30px] gradientText uppercase">Featured In</h2>
                </div>
                <div className="pt-5 grid grid-cols-4 lg:grid-cols-4 md:grid-cols-2 gap-2 xs:grid-cols-2 sm:grid-cols-2 w-full flex 2xl:justify-between xl:justify-between lg:justify-between md:justify-evenly sm:justify-evenly justify-evenly flex-wrap">
                    {
                        imgData.map((item, id) => (
                            <a href={item.link} key={id} className="md:flex md:justify-center sm:flex sm:justify-center xs:flex xs:justify-center">
                                <img className="items-center content-center" src={item.imgName} width={200} alt="" />
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
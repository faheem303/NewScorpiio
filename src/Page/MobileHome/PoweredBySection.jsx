import React from "react";
import Evo from "../../assects/images/evo.png";
import Nov from "../../assects/images/nov.png";
import Net from "../../assects/images/net.png";
import Ama from "../../assects/images/ama.png";
import Go from "../../assects/images/go.png";
import Egt from "../../assects/images/egt.png";


const imgData = [
    {
        id: 7,
        imgName: Evo,
    },
    {
        id: 5,
        imgName: Nov,
    },
    {
        id: 3,
        imgName: Net,
    },
    {
        id: 4,
        imgName: Ama,
    },
    {
        id: 4,
        imgName: Go,
    },
    {
        id: 4,
        imgName: Egt,
    }
]




const PoweredBySection = () => {
    return (
        <>
            <div className="w-full 2xl:px-10 xl:px-10 px-10  bg-[#151414] py-12 space-y-4" >
                <div className="text-center ">
                    <h2 className="uppercase font-[800] font-[Poppins] text-white  color text-[34px] xs:text-[30px] gradientText">Powered by</h2>
                </div>
                <div id='faqs'>
                </div>
                <div className="pt-5 grid grid-cols-6 lg:grid-cols-2 md:grid-cols-2 gap-2 xs:grid-cols-2 sm:grid-cols-2 w-full flex 2xl:justify-center xl:justify-center
                 lg:justify-center md:justify-center sm:justify-center justify-center flex-wrap">
                    {
                        imgData.map((item, id) => (
                            <a href={item.link} key={id}>
                                <img className="flex justify-center m-auto w-[120px] " src={item.imgName}  alt="" />
                            </a>
                        ))
                    }

                </div>
               

               
            </div>

        </>
    )
}
export default PoweredBySection
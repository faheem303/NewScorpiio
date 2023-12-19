import React from "react";
import { v4 as uuidv4 } from 'uuid';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import "swiper/css/navigation";
import { Navigation, Mousewheel,Pagination, Keyboard } from "swiper/modules";
import Tick1 from "../../assects/images/tick1.png"


// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";



const RoadMap = () => {
    
const cardData = [
    {
        id: 1,
        qa: "Phase 1",
        comp: "COMPLETED",
        phase: "Preparation Phase:",
        tickIcon: Tick1,
        paraData: [

            {
                id: uuidv4(),
                para: "Idea conception",
            },
            {
                id: uuidv4(),
                para: "Team onboarding",
            },
            {
                id: uuidv4(),
                para: "Integrating Coinspaid",
            },
            {
                id: uuidv4(),
                para: "Developing the Ecosystem",
            },
            {
                id: uuidv4(),
                para: "Applying for an eGambling License",
            },
           
        ]



    },
    {
        id: uuidv4(),
        qa: "Phase 2",
        comp: "CURRENT",
        phase: "Pre-Launch Phase:",
        tickIcon: Tick1,
        paraData: [

            {
                id: uuidv4(),
                para: "SCORP Token creation",
            },
            {
                id: uuidv4(),
                para: "Whitepaper Release ",
            },
            {
                id: uuidv4(),
                para: "Integrating Betradar ",
            },
            {
                id: uuidv4(),
                para: "Scorpion.casino Release ",
            },
            {
                id: uuidv4(),
                para: "$SCORP Token Audit ",
            },
            {
                id: uuidv4(),
                para: "Pre Sale start ",
            },
           
        ]
    },
    {
        id: uuidv4(),
        qa: "Phase 3",
        // comp: "",
        phase: "Launch Phase:",
        paraData: [

            {
                id: uuidv4(),
                para: "Launching Affiliate Program ",
            },
            {
                id: uuidv4(),
                para: "Integrating the Level System",
            },
            {
                id: uuidv4(),
                para: "Listing on CEX ",
            },
            {
                id: uuidv4(),
                para: "Further Casino Development",
            },
            {
                id: uuidv4(),
                para: "Community Events ",
            },
           
        ]
    },
    {
        id: uuidv4(),
        qa: "Phase 4",
        // comp: "",
        phase: "Exponential Growth Phase:",
        paraData: [

            {
                id: uuidv4(),
                para: "Live Affiliate Events ",
            },
            {
                id: uuidv4(),
                para: "Partner Up with Softswiss ",
            },
            {
                id: uuidv4(),
                para: "Influencer Marketing ",
            },
            {
                id: uuidv4(),
                para: "Collaborations with Athletes ",
            },
            {
                id: uuidv4(),
                para: "More to come ",
            },
           
        ]
    },
]

    return (
        <div className=" " >

            <div className="text-center">
                <h2 className="uppercase font-[800] font-[Poppins] text-[34px] xs:text-[30px] gradientText">Roadmap</h2>
            </div>
            <div className=" pt-16 w-[100%]" style={{paddingBottom:"-30px"}}>
                <div style={{ height: "", position: "relative" }}>
                    <Swiper
                      
                        breakpoints={{
                            360: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            500: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            750: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            1124: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                        }}
                        cssMode={true}
                        pagination={true}
                        mousewheel={true}
                        keyboard={true}
                        spaceBetween={14}
                        className="mySwiper"
                        navigation={true}
                        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    >

                        {
                            cardData.map((item, id) => (
                                <SwiperSlide className="wrap" key={id} >
                                    <div className="token border border-[#e3c88e3d] rounded-[20px] px-4 xs:px-6 sm:px-6 py-5 space-y-4 rounded-lg h-[55vh] xs:h-[50vh] sm:h-[50vh] md:h-[55vh]">
                                        <div className="flex justify-between " >
                                            <h4 className="text-white text-[15px] font-[Poppins]">{item.qa}</h4>
                                            {
                                                item.id !== 1 ?
                                                    item.comp &&
                                                    <div className="bgcolor flex items-center px-2 rounded-md">
                                                        <h4 className="  text-[11px] font-[Poppins]">{(item.comp).toUpperCase()}</h4>
                                                    </div> :
                                                    <div className="bgcolordark flex items-center px-2 rounded-md">
                                                        <h4 className="  text-[11px] font-[Poppins]">{(item.comp).toUpperCase()}</h4>
                                                    </div>

                                            }
                                        </div>
                                        <h3 className="font-[600] text-white font-[Poppins] text-[16px] leading-[25px]">{item.phase} </h3>
                                        <div className="">
                                            {
                                                item.paraData.map((i, k) => (
                                                    <div className="flex">
                                                        {item.tickIcon ?
                                                            <img className="w-[18px] h-[18px] mr-2" src={item.tickIcon} alt="" /> : <></>}
                                                        <span key={k} className="font-[400] mb-4 text-[white] font-[Poppins] text-[12px] leading-[20px]">{i.para}</span>
                                                    </div>
                                                ))
                                            }
                                        </div>


                                    </div>
                                </SwiperSlide>
                            ))
                        }

                    </Swiper>
                    {/* <div className="swiper-button image-swiper-button-next">
                        <IoIosArrowForward />
                    </div>
                    <div className="swiper-button image-swiper-button-prev">
                        <IoIosArrowBack />
                    </div> */}
                </div>

            </div>

        </div>
    )
}
export default RoadMap 

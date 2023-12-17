import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import "swiper/css/navigation";
import { Navigation, Mousewheel, Keyboard } from "swiper/modules";
import Tick1 from "../../assects/images/tick1.png"
import Tick2 from "../../assects/images/icont.png"


// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";



const RoadMap = () => {
    const [slidesPerView, setSlidesPerView] = useState(5);
    const [selectedSlide, setSelectedSlide] = useState(null);

    const updateSlidesPerView = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth >= 1200) {
            setSlidesPerView(3.3);
        } else if (screenWidth >= 768) {
            setSlidesPerView(2.9);
        } else if (screenWidth >= 640) {
            setSlidesPerView(2.4);
        } else if (screenWidth <= 640) {
            setSlidesPerView(1.3);
        }
    };

    useEffect(() => {
        updateSlidesPerView();
        window.addEventListener("resize", updateSlidesPerView);
        return () => {
            window.removeEventListener("resize", updateSlidesPerView);
        };
    }, []);

    const cardData = [
        {
            id: 1,
            qa: "Phase 1",
            comp: "COMPLETED",
            phase: "Preparation",
            paraData: [

                {
                    id: uuidv4(),
                    tickIcon: Tick1,
                    para: "Idea conception",
                },
                {
                    id: uuidv4(),
                    tickIcon: Tick1,
                    para: "Team onboarding",
                },
                {
                    id: uuidv4(),
                    tickIcon: Tick1,
                    para: "Integrating Coinspaid",
                },
                {
                    id: uuidv4(),
                    tickIcon: Tick1,
                    para: "Developing the Ecosystem",
                },
                {
                    id: uuidv4(),
                    tickIcon: Tick1,
                    para: "Applying for an eGambling License",
                },

            ]



        },
        {
            id: 2,
            qa: "Phase 2",
            comp: "COMPLETED",
            phase: "Pre-Launch",
            paraData: [

                {
                    id: uuidv4(),
                    tickIcon: Tick1,
                    para: "SCORP Token creation",
                },
                {
                    id: uuidv4(),
                    tickIcon: Tick1,
                    para: "Whitepaper Release ",
                },
                {
                    id: uuidv4(),
                    tickIcon: Tick1,
                    para: "Integrating Betradar ",
                },
                {
                    id: uuidv4(),
                    tickIcon: Tick1,
                    para: "Scorpion.casino Release ",
                },
                {
                    id: uuidv4(),
                    tickIcon: Tick1,
                    para: "$SCORP Token Audit ",
                },
                {
                    id: uuidv4(),
                    tickIcon: Tick1,
                    para: "Pre Sale start ",
                },

            ]
        },
        {
            id: 3,
            qa: "Phase 3",
            comp: "CURRENT",
            phase: "Launch",
            paraData: [

                {
                    id: uuidv4(),
                    tickIcon: Tick1,
                    para: "Launching Affiliate Program ",
                },
                {
                    id: uuidv4(),
                    tickIcon: Tick1,
                    para: "Integrating the Level System",
                },
                {
                    id: uuidv4(),
                    tickIcon: Tick1,
                    para: "Listing on CEX ",
                },
                {
                    id: uuidv4(),
                    tickIcon: Tick2,
                    para: "Further Casino Development",
                },
                {
                    id: uuidv4(),
                    tickIcon: Tick2,
                    para: "Community Events ",
                },

            ]
        },
        {
            id: 4,
            qa: "Phase 4",
            comp: "COMPLETED",
            phase: "Exponential Growth",
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
    const handleSlideClick = (id) => {
        setSelectedSlide(id);
    };

    return (
        <div className=" " >

            <div className="relative z-[2]">
                <h2 className="uppercase font-[900] font-[Inter] text-[40px] xs:text-[30px] gradientText z-[2]">Roadmap</h2>
                <p className="text-[18px] text-[#fff] font-[Inter] font-[400] leading-[28px]">This is the SCORPION Casino Roadmap</p>
            </div>
            <div className=" pt-6 w-[100%]" style={{ paddingBottom: "-30px" }}>
                <div style={{ height: "", position: "relative" }}>
                    <Swiper

                        cssMode={true}
                        slidesPerView={slidesPerView}
                        mousewheel={true}
                        keyboard={true}
                        spaceBetween={14}
                        className="mySwiper"
                        navigation={true}
                        modules={[Navigation, Mousewheel, Keyboard]}
                    >

                        {
                            cardData.map((item, id) => (
                                <SwiperSlide className={`wrap mapbg p-8 !flex !flex-col !justify-between !h-[400px] ${selectedSlide === id ? "border-2 border-[#e3c88e3d] " : "rounded-[40px]"
                                    }`}
                                    key={id}
                                    onClick={() => handleSlideClick(id)} >
                                    <div className=" space-y-2  ">
                                        <div className=" " >
                                            <h4 className="gradientText text-[18px] font-[900] font-[Inter]">{item.qa}</h4>

                                        </div>
                                        <h3 className="font-[700] pb-2 gradientText font-[Inter] text-[32px] leading-[29px]">{item.phase} </h3>
                                        <div className="">
                                            {
                                                item.paraData.map((i, k) => (
                                                    <div className="flex">

                                                        {i.tickIcon &&
                                                            <img className="w-[18px] h-[18px] mr-2" src={i.tickIcon} alt="" />
                                                        }
                                                        <span key={k} className="font-[400] mb-4 text-gray-300 font-[Inter] text-[16px] leading-[18px]">{i.para}</span>
                                                    </div>
                                                ))
                                            }
                                        </div>


                                    </div>
                                    <div className="flex justify-end">
                                        {
                                            item.id == 3 ?
                                                item.comp &&
                                                <div className="bgcolor flex items-center py-[10px] px-[20px] rounded-full">
                                                    <h4 className="  text-[16px] font-[700] font-[Inter]">{(item.comp).toUpperCase()}</h4>
                                                </div> :
                                                <div className="bgcolordark flex  items-center py-[10px] px-[20px] rounded-full">
                                                    <h4 className="  text-[16px] font-[700] font-[Inter]">{(item.comp).toUpperCase()}</h4>
                                                </div>

                                        }
                                    </div>
                                </SwiperSlide>
                            ))
                        }

                    </Swiper>

                </div>

            </div>

        </div>
    )
}
export default RoadMap 

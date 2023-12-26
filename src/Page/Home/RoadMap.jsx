import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";


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
    const { t } = useTranslation();

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
            qa: "RoadMap.phase1",
            comp: "RoadMap.btn1",
            phase: "RoadMap.swiperTitle1",
            paraData: [

                {
                    id: uuidv4(),
                    tickIcon: Tick1,
                    para: "RoadMap.swiperpara11",
                },
                {
                    id: uuidv4(),
                    tickIcon: Tick1,
                    para: "RoadMap.swiperpara12",
                },
                {
                    id: uuidv4(),
                    tickIcon: Tick1,
                    para: "RoadMap.swiperpara13",
                },
                {
                    id: uuidv4(),
                    tickIcon: Tick1,
                    para: "RoadMap.swiperpara14",
                },
                {
                    id: uuidv4(),
                    tickIcon: Tick1,
                    para: "RoadMap.swiperpara15",
                },

            ]



        },
        {
            id: 2,
            qa: "RoadMap.phase2",
            comp: "RoadMap.btn1",
            phase: "RoadMap.swiperTitle2",
            paraData: [

                {
                    id: uuidv4(),
                    tickIcon: Tick1,
                    para: "RoadMap.swiperpara21",
                },
                {
                    id: uuidv4(),
                    tickIcon: Tick1,
                    para: "RoadMap.swiperpara22",
                },
                {
                    id: uuidv4(),
                    tickIcon: Tick1,
                    para: "RoadMap.swiperpara23",
                },
                {
                    id: uuidv4(),
                    tickIcon: Tick1,
                    para: "RoadMap.swiperpara24",
                },
                {
                    id: uuidv4(),
                    tickIcon: Tick1,
                    para: "RoadMap.swiperpara25",
                },
                {
                    id: uuidv4(),
                    tickIcon: Tick1,
                    para: "RoadMap.swiperpara26",
                },

            ]
        },
        {
            id: 3,
            qa: "RoadMap.phase3",
            comp: "RoadMap.btn2",
            phase: "RoadMap.swiperTitle3",
            paraData: [

                {
                    id: uuidv4(),
                    tickIcon: Tick1,
                    para: "RoadMap.swiperpara31",
                },
                {
                    id: uuidv4(),
                    tickIcon: Tick1,
                    para: "RoadMap.swiperpara32",
                },
                {
                    id: uuidv4(),
                    tickIcon: Tick1,
                    para: "RoadMap.swiperpara33",
                },
                {
                    id: uuidv4(),
                    tickIcon: Tick2,
                    para: "RoadMap.swiperpara34",
                },
                {
                    id: uuidv4(),
                    tickIcon: Tick2,
                    para: "RoadMap.swiperpara35",
                },

            ]
        },
        {
            id: 4,
            qa: "RoadMap.phase4",
            phase: "RoadMap.swiperTitle4",
            paraData: [

                {
                    id: uuidv4(),
                    para: "RoadMap.swiperpara41",
                },
                {
                    id: uuidv4(),
                    para: "RoadMap.swiperpara42",
                },
                {
                    id: uuidv4(),
                    para: "RoadMap.swiperpara43",
                },
                {
                    id: uuidv4(),
                    para: "RoadMap.swiperpara44",
                },
                {
                    id: uuidv4(),
                    para: "RoadMap.swiperpara45",
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
                <h2 className="uppercase font-[900] font-[Inter] text-[40px] xs:text-[30px] gradientText z-[2]"> {t('RoadMap.title')}</h2>
                <p className="text-[18px] text-[#fff] font-[Inter] font-[400] leading-[28px]">{t('RoadMap.para')}</p>
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
                                            <h4 className="gradientText text-[18px] font-[900] font-[Inter]">{t(item.qa)}</h4>

                                        </div>
                                        <h3 className="font-[700] pb-2 gradientText font-[Inter] text-[32px] leading-[29px]">{t(item.phase)}</h3>
                                        <div className="">
                                            {
                                                item.paraData.map((i, k) => (
                                                    <div className="flex">

                                                        {i.tickIcon &&
                                                            <img className="w-[18px] h-[18px] mr-2" src={i.tickIcon} alt="" />
                                                        }
                                                        <span key={k} className="font-[400] mb-4 text-gray-300 font-[Inter] text-[16px] leading-[18px]">{t(i.para)}</span>
                                                    </div>
                                                ))
                                            }
                                        </div>


                                    </div>
                                    <div className="flex justify-end">

                                        {
                                            item.comp &&
                                           <>
                                            {
                                                item.id == 3 ?
                                                    item.comp &&
                                                    <div className="bgcolor flex items-center py-[8px] px-[20px] rounded-full">
                                                        <h4 className="  text-[16px] font-[700] font-[Inter]">{t(item.comp)}</h4>
                                                    </div> :
                                                    <div className="bgcolordark flex  items-center py-[8px] px-[20px] rounded-full">
                                                        <h4 className="  text-[16px] font-[700] font-[Inter]">{t(item.comp)}</h4>
                                                    </div>

                                            }
                                           </>
                                        }
                                        <div>
                                        </div>
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

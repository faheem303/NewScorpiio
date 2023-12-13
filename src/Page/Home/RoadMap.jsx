import React, {useState, useEffect} from "react";
import { v4 as uuidv4 } from 'uuid';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import "swiper/css/navigation";
import { Navigation, Mousewheel, Keyboard } from "swiper/modules";
import Tick1 from "../../assects/images/tick1.png"


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
        comp: "COMPLETED",
        phase: "Pre-Launch",
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
        comp: "CURRENT",
        phase: "Launch",
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

            <div className="">
                <h2 className="uppercase font-[900] font-[Inter] text-[40px] xs:text-[30px] gradientText">Roadmap</h2>
                <p className="text-[18px] text-[#fff] font-[Poppins] font-[400] leading-[28px]">This is the SCORPION Casino Roadmap</p>
            </div>
            <div className=" pt-16 w-[100%]" style={{paddingBottom:"-30px"}}>
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
                                <SwiperSlide   className={`wrap mapbg p-8 !flex !flex-col !justify-between !h-[400px] ${
                                    selectedSlide === id ? "border-2 border-[#e3c88e3d] " : "rounded-[40px]"
                                }`}
                                key={id}
                                onClick={() => handleSlideClick(id)} >
                                    <div className=" space-y-2  ">
                                        <div className=" " >
                                            <h4 className="gradientText text-[18px] font-[900] font-[Poppins]">{item.qa}</h4>
                                          
                                        </div>
                                        <h3 className="font-[700] pb-2 gradientText font-[Poppins] text-[32px] leading-[29px]">{item.phase} </h3>
                                        <div className="">
                                            {
                                                item.paraData.map((i, k) => (
                                                    <div className="flex">
                                                        {item.tickIcon ?
                                                            <img className="w-[18px] h-[18px] mr-2" src={item.tickIcon} alt="" /> : <></>}
                                                        <span key={k} className="font-[400] mb-4 text-gray-300 font-[Poppins] text-[16px] leading-[18px]">{i.para}</span>
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
                                                        <h4 className="  text-[16px] font-[Poppins]">{(item.comp).toUpperCase()}</h4>
                                                    </div> :
                                                    <div className="bgcolordark flex items-center py-[10px] px-[20px] rounded-full">
                                                        <h4 className="  text-[16px] font-[Poppins]">{(item.comp).toUpperCase()}</h4>
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

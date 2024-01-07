import React from "react";
import { useTranslation } from "react-i18next";

import ambImg from "../../assects/images/amb (2).png";
import ambImg2 from "../../assects/images/amb (3).png";
import ambImg3 from "../../assects/images/amb (4).png";
import ambImg4 from "../../assects/images/amb (5).png";
import imbico from "../../assects/images/amb (1).png";
import ambx from "../../assects/images/ambX.png";

function AmbassadorsSection() {

  return (
    <>
      <div className="w-[100%] pb-[50px] xs:pb-[30px] mx-auto space-y-[50px]">
        <div>
            <h2 className="2xl:text-[40px] xl:text-[40px] lg:text-[40px] md:text-[40px] sm:text-[30px] text-[30px]  text-center gradientText font-[900] leading-[40px] uppercase">Scorpion Casino Ambassadors</h2>
        </div>
       <div className="flex gap-[25px] justify-between flex-wrap " >
            <div className="ambbg 2xl:w-[23%] xl:w-[23%] lg:w-[30%] md:w-[50%] sm:w-[50%] w-[80%] 2xl:mx-auto xl:mx-auto lg:mx-auto md:mx-auto sm:mx-auto mx-auto py-[25px]  space-y-3">
                <div className="flex justify-center">
                <img className="h-[200px]" src={ambImg} alt="" />
                </div>
                <div className="flex items-center justify-center space-x-2">
                    <h3 className="text-[26px] leading-[28px] gradientText font-[800] ">Sofia Zamolo</h3>
                    <img className="h-[20px]" src={imbico} alt="" />
                </div>
                <p className="text-[16px] text-center text-white">1.1M followers</p>
                <div className="flex justify-center">
                <img src={ambx} className="pt-[10px] cursor-pointer" alt="" />
                </div>
            </div>
            <div className="ambbg 2xl:w-[23%] xl:w-[23%] lg:w-[30%] md:w-[50%] sm:w-[50%] w-[80%] 2xl:mx-auto xl:mx-auto lg:mx-auto md:mx-auto sm:mx-auto mx-auto py-[25px]  space-y-3">
                <div className="flex justify-center">
                <img className="h-[200px]" src={ambImg2} alt="" />
                </div>
                <div className="flex items-center justify-center space-x-2">
                    <h3 className="text-[26px] leading-[28px] gradientText font-[800] ">Gino Assereto</h3>
                    <img className="h-[20px]" src={imbico} alt="" />
                </div>
                <p className="text-[16px] text-center text-white">691.3K followers</p>
                <div className="flex justify-center">
                <img src={ambx} className="pt-[10px] cursor-pointer" alt="" />
                </div>
            </div>
            <div className="ambbg 2xl:w-[23%] xl:w-[23%] lg:w-[30%] md:w-[50%] sm:w-[50%] w-[80%] 2xl:mx-auto xl:mx-auto lg:mx-auto md:mx-auto sm:mx-auto mx-auto py-[25px]  space-y-3">
                <div className="flex justify-center">
                <img className="h-[200px]" src={ambImg3} alt="" />
                </div>
                <div className="flex items-center justify-center space-x-2">
                    <h3 className="text-[26px] leading-[28px] gradientText font-[800] ">Belen Francese</h3>
                    <img className="h-[20px]" src={imbico} alt="" />
                </div>
                <p className="text-[16px] text-center text-white">970.7K followers</p>
                <div className="flex justify-center">
                <img src={ambx} className="pt-[10px] cursor-pointer" alt="" />
                </div>
            </div>
            <div className="ambbg 2xl:w-[23%] xl:w-[23%] lg:w-[30%] md:w-[50%] sm:w-[50%] w-[80%] 2xl:mx-auto xl:mx-auto lg:mx-auto md:mx-auto sm:mx-auto mx-auto py-[25px]  space-y-3">
                <div className="flex justify-center">
                <img className="h-[200px]" src={ambImg4} alt="" />
                </div>
                <div className="flex items-center justify-center space-x-2">
                    <h3 className="text-[26px] leading-[28px] gradientText font-[800] ">Riccardo Bossio</h3>
                    <img className="h-[20px]" src={imbico} alt="" />
                </div>
                <p className="text-[16px] text-center text-white">1.4M followers</p>
                <div className="flex justify-center">
                <img src={ambx} className="pt-[10px] cursor-pointer" alt="" />
                </div>
            </div>
       </div>
      </div>
    </>
  );
}

export default AmbassadorsSection;

import React, { useState, useCallback } from "react";
import Button from "../../components/Button/button";
// import { useNavigate } from 'react-router-dom';
import Iicon from "../../assects/images/i.png"
import { useTranslation } from "react-i18next";





const RewardCard = ({ item, amountRange, handleRange }) => {
    const {t} = useTranslation()
    return (

       <div className="rounded-md bgposter py-4">
         <div className=" flex justify-between  px-5 xs:px-3   w-[540px] sm:w-[100%] xs:w-[100%] ">
            {
                <>
                    <div className="space-y-4 w-[63%]  pr-2">
                        <div className="flex items-center">
                          
                            <h3 className="text-[26px] text-white sm:text-[18px] xs:text-[16px] font-[600] font-Poppins pt-2 ">{item.packageType}</h3>
                        </div>
                        <div className="space-y-2 ">
                            {item.packageList.map((j, id) => (
                                <div key={id} className="flex space-x-2 items-center ">
                                    <img className="w-[13px]" src={j.icon} alt="" />
                                    <p className="text-[14px] text-white sm:text-[10px] xs:text-[10px] text-[#222222] font-[400]  font-Inter">{t(j.text)}</p>
                                    <img src={Iicon} className="w-[12px]" alt="" />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-2 py w-[40%]">
                        <div className="tracking-wide text-center text-[#292A36] font-bold font-Poppins">
                            <h5 className="text-[14px] text-white ">{t("When you spend")}</h5>
                            <h3 className="text-[18px] sm:text-[14px] text-white xs:text-[14px] ">{`$${Number(item.spendPrice).toLocaleString('en-US')} ${t("or more")}`}</h3>
                        </div>
                        <div className=" pb-3">
                            <img className=" m-auto w-[175px] xs:w-[150px]" src={item.spendImage} alt="" />
                        </div>


                      
                    </div>
                </>

            }
        </div>
        <div className="px-5 py-4 ">
              <a href="#" className=""><Button classes="bgcolor  w-[100%] h-[46px]  sm:h-[30px]  xs:h-[30px] text-[16px] sm:text-[14px] xs:text-[14px] font-Poppins font-[700]  m-auto " text="Buy Now" /> </a>
            <p id='groth'></p>
              </div>
              <p className="text-[13px] text-center text-[white]">(You will get the membership NFT automatically when you purchase $SCORP)</p>
       </div>

    )
}
export default RewardCard;
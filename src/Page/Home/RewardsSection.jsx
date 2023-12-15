import React, { useState, useEffect } from "react";
import Button from "../../components/Button/button";
import { useTranslation } from "react-i18next";


// import { useMoralis } from 'react-moralis';


import Tick1 from "../../assects/images/tick1.png"
import cross from "../../assects/images/cross.png"
import Crown from "../../assects/images/crown.png"


import RewardCard from "./RewardsCard";


const RewardSection = () => {


    const [rewardAmount, setRewardAmount] = useState(1000)
    const [amountRange, setAmountRange] = useState(1000);
    const [range, setRange] = useState(1000);

    const handleRange = (range) => {
        setRange(range)
    }

    const listData = [
        {
            id: 1,
            packageType: "Diamond Scorpion NFT",
            spendPrice: amountRange,
            spendImage: Crown,
            packageList: [
                {
                    id: 1,
                    icon: Tick1,
                    text: "10% Extra SCORP tokens"
                },
                {
                    id: 2,
                    icon: Tick1,
                    text: "5% Extra SCORP tokens"
                },
                {
                    id: 3,
                    icon: cross,
                    text: "Extra Staking Rewards"
                    
                },
                {
                    id: 4,
                    icon: cross,
                    text: "VIP Support"
                },
                {
                    id: 5,
                    icon: cross,
                    text: "Casino Cashback"
                },
            ]

        },
        {
            id: 2,
            packageType: "Diamond Scorpion NFT",
            spendPrice: amountRange,
            spendImage: Crown,
            packageList: [
                {
                    id: 1,
                    icon: Tick1,
                    text: "15% Extra SCORP tokens"
                },
                {
                    id: 2,
                    icon: Tick1,
                    text: "10% Credits on Scorpion Casino"
                },
                {
                    id: 3,
                    icon: cross,
                    text: "Extra Staking Rewards"
                },
                {
                    id: 4,
                    icon: cross,
                    text: "VIP Support"
                },
                {
                    id: 5,
                    icon: cross,
                    text: "Casino Cashback"
                },
            ]

        },
        {
            id: 3,
            packageType: "Diamond Scorpion NFT",
            spendPrice: amountRange,
            spendImage: Crown,
            packageList: [
                {
                    id: 1,
                    icon: Tick1,
                    text: "25% Extra SCORP tokens"
                },
                {
                    id: 2,
                    icon: Tick1,
                    text: "15% Credits on Scorpion Casino"
                },
                {
                    id: 3,
                    icon: Tick1,
                    text: "5% Extra Staking Rewards"
                },
                {
                    id: 4,
                    icon: Tick1,
                    text: "VIP Support"
                },
                {
                    id: 5,
                    icon: cross,
                    text: "Casino Cashback"
                },
            ]

        },
        {
            id: 4,
            packageType: "Diamond Scorpion NFT  ",
            spendPrice: amountRange,
            spendImage: Crown,
            packageList: [
                {
                    id: 1,
                    icon: Tick1,
                    text: "40% Extra SCORP tokens"
                },
                {
                    id: 2,
                    icon: Tick1,
                    text: "25% Credits on Scorpion Casino"
                },
                {
                    id: 3,
                    icon: Tick1,
                    text: "10% Extra Staking Rewards"
                },
                {
                    id: 4,
                    icon: Tick1,
                    text: "VIP Support"
                },
                {
                    id: 5,
                    icon: Tick1,
                    text: "5% Casino Cashback"
                },
            ]

        },
        {
            id: 5,
            packageType: "Diamond Scorpion NFT ",
            spendPrice: amountRange,
            spendImage: Crown,
            packageList: [
                {
                    id: 1,
                    icon: Tick1,
                    text: "60% Extra SCORP tokens"
                },
                {
                    id: 2,
                    icon: Tick1,
                    text: "40% Credits on Scorpion Casino"
                },
                {
                    id: 3,
                    icon: Tick1,
                    text: "20% Extra Staking Rewards"
                },
                {
                    id: 4,
                    icon: Tick1,
                    text: "VIP Support"
                },
                {
                    id: 5,
                    icon: Tick1,
                    text: "10% Casino Cashback"
                },
            ]

        }
    ]
    return (
        <div className=" flex justify-between items-center md:block sm:block xs:block">
            <div className=" xs:text-center sm:text-center w-[45%] space-y-10 pr-2 md:w-[100%] md:py-4  sm:w-[100%] sm:py-4  xs:w-[100%] xs:py-4">
                <div className="">
                    <h3 className="text-[43px]  font-[900] font-[Inter] leading-[40px] pb-6 gradientText">GET EXTRA REWARDS STARTING FROM $1,000</h3>
                    <p className="text-[12.828px] xs:text-[12.828px] sm:text-[12.828px] sm:leading-[20.526px] xs:leading-[20.526px] font-[400] font-Poopins leading-[20.526px] text-white">
                    Not only will you get more SCORP, but you’ll also unlock greater rewards! Enroll in the Elite Scorpion Members Club and enjoy incredible benefits starting from as little as $1000. These advantages are exclusively available during the presale.</p>
                </div>
                <div className="space-y-4 ">
                    <div className="flex justify-between items-center">


                        <h5 className="text-[18px] xs:text-[14px] sm:text-[14px] font-[400] font-Poopins leading-[25px] text-white">How much do you want to spend?</h5>
                        <h3 className="text-[20px] text-white xs:text-[18px] sm:text-[18px] font-[600] font-Poppins">$ {Number(rewardAmount).toLocaleString('en-US')}</h3>
                    </div>
                    <input className={`w-[100%] h-[5px] appearance-none  ${amountRange ? ' bgcolor rounded-lg   cursor-pointer' : 'appearance-none bg-grey-200'}`} type="range" value={amountRange} onChange={(e) => {
                        let amount = e.target.value
                        handleRange(amount)
                        setAmountRange(e.target.value)
                        setRewardAmount(amount)
                    }} min={1000} max={100000} />
                </div>

            </div  >
            <div className=" 2xl:w-[52%] xl:w-[52%] lg:w-[52%] md:w-[100%] sm:w-[100%] w-[100%] rewardCard px-10 py-6  ">
            {
                listData.map((item, id) => (

                    amountRange >= 1000 && amountRange <= 4999 && item.id === 1 ?
                        // eslint-disable-next-line no-sequences
                        <RewardCard item={item} key={id} amountRange={amountRange} /> : '' ||
                            amountRange >= 5000 && amountRange <= 9999 && item.id === 2 ?
                            <RewardCard item={item}  key={id}/> : '' ||
                                amountRange >= 10000 && amountRange <= 24999 && item.id === 3 ?
                                <RewardCard item={item}  key={id}/> : '' ||
                                    amountRange >= 25000 && amountRange <= 99999 && item.id === 4 ?
                                    <RewardCard item={item}  key={id}/> : '' ||
                                        amountRange >= 100000 && amountRange <= 100000 && item.id === 5 ?
                                        <RewardCard item={item}  key={id}/> : ''


                ))
            }

            <p className="text-[13px] text-center font-[400] font-[Segoe UI] leading-[19px] text-[#fff]">(You will get the membership NFT automatically when you purchase $SCORP)</p>
              

            </div>
       
        </div>
    )
}
export default RewardSection;
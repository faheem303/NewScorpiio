import React, { useState, useEffect } from "react";
import Button from "../../components/Button/button";
import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from 'react-toastify';



// import { useMoralis } from 'react-moralis';


import Tick1 from "../../assects/images/tick1.png"
import cross from "../../assects/images/cross.png"
import Crown from "../../assects/images/crown.png"
import R1 from "../../assects/images/rng (1).png"
import R2 from "../../assects/images/rng (2).png"
import R3 from "../../assects/images/rng (3).png"
import R4 from "../../assects/images/rng (4).png"


import RewardCard from "./RewardsCard";


const RewardSection = () => {

  const { t } = useTranslation()

  const [rewardAmount, setRewardAmount] = useState(1000)
  const [amountRange, setAmountRange] = useState(1000);
  const [range, setRange] = useState(1000);

  const handleRange = (range) => {
    setRange(range)
  }
  const handleImageClick = (message) => {
    toast.info(message, {
      position: "bottom-right",
      autoClose: true,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: false,
      progress: false,
      theme: "light",
    });
  };

  const listData = [
    {
      id: 1,
      packageType: "RewardSection.packageType1",
      spendPrice: amountRange,
      spendImage: R2,

      packageList: [
        {
          id: 1,
          icon: Tick1,
          text: "RewardSection.packageText11",
          message: "You will automatically receive additional SCORP tokens to your wallet. For example, if you purchase the bronze membership NFT with 10% bonus tokens and you buy 100,000 SCORP, you’ll receive 110,000 SCORP tokens.",
        },
        {
          id: 2,
          icon: Tick1,
          text: "RewardSection.packageText12",
          message:"You will receive 5% of your total contribution in USD to play on Scorpion Casino. This feature will be available in Q4 with the release of the new Casino Beta."

        },
        {
          id: 3,
          icon: cross,
          text: "RewardSection.packageText13",
          message:"You will earn additional Daily Staking Rewards. For example, with the Gold Membership NFT, you’ll receive an additional 5% on the current daily staking rewards rate. So, if the daily rate is hypothetically 1%, you would get 1.05% staking rewards based on the total SCORP tokens you purchased."

        },
        {
          id: 4,
          icon: cross,
          text: "RewardSection.packageText14",
          message: "You can withdraw a portion of your SCORP staking rewards in USDT. For example, with Gold Membership, you can get 10% of your total staking rewards paid out in USDT.",

        },
        {
          id: 5,
          icon: cross,
          text: "RewardSection.packageText15",
          message: "You will have priority access to E-Mail and Chat Support. Additionally, you’ll receive dedicated VIP support and invitations to Special VIP Events.",

        },
      ],
    },
    {
      id: 2,
      packageType: "RewardSection.packageType2",
      spendPrice: amountRange,
      spendImage: R1,
      packageList: [
        {
          id: 1,
          icon: Tick1,
          text: "RewardSection.packageText21",
          message:"You will automatically receive additional SCORP tokens to your wallet. For example, if you purchase the bronze membership NFT with 10% bonus tokens and you buy 100,000 SCORP, you’ll receive 110,000 SCORP tokens."
        },
        {
          id: 2,
          icon: Tick1,
          text: "RewardSection.packageText22",
          message:"You will receive 5% of your total contribution in USD to play on Scorpion Casino. This feature will be available in Q4 with the release of the new Casino Beta."
        },
        {
          id: 3,
          icon: cross,
          text: "RewardSection.packageText23",
          message:"You will earn additional Daily Staking Rewards. For example, with the Gold Membership NFT, you’ll receive an additional 5% on the current daily staking rewards rate. So, if the daily rate is hypothetically 1%, you would get 1.05% staking rewards based on the total SCORP tokens you purchased."
        },
        {
          id: 4,
          icon: cross,
          text: "RewardSection.packageText24",
          message:"You can withdraw a portion of your SCORP staking rewards in USDT. For example, with Gold Membership, you can get 10% of your total staking rewards paid out in USDT."
        },
        {
          id: 5,
          icon: cross,
          text: "RewardSection.packageText25",
          message:"You will have priority access to E-Mail and Chat Support. Additionally, you’ll receive dedicated VIP support and invitations to Special VIP Events."
        },
      ],
    },
    {
      id: 3,
      packageType: "RewardSection.packageType3",
      spendPrice: amountRange,
      spendImage: R4,
      packageList: [
        {
          id: 1,
          icon: Tick1,
          text: "RewardSection.packageText31",
          message:"You will automatically receive additional SCORP tokens to your wallet. For example, if you purchase the bronze membership NFT with 10% bonus tokens and you buy 100,000 SCORP, you’ll receive 110,000 SCORP tokens."
        },
        {
          id: 2,
          icon: Tick1,
          text: "RewardSection.packageText32",
          message:"You will receive 5% of your total contribution in USD to play on Scorpion Casino. This feature will be available in Q4 with the release of the new Casino Beta."
        },
        {
          id: 3,
          icon: Tick1,
          text: "RewardSection.packageText33",
          message:"You will earn additional Daily Staking Rewards. For example, with the Gold Membership NFT, you’ll receive an additional 5% on the current daily staking rewards rate. So, if the daily rate is hypothetically 1%, you would get 1.05% staking rewards based on the total SCORP tokens you purchased."
        },
        {
          id: 4,
          icon: Tick1,
          text: "RewardSection.packageText34",
          message:"You can withdraw a portion of your SCORP staking rewards in USDT. For example, with Gold Membership, you can get 10% of your total staking rewards paid out in USDT."
        },
        {
          id: 5,
          icon: cross,
          text: "RewardSection.packageText35",
          message:"You will have priority access to E-Mail and Chat Support. Additionally, you’ll receive dedicated VIP support and invitations to Special VIP Events."
        },
      ],
    },
    {
      id: 4,
      packageType: "RewardSection.packageType4",
      spendPrice: amountRange,
      spendImage: R3,
      packageList: [
        {
          id: 1,
          icon: Tick1,
          text: "RewardSection.packageText41",
          message:"You will automatically receive additional SCORP tokens to your wallet. For example, if you purchase the bronze membership NFT with 10% bonus tokens and you buy 100,000 SCORP, you’ll receive 110,000 SCORP tokens."
        },
        {
          id: 2,
          icon: Tick1,
          text: "RewardSection.packageText42",
          message:"You will receive 5% of your total contribution in USD to play on Scorpion Casino. This feature will be available in Q4 with the release of the new Casino Beta."
        },
        {
          id: 3,
          icon: Tick1,
          text: "RewardSection.packageText43",
          message:"You will earn additional Daily Staking Rewards. For example, with the Gold Membership NFT, you’ll receive an additional 5% on the current daily staking rewards rate. So, if the daily rate is hypothetically 1%, you would get 1.05% staking rewards based on the total SCORP tokens you purchased."
        },
        {
          id: 4,
          icon: Tick1,
          text: "RewardSection.packageText44",
          message:"You can withdraw a portion of your SCORP staking rewards in USDT. For example, with Gold Membership, you can get 10% of your total staking rewards paid out in USDT."
        },
        {
          id: 5,
          icon: Tick1,
          text: "RewardSection.packageText45",
          message:"You will have priority access to E-Mail and Chat Support. Additionally, you’ll receive dedicated VIP support and invitations to Special VIP Events."
        },
      ],
    },
    {
      id: 5,
      packageType: "RewardSection.packageType5",
      spendPrice: amountRange,
      spendImage: Crown,
      packageList: [
        {
          id: 1,
          icon: Tick1,
          text: "RewardSection.packageText51",
          message:"You will automatically receive additional SCORP tokens to your wallet. For example, if you purchase the bronze membership NFT with 10% bonus tokens and you buy 100,000 SCORP, you’ll receive 110,000 SCORP tokens."
        },
        {
          id: 2,
          icon: Tick1,
          text: "RewardSection.packageText52",
          message:"You will receive 5% of your total contribution in USD to play on Scorpion Casino. This feature will be available in Q4 with the release of the new Casino Beta."
        },
        {
          id: 3,
          icon: Tick1,
          text: "RewardSection.packageText53",
          message:"You will earn additional Daily Staking Rewards. For example, with the Gold Membership NFT, you’ll receive an additional 5% on the current daily staking rewards rate. So, if the daily rate is hypothetically 1%, you would get 1.05% staking rewards based on the total SCORP tokens you purchased."
        },
        {
          id: 4,
          icon: Tick1,
          text: "RewardSection.packageText54",
          message:"You can withdraw a portion of your SCORP staking rewards in USDT. For example, with Gold Membership, you can get 10% of your total staking rewards paid out in USDT."
        },
        {
          id: 5,
          icon: Tick1,
          text: "RewardSection.packageText55",
          message:"You will have priority access to E-Mail and Chat Support. Additionally, you’ll receive dedicated VIP support and invitations to Special VIP Events."
        },
      ],
    },
  ];
  return (
    <div className="relative z-[2] flex justify-between items-center md:block sm:block xs:block">
      <div className=" xs:text-center sm:text-center w-[45%] space-y-10 pr-2 md:w-[100%] md:py-4  sm:w-[100%] sm:py-4  xs:w-[100%] xs:py-4">
        <div className="">
          <h3 className="text-[43px] xs:text-[30px] xs:leading-[33px] font-[900] font-[Inter] leading-[40px] pb-6 gradientText">{t("RewardSection.title")}</h3>
          <p className="text-[16px] xs:text-[18px] sm:text-[16px] sm:leading-[20.526px] xs:leading-[23.526px] font-[400] font-Poopins leading-[20.526px] text-white">
            {t("RewardSection.para")}</p>
        </div>
        <div className="space-y-4 ">
          <div className="flex justify-between items-center">


            <h5 className="text-[18px] xs:text-[14px] sm:text-[14px] font-[400] font-Poopins leading-[25px] text-white"> {t("RewardSection.spendText")}</h5>
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
      <div className=" 2xl:w-[52%] xl:w-[52%] lg:w-[52%] md:w-[100%] sm:w-[100%] w-[100%] rewardCard px-10 px-3  py-6  ">
        {
          listData.map((item, id) => (

            amountRange >= 1000 && amountRange <= 4999 && item.id === 1 ?
              // eslint-disable-next-line no-sequences
              <RewardCard handleImageClick={handleImageClick} item={item} key={id} amountRange={amountRange} /> : '' ||
                amountRange >= 5000 && amountRange <= 9999 && item.id === 2 ?
                <RewardCard handleImageClick={handleImageClick} item={item} key={id} /> : '' ||
                  amountRange  >= 10000 && amountRange <= 24999 && item.id === 3 ?
                  <RewardCard handleImageClick={handleImageClick} item={item} key={id} /> : '' ||
                    amountRange >= 25000 && amountRange <= 99999 && item.id === 4 ?
                    <RewardCard handleImageClick={handleImageClick} item={item} key={id} /> : '' ||
                      amountRange >= 100000 && amountRange <= 100000 && item.id === 5 ?
                      <RewardCard handleImageClick={handleImageClick} item={item} key={id} /> : ''


          ))
        }

        <p className="text-[13px] xs:pt-2 text-center font-[400] font-[Segoe UI] leading-[19px] text-[#fff]"> {t("RewardSection.cardLastPara")}</p>


      </div>

    </div>
  )
}
export default RewardSection;
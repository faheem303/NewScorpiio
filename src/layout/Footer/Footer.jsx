import React from "react";
import { ToastContainer, toast } from 'react-toastify';


import Link from "../../assects/svgs/linkf.svg";
import Twitter from "../../assects/svgs/twitter.svg";
import Telegram from "../../assects/svgs/telegram.svg";
import Insta from "../../assects/svgs/insta.svg";
import Play from "../../assects/svgs/play.svg";
import Scorpion from "../../assects/svgs/ScorpionCasino.svg";

import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  const handleCopy = () => {
    navigator.clipboard.writeText("https://lucent-caramel-6be687.netlify.app/")
      .then(() => {
        toast.success('Copied!');
      })
      .catch((error) => {
        console.error('Error copying:', error);
        toast.error('Failed to copy.');
      });
  };
  return (
    <>
      <div className="bg-[#000000]">
        <div className="w-[90%] mx-auto py-12">
          {/* large screen  */}
          <div className="2xl:block xl:block lg:block md:block sm:hidden hidden">
            <div className="flex justify-between mb-[12px]">
              <h3 className=" text-[20px] text-white font-[700] leading-[30px]">
              {t('Footer.joinTitle')}
              </h3>
              <div className="flex gap-[12px]">
                <button onClick={handleCopy}>
                  <img src={Link} alt="" />
                </button>
               
                <a href="https://twitter.com/ScorpionCasino" target="_blank">
                  <img src={Twitter} alt="" />
                </a>
                <a href="https://t.me/scorpioncasino_official" target="_blank">
                  <img src={Telegram} alt="" />
                </a>
                <a href="https://www.instagram.com/scorpion.casino/" target="_blank">
                  <img src={Insta} alt="" />
                </a>
              </div>
            </div>
            <div className="flex justify-between gap-[20px]">
              <p className=" text-[16px] xs:text-[16px] text-white font-[400] leading-[23px]">
              {t('Footer.joinPara1')}  <br />{" "}
              {t('Footer.joinPara2')}
              </p>
              <div className="flex ">
                <a href="#">
                  <img src={Play} alt="" />
                </a>
              </div>
            </div>
            <div className="pt-[58px] pb-[20px]">
              <h2 className="text-[20px] text-white font-[700] leading-[30px]">
              {t('Footer.casinoTitle')}
              </h2>
              <p className="text-[14px] text-white font-[400] leading-[20px]">
              {t('Footer.casinoSubtitle')}
              </p>
              <div className="flex gap-[16px] pb-[14px]">
                <a
                  href="https://presale.scorpion.casino/static/media/TOS.2f18aa7fff3ccb4d9a47.pdf"
                  className="text-[14px] text-white font-[400] leading-[18px] underline"
                >
                  {t('Footer.casinolink1')}
                </a>
                <a
                  href="https://presale.scorpion.casino/static/media/Privacy.7dcb0b5d78cf5111dc73.pdf"
                  className="text-[14px] text-white font-[400] leading-[18px] underline"
                >
                 {t('Footer.casinolink2')}
                </a>
                <a
                  href="https://t.me/scorpioncasino_official" target="_blank"
                  className="text-[14px] text-white font-[400] leading-[18px] underline"
                >
                 {t('Footer.casinolink3')}
                </a>
                <a
                  href="https://presale.scorpion.casino/static/media/TokenSaleAgreement.9eb934d231e742f9bcbf.pdf"
                  className="text-[14px] text-white font-[400] leading-[18px] underline"
                >
                  {t('Footer.casinolink4')}
                </a>
                <a
                  href="https://scorpioncasino.co/pay.php?checkout_id=custom-123&price=0&external_reference=ABC"
                  className="text-[14px] text-white font-[400] leading-[18px] underline"
                >
                  {t('Footer.casinolink5')}
                </a>
              </div>
              <p className=" text-[16px] text-[#B4A5A5] font-[400] leading-[20px]">
              {t('Footer.casinoPara')}
              </p>
              <p className="text-[16px] text-white text-center font-[400] leading-[20px] pt-[14px]">
              {t('Footer.casinoCopyright')}
              </p>
            </div>
          </div>
          {/* small screen  */}
          <div className="2xl:hidden xl:hidden lg:hidden md:hidden sm:block block">
           <div className="flex items-center justify-between">
           <h3 className="mb-[5px] text-[20px] text-white font-[700] leading-[30px]">
           {t('Footer.joinTitle')}
            </h3>
          
           </div>
            <p className=" text-[16px] text-white font-[400] leading-[20px]">
            {t('Footer.joinPara3')}
            </p>
            <div className="flex  gap-[12px] my-[21px]">
              <button onClick={handleCopy}>
                <img className="w-[28px]"  src={Link} alt="" />
                </button>
            
              <a href="https://twitter.com/ScorpionCasino" target="_blank">
                <img className="w-[28px]"  src={Twitter} alt="" />
              </a>
              <a href="https://t.me/scorpioncasino_official" target="_blank">
                <img className="w-[28px]"  src={Telegram} alt="" />
              </a>
              <a href="https://www.instagram.com/scorpion.casino/" target="_blank">
                <img className="w-[28px]"  src={Insta} alt="" />
              </a>
            </div>
           
            <div className="">
              <h2 className="text-[20px] text-white font-[700] leading-[30px]">
              {t('Footer.casinoTitle')}
              </h2>
              <p className="pb-[20px] text-[14px] text-white font-[400] leading-[18px]">
              {t('Footer.casinoSubtitle')}
              </p>
              <div className="flex flex-col space-y-[10px] pb-[5px]">
              <a
                  href="https://presale.scorpion.casino/static/media/TOS.2f18aa7fff3ccb4d9a47.pdf"
                  className="text-[14px] text-white font-[400] leading-[18px] underline"
                >
                  {t('Footer.casinolink1')}
                </a>
                <a
                  href="https://presale.scorpion.casino/static/media/Privacy.7dcb0b5d78cf5111dc73.pdf"
                  className="text-[14px] text-white font-[400] leading-[18px] underline"
                >
                 {t('Footer.casinolink2')}
                </a>
                <a
                  href="https://t.me/scorpioncasino_official" target="_blank"
                  className="text-[14px] text-white font-[400] leading-[18px] underline"
                >
                 {t('Footer.casinolink3')}
                </a>
                <a
                  href="https://presale.scorpion.casino/static/media/TokenSaleAgreement.9eb934d231e742f9bcbf.pdf"
                  className="text-[14px] text-white font-[400] leading-[18px] underline"
                >
                  {t('Footer.casinolink4')}
                </a>
                <a
                  href="https://scorpioncasino.co/pay.php?checkout_id=custom-123&price=0&external_reference=ABC"
                  className="text-[14px] text-white font-[400] leading-[18px] underline"
                >
                  {t('Footer.casinolink5')}
                </a>
              </div>
              <p className="pt-6 text-[16px] xs:text-[13px] text-[#B4A5A5] font-[400] leading-[18px]">
              {t('Footer.casinoPara')}
              </p>
              <div className="flex justify-center">
                <a href="#" className="my-[21px]">
                  <img src={Play} alt="" />
                </a>
              </div>
            </div>
            <p className="text-[16px] text-white text-center font-[400] leading-[18px] pb-[20px]">
            {t('Footer.casinoCopyright')}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

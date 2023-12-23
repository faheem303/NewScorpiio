import React from "react";
import { ToastContainer, toast } from 'react-toastify';


import Link from "../../assects/svgs/linkf.svg";
import Twitter from "../../assects/svgs/twitter.svg";
import Telegram from "../../assects/svgs/telegram.svg";
import Insta from "../../assects/svgs/insta.svg";
import Play from "../../assects/svgs/play.svg";
import Scorpion from "../../assects/svgs/ScorpionCasino.svg";

function Footer() {
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
                Join the Winning Team
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
              <p className=" text-[12px] text-white font-[400] leading-[18px]">
                Step into the world of casinos, high stakes, and incredible
                rewards by joining the Scorpion community today! <br />{" "}
                Experience the unmatched privileges and benefits of being part
                of the world’s first social online gambling ecosystem powered by
                $SCORP.
              </p>
              <div className="flex ">
                <a href="#">
                  <img src={Play} alt="" />
                </a>
              </div>
            </div>
            <div className="pt-[58px] pb-[20px]">
              <h2 className="text-[20px] text-white font-[700] leading-[30px]">
                Scorpion Casino
              </h2>
              <p className="text-[12px] text-white font-[400] leading-[18px]">
                Registration Number: 14904288
              </p>
              <div className="flex gap-[16px] pb-[12px]">
                <a
                  href="https://presale.scorpion.casino/static/media/TOS.2f18aa7fff3ccb4d9a47.pdf"
                  className="text-[12px] text-white font-[400] leading-[18px] underline"
                >
                  Terms of Service
                </a>
                <a
                  href="https://presale.scorpion.casino/static/media/Privacy.7dcb0b5d78cf5111dc73.pdf"
                  className="text-[12px] text-white font-[400] leading-[18px] underline"
                >
                  Privacy Policy
                </a>
                <a
                  href="https://t.me/scorpioncasino_official" target="_blank"
                  className="text-[12px] text-white font-[400] leading-[18px] underline"
                >
                  Contact Us
                </a>
                <a
                  href="https://presale.scorpion.casino/static/media/TokenSaleAgreement.9eb934d231e742f9bcbf.pdf"
                  className="text-[12px] text-white font-[400] leading-[18px] underline"
                >
                  Token Sale Agreement
                </a>
                <a
                  href="https://scorpioncasino.co/pay.php?checkout_id=custom-123&price=0&external_reference=ABC"
                  className="text-[12px] text-white font-[400] leading-[18px] underline"
                >
                  Buy SCORP Manually
                </a>
              </div>
              <p className=" text-[12px] text-[#B4A5A5] font-[400] leading-[18px]">
                Scorpion Marketing LTD operates the website Scorpion.casino
                (“Platform”). By using the Platform, you accept our Terms of
                Service, Privacy Policy, Cookie Policy, and the SCORP Token sale
                agreement. Cryptocurrency may be unregulated in your
                jurisdiction. The value of cryptocurrencies may go down as well
                as up. Profits may be subject to capital gains or other taxes
                applicable in your jurisdiction. Nothing on this website should
                be construed as an offer or recommendation to buy, sell or
                invest. You are solely responsible for determining whether any
                purchase or related transaction is appropriate for you based on
                your personal objectives, financial situation, and risk
                tolerance. You should consult with trusted, licensed legal
                professionals and advisors for legal, tax, insurance, or
                business advice. Scorpion Casino does not guarantee any
                performance, outcome, or return of capital for any
                cryptocurrency posted on this website. By accessing this site
                and any pages thereof, you agree to be bound by the SCORP sales
                agreement. Buying cryptocurrencies involves risk and may result
                in partial or total loss.
              </p>
              <p className="text-[12px] text-white text-center font-[400] leading-[18px] pt-[12px]">
                Copyright 2023 Scorpion.casino | All rights reserved.
              </p>
            </div>
          </div>
          {/* small screen  */}
          <div className="2xl:hidden xl:hidden lg:hidden md:hidden sm:block block">
           <div className="flex items-center justify-between">
           <h3 className="mb-[5px] text-[20px] text-white font-[700] leading-[30px]">
              Join the Winning Team
            </h3>
          
           </div>
            <p className=" text-[12px] text-white font-[400] leading-[18px]">
              Step into the world of casinos, high stakes, and incredible
              rewards by joining the Scorpion community today! Experience the
              unmatched privileges and benefits of being part of the world’s
              first social online gambling ecosystem powered by $SCORP.
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
                Scorpion Casino
              </h2>
              <p className="text-[12px] text-white font-[400] leading-[18px]">
                Registration Number: 14904288
              </p>
              <div className="flex flex-col gap-[5px] pb-[5px]">
                <a
                  href="#" target="_blank"
                  className="text-[12px] text-white font-[400] leading-[18px] underline"
                >
                  Terms of Service
                </a>
                <a
                  href="#" target="_blank"
                  className="text-[12px] text-white font-[400] leading-[18px] underline"
                >
                  Privacy Policy
                </a>
                <a
                  href="#" target="_blank"
                  className="text-[12px] text-white font-[400] leading-[18px] underline"
                >
                  Contact Us
                </a>
                <a
                  href="#" target="_blank"
                  className="text-[12px] text-white font-[400] leading-[18px] underline"
                >
                  Token Sale Agreement
                </a>
                <a
                  href="#" target="_blank"
                  className="text-[12px] text-white font-[400] leading-[18px] underline"
                >
                  Buy SCORP Manually
                </a>
              </div>
              <p className="pt-6 text-[12px] text-[#B4A5A5] font-[400] leading-[18px]">
                Scorpion Marketing LTD operates the website Scorpion.casino
                (“Platform”). By using the Platform, you accept our Terms of
                Service, Privacy Policy, Cookie Policy, and the SCORP Token sale
                agreement. Cryptocurrency may be unregulated in your
                jurisdiction. The value of cryptocurrencies may go down as well
                as up. Profits may be subject to capital gains or other taxes
                applicable in your jurisdiction. Nothing on this website should
                be construed as an offer or recommendation to buy, sell or
                invest. You are solely responsible for determining whether any
                purchase or related transaction is appropriate for you based on
                your personal objectives, financial situation, and risk
                tolerance. You should consult with trusted, licensed legal
                professionals and advisors for legal, tax, insurance, or
                business advice. Scorpion Casino does not guarantee any
                performance, outcome, or return of capital for any
                cryptocurrency posted on this website. By accessing this site
                and any pages thereof, you agree to be bound by the SCORP sales
                agreement. Buying cryptocurrencies involves risk and may result
                in partial or total loss.
              </p>
              <div className="flex justify-center">
                <a href="#" className="my-[21px]">
                  <img src={Play} alt="" />
                </a>
              </div>
            </div>
            <p className="text-[12px] text-white text-center font-[400] leading-[18px] pb-[20px]">
              Copyright 2023 Scorpion.casino | All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

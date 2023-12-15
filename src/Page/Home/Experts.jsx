import React from "react";
import CryptoExperts from "../../components/CryptoExperts";
import Wrubel from "../../assects/images/wrubel.png";
import Wrubel3 from "../../assects/images/wrubel3.png";
import SmallWrubel from "../../assects/images/wrubelSmall.png";
import Bri from "../../assects/images/bri.png";
import SmallBri from "../../assects/images/briSmall.png";
import Panda from "../../assects/images/panda.png";
import Panda3 from "../../assects/images/panda3.png";
import SmallPanda from "../../assects/images/SmallPanda.png";
import Fomotion3 from "../../assects/images/fomotion3.png";
import Fomotion from "../../assects/images/fomotion.png";
import SmallFomotion from "../../assects/images/smallFomotion.png";
import Ben from "../../assects/images/ben.png";
import SmallBen from "../../assects/images/smallBen.png";
import Costa from "../../assects/images/costa.png";
import SmallCosta from "../../assects/images/smallCosta.png";

function Experts() {
  return (
    <>
      <div className=" w-[100%]  mx-auto pb-[95px]">
        <div>
          <h2 className="2xl:text-[40px] xl:text-[40px] lg:text-[40px] md:text-[40px] sm:text-[30px] text-[30px] text-center gradientText font-[900] leading-[40px] uppercase 2xl:pb-[83px] xl:pb-[83px] lg:pb-[83px] md:pb-[44px] sm:pb-[44px] pb-[44px]">
          what crypto experts think about $scorp
          </h2>
        </div>
        <div className="2xl:pb-[83px] xl:pb-[83px] lg:pb-[83px] md:pb-[44px] sm:pb-[44px] pb-[44px]">
          <CryptoExperts container={"flex flex-wrap-reverse 2xl:justify-between xl:justify-between lg:justify-between md:justify-center sm:justify-center justify-center gap-y-[23px]"} title={"I think that crypto casino projects are going to be huge in 2024"} para={"I'm interested in profitable sectors, and as we all know, Crypto Casinos are highly profitable. Many people believe Crypto will pump in 2024 because of the Bitcoin halving, and I think crypto casino projects are going to be huge."} btnLarge={"Ben Crypto"} followerslarge={"Youtuber | 28k Followers"} srcLarge={Ben} srcSmall={SmallBen} name={"Ben Crypto"} btnFollowers={"Youtuber | 28k Followers"} lastSrc={""}/>
        </div>
        <div className="2xl:pb-[83px] xl:pb-[83px] lg:pb-[83px] md:pb-[44px] sm:pb-[44px] pb-[44px]">
          <CryptoExperts container={"flex flex-row-reverse flex-wrap-reverse 2xl:justify-between xl:justify-between lg:justify-between md:justify-center sm:justify-center justify-center gap-y-[23px]"} title={"It’s crazy how many people are using these (Gambling) platforms"} para={"These gambling projects are a new trend and narrative in crypto. Rollbit started from nothing and has a market cap of 600 million MCAP, while Funtoken has been listed on Binance. This clearly demonstrates a trend."} smallContainer={"flex-row-reverse justify-end"} btnLarge={"Crypto Costa"} followerslarge={"Youtuber | 95k Followers"} srcLarge={Costa} srcSmall={SmallCosta} name={"Crypto Costa"} btnFollowers={"Youtuber | 95k Followers"} lastSrc={""}/>
        </div>
        <div className="2xl:pb-[83px] xl:pb-[83px] lg:pb-[83px] md:pb-[44px] sm:pb-[44px] pb-[44px]">
          <CryptoExperts container={"flex flex-wrap-reverse 2xl:justify-between xl:justify-between lg:justify-between md:justify-center sm:justify-center justify-center gap-y-[23px]"} title={"i just bought the next billion dollar crypto"} para={"Scorpion Casino also offer passive income when no other crypto gambling platform offers those exact features so all of this is really important and the main reason why I did take advantage of getting in on.”"} btnLarge={"Michael Wrubel"} followerslarge={"Youtuber | 310k Followers"} srcLarge={Wrubel} srcSmall={SmallWrubel} name={"Michael Wrubel"} btnFollowers={"Youtuber | 310k Followers"} lastSrc={""}/>
        </div>
        <div className="2xl:pb-[83px] xl:pb-[83px] lg:pb-[83px] md:pb-[44px] sm:pb-[44px] pb-[44px]">
          <CryptoExperts container={"flex flex-row-reverse flex-wrap-reverse 2xl:justify-between xl:justify-between lg:justify-between md:justify-center sm:justify-center justify-center gap-y-[23px]"} title={"I really like SCORPION CASINO. they have a big shot of becoming a huge success"} para={"The UI (Design) of the Casino is very nice, and they have a ton of different Partnerships that will make this casino truly exceptional."} smallContainer={"flex-row-reverse justify-end"} btnLarge={"Crypto Panda"} followerslarge={"Youtuber | 15k Followers"} srcLarge={Panda} srcSmall={SmallPanda} name={"Crypto Panda"} btnFollowers={"Youtuber | 15k Followers"} lastSrc={""}/>
        </div>
      </div>
    </>
  );
}

export default Experts;

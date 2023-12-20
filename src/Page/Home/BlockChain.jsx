import React from 'react'
import Blockchain from "../../assects/images/blockChain.png"
import Button from '../../components/Button/button'
import Blockchainmob from "../../assects/images/mediamob.png"

function BlockChain() {
  return (
    <>
     <div className="w-[100%]  mx-auto pb-[95px]">
        <div className="flex flex-wrap items-center 2xl:justify-between xl:justify-between lg:justify-between md:justify-center sm:justify-center justify-center gap-y-[29px]">
          <div className="2xl:w-[45%] xl:w-[45%] lg:w-[45%] md:w-[80%] sm:w-[95%] w-[100%] flex flex-col items-center 2xl:pt-[4rem] xl:pt-[4rem] lg:pt-[4rem] justify-center 2xl:gap-[20px] xl:gap-[20px] lg:gap-[20px] md:gap-[20px] sm:gap-[17px] gap-[17px]">
            <h2 className="2xl:text-[40px] xl:text-[40px] lg:text-[40px] md:text-[40px] sm:text-[30px] text-[26px] 2xl:text-left xl:text-left lg:text-left md:text-center sm:text-center text-center gradientText font-[900] leading-[40px] uppercase">
            COLLABORATION WITH A LEADING BLOCKCHAIN INCUBATOR
            </h2>
            <p className="text-white text-[18px] font-[400] leading-[28.80px] 2xl:text-left xl:text-left lg:text-left md:text-center sm:text-center text-center">
            Scorpion Casino has joined forces with Tenset, the incubator and masterminds behind Metahero (100x return from launch) and Everdome (80x return from launch). <br />
            Tenset's Infinity Program and success-driven approach, sky-high returns on (previous) collaborations and cutting-edge solutions is making them the perfect partner to elevate Scorpion Casino to new heights.
            </p>
             <div className='w-[100%] '>
              <a href="#hero">
             <button className='bgcolor font-[700] text-[18px] h-[54px] 2xl:w-[300px] xl:w-[300px] lg:w-[300px] md:w-[300px] sm:w-[100%] w-[100%]   rounded-full'>Buy $SCORP</button>
              </a>
             </div>
          </div>
          <div className="2xl:w-[52%] xl:w-[52%] lg:w-[52%] md:w-[90%] sm:w-[95%] w-[100%]">
            <img
              className="w-[100%] 2xl:h-[480px] xl:h-[480px]  lg:h-[480px] md:h-[457px] 2xl:block xl:block lg:block md:block sm:hidden hidden sm:h-auto h-auto"
              src={Blockchain}
              alt=""
            />
             <img
              className="w-[100%] 2xl:h-[480px] xl:h-[480px] lg:h-[480px] md:h-[457px] sm:h-auto h-auto 2xl:hidden xl:hidden lg:hidden md:hidden sm:block block"
              src={Blockchain}
              alt=""
            />
          </div>
        </div>
        <p id='success'></p>
      </div>
    </>
  )
}

export default BlockChain
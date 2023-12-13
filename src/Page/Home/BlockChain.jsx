import React from 'react'
import Blockchain from "../../assects/images/blockChain.png"
import Button from '../../components/Button/button'

function BlockChain() {
  return (
    <>
     <div className="2xl:w-[85%] xl:w-[85%] lg:w-[85%] md:w-[90%] sm:w-[90%] w-[90%]  mx-auto pb-[95px]">
        <div className="flex flex-wrap items-center 2xl:justify-between xl:justify-between lg:justify-between md:justify-center sm:justify-center justify-center gap-y-[29px]">
          <div className="2xl:w-[48%] xl:w-[48%] lg:w-[48%] md:w-[80%] sm:w-[95%] w-[100%] flex flex-col 2xl:gap-[20px] xl:gap-[20px] lg:gap-[20px] md:gap-[20px] sm:gap-[17px] gap-[17px]">
            <h2 className="2xl:text-[40px] xl:text-[40px] lg:text-[40px] md:text-[40px] sm:text-[30px] text-[30px] 2xl:text-left xl:text-left lg:text-left md:text-center sm:text-center text-center gradientText font-[900] leading-[40px] uppercase">
            COLLABORATION WITH A LEADING BLOCKCHAIN INCUBATOR
            </h2>
            <p className="text-white text-[18px] font-[400] leading-[28.80px] 2xl:text-left xl:text-left lg:text-left md:text-center sm:text-center text-center">
            Scorpion Casino has joined forces with Tenset, the incubator and masterminds behind Metahero (100x return from launch) and Everdome (80x return from launch). <br />
            Tenset's Infinity Program and success-driven approach, sky-high returns on (previous) collaborations and cutting-edge solutions is making them the perfect partner to elevate Scorpion Casino to new heights.
            </p>
            <div className='2xl:text-left xl:text-left lg:text-left md:text-center sm:text-center text-center'>
            <Button btnText={"Buy $SCORP"} className={"btn h-[64px] 2xl:w-[341px] xl:w-[341px] lg:w-[341px] md:w-[341px] sm:w-[341px] w-[100%] rounded-[999px] text-[18px] text-[#1C1D23] leading-[25px] font-[500]"}/>
            </div>
          </div>
          <div className="2xl:w-[49%] xl:w-[49%] lg:w-[49%] md:w-[90%] sm:w-[95%] w-[100%]">
            <img
              className="w-[100%] 2xl:h-[457px] xl:h-[457px] lg:h-[457px] md:h-[457px] sm:h-auto h-auto"
              src={Blockchain}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default BlockChain
import React from "react";
import Button from "../../components/Button/button";
import Beta from "../../assects/images/beta.png"
import Whitepaper from "../../assects/images/Whitepaper1.png"
import tokens from "../../assects/images/tokens.png"





const TokenomicsSectiion= () => {

    return (
        <div className="   space-y-[6rem]  xs:space-y-[2rem] sm:space-y-[2rem]" >
            <div className="">
                <div className="space-y-12 ">
                    <h3 className="font-[poppins] text-center text-[30px] xs:text-[30px] font-[700] text-[white] gradientText uppercase">TOKEN ALLOCATION</h3>
                    <p className="text-white w-[70%] mx-auto text-center text-[18px] text-[Poppins] leading-[28px]">200+ CASINO GAMESSCORPION offers a complete online casino with over 200+ games from all major game providers. Casino games include slots, blackjack, roulette, poker, live casino, and more.Buy $SCORP</p>
                   
                    <img className="w-[64%] xs:h-[auto] xs:w-[100%] sm:w-[100%] md:w-[80%] m-auto" src={tokens} alt="" />

                  
                </div>

                
            </div>
       

        </div>
    )
}
export default TokenomicsSectiion

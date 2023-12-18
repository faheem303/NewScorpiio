import React from "react";
import img1 from "../../assects/svgs/evo.e50f73eb35beb77cc2ea.png.svg"
import img2 from "../../assects/svgs/image (2).svg"
import img3 from "../../assects/svgs/image (3).svg"
import img4 from "../../assects/svgs/image (4).svg"
import img5 from "../../assects/svgs/image (5).svg"
import img6 from "../../assects/svgs/image (6).svg"
import img7 from "../../assects/svgs/image (7).svg"
import img8 from "../../assects/svgs/image (8).svg"
import img9 from "../../assects/svgs/image (9).svg"
import img10 from "../../assects/svgs/image (10).svg"
import img11 from "../../assects/svgs/image (11).svg"
import img12 from "../../assects/svgs/image (12).svg"
import img13 from "../../assects/svgs/image (13).svg"
import img14 from "../../assects/svgs/image (14).svg"
import img15 from "../../assects/svgs/image.svg"
import img16 from "../../assects/svgs/nov.8a4684aa3348193e0d6e.png.svg"
import { v4 as uuidv4 } from "uuid";

// import img1 from "../../Assets/svgs/image (1).svg"
const imgData = [
    {
        id: uuidv4(),
        src:img1
    },
    {
        id: uuidv4(),
        src:img2
    },
    {
        id: uuidv4(),
        src:img3
    },
    {
        id: uuidv4(),
        src:img4
    },
    {
        id: uuidv4(),
        src:img5
    },
    {
        id: uuidv4(),
        src:img6
    },
    {
        id: uuidv4(),
        src:img7
    },
    {
        id: uuidv4(),
        src:img8
    },
    {
        id: uuidv4(),
        src:img9
    },
    {
        id: uuidv4(),
        src:img10
    },
    {
        id: uuidv4(),
        src:img11
    },
    {
        id: uuidv4(),
        src:img12
    },
    {
        id: uuidv4(),
        src:img13
    },
    {
        id: uuidv4(),
        src:img14
    },
    {
        id: uuidv4(),
        src:img15
    },
    {
        id: uuidv4(),
        src:img16
    },

]

function PoweredBy() {
  return (
    <>
      <div className=" 2xl:w-[85%] xl:w-[85%] lg:w-[85%] md:w-[90%] sm:w-[90%] w-[90%]  mx-auto pb-[95px]">
        <h2 className="2xl:text-[40px] gradientText xl:text-[40px] lg:text-[40px] md:text-[40px] sm:text-[30px] text-[30px] text-center  font-[900] leading-[40px] uppercase pb-[47px]">
        POWERED BY
        </h2>
        <div className="flex flex-wrap justify-between gap-y-[36px]">
            {
                imgData.map((item,id)=>(
                    <div key={id} className="2xl:w-[25%] xl:w-[25%] lg:w-[25%] md:w-[33%] sm:w-[35%] w-[50%]  flex justify-center">
                        <img src={item.src} alt="" />
                    </div>
                ))
            }
        </div>
        <p id="faqs"></p>
      </div>
    </>
  );
}

export default PoweredBy;

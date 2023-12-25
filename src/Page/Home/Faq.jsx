import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import { FaPlus, FaMinus } from "react-icons/fa6";

const FaqItem = ({ question,answer3, answer,isOpen, toggleItem,answer2,table }) => {
  const { t } = useTranslation();

  const createMarkup = () => ({ __html: t(answer) });
  const contentStyles = {
    maxHeight: isOpen ? "1000px" : "0",
    opacity: isOpen ? "1" : "0",
    overflow: "hidden",
    transition: "max-height 0.9 ease, opacity 2s ease",
  };

  return (
    <div className={`border-b-[2px] ${isOpen?"border-[#C3BABA]":"border-[#C3BABA]"}  border-solid`}>
      <div
        className="flex justify-between items-center pt-[16px] pb-[18px] gap-[25px] cursor-pointer"
        onClick={toggleItem}
      >
        <div
          className={`pt-[24px] 2xl:text-[24px] xl:text-[24px] lg:text-[24px] md:text-[24px] sm:text-[24px] text-[18px] text-[white] font-[400]`}
        >
           {t(question)}
        </div>
        <h4  className={`text-[18px] border  rounded-full w-[26px] h-[26px]  flex items-center justify-center plusIcon  ${!isOpen ? "text-[#C3BABA] border-[#C3BABA] rotate-0" : "border-[#c3baba] rotate-[-180deg] text-[#c3baba]"}`}>
        {isOpen ? <FaMinus /> : <FaPlus />}
        </h4>
      </div>
      <div style={contentStyles}>
      {/* {isOpen && ( */}
        <div className="w-[100%] pr-[10px] pb-[12px]">
          <p
            className="pb-[10px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[16px] text-[#fff] font-[400]"
            dangerouslySetInnerHTML={createMarkup()}
            // ref={contentRef}
          />
          {
            answer2 &&
            <p className="pb-[10px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[16px] text-[#fff] font-[400] pt-[16px]"> {t(answer2)}</p>
          }
          {
            answer3 &&
            <p className="pb-[30px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[16px] text-[#fff] font-[400] pt-[16px]">{t(answer3)}</p>
          }
        </div>
        {
          table&&
          <div className="px-4 pb-12">
            <div className="flex justify-between border border-white bg-[#E5E7EB] p-[15px]">
              <div className="w-[40%]"><h3 className="text-[16px] xs:text-[10px] font-[600] font-[Inter]">{`${t('FaqSection.answer6claims')}`}</h3></div>
              <div className="w-[30%]"><h3 className="text-[16px] xs:text-[10px] font-[600] font-[Inter]">{`${t('FaqSection.answer6Percentage')}`}</h3></div>
              <div className="w-[30%]"><h3 className="text-end text-[16px] xs:text-[10px] font-[600] font-[Inter]">{`${t('FaqSection.answer6Unlock')}`}</h3></div>
            </div>
            <div className="flex justify-between border-t border-l border-r border-white py-[10px] px-[25px]">
            <div className="w-[40%]"><h3 className="text-[16px] xs:text-[10px] font-[400] text-white font-[Inter]">1st {`${t('FaqSection.answer6claim')}`}</h3></div>
              <div className="w-[30%]"><h3 className="text-[16px] xs:text-[10px] font-[400] text-white font-[Inter]">10%</h3></div>
              <div className="w-[30%]"><h3 className="text-end text-[16px] xs:text-[10px] font-[400] text-white font-[Inter]">{`${t('FaqSection.answer6hours')}`}</h3></div>
            </div>
            <div className="flex justify-between border-t border-l border-r border-white py-[10px] px-[25px]">
            <div className="w-[40%]"><h3 className="text-[16px] xs:text-[10px] font-[400] text-white font-[Inter]">2nd {`${t('FaqSection.answer6claim')}`}</h3></div>
              <div className="w-[30%]"><h3 className="text-[16px] xs:text-[10px] font-[400] text-white font-[Inter]">10%</h3></div>
              <div className="w-[30%]"><h3 className="text-end text-[16px] xs:text-[10px] font-[400] text-white font-[Inter]">{`${t('FaqSection.answer6days')}`}</h3></div>
            </div>
            <div className="flex justify-between border-t border-l border-r border-white py-[10px] px-[25px]">
            <div className="w-[40%]"><h3 className="text-[16px] xs:text-[10px] font-[400] text-white font-[Inter]">3rd {`${t('FaqSection.answer6claim')}`}</h3></div>
              <div className="w-[30%]"><h3 className="text-[16px] xs:text-[10px] font-[400] text-white font-[Inter]">10%</h3></div>
              <div className="w-[30%]"><h3 className="text-end text-[16px] xs:text-[10px] font-[400] text-white font-[Inter]">{`${t('FaqSection.answer6days')}`}</h3></div>
            </div>
            <div className="flex justify-between border-t border-l border-r border-white py-[10px] px-[25px]">
            <div className="w-[40%]"><h3 className="text-[16px] xs:text-[10px] font-[400] text-white font-[Inter]">4th {`${t('FaqSection.answer6claim')}`}</h3></div>
              <div className="w-[30%]"><h3 className="text-[16px] xs:text-[10px] font-[400] text-white font-[Inter]">10%</h3></div>
              <div className="w-[30%]"><h3 className="text-end text-[16px] xs:text-[10px] font-[400] text-white font-[Inter]">{`${t('FaqSection.answer6days')}`}</h3></div>
            </div>
            <div className="flex justify-between border-t border-l border-r border-white py-[10px] px-[25px]">
            <div className="w-[40%]"><h3 className="text-[16px] xs:text-[10px] font-[400] text-white font-[Inter]">5th {`${t('FaqSection.answer6claim')}`}</h3></div>
              <div className="w-[30%]"><h3 className="text-[16px] xs:text-[10px] font-[400] text-white font-[Inter]">10%</h3></div>
              <div className="w-[30%]"><h3 className="text-end text-[16px] xs:text-[10px] font-[400] text-white font-[Inter]">{`${t('FaqSection.answer6days')}`}</h3></div>
            </div>
            <div className="flex justify-between border-t border-l border-r border-white py-[10px] px-[25px]">
            <div className="w-[40%]"><h3 className="text-[16px] xs:text-[10px] font-[400] text-white font-[Inter]">6th {`${t('FaqSection.answer6claim')}`}</h3></div>
              <div className="w-[30%]"><h3 className="text-[16px] xs:text-[10px] font-[400] text-white font-[Inter]">10%</h3></div>
              <div className="w-[30%]"><h3 className="text-end text-[16px] xs:text-[10px] font-[400] text-white font-[Inter]">{`${t('FaqSection.answer6days')}`}</h3></div>
            </div>
            <div className="flex justify-between border-t border-l border-r border-white py-[10px] px-[25px]">
            <div className="w-[40%]"><h3 className="text-[16px] xs:text-[10px] font-[400] text-white font-[Inter]">7th {`${t('FaqSection.answer6claim')}`}</h3></div>
              <div className="w-[30%]"><h3 className="text-[16px] xs:text-[10px] font-[400] text-white font-[Inter]">10%</h3></div>
              <div className="w-[30%]"><h3 className="text-end text-[16px] xs:text-[10px] font-[400] text-white font-[Inter]">{`${t('FaqSection.answer6days')}`}</h3></div>
            </div>
            <div className="flex justify-between border-t border-l border-r border-white py-[10px] px-[25px]">
            <div className="w-[40%]"><h3 className="text-[16px] xs:text-[10px] font-[400] text-white font-[Inter]">8th {`${t('FaqSection.answer6claim')}`}</h3></div>
              <div className="w-[30%]"><h3 className="text-[16px] xs:text-[10px] font-[400] text-white font-[Inter]">10%</h3></div>
              <div className="w-[30%]"><h3 className="text-end text-[16px] xs:text-[10px] font-[400] text-white font-[Inter]">{`${t('FaqSection.answer6days')}`}</h3></div>
            </div>
            <div className="flex justify-between border-t border-l border-r border-white py-[10px] px-[25px]">
            <div className="w-[40%]"><h3 className="text-[16px] xs:text-[10px] font-[400] text-white font-[Inter]">9th {`${t('FaqSection.answer6claim')}`}</h3></div>
              <div className="w-[30%]"><h3 className="text-[16px] xs:text-[10px] font-[400] text-white font-[Inter]">10%</h3></div>
              <div className="w-[30%]"><h3 className="text-end text-[16px] xs:text-[10px] font-[400] text-white font-[Inter]">{`${t('FaqSection.answer6days')}`}</h3></div>
            </div>
            <div className="flex justify-between border border-white py-[10px] px-[25px]">
            <div className="w-[40%]"><h3 className="text-[16px] xs:text-[10px] font-[400] text-white font-[Inter]">10th {`${t('FaqSection.answer6claim')}`}</h3></div>
              <div className="w-[30%]"><h3 className="text-[16px] xs:text-[10px] font-[400] text-white font-[Inter]">10%</h3></div>
              <div className="w-[30%]"><h3 className="text-end text-[16px] xs:text-[10px] font-[400] text-white font-[Inter]">{`${t('FaqSection.answer6days')}`}</h3></div>
            </div>
          </div>
        }
      {/* )} */}
      </div>
    </div>
  );
};

const FaqList = () => {
  const { t } = useTranslation();

  const faqData = [
    {
        question: "FaqSection.question1",
        answer:"FaqSection.answer1",
      },
      {
        question: "FaqSection.question2",
        answer:"FaqSection.answer2",
      },
      {
        question: "FaqSection.question3",
        answer:"FaqSection.answer3",
      },
      {
        question: "FaqSection.question4",
        answer:"FaqSection.answer4",
      },
      {
        question: "FaqSection.question5",
        answer:"FaqSection.answer5",
      },
      {
        question: "FaqSection.question6",
        tableitem:true,
      },
      {
        question: "FaqSection.question7",
        answer:"FaqSection.answer7",
      },
      {
        question: "FaqSection.question8",
        answer:"FaqSection.answer8",
      },
    // Add more FAQ items as needed
  ];
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (index) => {
    const isOpen = openItems.includes(index);
    if (isOpen) {
      setOpenItems(openItems.filter((item) => item !== index));
    } else {
      setOpenItems([...openItems, index]);
    }
  };

  return (
    <>
      <div>
        <div className="2xl:w-[75%] xl:w-[75%] lg:w-[75%] md:w-[75%] sm:w-[85%] w-[85%] mx-auto pb-[95px]">
          <div className="text-center ">
          <h2 className="2xl:text-[40px] xl:text-[40px] lg:text-[40px] md:text-[40px] sm:text-[30px] text-[30px] gradientText font-[900] leading-[40px] uppercase 2xl:pb-[14px] xl:pb-[14px] lg:pb-[14px] md:pb-[14px] sm:pb-[12px] pb-[12px]">
          {t('FaqSection.title')}
         </h2>
            <p className="text-[18px] font-[400] text-[#fff] 2xl:pb-[30px] xl:pb-[30px] lg:pb-[30px] md:pb-[30px] sm:pb-[0px] pb-[0px]">
            {t('FaqSection.para')}
            </p>
          </div>
          <div className="2xl:w-[95%] xl:w-[95%] lg:w-[95%] md:w-[95%] sm:w-[95%] w-[100%] mx-auto">
            <div className="">
              {faqData.map((faq, index) => (
                <FaqItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  answer2={faq.answer2}
                  answer3={faq.answer3}
                  table={faq.tableitem}
                  isOpen={openItems.includes(index)}
                  toggleItem={() => toggleItem(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqList;

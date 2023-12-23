import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

const FaqItem = ({ question,answer3, answer,isOpen, toggleItem,answer2,table }) => {
  const createMarkup = () => ({ __html: answer });
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
          {question}
        </div>
        <h4  className={`text-[18px] border  rounded-full w-[26px] h-[26px]  flex items-center justify-center plusIcon  ${!isOpen ? "text-[#C3BABA] border-[#C3BABA] rotate-0" : "border-[#c3baba] rotate-[-180deg] text-[#c3baba]"}`}>
        {isOpen ? <FaMinus /> : <FaPlus />}
        </h4>
      </div>
      <div style={contentStyles}>
      {/* {isOpen && ( */}
        <div className="w-[100%] pr-[10px] pb-[12px]">
          <p
            className="pb-[10px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] text-[#fff] font-[400]"
            dangerouslySetInnerHTML={createMarkup()}
            // ref={contentRef}
          />
          {
            answer2 &&
            <p className="pb-[10px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] text-[#fff] font-[400] pt-[16px]"> {answer2}</p>
          }
          {
            answer3 &&
            <p className="pb-[30px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] text-[#fff] font-[400] pt-[16px]"> {answer3}</p>
          }
        </div>
        {
          table&&
          <div className="px-4 pb-12">
            <div className="flex justify-between border border-white bg-[#E5E7EB] p-[15px]">
              <div className="w-[40%]"><h3 className="text-[16px] xs:text-[10px] font-[600] font-[Inter]">Claims</h3></div>
              <div className="w-[30%]"><h3 className="text-[16px] xs:text-[10px] font-[600] font-[Inter]">Percentage</h3></div>
              <div className="w-[30%]"><h3 className="text-end text-[16px] xs:text-[10px] font-[600] font-[Inter]">Unlock Period</h3></div>
            </div>
            <div className="flex justify-between border-t border-l border-r border-white py-[10px] px-[25px]">
            <div className="w-[40%]"><h3 className="text-[16px] xs:text-[10px] font-[400] text-white font-[Inter]">1st claim</h3></div>
              <div className="w-[30%]"><h3 className="text-[16px] xs:text-[10px] font-[400] text-white font-[Inter]">10%</h3></div>
              <div className="w-[30%]"><h3 className="text-end text-[16px] xs:text-[10px] font-[400] text-white font-[Inter]">24 hours after Launch</h3></div>
            </div>
            <div className="flex justify-between border-t border-l border-r border-white py-[10px] px-[25px]">
            <div className="w-[40%]"><h3 className="text-[16px] xs:text-[10px] font-[400] text-white font-[Inter]">2nd claim</h3></div>
              <div className="w-[30%]"><h3 className="text-[16px] xs:text-[10px] font-[400] text-white font-[Inter]">10%</h3></div>
              <div className="w-[30%]"><h3 className="text-end text-[16px] xs:text-[10px] font-[400] text-white font-[Inter]">after 10 days</h3></div>
            </div>
            <div className="flex justify-between border-t border-l border-r border-white py-[10px] px-[25px]">
            <div className="w-[40%]"><h3 className="text-[16px] xs:text-[10px] font-[400] text-white font-[Inter]">3rd claim</h3></div>
              <div className="w-[30%]"><h3 className="text-[16px] xs:text-[10px] font-[400] text-white font-[Inter]">10%</h3></div>
              <div className="w-[30%]"><h3 className="text-end text-[16px] xs:text-[10px] font-[400] text-white font-[Inter]">after 10 days</h3></div>
            </div>
            <div className="flex justify-between border-t border-l border-r border-white py-[10px] px-[25px]">
            <div className="w-[40%]"><h3 className="text-[16px] xs:text-[10px] font-[400] text-white font-[Inter]">4th claim</h3></div>
              <div className="w-[30%]"><h3 className="text-[16px] xs:text-[10px] font-[400] text-white font-[Inter]">10%</h3></div>
              <div className="w-[30%]"><h3 className="text-end text-[16px] xs:text-[10px] font-[400] text-white font-[Inter]">after 10 days</h3></div>
            </div>
            <div className="flex justify-between border-t border-l border-r border-white py-[10px] px-[25px]">
            <div className="w-[40%]"><h3 className="text-[16px] xs:text-[10px] font-[400] text-white font-[Inter]">5th claim</h3></div>
              <div className="w-[30%]"><h3 className="text-[16px] xs:text-[10px] font-[400] text-white font-[Inter]">10%</h3></div>
              <div className="w-[30%]"><h3 className="text-end text-[16px] xs:text-[10px] font-[400] text-white font-[Inter]">after 10 days</h3></div>
            </div>
            <div className="flex justify-between border-t border-l border-r border-white py-[10px] px-[25px]">
            <div className="w-[40%]"><h3 className="text-[16px] xs:text-[10px] font-[400] text-white font-[Inter]">6th claim</h3></div>
              <div className="w-[30%]"><h3 className="text-[16px] xs:text-[10px] font-[400] text-white font-[Inter]">10%</h3></div>
              <div className="w-[30%]"><h3 className="text-end text-[16px] xs:text-[10px] font-[400] text-white font-[Inter]">after 10 days</h3></div>
            </div>
            <div className="flex justify-between border-t border-l border-r border-white py-[10px] px-[25px]">
            <div className="w-[40%]"><h3 className="text-[16px] xs:text-[10px] font-[400] text-white font-[Inter]">7th claim</h3></div>
              <div className="w-[30%]"><h3 className="text-[16px] xs:text-[10px] font-[400] text-white font-[Inter]">10%</h3></div>
              <div className="w-[30%]"><h3 className="text-end text-[16px] xs:text-[10px] font-[400] text-white font-[Inter]">after 10 days</h3></div>
            </div>
            <div className="flex justify-between border-t border-l border-r border-white py-[10px] px-[25px]">
            <div className="w-[40%]"><h3 className="text-[16px] xs:text-[10px] font-[400] text-white font-[Inter]">8th claim</h3></div>
              <div className="w-[30%]"><h3 className="text-[16px] xs:text-[10px] font-[400] text-white font-[Inter]">10%</h3></div>
              <div className="w-[30%]"><h3 className="text-end text-[16px] xs:text-[10px] font-[400] text-white font-[Inter]">after 10 days</h3></div>
            </div>
            <div className="flex justify-between border-t border-l border-r border-white py-[10px] px-[25px]">
            <div className="w-[40%]"><h3 className="text-[16px] xs:text-[10px] font-[400] text-white font-[Inter]">9th claim</h3></div>
              <div className="w-[30%]"><h3 className="text-[16px] xs:text-[10px] font-[400] text-white font-[Inter]">10%</h3></div>
              <div className="w-[30%]"><h3 className="text-end text-[16px] xs:text-[10px] font-[400] text-white font-[Inter]">after 10 days</h3></div>
            </div>
            <div className="flex justify-between border border-white py-[10px] px-[25px]">
            <div className="w-[40%]"><h3 className="text-[16px] xs:text-[10px] font-[400] text-white font-[Inter]">10th claim</h3></div>
              <div className="w-[30%]"><h3 className="text-[16px] xs:text-[10px] font-[400] text-white font-[Inter]">10%</h3></div>
              <div className="w-[30%]"><h3 className="text-end text-[16px] xs:text-[10px] font-[400] text-white font-[Inter]">after 10 days</h3></div>
            </div>
          </div>
        }
      {/* )} */}
      </div>
    </div>
  );
};

const FaqList = () => {
    const faqData = [
        {
            question: "What is a pre-sale?",
            answer:
              "During a pre-sale, a limited number of tokens are sold at a lower price to people who want to get involved early. This is a great chance for people to be a part of a new project before an actual coin/token launch takes place in which the general public can participate.",
              answer2:
              "It’s kind of like being part of a secret club, where you get access to something before anyone else does. By participating in a pre-sale, you can purchase a token at an early-bird price before it goes public. Therefore, pre-sale can be considered a potential opportunity to buy tokens or coins before they are released into circulation and listed on exchanges.",
          },
          {
            question: "What is SCORPION CASINO?",
            answer:"The SCORPION ecosystem is your one-stop-shop for online gambling, powered by the $SCORP token. With over 30,000 monthly betting opportunities, 210 casino games, and 160 live games, there’s no shortage of thrilling options. Plus, our licensed, transparent, and provably fair platform ensures a secure and trustworthy gaming experience for all."
          },
          {
            question: "Why are we doing a pre-sale?",
            answer:
            "Be a part of the future of online gambling by contributing to the development of Scorpion Casino's global, community-based gambling ecosystem! The funds raised during the pre-sale will be continuously reinvested in building the betting platform, introducing new features, and expanding the user base through marketing activities. This will enable us to enhance our platform's capabilities and effectively execute our go-to-market strategy before the launch of the $SCORP token. As a bonus, the $SCORP token will be listed on top centralized and decentralized exchanges, further accelerating growth for the SCORPION ecosystem. Join the Scorpion Casino public presale now to gain early access to our platform and receive 100% free credits to play with. Don't miss your chance to be a part of the future of online gambling—join the Scorpion Casino community today!",
          
          },
          {
            question: "What is the $SCORP token?",
            answer:
              "The $SCORP token is an all-in-one solution for becoming a part of a licensed, transparent, and provably fair Scorpion Casino iGaming platform. With a large range of benefits and use cases.<br/><br/> • Play with $SCORP on Scorpion Casino <br/>  • Earn passive income for holding $SCORP <br/>  • Receive weekly bonuses and free games <br/>  • Participate in our affiliate reward system <br/>  • Plus many more exciting features! <br/><br/> Get in on the action and experience the benefits of the $SCORP token for yourself. Join the SCORPION community today!",
          },
          {
            question: "Are my tokens protected?",
            answer:
              "Scorpion Casino has taken strong measurements to ensure the safety and security of the $SCORP token and its holders. We partnered with Solidproof, a leading blockchain security company, to conduct a complete security audit. This audit carefully examined the $SCORP smart contract to identify any potential risks or mistakes.",
              answer2:
              "Solidproof’s skilled team used advanced techniques to ensure the $SCORP token can be used safely. Additionally, the Scorpion Casino team has been verified by Assure DeFi, the KYC Gold Standard, to meet the highest Web3 standards.",
              answer3:
              "At Scorpion Casino, the security of our platform and users is our top priority. By completing comprehensive security audits, we are making sure that we provide an experience that is secure and trustworthy for everyone.",
          },
          {
            question: "Does it have a vesting period?",
            tableitem:true,
          },
          {
            question: "What is the $SCORP Listing Price?",
            answer:
              "The $SCORP Listing Price refers to the price at which $SCORP tokens will be available for purchase during the launch of Scorpion Casino. The initial launch price for 1 $SCORP is set at $0.05.",
          },
          {
            question: "When will $SCORP launch?",
            answer:
              "The launch of our cryptocurrency $SCORP is just around the corner. <br/> The $SCORP launch will take place after the pre-sale is sold out.",
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
         Faqs
         </h2>
            <p className="text-[18px] font-[400] text-[#fff] 2xl:pb-[30px] xl:pb-[30px] lg:pb-[30px] md:pb-[30px] sm:pb-[0px] pb-[0px]">
            You may have questions, we have the answers.
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

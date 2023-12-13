import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

const FaqItem = ({ question, answer, isOpen, toggleItem,answer2 }) => {
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
            <p className="pb-[30px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] text-[#fff] font-[400] pt-[16px]"> {answer2}</p>
          }
        </div>
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
              "During a presale, a limited number of tokens are sold at a lower price to people who want to get involved early. This is a great chance for people to be a part of a new project before an actual coin/token launch takes place in which the general public can participate. It’s kind of like being part of a secret club, where you get access to something before anyone else does. By participating in a presale, you can purchase a token at an early-bird price before it goes public. Therefore, presale can be considered a potential opportunity to buy tokens or coins before they are released into circulation and listed on exchanges.",
          },
          {
            question: "What is SCORPION CASINO?",
            answer:"The SCORPION ecosystem is your one-stop-shop for decentralized gambling, powered by the $SCORP token. With over 30,000 monthly betting opportunities, 210 casino games, and 160 live games, there's no shortage of thrilling options. Plus, our licensed, transparent, and provably fair platform ensures a secure and trustworthy gaming experience for all."
          },
          {
            question: "Why are we doing a pre-sale?",
            answer:
            "Be a part of the future of online gambling by contributing to the development of Scorpion Casino's global community-based gambling ecosystem! Your support will help us enhance our platform's capabilities and execute our go-to-market strategy. As a bonus, the $SCORP token will be listed on top centralized and decentralized exchanges, driving further growth for the SCORPION ecosystem. Join the Scorpion Casino public presale now and gain early access to our platform, plus receive 100% free credits to play with. Don't miss your chance to be a part of the future of online gambling - join the Scorpion Casino community today!",
          },
          {
            question: "What is the $SCORP token?",
            answer:
              "The $SCORP token is the all-in-one solution for gaming on a licensed, transparent, and provably fair crypto platform. With a variety of benefits and use cases, you can be part of the booming crypto casino industry.<br/> • Use as main payment method for the SCORPION Ecosystem <br/>  • Earn passive income for holding $SCORP <br/>  • Receive weekly bonuses and free games <br/>  • Participate in our affiliate reward system <br/>  • Plus many more exciting features! <br/>  Get in on the action and experience the benefits of the $SCORP token for yourself. Join the SCORPION community today!",
          },
          {
            question: "Are my tokens protected?",
            answer:
              "To ensure the safety and security of the $SCORP token and its holders, Scorpion Casino has undergone a rigorous security audit by Solidproof, a leading blockchain security company. The audit thoroughly examined our platform's specifications, smart contracts, and team to ensure that they meet the highest Web3 standards. Solidproof's skilled team utilized advanced methods to identify any errors or potential risks, ensuring the safe use of the $SCORP token. <br/> At Scorpion Casino, we prioritize the security of our platform and our users. By undergoing a comprehensive security audit, we are committed to providing a secure and trustworthy gaming experience for all.",
          },
          {
            question: "Does it have a vesting period?",
            answer:
              "Yes, please refer to our Vesting plan below.",
          },
          {
            question: "What is the $SCORP Listing Price?",
            answer:
              "The $SCORP Listing Price refers to the price at which $SCORP tokens will be available for purchase during the launch of Scorpion Casino. The initial launch price for 1 $SCORP is set at $0.05.",
          },
          {
            question: "When will $SCORP launch?",
            answer:
              "The launch of our cryptocurrency SCORP is just around the corner. <br/> The launch will take place after the presale is sold out.",
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
          <div className="text-center pb-[40px]">
          <h2 className="2xl:text-[40px] xl:text-[40px] lg:text-[40px] md:text-[40px] sm:text-[30px] text-[30px] gradientText font-[900] leading-[40px] uppercase 2xl:pb-[14pxpx] xl:pb-[14pxpx] lg:pb-[14pxpx] md:pb-[14pxpx] sm:pb-[12px] pb-[12px]">
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

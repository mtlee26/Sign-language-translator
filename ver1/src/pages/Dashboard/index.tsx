import Layout from "Layout";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

interface IProps {
  className?: string;
}

function Dashboard(props: IProps) {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  const [currentButton] = useState("Dashboard");
  const history = useHistory();
  const handleMouseEnter = (buttonName: string) => {
    setHoveredButton(buttonName);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

  const handleTranslateClick = () => {
    history.push("/translate");
  };

  const buttonClass = (buttonName: string) => {
    if (currentButton === buttonName || hoveredButton === buttonName) {
      return "bg-[rgb(84,169,206)] text-white";
    }
    return "bg-[rgb(30,30,47)] text-white";
  };

  return (
    <Layout>
      <article className="xl:w-full xl:min-w-[unset] xl:m-0 xs:gap-y-20 tn:gap-y-[50px] w-[1156px] flex flex-col items-center gap-y-[117px] min-w-0 max-w-[1156px] mb-[61px]">
        {/* Main content area */}

        <section
          className="flex flex-col bg-[image:var(--src)] bg-[center_center] bg-[length:cover] bg-no-repeat bg-white rounded-lg w-full z-[1] overflow-hidden"
          style={{
            "--src": `url(${"/assets/e707ad33aa6fd129f7f9bd3299ccd688.png"})`,
          }}
        >
          {/* Hero banner section */}

          <div className="xs:mt-20 xs:mr-0 xs:mb-20 xs:ml-[6.66%] tn:mt-[50px] tn:mr-0 tn:mb-[50px] tn:ml-[6.66%] w-[408px] flex flex-col gap-y-[31px] max-w-[85%] mt-[121px] mb-[107px] ml-[6.66%]">
            <h2 className="md:text-[34px] md:items-start xxs:text-[30px] font-black text-[37px] leading-[1.29] font-NunitoSans text-white z-[1]">
              Sign language communication tool
            </h2>

            <button className="bg-[rgb(84,169,206)] rounded-lg w-[184px] pt-[16.5px] pr-6 pb-[16.5px] pl-6 flex justify-center items-center gap-x-3 max-w-full">
              {/* TODO */}
              <p className="font-semibold text-[18px] leading-[1.27] font-PlusJakartaSans text-white capitalize min-w-0 mt-px">
                How to use
              </p>
              <img
                className="w-6 min-w-0"
                src={"/assets/9a492b13b04238b64597d6cd1d66e897.png"}
                alt="alt text"
              />
            </button>
          </div>
        </section>

        <section className="md:gap-x-8 sm:grid-cols-[repeat(1,_minmax(0,_1fr))] grid grid-cols-[repeat(2,_minmax(0,_1fr))] content-start gap-y-[78px] gap-x-[171px] w-[91.87%]">
          {/* Feature cards grid layout */}

          <article className="flex flex-col relative row-span-1 column-span-1">
            <div className="bg-[rgb(30,30,47)] rounded-[10px] relative min-h-[177px]" />

            <div className="tn:gap-x-2 w-[488px] flex justify-between gap-x-2.5 absolute left-[22px] top-[-61px]">
              <h2 className="md:text-[32px] md:items-start xs:mt-[78px] xs:mx-0 xs:mb-20 xxs:text-[30px] tn:my-[50px] tn:mx-0 font-normal text-[36px] leading-[1.33] font-PlusJakartaSans text-white mt-[78px] mb-[135px] cursor-pointer">
                Dictionary
              </h2>
              <img
                className="w-[262px] object-cover min-w-0"
                src="https://cdn1.iconfinder.com/data/icons/male-characters-2-1/1000/character_builder___library_man_carry_book_notebook-256.png"
                alt="alt text"
              />
            </div>
          </article>

          <div className="flex flex-col bg-[rgba(244,222,10,0.729)] rounded-[10px] relative row-span-1 column-span-1">
            <h2 className="md:text-[32px] md:items-start sm:w-[85%] xs:mt-[17px] xs:mr-0 xs:mb-20 xs:ml-4 xxs:text-[30px] tn:mt-[17px] tn:mr-0 tn:mb-[50px] tn:ml-2 font-normal text-[36px] leading-[1.33] font-PlusJakartaSans text-black w-[166px] relative max-w-[85%] mt-[17px] mb-28 ml-[22px] cursor-pointer">
              Translator
            </h2>
            <img
              className="w-[262px] translate-x-[0] translate-y-[-50%] absolute right-[-65px] top-1/2"
              src="https://cdn0.iconfinder.com/data/icons/akura-travel-illustration/512/Translate-256.png"
              alt="alt text"
            />
          </div>

          <div className="flex flex-col relative row-span-1 column-span-1">
            <div className="bg-[rgb(84,169,206)] rounded-[10px] relative min-h-[176px]" />

            <div className="tn:gap-x-2 w-[447px] translate-x-[0] translate-y-[-50%] flex justify-between gap-x-2.5 absolute left-[22px] top-1/2">
              <h2 className="md:mt-[59px] md:mx-0 md:mb-[150px] md:text-[32px] md:items-start xs:mt-[59px] xs:mx-0 xs:mb-20 xxs:text-[30px] tn:my-[50px] tn:mx-0 font-normal text-[36px] leading-[1.33] font-PlusJakartaSans text-white mt-[59px] mb-[154px] cursor-pointer">
                Games
              </h2>
              <img
                className="w-[262px] object-cover min-w-0"
                src={"/assets/327fb7c90ade98ac584799bb547c9734.png"}
                alt="alt text"
              />
            </div>
          </div>

          <div className="flex flex-col relative row-span-1 column-span-1">
            <div className="bg-[rgba(75,75,89,0.607)] rounded-[10px] relative min-h-[176px]" />

            <div className="tn:gap-x-2 w-[462px] flex justify-between gap-x-2.5 absolute left-[22px] top-[-48px]">
              <h2 className="md:text-[32px] md:items-start xs:mt-[65px] xs:mx-0 xs:mb-20 xxs:text-[30px] tn:my-[50px] tn:mx-0 font-normal text-[36px] leading-[1.33] font-PlusJakartaSans text-white mt-[65px] mb-[148px] cursor-pointer">
                About us
              </h2>
              <img
                className="w-[262px] object-cover min-w-0"
                src="https://cdn0.iconfinder.com/data/icons/business-profile-1/1000/2205Profile-BusinessProfile-256.png"
                alt="alt text"
              />
            </div>
          </div>
        </section>
      </article>
    </Layout>
  );
}

export default Dashboard;

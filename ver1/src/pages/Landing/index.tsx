import React from "react";
import cn from "classnames";

import { useHistory } from "react-router-dom";

interface IProps {
  className?: string;
}

function Landing(props: IProps) {
  const history = useHistory();

  const handleLoginClick = () => {
    history.push("/login");
  };

  const handleSignUpClick = () => {
    history.push("/signup");
  };

  return (
    <main
      className={`landing bg-white flex flex-col overflow-hidden ${
        props.className || ""
      }`}
    >
      <div>
        {/* Section 1 */}
        <section className="flex flex-col z-[5] relative">
          <div className="flex flex-col bg-[rgb(248,248,251)] overflow-hidden relative mt-[100px]">
            <hr className="bg-[rgb(244,221,10)] w-10 h-0.5 relative min-h-[2px] mt-[179px] mb-[577px] ml-[3.54%]" />

            <div className="w-[1338px] h-[480px] flex gap-x-[11px] absolute left-[51px] top-[108px]">
              <div className="w-[625px] flex flex-col gap-y-[60px] min-w-0 mt-[62px]">
                <div className="flex flex-col gap-y-10">
                  <div className="flex flex-col items-center gap-y-7">
                    <p className="font-medium text-[16px] leading-tight font-PlusJakartaSans text-[rgb(30,30,47)] capitalize w-[84%]">
                      Connecting People Through Sign Language
                    </p>
                    <h2 className="font-bold text-[64px] leading-[1.2] font-Inter text-[rgb(30,30,47)] tracking-[-1.28px] w-full">
                      Communicate Using Sign Language
                    </h2>
                  </div>

                  <div className="flex flex-col border-solid border-[rgb(244,221,10)] border-t-[0px] border-r-[0px] border-b-[0px] border-l-2">
                    <p className="font-normal text-[16px] leading-[1.87] font-Inter text-[rgb(30,30,47)] tracking-[-0.32px] ml-5">
                      Our application facilitates effective communication for
                      the deaf and mute community, empowering them with the
                      skills to connect with others seamlessly.
                    </p>
                  </div>
                </div>

                <button className="bg-[rgb(30,30,47)] rounded-lg w-[230px] pt-[16.5px] pr-6 pb-[16.5px] pl-6 flex justify-center items-center gap-x-3 max-w-full">
                  {/* TODO */}
                  <p
                    className="font-semibold text-[18px] leading-[1.27] font-PlusJakartaSans text-white capitalize min-w-0 mt-px"
                    onClick={handleLoginClick}
                  >
                    Get Started Now
                  </p>
                  <img
                    className="w-6 min-w-0"
                    src={"/assets/9a492b13b04238b64597d6cd1d66e897.png"}
                    alt="alt text"
                  />
                </button>
              </div>

              <div className="w-[702px] flex flex-col gap-y-1.5 min-w-0">
                <img
                  className="w-[66px] z-[1]"
                  src={"/assets/490d3b6fd78d4c76cb6b577e73db6475.svg"}
                  alt="alt text"
                />
                <img
                  className="rounded-[38px] w-[calc(100%_-_39px)] ml-[39px]"
                  src={"/assets/aa9bf681a847a9f9c4894831fdae1ed1.png"}
                  alt="alt text"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col bg-[rgb(248,248,251)] w-full h-[120px] overflow-hidden absolute left-0 top-0">
            <div className="w-[88.89%] flex justify-between items-center gap-x-2.5 my-5 mx-auto">
              <div className="w-[798px] flex justify-between items-center gap-x-2.5 min-w-0">
                <div className="w-[234px] flex gap-x-3 min-w-0">
                  <img
                    className="w-10 min-w-0"
                    src={"/assets/70bee51749289912a11c3cd7287001ce.svg"}
                    alt="alt text"
                  />
                  <h3 className="min-w-0 mt-1 mb-[3px]">
                    <span className="font-extrabold text-[26px] leading-[1.26] font-PlusJakartaSans text-black">
                      <span className="font-extrabold text-[rgb(83,169,205)]">
                        Sign
                      </span>
                      <span className="font-extrabold text-[rgb(30,30,47)]">
                        Language
                      </span>
                    </span>
                  </h3>
                </div>

                <div className="w-[343px] flex justify-between gap-x-2.5 min-w-0">
                  <p className="font-medium text-[16px] leading-tight font-PlusJakartaSans text-[rgb(84,169,206)] min-w-0">
                    Home
                  </p>

                  <div className="w-[76px] flex gap-x-3 min-w-0">
                    <p className="font-medium text-[16px] leading-tight font-PlusJakartaSans text-[rgb(30,30,47)] min-w-0">
                      Pages
                    </p>
                    <img
                      className="w-4 min-w-0 my-0.5"
                      src={"/assets/f476eb1adaf6532cb1a71a0c06b685a9.png"}
                      alt="alt text"
                    />
                  </div>

                  <p className="font-medium text-[16px] leading-tight font-PlusJakartaSans text-[rgb(30,30,47)] min-w-0">
                    Blog
                  </p>
                  <p className="font-medium text-[16px] leading-tight font-PlusJakartaSans text-[rgb(30,30,47)] min-w-0">
                    Contact
                  </p>
                </div>
              </div>

              <div className="w-[281px] flex gap-x-6 min-w-0">
                <button
                  className="flex justify-center font-medium text-[18px] leading-[1.27] font-Inter text-white text-center tracking-[-0.36px] bg-[rgb(84,169,206)] rounded-lg pt-[18.5px] pr-10 pb-[18.5px] pl-10 min-w-[126px]"
                  onClick={handleLoginClick}
                >
                  {/* TODO */}
                  Login
                </button>

                <button
                  className="bg-[rgb(30,30,47)] rounded-lg pt-[18.5px] pr-6 pb-[18.5px] pl-6 flex justify-center items-center gap-x-2.5 min-w-[131px]"
                  onClick={handleSignUpClick}
                >
                  {/* TODO */}
                  <p className="font-medium text-[18px] leading-[1.27] font-Inter text-white tracking-[-0.36px] min-w-0">
                    Sign up
                  </p>
                  <img
                    className="w-2.5 min-w-0"
                    src={"/assets/e4f81165347613c7a05a20b30e554532.svg"}
                    alt="alt text"
                  />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="flex flex-col z-[4] relative">
          <div className="flex flex-col bg-white overflow-hidden relative">
            <hr className="bg-[rgb(244,221,10)] w-10 h-0.5 min-h-[2px] mt-[120px] mb-[636px] ml-[39.38%]" />
          </div>

          <div className="w-[1396px] h-[537px] flex flex-col items-center gap-y-[60px] absolute left-[22px] top-[111px]">
            <div className="w-[34.46%] flex flex-col items-center gap-y-5">
              <p className="flex justify-end font-medium text-[16px] leading-tight font-PlusJakartaSans text-black text-right capitalize w-[63.62%]">
                Breaking Communication Barriers
              </p>
              <h2 className="flex justify-center font-bold text-[36px] leading-tight font-PlusJakartaSans text-[rgb(30,30,47)] text-center capitalize">
                Unlock Accessibility for All.
              </h2>
            </div>

            <div className="xxl-max:gap-y-0 xxl:gap-y-0 grid grid-cols-[repeat(4,_minmax(0,_1fr))] content-start gap-x-5 w-full">
              <div className="flex flex-col rounded-xl outline outline-[rgb(232,232,234)] outline-1 outline-offset-[-1px] row-span-1 column-span-1">
                <div className="flex flex-col gap-y-6 mt-7 mx-7 mb-16">
                  <div className="flex flex-col gap-y-6">
                    <img
                      className="w-[60px]"
                      src={"/assets/24a3bbaca0b3b0da79a24ab76a277fad.png"}
                      alt="alt text"
                    />
                    <h3 className="font-semibold text-[24px] leading-tight font-PlusJakartaSans text-[rgb(30,30,47)] capitalize">
                      Sign Language Recognition
                    </h3>
                  </div>

                  <div className="flex flex-col gap-y-9">
                    <p className="font-medium text-base font-PlusJakartaSans text-[rgb(75,75,89)]">
                      Effortlessly recognize hand gestures and translate sign
                      language into text or speech in real-time.
                    </p>

                    <div className="flex gap-x-3">
                      <p className="font-medium text-[18px] leading-[1.27] font-PlusJakartaSans text-[rgb(30,30,47)] capitalize min-w-0 mb-px">
                        Learn more
                      </p>
                      <img
                        className="w-6 min-w-0"
                        src={"/assets/971b5ba27301c949e435ed231d9f1d78.png"}
                        alt="alt text"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col rounded-xl outline outline-[rgb(232,232,234)] outline-1 outline-offset-[-1px] row-span-1 column-span-1">
                <div className="flex flex-col gap-y-6 mt-7 mx-7 mb-10">
                  <div className="flex flex-col gap-y-6">
                    <img
                      className="w-[60px]"
                      src={"/assets/90c8ae71de94e7ebb1ec027ea1958eab.png"}
                      alt="alt text"
                    />
                    <h3 className="font-semibold text-[24px] leading-tight font-PlusJakartaSans text-[rgb(30,30,47)] capitalize">
                      Text-to-Sign Conversion
                    </h3>
                  </div>

                  <div className="flex flex-col gap-y-9">
                    <p className="font-medium text-base font-PlusJakartaSans text-[rgb(75,75,89)]">
                      Convert written or spoken words into sign language,
                      enabling seamless interactions with the hearing and
                      speech-impaired.
                    </p>

                    <div className="flex gap-x-3">
                      <p className="font-medium text-[18px] leading-[1.27] font-PlusJakartaSans text-[rgb(30,30,47)] capitalize min-w-0 mb-px">
                        Learn more
                      </p>
                      <img
                        className="w-6 min-w-0"
                        src={"/assets/971b5ba27301c949e435ed231d9f1d78.png"}
                        alt="alt text"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col rounded-xl outline outline-[rgb(232,232,234)] outline-1 outline-offset-[-1px] row-span-1 column-span-1">
                <div className="flex flex-col gap-y-6 mt-7 mx-7 mb-[118px]">
                  <div className="flex flex-col gap-y-6 mr-[9px]">
                    <img
                      className="w-[60px]"
                      src={"/assets/f337c93a13b835bab4f4db5e3a5c440b.png"}
                      alt="alt text"
                    />
                    <h3 className="font-semibold text-[24px] leading-tight font-PlusJakartaSans text-[rgb(30,30,47)] capitalize">
                      User-Friendly Interface
                    </h3>
                  </div>

                  <div className="flex flex-col gap-y-9">
                    <p className="font-medium text-base font-PlusJakartaSans text-[rgb(75,75,89)]">
                      Make language translation easy and intuitive. Navigate
                      effortlessly.
                    </p>

                    <div className="flex gap-x-3">
                      <p className="font-medium text-[18px] leading-[1.27] font-PlusJakartaSans text-[rgb(30,30,47)] capitalize min-w-0 mb-px">
                        Learn more
                      </p>
                      <img
                        className="w-6 min-w-0"
                        src={"/assets/971b5ba27301c949e435ed231d9f1d78.png"}
                        alt="alt text"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col rounded-xl outline outline-[rgb(232,232,234)] outline-1 outline-offset-[-1px] row-span-1 column-span-1">
                <div className="flex flex-col gap-y-6 mt-7 mx-7 mb-10">
                  <div className="flex flex-col gap-y-6">
                    <img
                      className="w-[60px]"
                      src={"/assets/96412ac4b963a6490d58edd35de846bb.png"}
                      alt="alt text"
                    />
                    <h3 className="font-semibold text-[24px] leading-tight font-PlusJakartaSans text-[rgb(30,30,47)] capitalize">
                      Interactive Learning Platform
                    </h3>
                  </div>

                  <div className="flex flex-col gap-y-9">
                    <p className="font-medium text-base font-PlusJakartaSans text-[rgb(75,75,89)]">
                      Access engaging lessons, visual guides, and interactive
                      exercises to learn sign language at your own pace.
                    </p>

                    <div className="flex gap-x-3">
                      <p className="font-medium text-[18px] leading-[1.27] font-PlusJakartaSans text-[rgb(30,30,47)] capitalize min-w-0 mb-px">
                        Learn more
                      </p>
                      <img
                        className="w-6 min-w-0"
                        src={"/assets/971b5ba27301c949e435ed231d9f1d78.png"}
                        alt="alt text"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="flex flex-col z-[3] relative">
          <div className="flex flex-col bg-[rgb(248,248,251)] overflow-hidden relative">
            <img
              className="w-[calc(100%_-_42.36%)] h-0.5 mt-[155px] mr-[42.36%] mb-[836px] ml-auto"
              src={"/assets/9aace562d6e61ade09eb6b38a0bf63d5.svg"}
              alt="alt text"
            />
          </div>

          <div className="w-[1210px] h-[793px] flex flex-col gap-y-[120px] absolute left-[120px] top-[100px]">
            <div className="flex justify-between gap-x-2.5">
              <img
                className="rounded-xl w-[550px] min-w-0"
                src={"/assets/b41c9abef740d3d8a73172a344c7f835.png"}
                alt="alt text"
              />

              <div className="w-[540px] flex flex-col gap-y-[61px] min-w-0 mt-[85px] mb-[55px]">
                <div className="flex flex-col gap-y-[42px]">
                  <h2 className="font-bold text-[36px] leading-tight font-PlusJakartaSans text-[rgb(30,30,47)] capitalize">
                    Sign Language Translator
                  </h2>

                  <div className="flex flex-col border-solid border-[rgb(244,221,10)] border-t-[0px] border-r-[0px] border-b-[0px] border-l-2">
                    <p className="font-normal text-[18px] leading-[1.66] font-Inter text-black tracking-[-0.36px] mb-[19px] ml-5">
                      Convert your text or speech into sign language animations,
                      enabling effective communication between sign language
                      users and those unfamiliar with it.
                    </p>
                  </div>
                </div>

                <button className="bg-[rgb(30,30,47)] rounded-lg w-[157px] pt-[16.5px] pr-6 pb-[16.5px] pl-6 flex justify-center items-center gap-x-3 max-w-full">
                  {/* TODO */}
                  <p
                    className="font-semibold text-[18px] leading-[1.27] font-PlusJakartaSans text-white capitalize min-w-0 mt-px"
                    onClick={handleLoginClick}
                  >
                    Let’s go
                  </p>
                  <img
                    className="w-6 min-w-0"
                    src={"/assets/9a492b13b04238b64597d6cd1d66e897.png"}
                    alt="alt text"
                  />
                </button>
              </div>
            </div>

            <div className="flex flex-col bg-[rgb(30,30,47)] rounded-xl mr-2.5">
              <div className="w-[84.75%] flex justify-between items-center gap-x-2.5 mt-[61px] mx-auto mb-[60px]">
                <div className="w-[228px] flex flex-col items-center min-w-0">
                  <div className="w-[50.44%] flex gap-x-0.5">
                    <h2 className="font-extrabold text-[48px] leading-normal font-PlusJakartaSans text-white min-w-0">
                      24/
                    </h2>
                    <h2 className="font-extrabold text-[48px] leading-normal font-PlusJakartaSans text-[rgb(84,169,206)] min-w-0">
                      7
                    </h2>
                  </div>

                  <p className="flex justify-center font-medium text-[18px] leading-normal font-PlusJakartaSans text-white text-center opacity-[0.5]">
                    Support available for users
                  </p>
                </div>

                <div className="bg-white w-0.5 h-10 opacity-[0.2] min-w-0 min-h-[40px]" />

                <div className="w-28 flex flex-col items-center min-w-0">
                  <div className="w-full flex gap-x-0.5">
                    <h2 className="font-extrabold text-[48px] leading-normal font-PlusJakartaSans text-white min-w-0">
                      85
                    </h2>
                    <h2 className="font-extrabold text-[48px] leading-normal font-PlusJakartaSans text-[rgb(84,169,206)] min-w-0">
                      %
                    </h2>
                  </div>

                  <p className="flex justify-center font-medium text-[18px] leading-normal font-PlusJakartaSans text-white text-center opacity-[0.5]">
                    satisfaction
                  </p>
                </div>

                <div className="bg-white w-0.5 h-10 opacity-[0.2] min-w-0 min-h-[40px]" />

                <div className="w-[163px] flex flex-col items-center min-w-0">
                  <div className="w-full flex gap-x-3.5">
                    <h2 className="font-extrabold text-[48px] leading-normal font-PlusJakartaSans text-white min-w-0">
                      2000
                    </h2>
                    <h2 className="font-extrabold text-[48px] leading-normal font-PlusJakartaSans text-[rgb(84,169,206)] min-w-0">
                      +
                    </h2>
                  </div>

                  <p className="flex justify-center font-medium text-[18px] leading-normal font-PlusJakartaSans text-white text-center opacity-[0.5]">
                    Common words
                  </p>
                </div>

                <div className="bg-white w-0.5 h-10 opacity-[0.2] min-w-0 min-h-[40px]" />

                <div className="w-[148px] flex flex-col min-w-0">
                  <div className="flex gap-x-2.5">
                    <h2 className="font-extrabold text-[48px] leading-normal font-PlusJakartaSans text-white min-w-0">
                      600
                    </h2>
                    <h2 className="font-extrabold text-[48px] leading-normal font-PlusJakartaSans text-[rgb(84,169,206)] min-w-0">
                      /s
                    </h2>
                  </div>

                  <p className="flex justify-center font-medium text-[18px] leading-normal font-PlusJakartaSans text-white text-center opacity-[0.5] mr-0.5 ml-px">
                    words translated
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section className="flex flex-col z-[2] relative">
          <img
            className="w-[calc(100%_-_8.33%)] h-0.5 relative mt-[121px] mb-[849px] ml-[8.33%]"
            src={"/assets/9aace562d6e61ade09eb6b38a0bf63d5.svg"}
            alt="alt text"
          />

          <div className="w-[1200px] h-[846px] flex flex-col gap-y-[120px] absolute left-[120px] top-[47px]">
            <div className="flex justify-between gap-x-2.5">
              <div className="w-[540px] flex flex-col gap-y-[60px] min-w-0 mt-[104px] mb-[21px]">
                <div className="flex flex-col gap-y-10">
                  <h2 className="font-bold text-[36px] leading-tight font-PlusJakartaSans text-[rgb(30,30,47)] capitalize">
                    Learn Sign Language
                  </h2>

                  <div className="flex flex-col border-solid border-[rgb(244,221,10)] border-t-[0px] border-r-[0px] border-b-[0px] border-l-2">
                    <p className="font-normal text-[18px] leading-[1.66] font-Inter text-black tracking-[-0.36px] mb-[60px] ml-5">
                      Access comprehensive lessons, visual aids, and interactive
                      videos to learn and practice common sign language
                      gestures. Engage with quizzes and games designed to
                      enhance your learning experience.
                    </p>
                  </div>
                </div>

                <button className="bg-[rgb(30,30,47)] rounded-lg w-[157px] pt-[16.5px] pr-6 pb-[16.5px] pl-6 flex justify-center items-center gap-x-3 max-w-full">
                  {/* TODO */}
                  <p
                    className="font-semibold text-[18px] leading-[1.27] font-PlusJakartaSans text-white capitalize min-w-0 mt-px"
                    onClick={handleLoginClick}
                  >
                    Let’s go
                  </p>
                  <img
                    className="w-6 min-w-0"
                    src={"/assets/9a492b13b04238b64597d6cd1d66e897.png"}
                    alt="alt text"
                  />
                </button>
              </div>

              <div className="w-[603px] flex flex-col min-w-0">
                <img
                  className="w-[65px] z-[1]"
                  src={"/assets/490d3b6fd78d4c76cb6b577e73db6475.svg"}
                  alt="alt text"
                />
                <img
                  className="rounded-xl w-[89.39%] ml-auto"
                  src={"/assets/2644587f68da83af7bd8c79a26347f9e.png"}
                  alt="alt text"
                />
              </div>
            </div>

            <div className="flex flex-col bg-[rgb(30,30,47)] rounded-xl">
              <div className="w-[84.75%] flex justify-between items-center gap-x-2.5 mt-[61px] mx-auto mb-[60px]">
                <div className="w-[228px] flex flex-col items-center min-w-0">
                  <div className="w-[50.44%] flex gap-x-0.5">
                    <h2 className="font-extrabold text-[48px] leading-normal font-PlusJakartaSans text-white min-w-0">
                      24/
                    </h2>
                    <h2 className="font-extrabold text-[48px] leading-normal font-PlusJakartaSans text-[rgb(84,169,206)] min-w-0">
                      7
                    </h2>
                  </div>

                  <p className="flex justify-center font-medium text-[18px] leading-normal font-PlusJakartaSans text-white text-center opacity-[0.5]">
                    Support available for users
                  </p>
                </div>

                <div className="bg-white w-0.5 h-10 opacity-[0.2] min-w-0 min-h-[40px]" />

                <div className="w-28 flex flex-col items-center min-w-0">
                  <div className="w-full flex gap-x-0.5">
                    <h2 className="font-extrabold text-[48px] leading-normal font-PlusJakartaSans text-white min-w-0">
                      85
                    </h2>
                    <h2 className="font-extrabold text-[48px] leading-normal font-PlusJakartaSans text-[rgb(84,169,206)] min-w-0">
                      %
                    </h2>
                  </div>

                  <p className="flex justify-center font-medium text-[18px] leading-normal font-PlusJakartaSans text-white text-center opacity-[0.5]">
                    satisfaction
                  </p>
                </div>

                <div className="bg-white w-0.5 h-10 opacity-[0.2] min-w-0 min-h-[40px]" />

                <div className="w-[163px] flex flex-col items-center min-w-0">
                  <div className="w-full flex gap-x-3.5">
                    <h2 className="font-extrabold text-[48px] leading-normal font-PlusJakartaSans text-white min-w-0">
                      2000
                    </h2>
                    <h2 className="font-extrabold text-[48px] leading-normal font-PlusJakartaSans text-[rgb(84,169,206)] min-w-0">
                      +
                    </h2>
                  </div>

                  <p className="flex justify-center font-medium text-[18px] leading-normal font-PlusJakartaSans text-white text-center opacity-[0.5]">
                    Common words
                  </p>
                </div>

                <div className="bg-white w-0.5 h-10 opacity-[0.2] min-w-0 min-h-[40px]" />

                <div className="w-[148px] flex flex-col min-w-0">
                  <div className="flex gap-x-2.5">
                    <h2 className="font-extrabold text-[48px] leading-normal font-PlusJakartaSans text-white min-w-0">
                      600
                    </h2>
                    <h2 className="font-extrabold text-[48px] leading-normal font-PlusJakartaSans text-[rgb(84,169,206)] min-w-0">
                      /s
                    </h2>
                  </div>

                  <p className="flex justify-center font-medium text-[18px] leading-normal font-PlusJakartaSans text-white text-center opacity-[0.5] mr-0.5 ml-px">
                    words translated
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section className="flex flex-col z-[1] relative">
          <div className="bg-[rgb(30,30,47)] w-full h-[221px] absolute left-0 bottom-0" />
          <hr className="bg-[rgb(244,221,10)] w-10 h-0.5 relative min-h-[2px] mt-[130px] mb-[905px] ml-[8.33%]" />

          <div className="w-[1200px] h-[816px] flex flex-col gap-y-[120px] absolute left-[120px] top-[121px]">
            <div className="flex flex-col gap-y-[60px]">
              <div className="w-[289px] flex flex-col items-center gap-y-5">
                <p className="font-medium text-[16px] leading-tight font-PlusJakartaSans text-[rgb(30,30,47)] capitalize w-[65.4%]">
                  Testimonials
                </p>
                <h2 className="font-bold text-[36px] leading-tight font-PlusJakartaSans text-[rgb(30,30,47)] capitalize">
                  what Users says
                </h2>
              </div>

              <div className="flex gap-x-5">
                <div className="flex flex-col bg-white rounded-xl w-[590px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.12)] min-w-0">
                  <div className="flex flex-col gap-y-6 mt-7 mx-7 mb-10">
                    <div className="flex gap-x-6">
                      <img
                        className="rounded-lg w-20 min-w-0"
                        src={"/assets/4de069e7c3f768477a333b51c5a5d674.png"}
                        alt="alt text"
                      />

                      <div className="flex flex-col bg-[rgb(248,248,251)] rounded-lg w-[430px] min-w-0">
                        <div className="flex justify-between items-center gap-x-2.5 mt-4 mx-4 mb-[15px]">
                          <div className="w-[92px] flex flex-col gap-y-2 min-w-0">
                            <p className="font-bold text-[18px] leading-[1.27] font-PlusJakartaSans text-[rgb(30,30,47)] mr-7">
                              Jhon D.
                            </p>
                            <div className="font-normal text-[14px] leading-[1.28] font-PlusJakartaSans text-[rgb(75,75,89)]">
                              Social Worker
                            </div>
                          </div>

                          <img
                            className="w-[47px] min-w-0"
                            src={"/assets/aebe4f16c3c7da747320fb609c038204.svg"}
                            alt="alt text"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-y-[35px]">
                      <p className="font-medium text-[16px] leading-[1.7] font-PlusJakartaSans text-[rgb(75,75,89)]">
                        This app has changed how I communicate with my deaf
                        friends! The sign language recognition is fast, allowing
                        me to chat without language barriers.
                      </p>
                      <img
                        className="w-[116px]"
                        src={"/assets/8d7d866e1102424a33bd0c45d8db5670.svg"}
                        alt="alt text"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col bg-white rounded-xl w-[590px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.12)] min-w-0">
                  <div className="flex flex-col gap-y-6 mt-7 mx-7 mb-10">
                    <div className="flex gap-x-6">
                      <img
                        className="rounded-lg w-20 min-w-0"
                        src={"/assets/d9e2980b284fdf7624398ad8e011556f.png"}
                        alt="alt text"
                      />

                      <div className="flex flex-col bg-[rgb(248,248,251)] rounded-lg w-[430px] min-w-0">
                        <div className="flex justify-between items-center gap-x-2.5 mt-4 mx-4 mb-[15px]">
                          <div className="w-[98px] flex flex-col gap-y-2 min-w-0">
                            <p className="font-bold text-[18px] leading-[1.27] font-PlusJakartaSans text-[rgb(30,30,47)] mr-[29px]">
                              Judy W.
                            </p>
                            <div className="font-normal text-[14px] leading-[1.28] font-PlusJakartaSans text-[rgb(75,75,89)]">
                              Online teacher
                            </div>
                          </div>

                          <img
                            className="w-[47px] min-w-0"
                            src={"/assets/aebe4f16c3c7da747320fb609c038204.svg"}
                            alt="alt text"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-y-[35px]">
                      <p className="font-medium text-[16px] leading-[1.7] font-PlusJakartaSans text-[rgb(75,75,89)]">
                        The text-to-sign feature is incredibly convenient. Now I
                        can easily convey my thoughts to those who are speech or
                        hearing-impaired without having to learn sign language.
                      </p>
                      <img
                        className="w-[116px]"
                        src={"/assets/a0b3b6fa109b94ba746019c4b64e5fed.svg"}
                        alt="alt text"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="flex flex-col bg-[image:var(--src)] bg-[center_center] bg-[length:100%_100%] bg-no-repeat rounded-xl overflow-hidden"
              style={{
                "--src": `url(${"/assets/d81f17cf63cf1fa0bee775dc3f86df0b.png"})`,
              }}
            >
              <div className="w-[88%] flex justify-between items-center gap-x-2.5 my-[72px] mx-auto">
                <h2 className="font-bold text-[39px] leading-tight font-PlusJakartaSans text-white capitalize w-[500px] min-w-0">
                  Ready to transform your communications ?
                </h2>

                <button className="bg-[rgb(30,30,47)] rounded-lg pt-[16.5px] pr-6 pb-[16.5px] pl-6 flex justify-center items-center gap-x-3 min-w-[230px]">
                  {/* TODO */}
                  <p
                    className="font-semibold text-[18px] leading-[1.27] font-PlusJakartaSans text-white capitalize min-w-0 mt-px"
                    onClick={handleLoginClick}
                  >
                    Get started now
                  </p>
                  <img
                    className="w-6 min-w-0"
                    src={"/assets/9a492b13b04238b64597d6cd1d66e897.png"}
                    alt="alt text"
                  />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6 */}
        <section className="flex flex-col min-h-[526px] mb-[17px]">
          <div className="flex flex-col bg-[rgb(30,30,47)] overflow-hidden">
            <div className="flex flex-col border-solid border-[rgb(232,232,234)] border-t-[0px] border-r-[0px] border-b-[1px] border-l-[0px] w-[83.33%] my-[60px] mx-auto">
              <div className="flex justify-between gap-x-2.5 mb-20">
                <div className="w-[293px] flex flex-col min-w-0">
                  <div className="flex gap-x-3">
                    <img
                      className="w-10 min-w-0"
                      src={"/assets/70bee51749289912a11c3cd7287001ce.svg"}
                      alt="alt text"
                    />
                    <h3 className="font-extrabold text-[26px] leading-[1.26] font-PlusJakartaSans text-white min-w-0 mt-1 mb-[3px]">
                      Sign Language
                    </h3>
                  </div>

                  <p className="font-normal text-[18px] leading-[1.66] font-Inter text-[rgb(247,247,238)] tracking-[-0.36px] opacity-[0.5] mt-8">
                    An innovative breakthrough in bridging communication for the
                    hearing impaired!
                  </p>

                  <div className="flex flex-col bg-[rgba(255,255,255,0.078)] rounded-lg mt-8">
                    <img
                      className="w-[calc(100%_-_12px)] mt-[21px] mb-[21px] ml-3"
                      src={"/assets/9cc729153118b4582479c5b9b8d2c662.png"}
                      alt="alt text"
                    />
                  </div>

                  <button className="bg-[rgb(84,169,206)] rounded-lg w-[173px] pt-[16.5px] pr-6 pb-[16.5px] pl-6 flex justify-center items-center gap-x-3 max-w-full mt-4">
                    {/* TODO */}
                    <p className="font-semibold text-[18px] leading-[1.27] font-PlusJakartaSans text-white capitalize min-w-0 mt-px">
                      Subscribe
                    </p>
                    <img
                      className="w-6 min-w-0"
                      src={"/assets/9a492b13b04238b64597d6cd1d66e897.png"}
                      alt="alt text"
                    />
                  </button>
                </div>

                <div className="bg-white w-px opacity-[0.2] min-w-0 min-h-[220px] my-[53px]" />

                <div className="w-[89px] flex flex-col min-w-0 mt-11 mb-[86px]">
                  <p className="font-semibold text-[16px] leading-tight font-PlusJakartaSans text-white capitalize">
                    Quick Links
                  </p>
                  <div className="font-normal text-[14px] leading-[1.28] font-PlusJakartaSans text-white capitalize opacity-[0.5] mt-8">
                    Home
                  </div>
                  <div className="font-normal text-[14px] leading-[1.28] font-PlusJakartaSans text-white capitalize opacity-[0.5] mt-6 mr-7">
                    About us
                  </div>
                  <div className="font-normal text-[14px] leading-[1.28] font-PlusJakartaSans text-white capitalize opacity-[0.5] mt-6">
                    Blog
                  </div>
                  <div className="font-normal text-[14px] leading-[1.28] font-PlusJakartaSans text-white capitalize opacity-[0.5] mt-6 mr-[33px]">
                    Contact
                  </div>
                </div>

                <div className="w-[136px] flex flex-col min-w-0 my-11">
                  <p className="font-semibold text-[16px] leading-tight font-PlusJakartaSans text-white capitalize mr-10">
                    Utility pages
                  </p>
                  <div className="font-normal text-[14px] leading-[1.28] font-PlusJakartaSans text-white capitalize opacity-[0.5] mt-8">
                    Instructions
                  </div>
                  <div className="font-normal text-[14px] leading-[1.28] font-PlusJakartaSans text-white capitalize opacity-[0.5] mt-6">
                    Style Guide
                  </div>
                  <div className="font-normal text-[14px] leading-[1.28] font-PlusJakartaSans text-white capitalize opacity-[0.5] mt-6">
                    Licenses
                  </div>
                  <div className="font-normal text-[14px] leading-[1.28] font-PlusJakartaSans text-white capitalize opacity-[0.5] mt-6">
                    404
                  </div>
                  <div className="font-normal text-[14px] leading-[1.28] font-PlusJakartaSans text-white capitalize opacity-[0.5] mt-6">
                    Password protected
                  </div>
                </div>

                <div className="w-32 flex flex-col min-w-0 my-11">
                  <p className="font-semibold text-[16px] leading-tight font-PlusJakartaSans text-white capitalize mr-[38px]">
                    Ressources
                  </p>
                  <div className="font-normal text-[14px] leading-[1.28] font-PlusJakartaSans text-white capitalize opacity-[0.5] mt-8">
                    Support
                  </div>
                  <div className="font-normal text-[14px] leading-[1.28] font-PlusJakartaSans text-white capitalize opacity-[0.5] mt-6 mr-[37px]">
                    Privacy Policy
                  </div>
                  <div className="font-normal text-[14px] leading-[1.28] font-PlusJakartaSans text-white capitalize opacity-[0.5] mt-6">{`Terms & conditions`}</div>
                  <div className="font-normal text-[14px] leading-[1.28] font-PlusJakartaSans text-white capitalize opacity-[0.5] mt-6 mr-[11px]">
                    Strategic finance
                  </div>
                  <div className="font-normal text-[14px] leading-[1.28] font-PlusJakartaSans text-white capitalize opacity-[0.5] mt-6">
                    Video guide
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Landing;

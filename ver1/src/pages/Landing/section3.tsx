import React from "react";
import { useHistory } from "react-router-dom";

interface IProps {
  className?: string;
}

function RenderSection3(props: IProps) {
  const history = useHistory();
  const handleLoginClick = () => {
    history.push("/login");
  };
  return (
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
                  enabling effective communication between sign language users
                  and those unfamiliar with it.
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
  );
}

export default RenderSection3;

import React from 'react';

interface IProps {
  className?: string;
}

function renderSection4(props: IProps) {
  return (
    <section className="flex flex-col z-[2] relative">
      <img
        className="w-[calc(100%_-_8.33%)] h-0.5 relative mt-[121px] mb-[849px] ml-[8.33%]"
        src={'/assets/9aace562d6e61ade09eb6b38a0bf63d5.svg'}
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
                  Access comprehensive lessons, visual aids, and interactive videos to learn and practice common sign
                  language gestures. Engage with quizzes and games designed to enhance your learning experience.
                </p>
              </div>
            </div>

            <button className="bg-[rgb(30,30,47)] rounded-lg w-[157px] pt-[16.5px] pr-6 pb-[16.5px] pl-6 flex justify-center items-center gap-x-3 max-w-full">
              {/* TODO */}
              <p className="font-semibold text-[18px] leading-[1.27] font-PlusJakartaSans text-white capitalize min-w-0 mt-px">
                Let’s go
              </p>
              <img className="w-6 min-w-0" src={'/assets/9a492b13b04238b64597d6cd1d66e897.png'} alt="alt text" />
            </button>
          </div>

          <div className="w-[603px] flex flex-col min-w-0">
            <img className="w-[65px] z-[1]" src={'/assets/490d3b6fd78d4c76cb6b577e73db6475.svg'} alt="alt text" />
            <img
              className="rounded-xl w-[89.39%] ml-auto"
              src={'/assets/2644587f68da83af7bd8c79a26347f9e.png'}
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
  );
}

export default renderSection4;

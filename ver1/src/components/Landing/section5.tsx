import React from 'react';

interface IProps {
  className?: string;
}

function renderSection5(props: IProps) {
  return (
    <section className="flex flex-col z-[1] relative">
      <div className="bg-[rgb(30,30,47)] w-[1440px] h-[221px] absolute left-0 bottom-0" />
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
                    src={'/assets/4de069e7c3f768477a333b51c5a5d674.png'}
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
                        src={'/assets/aebe4f16c3c7da747320fb609c038204.svg'}
                        alt="alt text"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-y-[35px]">
                  <p className="font-medium text-[16px] leading-[1.7] font-PlusJakartaSans text-[rgb(75,75,89)]">
                    This app has changed how I communicate with my deaf friends! The sign language recognition is fast,
                    allowing me to chat without language barriers.
                  </p>
                  <img className="w-[116px]" src={'/assets/8d7d866e1102424a33bd0c45d8db5670.svg'} alt="alt text" />
                </div>
              </div>
            </div>

            <div className="flex flex-col bg-white rounded-xl w-[590px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.12)] min-w-0">
              <div className="flex flex-col gap-y-6 mt-7 mx-7 mb-10">
                <div className="flex gap-x-6">
                  <img
                    className="rounded-lg w-20 min-w-0"
                    src={'/assets/d9e2980b284fdf7624398ad8e011556f.png'}
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
                        src={'/assets/aebe4f16c3c7da747320fb609c038204.svg'}
                        alt="alt text"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-y-[35px]">
                  <p className="font-medium text-[16px] leading-[1.7] font-PlusJakartaSans text-[rgb(75,75,89)]">
                    The text-to-sign feature is incredibly convenient. Now I can easily convey my thoughts to those who
                    are speech or hearing-impaired without having to learn sign language.
                  </p>
                  <img className="w-[116px]" src={'/assets/a0b3b6fa109b94ba746019c4b64e5fed.svg'} alt="alt text" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col bg-[image:var(--src)] bg-[center_center] bg-[length:100%_100%] bg-no-repeat rounded-xl overflow-hidden"
          style={{ '--src': `url(${'/assets/d81f17cf63cf1fa0bee775dc3f86df0b.png'})` }}>
          <div className="w-[88%] flex justify-between items-center gap-x-2.5 my-[72px] mx-auto">
            <h2 className="font-bold text-[39px] leading-tight font-PlusJakartaSans text-white capitalize w-[500px] min-w-0">
              Ready to transform your communications ?
            </h2>

            <button className="bg-[rgb(30,30,47)] rounded-lg pt-[16.5px] pr-6 pb-[16.5px] pl-6 flex justify-center items-center gap-x-3 min-w-[230px]">
              {/* TODO */}
              <p className="font-semibold text-[18px] leading-[1.27] font-PlusJakartaSans text-white capitalize min-w-0 mt-px">
                Get started now
              </p>
              <img className="w-6 min-w-0" src={'/assets/9a492b13b04238b64597d6cd1d66e897.png'} alt="alt text" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default renderSection5;

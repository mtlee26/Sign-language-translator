import React from 'react';

interface IProps {
  className?: string;
}

function renderSection2(props: IProps) {
  return (
    <section className="flex flex-col z-[4] relative">
      <div className="flex flex-col bg-white overflow-hidden relative">
        <hr className="bg-[rgb(244,221,10)] w-10 h-0.5 min-h-[2px] mt-[120px] mb-[636px] ml-[39.38%]"/>
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
                <img className="w-[60px]" src={'/assets/24a3bbaca0b3b0da79a24ab76a277fad.png'} alt="alt text" />
                <h3 className="font-semibold text-[24px] leading-tight font-PlusJakartaSans text-[rgb(30,30,47)] capitalize">
                  Sign Language Recognition
                </h3>
              </div>

              <div className="flex flex-col gap-y-9">
                <p className="font-medium text-base font-PlusJakartaSans text-[rgb(75,75,89)]">
                  Effortlessly recognize hand gestures and translate sign language into text or speech in real-time.
                </p>

                <div className="flex gap-x-3">
                  <p className="font-medium text-[18px] leading-[1.27] font-PlusJakartaSans text-[rgb(30,30,47)] capitalize min-w-0 mb-px">
                    Learn more
                  </p>
                  <img className="w-6 min-w-0" src={'/assets/971b5ba27301c949e435ed231d9f1d78.png'} alt="alt text" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col rounded-xl outline outline-[rgb(232,232,234)] outline-1 outline-offset-[-1px] row-span-1 column-span-1">
            <div className="flex flex-col gap-y-6 mt-7 mx-7 mb-10">
              <div className="flex flex-col gap-y-6">
                <img className="w-[60px]" src={'/assets/90c8ae71de94e7ebb1ec027ea1958eab.png'} alt="alt text" />
                <h3 className="font-semibold text-[24px] leading-tight font-PlusJakartaSans text-[rgb(30,30,47)] capitalize">
                  Text-to-Sign Conversion
                </h3>
              </div>

              <div className="flex flex-col gap-y-9">
                <p className="font-medium text-base font-PlusJakartaSans text-[rgb(75,75,89)]">
                  Convert written or spoken words into sign language, enabling seamless interactions with the hearing
                  and speech-impaired.
                </p>

                <div className="flex gap-x-3">
                  <p className="font-medium text-[18px] leading-[1.27] font-PlusJakartaSans text-[rgb(30,30,47)] capitalize min-w-0 mb-px">
                    Learn more
                  </p>
                  <img className="w-6 min-w-0" src={'/assets/971b5ba27301c949e435ed231d9f1d78.png'} alt="alt text" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col rounded-xl outline outline-[rgb(232,232,234)] outline-1 outline-offset-[-1px] row-span-1 column-span-1">
            <div className="flex flex-col gap-y-6 mt-7 mx-7 mb-[118px]">
              <div className="flex flex-col gap-y-6 mr-[9px]">
                <img className="w-[60px]" src={'/assets/f337c93a13b835bab4f4db5e3a5c440b.png'} alt="alt text" />
                <h3 className="font-semibold text-[24px] leading-tight font-PlusJakartaSans text-[rgb(30,30,47)] capitalize">
                  User-Friendly Interface
                </h3>
              </div>

              <div className="flex flex-col gap-y-9">
                <p className="font-medium text-base font-PlusJakartaSans text-[rgb(75,75,89)]">
                  Make language translation easy and intuitive. Navigate effortlessly.
                </p>

                <div className="flex gap-x-3">
                  <p className="font-medium text-[18px] leading-[1.27] font-PlusJakartaSans text-[rgb(30,30,47)] capitalize min-w-0 mb-px">
                    Learn more
                  </p>
                  <img className="w-6 min-w-0" src={'/assets/971b5ba27301c949e435ed231d9f1d78.png'} alt="alt text" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col rounded-xl outline outline-[rgb(232,232,234)] outline-1 outline-offset-[-1px] row-span-1 column-span-1">
            <div className="flex flex-col gap-y-6 mt-7 mx-7 mb-10">
              <div className="flex flex-col gap-y-6">
                <img className="w-[60px]" src={'/assets/96412ac4b963a6490d58edd35de846bb.png'} alt="alt text" />
                <h3 className="font-semibold text-[24px] leading-tight font-PlusJakartaSans text-[rgb(30,30,47)] capitalize">
                  Interactive Learning Platform
                </h3>
              </div>

              <div className="flex flex-col gap-y-9">
                <p className="font-medium text-base font-PlusJakartaSans text-[rgb(75,75,89)]">
                  Access engaging lessons, visual guides, and interactive exercises to learn sign language at your own
                  pace.
                </p>

                <div className="flex gap-x-3">
                  <p className="font-medium text-[18px] leading-[1.27] font-PlusJakartaSans text-[rgb(30,30,47)] capitalize min-w-0 mb-px">
                    Learn more
                  </p>
                  <img className="w-6 min-w-0" src={'/assets/971b5ba27301c949e435ed231d9f1d78.png'} alt="alt text" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default renderSection2;

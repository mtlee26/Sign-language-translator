import React from 'react';

interface IProps {
  className?: string;
}

function renderSection6(props: IProps) {
  return (
    <section className="flex flex-col min-h-[526px] mb-[17px]">
      <div className="flex flex-col bg-[rgb(30,30,47)] overflow-hidden">
        <div className="flex flex-col border-solid border-[rgb(232,232,234)] border-t-[0px] border-r-[0px] border-b-[1px] border-l-[0px] w-[83.33%] my-[60px] mx-auto">
          <div className="flex justify-between gap-x-2.5 mb-20">
            <div className="w-[293px] flex flex-col min-w-0">
              <div className="flex gap-x-3">
                <img className="w-10 min-w-0" src={'/assets/70bee51749289912a11c3cd7287001ce.svg'} alt="alt text" />
                <h3 className="font-extrabold text-[26px] leading-[1.26] font-PlusJakartaSans text-white min-w-0 mt-1 mb-[3px]">
                  Sign Language
                </h3>
              </div>

              <p className="font-normal text-[18px] leading-[1.66] font-Inter text-[rgb(247,247,238)] tracking-[-0.36px] opacity-[0.5] mt-8">
                An innovative breakthrough in bridging communication for the hearing impaired!
              </p>

              <div className="flex flex-col bg-[rgba(255,255,255,0.078)] rounded-lg mt-8">
                <img
                  className="w-[calc(100%_-_12px)] mt-[21px] mb-[21px] ml-3"
                  src={'/assets/9cc729153118b4582479c5b9b8d2c662.png'}
                  alt="alt text"
                />
              </div>

              <button className="bg-[rgb(84,169,206)] rounded-lg w-[173px] pt-[16.5px] pr-6 pb-[16.5px] pl-6 flex justify-center items-center gap-x-3 max-w-full mt-4">
                {/* TODO */}
                <p className="font-semibold text-[18px] leading-[1.27] font-PlusJakartaSans text-white capitalize min-w-0 mt-px">
                  Subscribe
                </p>
                <img className="w-6 min-w-0" src={'/assets/9a492b13b04238b64597d6cd1d66e897.png'} alt="alt text" />
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
  );
}

export default renderSection6;

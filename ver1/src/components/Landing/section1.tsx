import React from 'react';
import { useHistory } from 'react-router-dom';

interface IProps {
  className?: string;
}

const RenderSection1: React.FC<IProps> = (props) => {
  const history = useHistory(); 

  const handleLoginClick = () => {
    history.push('/login'); 
  };

  const handleSignUpClick = () => {
    history.push('/signup');
  }

  return (
    <section className="flex flex-col z-[5] relative">
      <div className="flex flex-col bg-[rgb(248,248,251)] overflow-hidden relative mt-[100px]">
        <hr
          className="bg-[rgb(244,221,10)] w-10 h-0.5 relative min-h-[2px] mt-[179px] mb-[577px] ml-[3.54%]"
        />

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
                  Our application facilitates effective communication for the deaf and mute community, empowering them
                  with the skills to connect with others seamlessly.
                </p>
              </div>
            </div>

            <button className="bg-[rgb(30,30,47)] rounded-lg w-[230px] pt-[16.5px] pr-6 pb-[16.5px] pl-6 flex justify-center items-center gap-x-3 max-w-full">
              {/* TODO */}
              <p className="font-semibold text-[18px] leading-[1.27] font-PlusJakartaSans text-white capitalize min-w-0 mt-px"
              onClick={handleLoginClick}  >
                Get Started Now
              </p>
              <img className="w-6 min-w-0" src={'/assets/9a492b13b04238b64597d6cd1d66e897.png'} alt="alt text" />
            </button>
          </div>

          <div className="w-[702px] flex flex-col gap-y-1.5 min-w-0">
            <img className="w-[66px] z-[1]" src={'/assets/490d3b6fd78d4c76cb6b577e73db6475.svg'} alt="alt text" />
            <img
              className="rounded-[38px] w-[calc(100%_-_39px)] ml-[39px]"
              src={'/assets/aa9bf681a847a9f9c4894831fdae1ed1.png'}
              alt="alt text"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-[rgb(248,248,251)] w-[1440px] h-[120px] overflow-hidden absolute left-0 top-0">
        <div className="w-[88.89%] flex justify-between items-center gap-x-2.5 my-5 mx-auto">
          <div className="w-[798px] flex justify-between items-center gap-x-2.5 min-w-0">
            <div className="w-[234px] flex gap-x-3 min-w-0">
              <img className="w-10 min-w-0" src={'/assets/70bee51749289912a11c3cd7287001ce.svg'} alt="alt text" />
              <h3 className="min-w-0 mt-1 mb-[3px]">
                <span className="font-extrabold text-[26px] leading-[1.26] font-PlusJakartaSans text-black">
                  <span className="font-extrabold text-[rgb(83,169,205)]">Sign</span>
                  <span className="font-extrabold text-[rgb(30,30,47)]">Language</span>
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
                  src={'/assets/f476eb1adaf6532cb1a71a0c06b685a9.png'}
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

            <button className="bg-[rgb(30,30,47)] rounded-lg pt-[18.5px] pr-6 pb-[18.5px] pl-6 flex justify-center items-center gap-x-2.5 min-w-[131px]"
            onClick={handleSignUpClick} 
            >
              {/* TODO */}
              <p className="font-medium text-[18px] leading-[1.27] font-Inter text-white tracking-[-0.36px] min-w-0">
                Sign up
              </p>
              <img className="w-2.5 min-w-0" src={'/assets/e4f81165347613c7a05a20b30e554532.svg'} alt="alt text" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RenderSection1;

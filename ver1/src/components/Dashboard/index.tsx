// import React from 'react';
// import cn from 'classnames';

// interface IProps {
//   className?: string;
// }

// function Dashboard(props: IProps) {
//   return (
//     <section
//       className={`dashboard xl:flex-col xl:items-center xl:gap-y-[30px] bg-[rgb(245,246,250)] flex gap-x-6 overflow-hidden ${props.className ||
//         ''}`}>
//       {/* Main application layout section */}

//       <div className="xl:w-full xl:min-w-[unset] flex flex-col bg-[rgb(30,30,47)] w-[260px] z-[1] min-w-0 max-w-[260px]">
//         <nav className="tn:mt-[18px] tn:mx-2 tn:mb-[39px] flex flex-col items-center mt-[18px] mr-[13px] mb-[39px] ml-3.5">
//           {/* Navigation sidebar menu */}

//           <div className="tn:gap-x-2 w-full flex gap-x-3 z-[1]">
//             <img className="w-10 object-cover" src={'/assets/70bee51749289912a11c3cd7287001ce.svg'} alt="alt text" />
//             <p className="md:items-start mt-1 mb-[3px]">
//               <span className="font-bold text-[26px] leading-[1.26] font-PlusJakartaSans text-black md:text-[24px] xxs:text-[22px]">
//                 <span className="font-bold text-[rgb(83,169,205)]">Sign</span>
//                 <span className="font-bold text-white">Language</span>
//               </span>
//             </p>
//           </div>

//           <a className="xs:mt-20 xs:mx-0 xs:mb-0 tn:mt-[50px] tn:mx-0 tn:mb-0 flex flex-col bg-[rgb(84,169,206)] rounded-md w-[191.9875030517578px] z-[5] max-w-[85%] mt-[113px]">
//             <div className="xs:gap-x-4 tn:my-[9px] tn:mx-2 tn:gap-x-2 flex gap-x-[22px] my-[9px] mx-4">
//               <div
//                 className="bg-[image:var(--src)] bg-[center_center] bg-[length:cover] bg-no-repeat w-[21px] min-h-[21px]"
//                 style={{ '--src': `url(${'/assets/a4efd272e8aba77ed080901fc7c6cd27.png'})` }}
//               />
//               <div className="flex justify-center font-normal text-[14px] leading-[1.28] font-PlusJakartaSans text-white text-center mt-[3px] cursor-pointer">
//                 Dashboard
//               </div>
//             </div>
//           </a>

//           <a className="flex flex-col bg-[rgb(30,30,47)] rounded-md w-[191.9875030517578px] z-[3] max-w-[85%] mt-[15px]">
//             <div className="xs:gap-x-4 tn:my-[9px] tn:mx-2 tn:gap-x-2 flex gap-x-[22px] my-[9px] mx-4">
//               <div
//                 className="bg-[image:var(--src)] bg-[center_center] bg-[length:cover] bg-no-repeat w-[21px] z-[1] min-h-[21px]"
//                 style={{ '--src': `url(${'/assets/8c3f7217513125d385724f13944a4ad1.png'})` }}
//               />
//               <div className="flex justify-center font-normal text-[14px] leading-[1.28] font-PlusJakartaSans text-white text-center mt-0.5 mb-px cursor-pointer">
//                 How to use
//               </div>
//             </div>
//           </a>

//           <a className="flex flex-col bg-[rgb(30,30,47)] rounded-md w-[191.9875030517578px] z-[2] max-w-[85%] mt-3">
//             <div className="xs:gap-x-4 tn:mt-2.5 tn:mx-2 tn:mb-2 tn:gap-x-2 flex gap-x-6 mt-2.5 mx-4 mb-2">
//               <img
//                 className="w-[21px] object-cover z-[1]"
//                 src={'/assets/089652497f6801c04d037b66969c344e.svg'}
//                 alt="alt text"
//               />
//               <div className="flex justify-center font-normal text-[14px] leading-[1.28] font-PlusJakartaSans text-white text-center mt-0.5 mb-px cursor-pointer">
//                 Dictionary
//               </div>
//             </div>
//           </a>

//           <a className="flex flex-col bg-[rgb(30,30,47)] rounded-md w-[191.9875030517578px] z-[1] max-w-[85%] mt-3">
//             <div className="xs:my-[9px] xs:mx-4 xs:gap-x-4 tn:my-[9px] tn:mx-2 tn:gap-x-2 flex gap-x-7 my-[9px] mx-[17px]">
//               <img
//                 className="w-[21px] object-cover z-[1]"
//                 src={'/assets/1ca5f57b8ec7cf4e2717b702c362affd.svg'}
//                 alt="alt text"
//               />
//               <div className="flex justify-center font-normal text-[14px] leading-[1.28] font-PlusJakartaSans text-white text-center mt-[3px] cursor-pointer">
//                 Translate
//               </div>
//             </div>
//           </a>

//           <a className="flex flex-col bg-[rgb(30,30,47)] rounded-md w-[191.9875030517578px] z-[2] max-w-[85%] mt-3">
//           <div className="xs:my-[9px] xs:mx-4 xs:gap-x-4 tn:my-[9px] tn:mx-2 tn:gap-x-2 flex gap-x-7 my-[9px] mx-[17px]">
//             {/* TODO */}
//             <img 
//               className="w-[21px] object-cover" 
//               src={'/assets/b45a64961d14a6c73208b5ed43797774.svg'} 
//               alt="alt text" />
//             <div className="flex justify-center font-normal text-[14px] leading-[1.28] font-PlusJakartaSans text-white text-center min-w-0 mt-[3px] cursor-pointer">
//               Games
//             </div>
//             </div>
//           </a>

//           <a className="flex flex-col bg-[rgb(30,30,47)] rounded-md w-[191.9875030517578px] z-[2] max-w-[85%] mt-3">
//           <div className="xs:my-[9px] xs:mx-4 xs:gap-x-4 tn:my-[9px] tn:mx-2 tn:gap-x-2 flex gap-x-7 my-[9px] mx-[17px]">
//             {/* TODO */}
//             <img 
//               className="w-[21px] object-cover" 
//               src={'/assets/81c5a91208b05fe119272d0856aecf1b.svg'} 
//               alt="alt text" />
//             <div className="flex justify-center font-normal text-[14px] leading-[1.28] font-PlusJakartaSans text-white text-center min-w-0 mt-[3px] cursor-pointer">
//               About us
//             </div>
//             </div>
//           </a>



//           <a className="flex flex-col bg-[rgb(30,30,47)] rounded-md w-[191.9875030517578px] z-[2] max-w-[85%] mt-[9px]">
//             <div className="xs:mt-1.5 xs:mx-4 xs:mb-[11px] tn:mt-1.5 tn:mx-2 tn:mb-[11px] tn:gap-x-2 pr-[54px] flex justify-between gap-x-2.5 mt-1.5 mx-[17px] mb-[11px]">
//               <img
//                 className="w-[21px] object-cover"
//                 src={'/assets/941e141cce9170be6727269019285b6c.svg'}
//                 alt="alt text"
//               />
//               <div className="flex justify-center font-normal text-[14px] leading-[1.28] font-PlusJakartaSans text-white text-center mt-[3px] mb-px cursor-pointer">
//                 Setting
//               </div>
//             </div>
//           </a>

//           <a className="flex flex-col bg-[rgb(30,30,47)] rounded-md w-[191.9875030517578px] z-[1] max-w-[85%] mt-[13px]">
//             <div className="tn:mt-[7px] tn:mx-2 tn:mb-2.5 tn:gap-x-2 pr-[56.5px] flex justify-between gap-x-2.5 mt-[7px] mx-[15px] mb-2.5">
//               <img
//                 className="w-[21px] object-cover"
//                 src={'/assets/f23cc3471063488b90001d13fde82f93.svg'}
//                 alt="alt text"
//               />
//               <div className="flex justify-center font-normal text-[14px] leading-[1.28] font-PlusJakartaSans text-white text-center mt-1 cursor-pointer">
//                 Logout
//               </div>
//             </div>
//           </a>

//           <div className="md:mt-[150px] md:mx-0 md:mb-0 xs:mt-20 xs:mx-0 xs:mb-0 tn:mt-[50px] tn:mx-0 tn:mb-0 w-[87.98%] flex gap-x-2 mt-[373px]">
//             <img
//               className="rounded-[20px] w-10 object-cover"
//               src={'/assets/ecb074cf53208a54a5025b8ab0a8cb99.png'}
//               alt="alt text"
//             />
//             <p className="w-[157px] mt-0.5">
//               <span className="font-medium text-[16px] leading-[1.18] font-Inter text-white">
//                 <span className="font-medium">
//                   Tim Cook
//                   <br />
//                 </span>
//                 <span className="text-[0.875em] leading-[1.21]">timcook@force.com</span>
//               </span>
//             </p>
//           </div>
//         </nav>
//       </div>

//       <article className="xl:w-full xl:min-w-[unset] xl:m-0 xs:gap-y-20 tn:gap-y-[50px] w-[1156px] flex flex-col items-center gap-y-[117px] min-w-0 max-w-[1156px] mb-[61px]">
//         {/* Main content area */}

//         <section
//           className="flex flex-col bg-[image:var(--src)] bg-[center_center] bg-[length:cover] bg-no-repeat bg-white rounded-lg w-full z-[1] overflow-hidden"
//           style={{ '--src': `url(${'/assets/e707ad33aa6fd129f7f9bd3299ccd688.png'})` }}>
//           {/* Hero banner section */}

//           <div className="xs:mt-20 xs:mr-0 xs:mb-20 xs:ml-[6.66%] tn:mt-[50px] tn:mr-0 tn:mb-[50px] tn:ml-[6.66%] w-[408px] flex flex-col gap-y-[31px] max-w-[85%] mt-[121px] mb-[107px] ml-[6.66%]">
//             <h2 className="md:text-[34px] md:items-start xxs:text-[30px] font-black text-[37px] leading-[1.29] font-NunitoSans text-white z-[1]">
//               Sign language communication tool
//             </h2>

//             <button className="bg-[rgb(84,169,206)] rounded-lg w-[184px] pt-[16.5px] pr-6 pb-[16.5px] pl-6 flex justify-center items-center gap-x-3 max-w-full">
//               {/* TODO */}
//               <p className="font-semibold text-[18px] leading-[1.27] font-PlusJakartaSans text-white capitalize min-w-0 mt-px">
//                 How to use
//               </p>
//               <img className="w-6 min-w-0" src={'/assets/9a492b13b04238b64597d6cd1d66e897.png'} alt="alt text" />
//             </button>
//           </div>
//         </section>

//         <section className="md:gap-x-8 sm:grid-cols-[repeat(1,_minmax(0,_1fr))] grid grid-cols-[repeat(2,_minmax(0,_1fr))] content-start gap-y-[78px] gap-x-[171px] w-[91.87%]">
//           {/* Feature cards grid layout */}

//           <article className="flex flex-col relative row-span-1 column-span-1">
//             <div className="bg-[rgb(30,30,47)] rounded-[10px] relative min-h-[177px]" />

//             <div className="tn:gap-x-2 w-[488px] flex justify-between gap-x-2.5 absolute left-[22px] top-[-61px]">
//               <h2 className="md:text-[32px] md:items-start xs:mt-[78px] xs:mx-0 xs:mb-20 xxs:text-[30px] tn:my-[50px] tn:mx-0 font-normal text-[36px] leading-[1.33] font-PlusJakartaSans text-white mt-[78px] mb-[135px] cursor-pointer">
//                 Dictionary
//               </h2>
//               <img
//                 className="w-[262px] object-cover min-w-0"
//                 src={'/assets/c68f09e552e70d7a25490973e03e2c86.png'}
//                 alt="alt text"
//               />
//             </div>
//           </article>

//           <div className="flex flex-col bg-[rgba(244,222,10,0.729)] rounded-[10px] relative row-span-1 column-span-1">
//             <h2 className="md:text-[32px] md:items-start sm:w-[85%] xs:mt-[17px] xs:mr-0 xs:mb-20 xs:ml-4 xxs:text-[30px] tn:mt-[17px] tn:mr-0 tn:mb-[50px] tn:ml-2 font-normal text-[36px] leading-[1.33] font-PlusJakartaSans text-black w-[166px] relative max-w-[85%] mt-[17px] mb-28 ml-[22px] cursor-pointer">
//               Translator
//             </h2>
//             <img
//               className="w-[262px] translate-x-[0] translate-y-[-50%] absolute right-[-65px] top-1/2"
//               src={'/assets/30dee8901f734eca8a85129fefa36afd.png'}
//               alt="alt text"
//             />
//           </div>

//           <div className="flex flex-col relative row-span-1 column-span-1">
//             <div className="bg-[rgb(84,169,206)] rounded-[10px] relative min-h-[176px]" />

//             <div className="tn:gap-x-2 w-[447px] translate-x-[0] translate-y-[-50%] flex justify-between gap-x-2.5 absolute left-[22px] top-1/2">
//               <h2 className="md:mt-[59px] md:mx-0 md:mb-[150px] md:text-[32px] md:items-start xs:mt-[59px] xs:mx-0 xs:mb-20 xxs:text-[30px] tn:my-[50px] tn:mx-0 font-normal text-[36px] leading-[1.33] font-PlusJakartaSans text-white mt-[59px] mb-[154px] cursor-pointer">
//                 Games
//               </h2>
//               <img
//                 className="w-[262px] object-cover min-w-0"
//                 src={'/assets/327fb7c90ade98ac584799bb547c9734.png'}
//                 alt="alt text"
//               />
//             </div>
//           </div>

//           <div className="flex flex-col relative row-span-1 column-span-1">
//             <div className="bg-[rgba(75,75,89,0.607)] rounded-[10px] relative min-h-[176px]" />

//             <div className="tn:gap-x-2 w-[462px] flex justify-between gap-x-2.5 absolute left-[22px] top-[-48px]">
//               <h2 className="md:text-[32px] md:items-start xs:mt-[65px] xs:mx-0 xs:mb-20 xxs:text-[30px] tn:my-[50px] tn:mx-0 font-normal text-[36px] leading-[1.33] font-PlusJakartaSans text-white mt-[65px] mb-[148px] cursor-pointer">
//                 About us
//               </h2>
//               <img
//                 className="w-[262px] object-cover min-w-0"
//                 src={'/assets/3143f7eb0cbe897272726764debfac97.png'}
//                 alt="alt text"
//               />
//             </div>
//           </div>
//         </section>
//       </article>
//     </section>
//   );
// }

// export default Dashboard;



import React, { useState } from 'react';

interface IProps {
  className?: string;
}

function Dashboard(props: IProps) {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  const [currentButton, setCurrentButton] = useState('Dashboard');
  const handleMouseEnter = (buttonName: string) => {
    setHoveredButton(buttonName);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

  const handleClick = (buttonName: string) => {
    setCurrentButton(buttonName); 
  };

  const buttonClass = (buttonName: string) => {
    if (currentButton === buttonName || hoveredButton === buttonName) {
      return 'bg-[rgb(84,169,206)] text-white';
    }
    return 'bg-[rgb(30,30,47)] text-white'; 
  };

  return (
    <section
      className={`dashboard2 xl:flex-col xl:items-center xl:gap-y-[30px] bg-[rgb(245,246,250)] flex gap-x-6 overflow-hidden ${props.className ||
        ''}`}>
      <div className="xl:w-full xl:min-w-[unset] flex flex-col bg-[rgb(30,30,47)] w-[260px] z-[1] min-w-0 max-w-[260px]">
        <nav className="tn:mt-[18px] tn:mx-2 tn:mb-[39px] flex flex-col items-center mt-[18px] mr-[13px] mb-[39px] ml-3.5">

          {/* Nút Dashboard */}
          <a
            onMouseEnter={() => handleMouseEnter('Dashboard')}
            onMouseLeave={handleMouseLeave}
            className={`${buttonClass('Dashboard')} flex flex-col rounded-md w-[191.9875030517578px] z-[5] max-w-[85%] mt-[113px]`}>
            <div className="xs:gap-x-4 tn:my-[9px] tn:mx-2 tn:gap-x-2 flex gap-x-[22px] my-[9px] mx-4">
              <div
                className="bg-[image:var(--src)] bg-[center_center] bg-[length:cover] bg-no-repeat w-[21px] min-h-[21px]"
                style={{ '--src': `url(${'/assets/a4efd272e8aba77ed080901fc7c6cd27.png'})` }}
              />
              <div className="flex justify-center font-normal text-[14px] leading-[1.28] font-PlusJakartaSans text-center mt-[3px] cursor-pointer">
                Dashboard
              </div>
            </div>
          </a>

          {/* Nút How to use */}
          <a
            onMouseEnter={() => handleMouseEnter('How to use')}
            onMouseLeave={handleMouseLeave}
            className={`${buttonClass('How to use')} flex flex-col rounded-md w-[191.9875030517578px] z-[3] max-w-[85%] mt-[15px]`}>
            <div className="xs:gap-x-4 tn:my-[9px] tn:mx-2 tn:gap-x-2 flex gap-x-[22px] my-[9px] mx-4">
              <div
                className="bg-[image:var(--src)] bg-[center_center] bg-[length:cover] bg-no-repeat w-[21px] z-[1] min-h-[21px]"
                style={{ '--src': `url(${'/assets/8c3f7217513125d385724f13944a4ad1.png'})` }}
              />
              <div className="flex justify-center font-normal text-[14px] leading-[1.28] font-PlusJakartaSans text-center mt-0.5 mb-px cursor-pointer">
                How to use
              </div>
            </div>
          </a>

           {/* Dictionary */}
           <a
            onMouseEnter={() => handleMouseEnter('Dictionary')}
            onMouseLeave={handleMouseLeave}
            className={`${buttonClass('Dictionary')} flex flex-col rounded-md w-[191.9875030517578px] z-[3] max-w-[85%] mt-[15px]`}>
            <div className="xs:gap-x-4 tn:my-[9px] tn:mx-2 tn:gap-x-2 flex gap-x-[22px] my-[9px] mx-4">
              <div
                className="bg-[image:var(--src)] bg-[center_center] bg-[length:cover] bg-no-repeat w-[21px] z-[1] min-h-[21px]"
                style={{ '--src': `url(${'/assets/089652497f6801c04d037b66969c344e.svg'})` }}
              />
              <div className="flex justify-center font-normal text-[14px] leading-[1.28] font-PlusJakartaSans text-center mt-0.5 mb-px cursor-pointer">
                Dictionary
              </div>
            </div>
          </a>

           {/* Nút Translate */}
           <a
            onMouseEnter={() => handleMouseEnter('Translate')}
            onMouseLeave={handleMouseLeave}
            className={`${buttonClass('Translate')} flex flex-col rounded-md w-[191.9875030517578px] z-[3] max-w-[85%] mt-[15px]`}>
            <div className="xs:gap-x-4 tn:my-[9px] tn:mx-2 tn:gap-x-2 flex gap-x-[22px] my-[9px] mx-4">
              <div
                className="bg-[image:var(--src)] bg-[center_center] bg-[length:cover] bg-no-repeat w-[21px] z-[1] min-h-[21px]"
                style={{ '--src': `url(${'/assets/1ca5f57b8ec7cf4e2717b702c362affd.svg'})` }}
              />
              <div className="flex justify-center font-normal text-[14px] leading-[1.28] font-PlusJakartaSans text-center mt-0.5 mb-px cursor-pointer">
                Translate
              </div>
            </div>
          </a>

           {/* Nút Game */}
           <a
            onMouseEnter={() => handleMouseEnter('Game')}
            onMouseLeave={handleMouseLeave}
            className={`${buttonClass('Game')} flex flex-col rounded-md w-[191.9875030517578px] z-[3] max-w-[85%] mt-[15px]`}>
            <div className="xs:gap-x-4 tn:my-[9px] tn:mx-2 tn:gap-x-2 flex gap-x-[22px] my-[9px] mx-4">
              <div
                className="bg-[image:var(--src)] bg-[center_center] bg-[length:cover] bg-no-repeat w-[21px] z-[1] min-h-[21px]"
                style={{ '--src': `url(${'/assets/b45a64961d14a6c73208b5ed43797774.svg'})` }}
              />
              <div className="flex justify-center font-normal text-[14px] leading-[1.28] font-PlusJakartaSans text-center mt-0.5 mb-px cursor-pointer">
                Game
              </div>
            </div>
          </a>

           {/* Nút Setting */}
           <a
            onMouseEnter={() => handleMouseEnter('Setting')}
            onMouseLeave={handleMouseLeave}
            className={`${buttonClass('Setting')} flex flex-col rounded-md w-[191.9875030517578px] z-[3] max-w-[85%] mt-[15px]`}>
            <div className="xs:gap-x-4 tn:my-[9px] tn:mx-2 tn:gap-x-2 flex gap-x-[22px] my-[9px] mx-4">
              <div
                className="bg-[image:var(--src)] bg-[center_center] bg-[length:cover] bg-no-repeat w-[21px] z-[1] min-h-[21px]"
                style={{ '--src': `url(${'/assets/941e141cce9170be6727269019285b6c.svg'})` }}
              />
              <div className="flex justify-center font-normal text-[14px] leading-[1.28] font-PlusJakartaSans text-center mt-0.5 mb-px cursor-pointer">
                Setting
              </div>
            </div>
          </a>

           {/* Nút About us */}
           <a
            onMouseEnter={() => handleMouseEnter('About us')}
            onMouseLeave={handleMouseLeave}
            className={`${buttonClass('About us')} flex flex-col rounded-md w-[191.9875030517578px] z-[3] max-w-[85%] mt-[15px]`}>
            <div className="xs:gap-x-4 tn:my-[9px] tn:mx-2 tn:gap-x-2 flex gap-x-[22px] my-[9px] mx-4">
              <div
                className="bg-[image:var(--src)] bg-[center_center] bg-[length:cover] bg-no-repeat w-[21px] z-[1] min-h-[21px]"
                style={{ '--src': `url(${'/assets/81c5a91208b05fe119272d0856aecf1b.svg'})` }}
              />
              <div className="flex justify-center font-normal text-[14px] leading-[1.28] font-PlusJakartaSans text-center mt-0.5 mb-px cursor-pointer">
                About us
              </div>
            </div>
          </a>

          {/* Log out */}
          <a
            onMouseEnter={() => handleMouseEnter('Log out')}
            onMouseLeave={handleMouseLeave}
            className={`${buttonClass('Log out')} flex flex-col rounded-md w-[191.9875030517578px] z-[3] max-w-[85%] mt-[15px]`}>
            <div className="xs:gap-x-4 tn:my-[9px] tn:mx-2 tn:gap-x-2 flex gap-x-[22px] my-[9px] mx-4">
              <div
                className="bg-[image:var(--src)] bg-[center_center] bg-[length:cover] bg-no-repeat w-[21px] z-[1] min-h-[21px]"
                style={{ '--src': `url(${'/assets/941e141cce9170be6727269019285b6c.svg'})` }}
              />
              <div className="flex justify-center font-normal text-[14px] leading-[1.28] font-PlusJakartaSans text-center mt-0.5 mb-px cursor-pointer">
                Log out
              </div>
            </div>
          </a>
        </nav>
      </div>

      <article className="xl:w-full xl:min-w-[unset] xl:m-0 xs:gap-y-20 tn:gap-y-[50px] w-[1156px] flex flex-col items-center gap-y-[117px] min-w-0 max-w-[1156px] mb-[61px]">
        {/* Main content area */}

        <section
          className="flex flex-col bg-[image:var(--src)] bg-[center_center] bg-[length:cover] bg-no-repeat bg-white rounded-lg w-full z-[1] overflow-hidden"
          style={{ '--src': `url(${'/assets/e707ad33aa6fd129f7f9bd3299ccd688.png'})` }}>
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
              <img className="w-6 min-w-0" src={'/assets/9a492b13b04238b64597d6cd1d66e897.png'} alt="alt text" />
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
                src={'/assets/c68f09e552e70d7a25490973e03e2c86.png'}
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
              src={'/assets/30dee8901f734eca8a85129fefa36afd.png'}
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
                src={'/assets/327fb7c90ade98ac584799bb547c9734.png'}
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
                src={'/assets/3143f7eb0cbe897272726764debfac97.png'}
                alt="alt text"
              />
            </div>
          </div>
        </section>
      </article>
    </section>
  );
}

export default Dashboard;

import Layout from "Layout";
import React from "react";

interface IProps {
  className?: string;
}

function Translator1(props: IProps) {
  return (
    <Layout>
      <section
        className={`untitled-page flex flex-col bg-[rgb(245,246,250)] overflow-hidden relative ${
          props.className || ""
        }`}
      >
        {/* Main translator interface section */}

        <div className="md:mt-[150px] md:mr-0 md:mb-[150px] md:ml-auto xs:mt-20 xs:mr-0 xs:mb-20 xs:ml-auto tn:mt-[50px] tn:mr-0 tn:mb-[50px] tn:ml-auto w-[1122.0416259765625px] flex flex-col items-center gap-y-[49px] relative max-w-[85%] mt-72 mb-[684px] ml-auto">
          <hr className="bg-black w-full h-px min-h-[1px]" />

          <div className="xs:gap-x-4 tn:gap-x-2 w-[94.3%] flex gap-x-7">
            {/* Translation mode selection area */}

            <article className="flex flex-col bg-[rgb(210,227,252)] rounded outline outline-gray-200 outline-1 outline-offset-[-1px] w-[216px] min-w-0">
              <div className="tn:m-2 w-[85.19%] flex gap-x-2 my-2 mx-4">
                <img
                  className="w-8 h-8 object-cover"
                  src={"/assets/87f2bca345c00a15d38451b4682c0784.svg"}
                  alt="alt text"
                />

                <div className="flex flex-col w-36 min-w-0 my-1">
                  <p className="flex items-center justify-center font-normal text-base font-Actor text-[rgb(26,115,232)] text-center w-full h-6">
                    Translate Text to ASL
                  </p>
                </div>
              </div>
            </article>

            <article className="flex flex-col rounded outline outline-gray-200 outline-1 outline-offset-[-1px] w-[216px] min-w-0">
              <div className="tn:m-2 w-[85.19%] flex gap-x-2 my-2 mx-4">
                <img
                  className="w-8 h-8 object-cover"
                  src={"/assets/96ec59580c9c90b326c0bd256c806fd0.svg"}
                  alt="alt text"
                />

                <div className="flex flex-col w-36 min-w-0 my-1">
                  <p className="flex justify-center font-normal text-base font-Actor text-[rgb(26,115,232)] text-center w-full h-6">
                    Translate ASL to Text
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>

        <div className="flex flex-col bg-white w-[1137px] absolute left-[303px] top-[289px]">
          <div className="xs:mt-20 xs:mx-4 xs:mb-[31px] tn:mt-[50px] tn:mx-2 tn:mb-[31px] tn:gap-x-2 w-[95.95%] flex gap-x-2.5 mt-[150px] mx-[23px] mb-[31px]">
            <article className="flex flex-col rounded-lg outline outline-gray-200 outline-1 outline-offset-[-1px] w-[500px] min-w-0">
              <div className="xs:my-6 xs:mx-4 tn:my-6 tn:mx-2 w-[90.4%] flex flex-col m-6">
                <div className="w-full h-12 flex items-center z-[1]">
                  <div className="flex flex-col w-4 min-w-0">
                    <h2 className="md:text-[30px] xxs:text-[26px] flex items-center font-light text-[32px] leading-normal font-Calibri text-slate-400 w-[93.75%] h-12 mr-px">
                      |
                    </h2>
                  </div>

                  <p className="md:text-[22px] md:items-start xxs:text-[20px] font-normal text-[24px] leading-normal font-Actor text-slate-400 w-[178px] h-9 my-1.5">
                    Type to translate.
                  </p>
                </div>

                <img
                  className="md:mt-[34px] md:mx-8 md:mb-0 xs:mt-[34px] xs:mx-4 xs:mb-0 tn:mt-[34px] tn:mx-2 tn:mb-0 w-4 h-[17px] object-cover mt-[34px] mr-[313px] ml-[123px]"
                  src={"/assets/2d522f22b2474bd4ad2a28d192ba18d7.svg"}
                  alt="alt text"
                />

                <div className="md:mt-[150px] md:mx-0 md:mb-0 xs:mt-20 xs:mx-0 xs:mb-0 tn:mt-[50px] tn:mx-0 tn:mb-0 tn:gap-x-2 w-full h-6 flex justify-between gap-x-2.5 mt-[402px]">
                  <div className="xs:gap-x-4 tn:gap-x-2 w-[72px] h-6 flex gap-x-6 min-w-0">
                    <div
                      className="bg-[image:var(--src)] bg-[center_center] bg-[length:cover] bg-no-repeat w-6 relative min-w-0"
                      style={{
                        "--src": `url(${"/assets/fab2631e3f33ec257b9d651aeacdfaea.svg"})`,
                      }}
                    >
                      <div className="rounded outline outline-gray-200 outline-1 w-[107px] h-[26px] translate-x-[-50%] translate-y-[0] absolute left-1/2 top-[-34px] bottom-8" />
                      <div className="bg-[rgb(249,249,249)] rounded w-[107px] h-[26px] translate-x-[-50%] translate-y-[0] absolute left-1/2 top-[-34px] bottom-8" />
                      <div className="font-normal text-[12px] leading-normal font-Actor text-[rgb(33,37,41)] w-[91px] h-[18px] translate-x-[-50%] translate-y-[0] absolute left-1/2 top-[-30px] bottom-9">
                        Translate by voice
                      </div>
                      <img
                        className="w-[38px] h-2 translate-x-[-50%] translate-y-[0] absolute left-1/2 top-[-8px] bottom-6"
                        src={"/assets/58b9042850e665a518104f146ffb7780.svg"}
                        alt="alt text"
                      />
                    </div>

                    <div
                      className="bg-[image:var(--src)] bg-[center_center] bg-[length:cover] bg-no-repeat w-6 relative min-w-0"
                      style={{
                        "--src": `url(${"/assets/f77ed69761b87b5e00a2d0345869917f.svg"})`,
                      }}
                    >
                      <div className="rounded outline outline-gray-200 outline-1 w-[47px] h-[26px] translate-x-[-50%] translate-y-[0] absolute left-1/2 top-[-34px] bottom-8" />
                      <div className="bg-[rgb(249,249,249)] rounded w-[47px] h-[26px] translate-x-[-50%] translate-y-[0] absolute left-1/2 top-[-34px] bottom-8" />
                      <div className="font-normal text-[12px] leading-normal font-Actor text-[rgb(33,37,41)] w-[31px] h-[18px] translate-x-[-50%] translate-y-[0] absolute left-1/2 top-[-30px] bottom-9">
                        Listen
                      </div>
                      <img
                        className="w-[38px] h-2 translate-x-[-50%] translate-y-[0] absolute left-1/2 top-[-8px] bottom-6"
                        src={"/assets/58b9042850e665a518104f146ffb7780.svg"}
                        alt="alt text"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col w-[58px] min-w-0 my-0.5">
                    <div className="flex justify-center font-normal text-sm font-Actor text-slate-400 text-center w-full h-5">
                      0 / 5,000
                    </div>
                  </div>
                </div>
              </div>
            </article>

            <article className="flex flex-col bg-[rgb(245,247,253)] rounded-lg w-[550px] min-w-0">
              <div className="md:mt-6 md:mr-8 md:mb-6 md:ml-6 md:gap-y-[150px] xs:my-6 xs:mx-4 xs:gap-y-20 tn:my-6 tn:mx-2 tn:gap-y-[50px] w-[113px] flex flex-col gap-y-[465px] max-w-[85%] mt-6 mr-[413px] mb-6 ml-6">
                <div className="flex flex-col w-full">
                  <h3 className="md:text-[22px] md:items-start xxs:text-[20px] flex justify-center font-normal text-[24px] leading-normal font-Actor text-[rgba(33,37,41,0.298)] text-center w-full h-9">
                    Translation
                  </h3>
                </div>

                <div className="xs:gap-x-4 tn:gap-x-2 w-full h-6 flex gap-x-6">
                  <div
                    className="bg-[image:var(--src)] bg-[center_center] bg-[length:cover] bg-no-repeat w-6 relative min-w-0"
                    style={{
                      "--src": `url(${"/assets/8d03df73b77b1e26d01c22210cc57c30.svg"})`,
                    }}
                  >
                    <div className="rounded outline outline-gray-200 outline-1 w-[129px] h-[26px] absolute left-[-49px] right-[-56px] top-[-34px] bottom-8" />
                    <div className="bg-[rgb(249,249,249)] rounded w-[129px] h-[26px] absolute left-[-49px] right-[-56px] top-[-34px] bottom-8" />
                    <div className="font-normal text-[12px] leading-normal font-Actor text-[rgb(33,37,41)] w-[113px] h-[18px] absolute left-[-41px] right-[-48px] top-[-30px] bottom-9">
                      Download Translation
                    </div>
                    <img
                      className="w-[38px] h-2 absolute left-[-3px] right-[-11px] top-[-8px] bottom-6"
                      src={"/assets/58b9042850e665a518104f146ffb7780.svg"}
                      alt="alt text"
                    />
                  </div>

                  <div
                    className="xs:my-0 xs:mx-auto bg-[image:var(--src)] bg-[center_center] bg-[length:cover] bg-no-repeat w-6 relative min-w-0"
                    style={{
                      "--src": `url(${"/assets/c24e20070f767f61170c64d221078044.svg"})`,
                    }}
                  >
                    <div className="rounded outline outline-gray-200 outline-1 w-[102px] h-[26px] translate-x-[-50%] translate-y-[0] absolute left-1/2 top-[-34px] bottom-8" />
                    <div className="bg-[rgb(249,249,249)] rounded w-[102px] h-[26px] translate-x-[-50%] translate-y-[0] absolute left-1/2 top-[-34px] bottom-8" />
                    <div className="font-normal text-[12px] leading-normal font-Actor text-[rgb(33,37,41)] w-[86px] h-[18px] translate-x-[-50%] translate-y-[0] absolute left-1/2 top-[-30px] bottom-9">
                      Copy Translation
                    </div>
                    <img
                      className="w-[38px] h-2 translate-x-[-50%] translate-y-[0] absolute left-1/2 top-[-8px] bottom-6"
                      src={"/assets/9c2b38d3791b6d1288e5755baaf207a8.svg"}
                      alt="alt text"
                    />
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>

        <div className="tn:gap-x-2 w-[1440px] translate-x-[-50%] translate-y-[0] flex justify-between gap-x-2.5 absolute left-1/2 top-0">
          <article className="md:mt-[19px] md:mx-0 md:mb-[150px] xs:mt-[19px] xs:mx-0 xs:mb-20 tn:mt-[19px] tn:mx-0 tn:mb-[50px] w-[1131px] flex flex-col min-w-0 mt-[19px] mb-[823px]">
            <p className="md:text-[30px] md:items-start xxs:text-[26px] font-bold text-[32px] leading-[1.37] font-NunitoSans text-[rgb(32,34,36)] tracking-[-0.12px] mx-0.5">
              Translator
            </p>
            <hr className="tn:mt-[13px] tn:mr-0 tn:mb-0 tn:ml-2 bg-black w-[99.2%] h-px z-[1] min-h-[1px] mt-[13px] ml-[9px]" />
            <p className="md:text-[18px] md:items-start xxs:text-[16px] font-normal text-[20px] leading-[1.35] font-NunitoSans text-[rgb(32,34,36)] tracking-[-0.12px] w-[95.76%] mt-[35px]">
              Text to Sign Language: Converts written text into accurate sign
              language animations, enabling easy understanding for
              hearing-impaired users.
              <br />
              <br />
              Sign Language to Text: Users can express sign language through a
              camera, which is recognized and converted back into text.
            </p>
          </article>
        </div>
      </section>
    </Layout>
  );
}

export default Translator1;

import React from "react";

const Profile = () => {
  return (
    <>
      <div className="flex justify-center h-full w-full m-0 p-0">
        <div className="bg-[#F4F4F4] xs:mt-0 xs:mb-0 mt-[20px] mb-[5px] w-[375px] xs:block overflow-hidden border-4 rounded-[10px] border-black items-start flex flex-col relative justify-start h-[812px] ">
          <ul className=" ">
            <li className="h-[44px] flex justify-between items-center">
              <span className="w-[54px] h-[18px] text-[#171717] font-sfp relative font-[500] left-[30px]">
                9:41
              </span>
              <section className="flex space-x-1 relative left-[215px] top-1">
                <img
                  src="/Mobilesignal.png"
                  className="w-[24.5px] h-[10.5px]"
                />
                <img src="/Wifi.png" className="w-[24.5px] h-[10.5px]" />
                <img src="/Battery.png" className="w-[24.5px] h-[10.5px]" />
              </section>
            </li>
          </ul>
          <ul className="flex relative right-[5px] top-1 ">
            <li className="h-[44px] flex justify-between items-center">
              <span className="w-[117px] h-[22px] text-[#171717] font-sfp relative font-[700] left-[20px]">
                &lt;
              </span>

              <span className="w-[120px] h-[22px] text-[#171717] text-[17px] leading-[22px] font-sfp relative font-[600] left-[30px]">
                Contact Info
              </span>
              <span className="w-[30px] h-[22px] text-[#171717] text-[17px] leading-[22px] font-sfp relative font-[500] left-[85px]">
                Edit
              </span>
            </li>
          </ul>
          <div className="flex flex-col items-center justify-center relative top-2">
            <img
              src="Oval2.png"
              className="flex relative justify-center left-[130px] w-[92px] h-[92px] top-[20px]"
            />
            <span className="flex relative h-[22px] top-[25px] left-[125px] font-sfp text-[24px] leading-[22px] tracking-[-0.4px] font-bold whitespace-nowrap">
              Antony Das
            </span>{" "}
            <span className="flex relative text-[#77797B] h-[22px] top-[30px] left-[125px] font-sfp text-[16px] leading-[22px] tracking-[-0.4px] font-normal whitespace-nowrap">
              +91 3892837443
            </span>{" "}
          </div>
          <div>
            <img
              src="ss1.png"
              className="h-[104px] relative left-[10px] top-[40px]"
            />
          </div>

          <div className="relative top-5">
            <span className="flex relative text-[#77797B] h-[22px] top-[20px] left-[45px] font-sfp text-[10px] leading-[22px] tracking-[-0.4px] font-normal whitespace-nowrap">
              Live Schedule
            </span>
            <ul className="flex flex-col">
              <li>
                <span className="text-[16px] leading-[22px] tracking-[-0.4px] flex relative w-[147px] h-[22px] font-normal left-[45px] top-[20px]">
                  In the Search of soul
                </span>
                <span className="text-[10px] leading-[22px] text-[#8A898E] relative left-[46px] top-[10px]">
                  22 Jan 2024, 8:30 AM{" "}
                </span>
                <span className="absolute left-[280px] text-[#27D368]">
                  Remind
                </span>
              </li>
              <li>
                <span className="text-[16px] leading-[22px] tracking-[-0.4px] flex relative w-[147px] h-[22px] font-normal left-[45px] top-[20px]">
                  Let's talk about sound
                </span>
                <span className="text-[10px] leading-[22px] text-[#8A898E] relative left-[46px] top-[10px]">
                  23 Jan 2024, 8:30 AM{" "}
                </span>
                <span className="absolute left-[280px] text-[#27D368]">
                  Remind
                </span>
              </li>

              <li>
                <span className="text-[16px] leading-[22px] tracking-[-0.4px] flex relative w-[147px] h-[22px] font-normal left-[45px] top-[20px]">
                  What is healing
                </span>
                <span className="text-[10px] leading-[22px] text-[#8A898E] relative left-[46px] top-[10px]">
                  24 Jan 2024, 8:30 AM{" "}
                </span>
                <span className="absolute left-[280px] text-[#27D368]">
                  Remind
                </span>
              </li>
            </ul>
          </div>
          <div>
            <ul className="relative top-[20px]">
              <li className="flex relative top-[50px] left-[5px] w-[343px] h-[141px] border-t-2 border-black border-opacity-15 rounded-[20px]">
                <div className="flex relative top-[10px] w-[375px] h-">
                  <img
                    src="/galleryp.png"
                    className="w-[16px] h-[16px] relative top-[1px] left-[20px]"
                  />
                  <span className="w-[230px] h-[22px] text-[16px] leading-[22px] font-sfp left-[40px] relative">
                    Media, Links, and Docs
                  </span>
                  <span className="flex relative text-[#77797B] h-[22px] left-[50px] top-[5px] font-sfp text-[16px] leading-[16px] tracking-[-0.4px] font-normal whitespace-nowrap">
                    12
                  </span>
                  <span className="flex relative font-sfp text-[#77797B] text-[18px] left-[60px]">
                    &gt;
                  </span>
                  <span className="w-[270px] h-[.33px] opacity-25 absolute flex bg-black top-[30px] left-[55px]"></span>
                </div>
              </li>
              <li className="flex relative bottom-[30px] left-[5px] w-[343px] h-[141px] ">
                <div className="flex relative top-[10px] w-[375px] h-">
                  <img
                    src="/star.png"
                    className="w-[16px] h-[16px] relative top-[1px] left-[20px]"
                  />
                  <span className="w-[230px] h-[22px] text-[16px] leading-[22px] font-sfp left-[40px] relative">
                    Starred Messages
                  </span>
                  <span className="flex relative text-[#77797B] h-[22px] left-[30px] top-[5px] font-sfp text-[16px] leading-[16px] tracking-[-0.4px] font-normal whitespace-nowrap">
                    None
                  </span>
                  <span className="flex relative font-sfp text-[#77797B] text-[18px] left-[40px]">
                    &gt;
                  </span>
                </div>
              </li>
              <li className="flex relative bottom-[100px] left-[5px] w-[343px] h-[141px] rounded-[20px]">
                <div className="flex relative top-[10px] w-[375px] h-">
                  <img
                    src="/search.svg"
                    className="w-[16px] h-[16px] relative top-[1px] left-[20px]"
                  />
                  <span className="w-[230px] h-[22px] text-[16px] leading-[22px] font-sfp left-[40px] relative">
                    Chat Search
                  </span>
                  <span className="flex relative text-[#77797B] h-[22px] left-[50px] top-[5px] font-sfp text-[16px] leading-[16px] tracking-[-0.4px] font-normal whitespace-nowrap"></span>
                  <span className="flex relative font-sfp text-[#77797B] text-[18px] left-[76px]">
                    &gt;
                  </span>
                </div>
              </li>
              <div className="h-[5px] bg-black rounded-md  w-[134px] justify-center flex relative bottom-[188px] left-[120px]"></div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Profile;

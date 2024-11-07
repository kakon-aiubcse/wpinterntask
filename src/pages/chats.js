import React from "react";

const Chat = () => {
  return (
    <>
      <div className="flex justify-center h-full w-full m-0 p-0">
        <div className="bg-[#EFEFF4] xs:mt-0 xs:mb-0 mt-[20px] mb-[5px] w-[375px] xs:block overflow-hidden border-4 rounded-[10px] border-black items-start flex relative justify-start h-[812px] ">
          <ul className="flex-row ">
            <li className="w-[375px] h-[94px] flex-col">
              <div className=" w-[92px] h-[41px] flex absolute top-[36px] left-[20px]">
                <span className="font-sfp text-[34px] leading-[34px] tracking-[-0.23px] font-bold drop-shadow-2xl">
                  Chats
                </span>
              </div>
              <div className="">
                <img
                  src="/vector.png"
                  className=" flex absolute top-[56px] left-[326px] h-[26px] w-[26px]"
                />
              </div>
            </li>
            <li className="w-[375px] h-[74px] flex-row relative ">
              <div className=" flex relative h-[66px] w-[40px] top-[11px] left-[16px]">
                <img src="/Oval1.png" className="h-[52px] w-[52px]" />
              </div>
              <div className=" w-[92px]  h-[41px] flex-row relative top-[36px] left-[20px]">
                <span className="absolute  bottom-[115px] left-[50px] font-sfp text-[16px] leading-[21px] tracking-[-0.33px] font-normal whitespace-nowrap">
                  Arjun Das Mygate
                </span>{" "}
              </div>
              <div className="h-[34px] w-[240px] absolute top-[30px] left-[70px]">
                <span className=" font-sfp text-[14px] text-[#8E8E93] leading-normal tracking-[-0.15px] font-normal">
                  Hey i got to know your are amid a design task, ATB for same
                </span>
              </div>

              <span className="absolute bottom-[45px] left-[290px] font-sfp text-[14px] leading-auto tracking-[-0.15px] font-normal text-[#1DAB61]">
                12:30 PM
              </span>
              <div className="absolute flex bottom-[25px] left-[320px] text-[#FFFFFF] justify-center w-[29px] h-[16px] bg-[#1DAB61] rounded-2xl font-sfp text-[12px] leading-[130%] tracking-[-0.15px] ">
                10
              </div>
              <div className="h-[0.33px] bg-[#3C3C43] opacity-30 w-[275px] justify-center flex relative bottom-[20px] left-[70px]"></div>
            </li>
            <li className="w-[375px] h-[74px] flex-row relative top-[15px]">
              <div className=" flex relative h-[66px] w-[40px] top-[11px] left-[16px]">
                <img src="/Oval2.png" className="h-[52px] w-[52px]" />
              </div>
              <div className=" w-[92px]  h-[41px] flex-row relative top-[36px] left-[20px]">
                <span className="absolute  bottom-[115px] left-[50px] font-sfp text-[16px] leading-[21px] tracking-[-0.33px] font-normal whitespace-nowrap">
                  Antony Das
                </span>{" "}
              </div>
              <div className="h-[34px] w-[240px] absolute top-[30px] left-[95px]">
                <img
                  src="/Read.png"
                  className="flex relative top-[5px] right-[25px] w-[16px] h-[10.23px]"
                />
                <span className="flex relative bottom-[10px] font-sfp text-[14px] text-[#8E8E93] leading-normal tracking-[-0.15px] font-normal">
                  What kind of strategies is better?
                </span>
              </div>

              <span className="absolute bottom-[45px] left-[290px] font-sfp text-[14px] leading-auto tracking-[-0.15px] font-normal text-[#8E8E93]">
                11:55 AM
              </span>
            </li>
            <li className="w-[375px] h-[74px] flex-row relative top-[15px]">
              <div className=" flex relative h-[66px] w-[40px] top-[11px] left-[16px]">
                <img src="/Oval3.png" className="h-[52px] w-[52px]" />
              </div>
              <div className=" w-[92px]  h-[41px] flex-row relative top-[36px] left-[20px]">
                <span className="absolute  bottom-[115px] left-[50px] font-sfp text-[16px] leading-[21px] tracking-[-0.33px] font-normal whitespace-nowrap">
                  Elisa Das Zoho
                </span>{" "}
              </div>
              <div className="h-[34px] w-[240px] absolute top-[30px] left-[95px]">
                <img
                  src="/Voice_Record.png"
                  className="flex relative top-[6px] right-[25px] w-[9px] h-[14.3px]"
                />
                <span className="flex relative bottom-[10px] right-[10px] font-sfp text-[14px] text-[#8E8E93] leading-normal tracking-[-0.15px] font-normal">
                  0:14
                </span>
              </div>

              <span className="absolute bottom-[45px] left-[285px] font-sfp text-[14px] leading-auto tracking-[-0.15px] font-normal text-[#8E8E93]">
                Yesterday
              </span>
              <div className="h-[0.33px] bg-[#3C3C43] opacity-30 w-[275px] justify-center flex relative bottom-[45px] left-[70px]"></div>
            </li>
            <li className="w-[375px] h-[74px] flex-row relative top-[15px]">
              <div className=" flex relative h-[66px] w-[40px] top-[11px] left-[16px]">
                <img src="/Oval4.png" className="h-[52px] w-[52px]" />
              </div>
              <div className=" w-[92px]  h-[41px] flex-row relative top-[36px] left-[20px]">
                <span className="absolute  bottom-[115px] left-[50px] font-sfp text-[16px] leading-[21px] tracking-[-0.33px] font-normal whitespace-nowrap">
                  Harold Das
                </span>{" "}
              </div>
              <div className="h-[34px] w-[240px] absolute top-[30px] left-[95px]">
                <img
                  src="/Read.png"
                  className="flex relative top-[5px] right-[25px] w-[16px] h-[10.23px]"
                />
                <span className="flex relative bottom-[10px] font-sfp text-[14px] text-[#8E8E93] leading-normal tracking-[-0.15px] font-normal">
                  Bro! I have a good idea.
                </span>
              </div>

              <span className="absolute bottom-[45px] left-[285px] font-sfp text-[14px] leading-auto tracking-[-0.15px] font-normal text-[#8E8E93]">
                Yesterday
              </span>
              <div className="h-[0.33px] bg-[#3C3C43] opacity-30 w-[275px] justify-center flex relative bottom-[45px] left-[70px]"></div>
            </li>
            <li className="w-[375px] h-[74px] flex-row relative top-[15px]">
              <div className=" flex relative h-[66px] w-[40px] top-[11px] left-[16px]">
                <img src="/Oval5.png" className="h-[52px] w-[52px]" />
              </div>
              <div className=" w-[92px]  h-[41px] flex-row relative top-[36px] left-[20px]">
                <span className="absolute  bottom-[115px] left-[50px] font-sfp text-[16px] leading-[21px] tracking-[-0.33px] font-normal whitespace-nowrap">
                  Revathi Freshworks
                </span>{" "}
              </div>
              <div className="h-[34px] w-[240px] absolute top-[30px] left-[95px]">
                <img
                  src="/Photo_icon.png"
                  className="flex relative top-[5px] right-[25px] w-[16px] h-[10.23px]"
                />
                <span className="flex relative bottom-[10px] font-sfp text-[14px] text-[#8E8E93] leading-normal tracking-[-0.15px] font-normal">
                  Photo
                </span>
              </div>

              <span className="absolute bottom-[45px] left-[285px] font-sfp text-[14px] leading-auto tracking-[-0.15px] font-normal text-[#8E8E93]">
                Yesterday
              </span>
              <div className="h-[0.33px] bg-[#3C3C43] opacity-30 w-[275px] justify-center flex relative bottom-[45px] left-[70px]"></div>
            </li>
            <li className="w-[375px] h-[74px] flex-row relative top-[15px]">
              <div className=" flex relative h-[66px] w-[40px] top-[11px] left-[16px]">
                <img src="/Oval6.png" className="h-[52px] w-[52px]" />
              </div>
              <div className=" w-[92px]  h-[41px] flex-row relative top-[36px] left-[20px]">
                <span className="absolute  bottom-[115px] left-[50px] font-sfp text-[16px] leading-[21px] tracking-[-0.33px] font-normal whitespace-nowrap">
                  Revathi Freshworks
                </span>{" "}
              </div>
              <div className="h-[34px] w-[300px] absolute top-[30px] left-[95px]">
                <span className="flex relative bottom-[4px] right-[25px] font-sfp text-[14px] text-[#8E8E93] leading-normal tracking-[-0.15px] font-normal">
                  Actually I wanted to check with you <br />
                  about your online business plan on our...
                </span>
              </div>

              <span className="absolute bottom-[45px] left-[285px] font-sfp text-[14px] leading-auto tracking-[-0.15px] font-normal text-[#8E8E93]">
                Yesterday
              </span>
              <div className="h-[0.33px] bg-[#3C3C43] opacity-30 w-[275px] justify-center flex relative bottom-[38px] left-[70px]"></div>
            </li>
            <li className="w-[375px] h-[74px] flex-row relative top-[15px]">
              <div className=" flex relative h-[66px] w-[40px] top-[11px] left-[16px]">
                <img src="/Oval7.png" className="h-[52px] w-[52px]" />
              </div>
              <div className=" w-[92px]  h-[41px] flex-row relative top-[36px] left-[20px]">
                <span className="absolute  bottom-[115px] left-[50px] font-sfp text-[16px] leading-[21px] tracking-[-0.33px] font-normal whitespace-nowrap">
                  Harold Das
                </span>{" "}
              </div>
              <div className="h-[34px] w-[300px] absolute top-[30px] left-[95px]">
                <img
                  src="/Read.png"
                  className="flex relative top-[5px] right-[25px] w-[16px] h-[10.23px]"
                />
                <span className="flex relative bottom-[10px] right-[4px] font-sfp text-[14px] text-[#8E8E93] leading-normal tracking-[-0.15px] font-normal">
                  Welcome, to make design process
                </span>
                <span className="flex relative bottom-[10px] right-[25px] font-sfp text-[14px] text-[#8E8E93] leading-normal tracking-[-0.15px] font-normal">
                  {" "}
                  faster, look at pixsellz
                </span>
              </div>

              <span className="absolute bottom-[45px] left-[270px] font-sfp text-[14px] leading-auto tracking-[-0.15px] font-normal text-[#8E8E93]">
                Wednesday
              </span>
              <div className="h-[0.33px] bg-[#3C3C43] opacity-30 w-[275px] justify-center flex relative bottom-[35px] left-[70px]"></div>
            </li>
            <li className="w-[375px] h-[74px] flex-row relative top-[15px]">
              <div className=" flex relative h-[66px] w-[40px] top-[11px] left-[16px]">
                <img src="/Oval8.png" className="h-[52px] w-[52px]" />
              </div>
              <div className=" w-[92px]  h-[41px] flex-row relative top-[36px] left-[20px]">
                <span className="absolute  bottom-[115px] left-[50px] font-sfp text-[16px] leading-[21px] tracking-[-0.33px] font-normal whitespace-nowrap">
                  Leo Das
                </span>{" "}
              </div>
              <div className="h-[34px] w-[300px] absolute top-[30px] left-[95px]">
                <img
                  src="/Read.png"
                  className="flex relative top-[5px] right-[25px] w-[16px] h-[10.23px]"
                />
                <span className="flex relative bottom-[10px] right-[4px] font-sfp text-[14px] text-[#8E8E93] leading-normal tracking-[-0.15px] font-normal">
                  Okay, Have a good trip!
                </span>
              </div>

              <span className="absolute bottom-[45px] left-[270px] font-sfp text-[14px] leading-auto tracking-[-0.15px] font-normal text-[#8E8E93]">
                Wednesday
              </span>
              <div className="h-[0.33px] bg-[#3C3C43] opacity-30 w-[275px] justify-center flex relative bottom-[35px] left-[70px]"></div>
            </li>
            <li className="w-[375px] h-[74px] flex-row relative top-[10px]">
              <div className=" flex relative h-[66px] w-[40px] top-[11px] left-[16px]">
                <img src="/Oval9.png" className="h-[52px] w-[52px]" />
              </div>
              <div className=" w-[92px]  h-[41px] flex-row relative top-[36px] left-[20px]">
                <span className="absolute  bottom-[115px] left-[50px] font-sfp text-[16px] leading-[21px] tracking-[-0.33px] font-normal whitespace-nowrap">
                  Joshua Lawrence
                </span>{" "}
              </div>
              <div className="h-[34px] w-[300px] absolute top-[30px] left-[95px]">
                <img
                  src="/Read.png"
                  className="flex relative top-[5px] right-[25px] w-[16px] h-[10.23px]"
                />
                <span className="flex relative right-[4px] bottom-[10px] font-sfp text-[14px] text-[#8E8E93] leading-normal tracking-[-0.15px] font-normal">
                  Do you like WhatsApp UI?
                </span>
              </div>

              <span className="absolute bottom-[45px] left-[285px] font-sfp text-[14px] leading-auto tracking-[-0.15px] font-normal text-[#8E8E93]">
                10/20/19
              </span>
            </li>
            <div className="h-[83px] flex items-center justify-between bottom-[25px] relative">
              <ul className="flex">
                <li className="w-[75px] h-[49px] flex flex-col items-center justify-center">
                  <img src="/Group1.png" className="w-[23px] h-[22.8px]" />
                  <span className="text-[9px] font-sfp text-gray-400">
                    Updates
                  </span>
                </li>
                <li className="w-[75px] h-[49px] flex flex-col items-center justify-center">
                  <img src="/Group2.png" className="w-[23px] h-[22.8px]" />
                  <span className="text-[9px] font-sfp text-gray-400">
                    Calls
                  </span>
                </li>
                <li className="w-[75px] h-[49px] flex flex-col items-center justify-center">
                  <img src="/Group3.png" className="w-[23px] h-[22.8px]" />
                  <span className="text-[9px] font-sfp text-gray-400">
                    Communities
                  </span>
                </li>
                <li className="w-[75px] h-[49px] flex flex-col items-center justify-center bottom-1">
                  <img src="/Group4.png" className="w-[65px] h-[40px]" />
                </li>
                <li className="w-[75px] h-[49px] flex flex-col items-center justify-center">
                  <img src="/Group5.png" className="w-[23px] h-[22.8px]" />
                  <span className="text-[9px] font-sfp text-gray-400">
                    Settings
                  </span>
                </li>
              </ul>
            </div>
            <div className="h-[5px] bg-black rounded-md  w-[134px] justify-center flex relative bottom-[48px] left-[100px]"></div>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Chat;

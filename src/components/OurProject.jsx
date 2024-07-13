import React from "react";
import projectImg from "../assets/project.png";

function OurProject() {
  return (
    <div className='max-w-5xl mx-auto flex flex-col gap-5'>
      <h3 className='text-center font-semibold text-[24px] leading-[26px] tracking-[0px] text-[#FF3147] uppercase opacity-100 font-cormorant-sc'>
        Our project
      </h3>
      <h1 className='text-center font-bold text-[45px] leading-[65px] tracking-[0px] text-black uppercase opacity-100 font-cormorant-sc'>
        Why We Are Best
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
        <div className='col-span-2'>
          <img
            src={projectImg}
            alt='img1'
            className='w-[670px] h-[467px] p-5 md:p-0'
          />
        </div>
        <div className='col-span-1 p-5 md:p-0'>
          <div className='text-black bg-[#F6F6F6] hover:bg-[#FF3147] hover:text-[#FFFFFF] px-4 pb-4 flex flex-col '>
            <h2 className='text-left font-medium text-[20px] leading-[70px] tracking-[0px] opacity-100 font-poppins'>
              Genderless Kei – Japan’s Hot
            </h2>
            <h3 className='text-left font-normal text-[16px] leading-[23px] tracking-[0px] opacity-100 font-poppins'>
              Set to launch on the manufacturer’s new A330neo aircraft in 2017,
              it’s offering lots of
            </h3>
          </div>

          <div className='text-black bg-[#F6F6F6] hover:bg-[#FF3147] hover:text-[#FFFFFF] px-4 pb-4 flex flex-col'>
            <h2 className='text-left font-medium text-[20px] leading-[70px] tracking-[0px] opacity-100 font-poppins'>
              Genderless Kei – Japan’s Hot
            </h2>
            <h3 className='text-left font-normal text-[16px] leading-[23px] tracking-[0px] opacity-100 font-poppins'>
              Set to launch on the manufacturer’s new A330neo aircraft in 2017,
              it’s offering lots of
            </h3>
          </div>

          <div className='text-black bg-[#F6F6F6] hover:bg-[#FF3147] hover:text-[#FFFFFF] px-4 pb-4 flex flex-col'>
            <h2 className='text-left font-medium text-[20px] leading-[70px] tracking-[0px] opacity-100 font-poppins'>
              Genderless Kei – Japan’s Hot
            </h2>
            <h3 className='text-left font-normal text-[16px] leading-[23px] tracking-[0px] opacity-100 font-poppins'>
              Set to launch on the manufacturer’s new A330neo aircraft in 2017,
              it’s offering lots of
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurProject;

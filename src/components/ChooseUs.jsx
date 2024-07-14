import React from "react";
import { ChooseUsData } from "../data/data.js";

function ChooseUs() {
  return (
    <div>
      <div className='max-w-5xl mx-auto flex flex-col gap-5 pt-16 pb-8'>
        <h1 className='text-center font-semibold text-[24px] leading-[26px] tracking-[0px] text-[#FF3147] uppercase opacity-100 font-cormorant-sc'>
          WHY CHOOSE US
        </h1>
        <h1 className='text-center font-bold text-[45px] leading-[65px] tracking-[0px] text-black uppercase opacity-100 font-cormorant-sc'>
          Why We Are Best
        </h1>
        <div className='flex justify-evenly gap-5 mt-3 flex-wrap md:flex-nowrap pl-5 md:pl-0'>
          {ChooseUsData.map((item) => (
            <div key={item.id} className='flex flex-col justify-start gap-2'>
              <img src={item.img} alt={item.title} className='h-16 w-16' />
              <h1 className='text-left font-medium text-[18px] leading-[60px] tracking-[0px] text-black opacity-100 font-poppins'>
                {item.title}
              </h1>
              <p className='text-left font-normal text-[14px] leading-[20px] tracking-[0px] text-black opacity-100 font-poppins'>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ChooseUs;

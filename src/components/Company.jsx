import React from "react";
import { CompanyData } from "../data/data.js";

function Company() {
  return (
    <div className='bg-[#FAFAFA] bg-no-repeat bg-origin-padding opacity-100 py-12'>
      <div className='max-w-5xl mx-auto flex flex-col gap-5'>
        <h3 className='text-center font-semibold text-[24px] leading-[26px] tracking-[0px] text-[#FF3147] uppercase opacity-100 font-cormorant-sc'>
          Experts growts
        </h3>

        <h1 className='text-center font-bold text-[45px] leading-[65px] tracking-[0px] text-black uppercase opacity-100 font-cormorant-sc'>
          Our Company Growth
        </h1>

        <div className='flex justify-around md:justify-between flex-wrap md:flex-nowrap gap-10 md:gap-0'>
          {CompanyData.map((item) => (
            <div
              key={item.id}
              className='flex flex-col justify-center items-center gap-1 p-2 h-[200px] w-[220px] bg-white bg-no-repeat hover:shadow-[3px_6px_20px_rgba(103,44,44,0.12)]'
            >
              <img src={item.img} alt={item.title} className='h-7 w-7' />
              <h1 className='text-center font-light text-[50px] leading-[55px] tracking-[0px] opacity-100 font-poppins mt-4'>
                {item.content}
              </h1>
              <h3 className='text-center font-light text-[20px] leading-[60px] tracking-[0px] opacity-100'>
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Company;

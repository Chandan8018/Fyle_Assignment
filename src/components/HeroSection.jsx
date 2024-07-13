import React from "react";
import heroImg from "../assets/hero.png";

function HeroSection() {
  return (
    <div>
      <div className='max-w-5xl mx-auto grid md:grid-cols-7 grid-cols-1 gap-10 mt-[100px]'>
        <div className='col-span-4 flex flex-col justify-center items-start gap-10 pl-5 md:pl-0'>
          <h3 className='text-left font-semibold text-[30px] leading-[110px] tracking-[0px] text-[#FF3147] uppercase opacity-100 font-cormorant-sc'>
            Award winning
          </h3>
          <h1 className='text-left text-[50px] text-[#000000] tracking-[0px] uppercase font-bold leading-[70px] font-cormorant-sc'>
            Digital Marketing
            <br />
            Agency
          </h1>
          <p className='text-left text-base font-normal leading-[30px] text-black opacity-100 '>
            Morbi sed lacus nec risus finibus feugiat et fermentum nibh.
            Pellentesque vitae ante at elit fringilla ac at purus, Morbi sed
            lacus nec risus finibus feugiat et fermentum
          </p>
          <button className='px-4 py-2 bg-[#FF3147] text-[#FFFFFF] rounded-[2px] text-[12px] leading-[23px] tracking-[1.4px]'>
            CONTACT US
          </button>
        </div>
        <div className='col-span-3 '>
          <img
            src={heroImg}
            alt='hero image'
            className='h-[637px] w-[487px] pl-5 md:pl-0'
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

import React from "react";
import heroImg from "../assets/hero.png";

function HeroSection() {
  return (
    <div>
      <div className='max-w-5xl mx-auto grid md:grid-cols-7 grid-cols-1 gap-10 mt-[100px]'>
        <div className='col-span-4 flex flex-col justify-center items-start gap-10'>
          <h3 className='text-left text-[25px] text-[#FF3147] tracking-[0px] uppercase font-[600] '>
            Award winning
          </h3>
          <h1 className='text-left text-[50px] text-[#000000] tracking-[0px] uppercase font-bold leading-[70px]'>
            Digital Marketing
            <br />
            Agency
          </h1>
          <p class='text-left text-base font-normal leading-[30px] text-black opacity-100'>
            Morbi sed lacus nec risus finibus feugiat et fermentum nibh.
            Pellentesque vitae ante at elit fringilla ac at purus, Morbi sed
            lacus nec risus finibus feugiat et fermentum
          </p>
          <button className='px-4 py-2 bg-[#FF3147] text-[#FFFFFF] rounded-[2px] text-[12px] leading-[23px] tracking-[1.4px]'>
            CONTACT US
          </button>
        </div>
        <div className='col-span-3'>
          <img src={heroImg} alt='hero image' className='h-[637px] w-[487px]' />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

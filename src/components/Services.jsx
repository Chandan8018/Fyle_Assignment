import React from "react";

function Services() {
  return (
    <div className='bg-gray-50 bg-no-repeat bg-left-top bg-cover opacity-100 py-[50px]'>
      <div className='max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10'>
        <div className='col-span-2'>
          <h3 className='text-left font-semibold text-[24px] leading-[26px] tracking-[0px] text-[#FF3147] uppercase opacity-100 font-cormorant-sc'>
            WHAT WE DO
          </h3>
          <h1 className='text-left font-bold text-[40px] leading-[55px] tracking-[0px] text-black uppercase opacity-100 font-cormorant-sc'>
            Services provide for you
          </h1>
        </div>
        <div className='col-span-3 flex justify-center items-center'>
          <p>
            Morbi sed lacus nec risus finibus feugiat et fermentum nibh.
            Pellentesque vitae ante at elit fringilla ac at purus, Morbi sed
            lacus nec risus finibus feugiat et fermentum
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;

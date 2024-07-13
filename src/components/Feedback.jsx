import React from "react";
import quotemarks from "../assets/quotemarks.png";

function Feedback() {
  return (
    <div className='max-w-[710px] mx-auto flex flex-col gap-5 py-12'>
      <h3 className='text-center font-semibold text-[24px] leading-[26px] tracking-[0px] text-[#FF3147] uppercase opacity-100 font-cormorant-sc'>
        client's feedback
      </h3>
      <h1 className='text-center font-bold text-[45px] leading-[65px] tracking-[0px] text-black uppercase opacity-100 font-cormorant-sc'>
        people say's about us !
      </h1>
      <div className='relative mx-5 md:mx-0'>
        <img
          src={quotemarks}
          alt='quotemarks'
          className='w-10 h-7 absolute -left-2 -top-1'
        />
        <p className='text-left font-normal text-[18px] leading-[30px] tracking-[0px] text-black opacity-100 font-poppins'>
          Jannat Tumpa The standard chunk of Lorem Ipsum used since the 1500s is
          reproduced below for those interested. Sections Bonorum et Malorum
          original.
        </p>
      </div>
      <div className='mx-5 md:mx-0'>
        <span className='text-left font-bold text-[18px] leading-[30px] tracking-[0px] text-[#FF3147] opacity-100 font-poppins'>
          JANNAT TUMPA
        </span>
        <span className='text-left font-light text-[18px] leading-[30px] tracking-[0px] text-gray-500 opacity-100 font-poppins'>
          - COO, AMERIMAR ENTERPRISES, INC.
        </span>
      </div>
    </div>
  );
}

export default Feedback;

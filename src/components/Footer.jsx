import React from "react";
import footerImg from "../assets/group.png";

function Footer() {
  return (
    <div className='bg-[#f42d42] w-full h-[180px] md:h-[250px] flex justify-center items-center'>
      <img
        src={footerImg}
        alt='Group Image'
        className='w-full px-10 md:px-40'
      />
    </div>
  );
}

export default Footer;

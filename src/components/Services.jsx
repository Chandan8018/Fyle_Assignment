import React, { useCallback, useEffect, useState } from "react";
import { slides } from "../data/data.js";
import icon from "../assets/icon.png";
import arrow from "../assets/arrow.png";
import { Link } from "react-router-dom";
import redDot from "../assets/redDot.png";
import blackDot from "../assets/blackDot.png";

function Services() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSlideImage, setCurrentSlideImage] = useState([
    slides[0],
    slides[1],
  ]);

  useEffect(() => {
    if (currentSlide === 0) {
      setCurrentSlideImage([slides[0], slides[1]]);
    } else if (currentSlide === 1) {
      setCurrentSlideImage([slides[1], slides[2]]);
    } else if (currentSlide === 2) {
      setCurrentSlideImage([slides[2], slides[0]]);
    }
  }, [currentSlide]);

  return (
    <div className='bg-gray-50 bg-no-repeat bg-left-top bg-cover opacity-100 py-[50px] flex flex-col gap-10'>
      <div className='max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 '>
        <div className='col-span-2 ml-5 md:ml-0'>
          <h3 className='text-left font-semibold text-[24px] leading-[26px] tracking-[0px] text-[#FF3147] uppercase opacity-100 font-cormorant-sc'>
            WHAT WE DO
          </h3>
          <h1 className='text-left font-bold text-[40px] leading-[55px] tracking-[0px] text-black uppercase opacity-100 font-cormorant-sc'>
            Services provide for you
          </h1>
        </div>
        <div className='col-span-3 flex justify-center items-center ml-5 md:ml-0'>
          <p>
            Morbi sed lacus nec risus finibus feugiat et fermentum nibh.
            Pellentesque vitae ante at elit fringilla ac at purus, Morbi sed
            lacus nec risus finibus feugiat et fermentum
          </p>
        </div>
      </div>

      <div className='max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 w-full overflow-hidden'>
        <div className='col-span-2 w-full'>
          <div className='flex justify-between gap-8 mr-9 ml-5 md:ml-0'>
            {currentSlideImage.map((slide, index) => (
              <img
                src={slide.image}
                alt='Slider Image'
                key={slide.id}
                className='w-[310px] h-[450px]'
              />
            ))}
          </div>
          <div className='flex justify-start gap-4 items-center mt-3 ml-5 md:ml-0 mb-10 md:mb-0'>
            <div
              className={`bg-cover transition ease hover:h-4 hover:w-4 ${
                currentSlide === 0 ? "h-4 w-4" : "h-3 w-3"
              }`}
              style={{
                backgroundImage:
                  currentSlide === 0 ? `url(${redDot})` : `url(${blackDot})`,
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundImage = `url(${redDot})`)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundImage =
                  currentSlide === 0 ? `url(${redDot})` : `url(${blackDot})`)
              }
              onClick={() => setCurrentSlide(0)}
            />

            <div
              className={`bg-cover transition ease hover:h-4 hover:w-4 ${
                currentSlide === 1 ? "h-4 w-4" : "h-3 w-3"
              }`}
              style={{
                backgroundImage:
                  currentSlide === 1 ? `url(${redDot})` : `url(${blackDot})`,
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundImage = `url(${redDot})`)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundImage =
                  currentSlide === 1 ? `url(${redDot})` : `url(${blackDot})`)
              }
              onClick={() => setCurrentSlide(1)}
            />

            <div
              className={`bg-cover transition ease hover:h-4 hover:w-4 ${
                currentSlide === 2 ? "h-4 w-4" : "h-3 w-3"
              }`}
              style={{
                backgroundImage:
                  currentSlide === 2 ? `url(${redDot})` : `url(${blackDot})`,
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundImage = `url(${redDot})`)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundImage =
                  currentSlide === 2 ? `url(${redDot})` : `url(${blackDot})`)
              }
              onClick={() => setCurrentSlide(2)}
            />
          </div>
        </div>

        <div className='col-span-1'>
          <div className='h-[450px] w-[310px] bg-[#FF3147] px-3 flex flex-col justify-center items-center gap-6 rounded-md ml-5 md:ml-0'>
            <img src={icon} alt='icon' className='h-14 w-14' />
            <h2 className='text-center font-semibold text-[22px] leading-[24px] tracking-[0px] text-white opacity-100 font-cormorant-sc'>
              WEB DEVELOPMENT
            </h2>
            <p className='text-center text-[14px] font-normal leading-[20px] tracking-[0px] text-white opacity-100 font-poppins'>
              Morbi sed lacus nec risus finibus feugiat et fermentum nibh.
              Pellentesque.
            </p>
            <Link
              to='https://www.fylehq.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <button className='px-4 py-2 bg-[#F4F4F4] font-semibold text-[14px] leading-[26px] tracking-[1.4px] text-[#FF3147] opacity-100 font-poppins mt-5'>
                <span className='flex items-center justify-center gap-2'>
                  Learn More
                  <img src={arrow} alt='arrow' className='h-2 w-7' />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;

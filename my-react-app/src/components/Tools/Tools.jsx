import React from 'react';
import toolsImage from '../../assets/images/tools.svg';

export const Tools = () => {
  return (
    <div className='w-full md:pt-20 pt-32 md:px-24 px-5 flex md:flex-row flex-col items-center md:justify-around  justify-center md:gap-0 gap-10'>
        <div className="flex flex-col gap-5 md:w-[35%] w-full">
            <span className='font-bold md:text-[50px] text-[50px] max-w-full md:leading-[70px] leading-[70px]'>
                Get all the tools your team needs
            </span>
            <p className='leading-7 text-gray-600 md:max-w-[590px] max-w-[95%]'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, consectetur tempore, hic illum optio veniam consequatur incidunt dolore odit dolores sit ipsam cum at soluta.
            </p>
            <a href="#" className='text-blue-500 font-semibold'>
                Check the tools
            </a>
        </div>
        <img src={toolsImage} alt="toolsImages" className='md:w-[35%] w-full'/>
    </div>
  )
}

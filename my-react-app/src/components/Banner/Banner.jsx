import React from 'react'
import baloons from "../../assets/images/baloons.jpg"

export const Banner = () => {
  return (
    <div className='w-full md:px-52 px-0 md:pt-44 pt-28'>
        <div 
        style={{ backgroundImage: `url(${baloons})`}}
        className="flex w-full md:rounded-3xl relative md:h-[50vh] items-center justify-between bg-cover bg-center md:p-0 px-8 py-3">
                <div className="w-full h-full absolute md:rounded-3xl left-0 top-0 bg-[#581c87] opacity-75 z-10"/>
                <div className=""></div>
                <div className="flex flex-col gap-8 md:w-[55%] w-full z-20">
                    <span className='font-bold md:text-[50px] text-white text-[50px] max-w-full md:leading-[60px] leading-[70px]'>
                        Problems come and get solved with ease
                    </span>
                    <p className='leading-7 text-white md:max-w-[58 0px] max-w-[95%]'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse sint vitae eligendi voluptas earum ut? Id delectus magnam officia amet.
                    </p>
                    <a href="" className='text-white font-semibold' > 
                        Improve workflow
                    </a>
                </div>
            
        </div>
    </div>
  )
}

import React from 'react'
import logo1 from '../../assets/images/logo1.svg'
import heroImage from '../../assets/images/hero.png'
const Hero = () => {
    const logos = [
        {id:1, Image:logo1},
        {id:1, Image:logo1},
        {id:1, Image:logo1},
        {id:1, Image:logo1},
    ];
  return (
    <div className='w-full md:h-[70vh] h-auto md:pb-8 border-b border-slate-300 flex md:flex-row flex-col items-center justify-between gap-8 md:px-24 md:pt-8 px-5 box-border md:py-0 py-5'>
        <div className="flex flex-col gap-7">
            <span className='font-bold md:text-[75px] text-[50px] max-w-[650px] md:leading-[90px] leading-[70px]'>
                Team project, done well
            </span>
            <span className='leading-7 text-gray-600 md:max-w-[550px]'>
                The only platform that gives your team all the tools needed to work together on their awesome projects
            </span>
            <div className="flex items-center gap-3">
                <input type="text" 
                placeholder='Enter your email' 
                className='rounded-lg border border-slate-300 outline-none px-3 h-12 w-full' />
                <button className='bg-blue-600 text-white rounded-lg px-8 h-12 whitespace-nowrap'>Sign Up For Free</button>
            </div>
            <div className="w-full bg-[#f1f5f9] rounded-lg py-5 flex items-center justify-between px-3">
                {logos.map((logo)=> {
                   return (
                    <img 
                    src={logo.Image} 
                    key={logo.id} />
                   )
                })}
            </div>
        </div>
        <img src={heroImage} alt="heroImage" className='md:w-[45%] w-[90%]' />
    </div>
  )
}

export default Hero
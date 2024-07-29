import React from 'react'

const Footer = () => {
    const links = [
        {title: "Terms", path:"/"},
        {title: "Privacy", path:"/"},
        {title: "Support", path:"/"},
        {title: "About", path:"/"},
        {title: "Contact", path:"/"},
    ]
  return (
    <div className='w-full md:h-24 md:py- py-5 md:px-52 px-5 flex md:flex-row flex-col items-center justify-between border-t- border-slate-300 md:gap-0 gap-5'>
        <span className='font-bold text-lg text-gray-800'>Magnifico</span>
        <div className="flex items-center gap-6">
            {links.map((link)=>{
                  return(
                    <a href={link.path} key={link.title} className='font-medium text-[15px] text-gray-600'>
                        {link.title}
                    </a>
                )
            })}
        </div>
    </div>
  )
}

export default Footer
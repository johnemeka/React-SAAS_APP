import React from 'react';

const Navbar = () => {

    const links = [
        {title: "Products", path:"/"},
        {title: "Solutions", path:"/"},
        {title: "Services", path:"/"},
        {title: "Help Center", path:"/"},
        {title: "Pricing", path:"/"},
    ];
  return (
    <div className='w-full h-24 px-5 flex items-center justify-between border-b border-slate-300'>
        <span className='font-bold text-2xl text-gray-800'>Magnifico</span>
        <div className="hidden md:flex items-center gap-6">
            {links.map((link)=>{
                return(
                <a
                 href={link.path}
                 key={link.title}
                 className='font-medium text-[15px]'
                 >
                    {link.title}
                </a>
                )
            })}
        </div>
        <div className="flex items-center gap-5">
            <a href="#" className='text-blue-600 font-semibold'>Log in</a>
            <button className='bg-blue-600 text-white rounded-lg w-36 h-12'>Sign Up For Free</button>
        </div>
    </div>
  )
}

export default Navbar
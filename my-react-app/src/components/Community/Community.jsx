import React from 'react'

const Community = () => {
  return (
    <div className='w-full md:px-52 px-0 md:pt-44 pt-28 pb-16'>
        <div className="flex w-full md:rounded-3xl relative md:h-[40vh] items-center justify-center  p-8">
            <div className="w-full h-full absolute md:rounded-3xl left-0 top-0 bg-gradient-to-br from-[#1ea0af] to-[#701A75] Z-10" />
                <div className="flex flex-col gap-5 w-full z-20 my-4">
                    <span className='font-bold md:text-[60px] text-center text-white text-[50px] max-w-full me:leading-[80px] leading-[70px]'>
                        Join the community today
                    </span>
                    <p className='leading-7 text-white text-center'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptatibus iure, exercitationem quidem eum voluptates.
                    </p>
                    <button className='bg-blue-600 text-white rounded-lg px-8 h-12 max-w-[160px] self-center whitespace-nowrap'> Sign up for free</button>
                </div>
            
        </div>

    </div>
  )
}

export default Community
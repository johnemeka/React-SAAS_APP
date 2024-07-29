import React from 'react'
import workflowImage from '../../assets/images/workflow.png'
const Workflow = () => {
  return (
    <div className='w-full md:pt-44 pt-30 md:px-24 px-5 flex md:flex-row flex-col items-center md:justify-around justify-center md:gap-0 gap-10'>
        <div className="flex flex-col gap-5 md:w-[35%] w-full">
            <span className='font-bold md:text-[65px] text-[50px] max-w-full md:leading-[70px] leading-[70px]'>
                Improve your workflow
            </span>
            <p className='leading-7 text-gray-600 md:max-w-[580px] max-w-[95%]'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio sint atque, aliquid maxime commodi vel ab qui in exercitationem quisquam!
            </p> 
            <a href="#" className='text-blue-600 font-semibold'>Check the tools</a>
        </div>
        <img src={workflowImage} alt="workflow" className='md:w-[35%] w-full'/>
    </div>
  )
}

export default Workflow
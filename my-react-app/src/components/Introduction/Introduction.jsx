import React from 'react';
import intro1 from '../../assets/images/intro1.png';
import intro2 from '../../assets/images/intro2.png';
import intro3 from '../../assets/images/intro3.png';

export const Introduction = () => {
    const images = [
        { src: intro1 },
        { src: intro2 },
        { src: intro3 }
    ];

    return (
        <div className='w-full md:pt-20 pt-28 md:px-24 px-3 flex md:flex-row flex-col items-center md:justify-evenly justify-center  gap-10'>
            <div className="flex items-center  gap-4 mx-2 md:mx-0 md:w-48  justify-center">
                {images.map((image, index) => {
                    return (
                        <img
                            key={index}
                            src={image.src}
                            className={`${index === 1 && "mt-[-120px]"}  md:w-[70%] w-[30%]`}
                            alt={`intro ${index + 1}`}
                        />
                    );
                })}
            </div>
            <div className="flex flex-col gap-5 p">
                <span className='font-bold md:text-[70px] text-[50px] max-w-[700px] md:max-w-[400px] md:leading-[90px] leading-[60px]'>
                    Enjoy your work time
                </span>
                <p className='leading-7 text-grey-600 md:max-w-[400px] max-w-[700px]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse praesentium ab vero quae inventore accusamus quidem eos! Quidem officia doloremque delectus error labore laudantium eveniet, cum, sapiente excepturi fuga quos inventore nam ut a. Nostrum dolores id repellat provident beatae.
                </p>
                <a href="#" className='text-blue-600 font-semibold'>See how it helped others</a>
            </div>
        </div>
    );
}

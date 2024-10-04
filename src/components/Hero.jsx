import React, { useRef } from 'react';
import Typed from 'react-typed';
import { Link } from "react-router-dom";

const Hero = () => {

  return (
    <div className='text-text font-fredoka pb-7'>
      <div className='max-w-[1000px] mt-[20px] w-full h-auto mx-auto text-center flex flex-col justify-center  bg-background'>
        <div className="aspect-w-16 aspect-h-9 w-full max-w-[100%] justify-center mx-auto">
          <iframe
            className='rounded-3xl'
            width="560"
            height="315"
            src="https://www.youtube.com/embed/gn89W8vG10k?si=bImu4O-61njTMNmw"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className='flex justify-center items-center py-4'>
          <p className='text-text font-bold p-2 md:text-3xl sm:text-xl'>
            I put 100% into making{' '}
          </p>
          <Typed
            className='text-accent font-bold md:text-3xl sm:text-xl'
            strings={['Noise', 'Sound', 'Games', 'Audio', 'Ambience', 'Samples', 'SFX']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <Link to="/Work"
          className='bg-accent hover:bg-primary text-text font-bold md:text-xl sm:text-sm py-2 px-4 rounded-full sm:w-[80px] md:w-[150px] w-auto mx-auto justify-center'
        >
          More
        </Link>
      </div>
    </div>
  );
};

export default Hero;

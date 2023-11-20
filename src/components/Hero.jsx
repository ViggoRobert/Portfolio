import React, { useRef } from 'react';
import Typed from 'react-typed';

const Hero = () => {
  const targetSectionRef = useRef(null);

  const scrollToTargetSection = () => {
    targetSectionRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <div className='text-text font-fredoka'>
      <div className='max-w-[1000px] mt-[20px] w-full h-auto mx-auto text-center flex flex-col justify-center  bg-background'>
        <div className="aspect-w-16 aspect-h-9 w-full max-w-[100%] justify-center mx-auto">
          <iframe
            className='rounded-3xl'
            width="560"
            height="315"
            src="https://www.youtube.com/embed/gnICa25d58Q?si=J68Adb-jSLPp5gAd"
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
            strings={['Noise', 'Sound', 'Foley', 'Sweeps', 'Games', 'Scripts', 'Audio', 'Ambience', 'Dialogue', 'Cinematics', 'Synthesis', 'Layers', 'Recordings', 'Samples', 'Ambisonics', 'SFX', 'Harmonics', 'Transients', 'Soundscapes']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <button
          onClick={scrollToTargetSection}
          className='bg-accent hover:bg-primary text-text font-bold md:text-xl sm:text-sm py-2 px-4 rounded-full sm:w-[80px] md:w-[150px] w-auto mx-auto justify-center'
        >
          More
        </button>
      </div>
      <div ref={targetSectionRef}></div>
    </div>
  );
};

export default Hero;

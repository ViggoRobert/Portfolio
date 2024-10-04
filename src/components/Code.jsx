import React, { useState } from "react";
import { HiArrowCircleDown } from "react-icons/hi";
import { Fa1, Fa2, Fa3, Fa4 } from "react-icons/fa6";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";





function Code() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const handleToggleDropdown = () => {
      setDropdownOpen(!isDropdownOpen);
    };

    const [isDropdown2Open, setDropdown2Open] = useState(false);

    const handleToggle2Dropdown = () => {
      setDropdown2Open(!isDropdown2Open);
    };

    const [isDropdown4Open, setDropdown4Open] = useState(false);


    const handleToggle4Dropdown = () => {
        setDropdown4Open(!isDropdown4Open);
      };


    const [isDropdownoldworkOpen, setDropdownoldworkOpen] = useState(false);

    const handleToggleDropdownoldwork = () => {
      setDropdownoldworkOpen(!isDropdownoldworkOpen);
    };
    const [isDropdown3Open, setDropdown3Open] = useState(false);


    const handleToggle3Dropdown = () => {
        setDropdown3Open(!isDropdown3Open);
      };

    const [currentUrl, setCurrentUrl] = useState("https://www.youtube.com/embed/Ih6jIka9F78?si=UAC98sZI7KqxlIF-");

    const handleVideoChange = (newUrl) => {
      setCurrentUrl(newUrl);
    };

  return (
    <div className='text-text font-fredoka'>
        <div className='max-w-[1000px] mt-[20px] w-full h-auto mx-auto text-center flex flex-col justify-center  bg-background'>
            <p className='justify-center mx-auto text-text font-normal p-4 tracking-wider md:text-4xl sm:text-xl'>Ring modulation sidechain (RMsidechain VST Plugin)</p>
            <div className="aspect-w-16 aspect-h-9 w-full max-w-[100%] justify-center mx-auto">
            <iframe
                className='rounded-3xl'
                width="560"
                height="315"
                src="https://www.youtube.com/embed/Oh_3vf7TiQs?si=abICqIVKp8goVcmA"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
            </div>     
            <div className="w-full  p-3"></div>
            <div
            className={`group flex flex-col gap-2 rounded-xl p-4 bg-secondary text-text ${isDropdown2Open ? "group-focus-visible" : ""}`}
            tabIndex="1"
            >
            <div className="flex cursor-pointer items-center justify-center" onClick={handleToggle2Dropdown}>
                <span className='font-normal tracking-normal text-base pr-2'> READ MORE </span>
                <HiArrowCircleDown className={`h-7 w-7 transition-all duration-500 ${isDropdown2Open ? "rotate-180" : ""}`} />
            </div>
            <div
                className={` h-auto max-h-0 rounded-xl bg-accent items-center opacity-0 transition-all ${isDropdown2Open ? "visible opacity-100 max-h-screen p-4 duration-1000" : ""}`} 
            >
                VST plugin I created for sidechain using ring modulation.
            </div>
            </div>    
            <hr class="my-6 h-1 rounded-lg border-t-0 bg-text opacity-50" /> 
            <p className='justify-center mx-auto text-text font-normal p-4 tracking-wider md:text-4xl sm:text-xl'>Rea-speech to text(DEMO)</p>
            <div className="aspect-w-16 aspect-h-9 w-full max-w-[100%] justify-center mx-auto">
            <iframe
                className='rounded-3xl'
                width="560"
                height="315"
                src="https://www.youtube.com/embed/FxlmTN9KjdQ?si=9RIubaHvUmwhwri_"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
            </div>     
            <div className="w-full  p-3"></div>
            <div
            className={`group flex flex-col gap-2 rounded-xl p-4 bg-secondary text-text ${isDropdown2Open ? "group-focus-visible" : ""}`}
            tabIndex="1"
            >
            <div className="flex cursor-pointer items-center justify-center" onClick={handleToggle2Dropdown}>
                <span className='font-normal tracking-normal text-base pr-2'> READ MORE </span>
                <HiArrowCircleDown className={`h-7 w-7 transition-all duration-500 ${isDropdown2Open ? "rotate-180" : ""}`} />
            </div>
            <div
                className={` h-auto max-h-0 rounded-xl bg-accent items-center opacity-0 transition-all ${isDropdown2Open ? "visible opacity-100 max-h-screen p-4 duration-1000" : ""}`} 
            >
                Script in Python to automatically name voice lines based on what the voice actor is saying.
            </div>
            </div>
            <hr class="my-6 h-1 rounded-lg border-t-0 bg-text opacity-50" /> 
            <p className='justify-center mx-auto text-text font-normal p-4 tracking-wider md:text-4xl sm:text-xl'>Auto level and normalization script</p>
            <div className="aspect-w-16 aspect-h-9 w-full max-w-[100%] justify-center mx-auto">
            <iframe
                className='rounded-3xl'
                width="560"
                height="315"
                src="https://www.youtube.com/embed/SIEYLWv4_1o?si=FVy8a7ol7oXFpcv-"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
            </div>     
            <div className="w-full  p-3"></div>
            <div
            className={`group flex flex-col gap-2 rounded-xl p-4 bg-secondary text-text ${isDropdown2Open ? "group-focus-visible" : ""}`}
            tabIndex="1"
            >
            <div className="flex cursor-pointer items-center justify-center" onClick={handleToggle2Dropdown}>
                <span className='font-normal tracking-normal text-base pr-2'> READ MORE </span>
                <HiArrowCircleDown className={`h-7 w-7 transition-all duration-500 ${isDropdown2Open ? "rotate-180" : ""}`} />
            </div>
            <div
                className={` h-auto max-h-0 rounded-xl bg-accent items-center opacity-0 transition-all ${isDropdown2Open ? "visible opacity-100 max-h-screen p-4 duration-1000" : ""}`} 
            >
                Script made as part of my internship at IO Interactive. The script relies on some open-source software: Reaimgui and the SWS extension. The idea is inspired by the Naughty Dog Leveling tool shown in their GDC talk, "Benefits of a Customized Reaper Pipeline for Dialogue" However, mine is way slower but more accurate. It is written entirely in Lua.
            </div>
            </div>
            <hr class="my-6 h-1 rounded-lg border-t-0 bg-text opacity-50" />   
            <p className='justify-center mx-auto text-text font-normal p-4 tracking-wider md:text-4xl sm:text-xl'>Volumetric Box Emitter Demo</p>
            <div className="aspect-w-16 aspect-h-9 w-full max-w-[100%] justify-center mx-auto">
            <iframe
                className='rounded-3xl'
                width="560"
                height="315"
                src="https://www.youtube.com/embed/c9L2FkVgmcI?si=nykEPErybZ8mC_uG"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
            </div>     
            <div className="w-full  p-3"></div>
            <div
            className={`group flex flex-col gap-2 rounded-xl p-4 bg-secondary text-text ${isDropdown2Open ? "group-focus-visible" : ""}`}
            tabIndex="1"
            >
            <div className="flex cursor-pointer items-center justify-center" onClick={handleToggle3Dropdown}>
                <span className='font-normal tracking-normal text-base pr-2'> READ MORE </span>
                <HiArrowCircleDown className={`h-7 w-7 transition-all duration-500 ${isDropdown3Open ? "rotate-180" : ""}`} />
            </div>
            <div
                className={` h-auto max-h-0 rounded-xl bg-accent items-center opacity-0 transition-all ${isDropdown3Open ? "visible max-h-screen opacity-100 p-4 duration-1000" : ""}`}
            >
                Volumetric Box Emitter in Unreal Blueprints and Wwise.
            </div>
            </div>
            <hr class="my-6 h-1 rounded-lg border-t-0 bg-text opacity-0" />
        </div>
    </div>
  )
}



export default Code
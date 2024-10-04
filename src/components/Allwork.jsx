import React, { useState } from "react";
import { HiArrowCircleDown } from "react-icons/hi";
import { Fa1, Fa2, Fa3, Fa4 } from "react-icons/fa6";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";





function Allwork() {
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
            <p className='justify-center inline-flex mx-auto text-text font-normal p-4 tracking-wider md:text-4xl sm:text-xl'>Showreel</p>  
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
            <div className="w-full  p-3"></div>
            <div
            className={`group flex flex-col gap-2 rounded-xl p-4 bg-secondary text-text ${isDropdownOpen ? "group-focus-visible" : ""}`}
            tabIndex="1"
            >
            <div className="flex cursor-pointer items-center justify-center" onClick={handleToggleDropdown}>
                <span className='font-normal tracking-normal text-base pr-2'> READ MORE </span>
                <HiArrowCircleDown className={`h-7 w-7 transition-all duration-500 ${isDropdownOpen ? "rotate-180" : ""}`} />
            </div>
            <div
                className={` h-auto max-h-0 rounded-xl bg-accent items-center opacity-0 transition-all ${isDropdownOpen ? "visible max-h-screen opacity-100 p-4 duration-1000" : ""}`}
            >
                Showcase of some of my work, most of which is being played back in-engine! Special thanks to the Northstar framework for making the Titanfall Kraber redesign possible.
            </div>
            </div>
            <hr class="my-6 h-1 rounded-lg border-t-0 bg-text opacity-50" />

            <p className='justify-center mx-auto text-text font-normal p-4 tracking-wider md:text-4xl sm:text-xl'>Dark Souls Sound Redesign</p>
            <div className="aspect-w-16 aspect-h-9 w-full max-w-[100%] justify-center mx-auto">
            <iframe
                className='rounded-3xl'
                width="560"
                height="315"
                src="https://www.youtube.com/embed/IcEhfPduil0?si=qm7WVYyO6MIPdXv5"
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
            <div className="flex cursor-pointer items-center justify-center" onClick={handleToggle4Dropdown}>
                <span className='font-normal tracking-normal text-base pr-2'> READ MORE </span>
                <HiArrowCircleDown className={`h-7 w-7 transition-all duration-500 ${isDropdown4Open ? "rotate-180" : ""}`} />
            </div>
            <div
                className={` h-auto max-h-0 rounded-xl bg-accent items-center opacity-0 transition-all ${isDropdown4Open ? "visible max-h-screen opacity-100 p-4 duration-1000" : ""}`}
            >
                Dark Souls Sound Redesign.
            </div>
            </div>
            <hr class="my-6 h-1 rounded-lg border-t-0 bg-text opacity-0" />
            <div
            className={`group flex flex-col gap-2 rounded-xl bg-cover p-4 bg-[url('https://images.unsplash.com/photo-1505356822725-08ad25f3ffe4?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] text-text ${isDropdownOpen ? "group-focus-visible" : ""}`}
            tabIndex="1"
            >
            <div className="flex cursor-pointer items-center text-text justify-center" onClick={handleToggleDropdownoldwork}>
                <MdOutlineKeyboardDoubleArrowDown className={`h-7 w-7 transition-all duration-500 ${isDropdownoldworkOpen ? "rotate-180" : ""}`} />
                <span className='font-semibold tracking-normal text-base'>VAULT/OLD WORK</span>
                <MdOutlineKeyboardDoubleArrowDown className={`h-7 w-7 transition-all duration-500 ${isDropdownoldworkOpen ? "rotate-180" : ""}`} />
            </div>
            <div
                className={`h-auto max-h-0 rounded-xl items-center opacity-0 transition-all ${isDropdownoldworkOpen ? "visible max-h-screen opacity-100 p-4 duration-1000" : ""}`}
            >
                <div className={` opacity-0 aspect-w-16 aspect-h-0 w-full max-w-[100%] justify-center mx-auto ${isDropdownoldworkOpen ? "opacity-100 aspect-h-9 duration-1000": ""}`}>
                         <iframe
                            className='rounded-3xl'
                            width="560"
                            height="315"
                            src={currentUrl}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                </div>
                <div className='w-auto h-6 justify-center'> 
                </div>
                   
                    <div className="text-text text-xl font-bold flex mx-auto justify-center" >
                        <button className="focus:outline-none bg-cover
                         text-xl py-2 px-4 rounded-md hover:shadow-lg bg-background" onClick={() => handleVideoChange("https://www.youtube.com/embed/Ih6jIka9F78?si=UAC98sZI7KqxlIF-")}>
                        <Fa1 />
                        </button>
                        <div className="p-2"></div>
                        <button className="focus:outline-none bg-cover 
                        text-xl py-2 px-4 rounded-md hover:shadow-lg bg-background" onClick={() => handleVideoChange("https://www.youtube.com/embed/scSEVYS1YAM?si=iRbWnFfss-RkxgoZ")}>
                        <Fa2 />
                        </button>
                        <div className="p-2"></div>
                        <button className="focus:outline-none bg-cover 
                        text-xl py-2 px-4 rounded-md hover:shadow-lg bg-background" onClick={() => handleVideoChange("https://www.youtube.com/embed/b6gkAMSFpzk?si=tjhSaEZO7Nn1CR-D")}>
                        <Fa3 />
                        </button>
                        <div className="p-2"></div>
                        <button className="focus:outline-none bg-cover hidden 
                        text-xl py-2 px-4 rounded-md hover:shadow-lg bg-background" onClick={() => handleVideoChange("")}>
                        <Fa4 />
                        </button>
                     </div>
                </div>
            </div> 
        </div>
    </div>
  )
}



export default Allwork
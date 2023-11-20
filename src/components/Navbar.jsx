import React, {useState} from "react";
import {AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
    const [nav, setnav] = useState(true)

    const handlenav = () => {
        setnav(!nav)
    }

    const openEmail = () => {
        window.location.href = "mailto:viggo.robert@gmail.com";
      };
    

  return (
    <div className="flex justify-between items-center max-w-[1240px] mx-auto px-4 h-24 text-text font-fredoka"> 
        <h1 className="w-full text-3xl font-bold">VIGGO ROBERT</h1>
        <ul className="hidden md:flex">
            <li className="p-4 font-semibold hidden">Home</li>
            <li className="p-4 font-semibold hidden">About</li>
            <li className="p-4 font-semibold hidden">Work</li>
            <li onClick={openEmail} className="p-4 font-semibold hover:underline">Contact</li>
        </ul>
        <div onClick={handlenav} className="block md:hidden">
             {!nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30}/>}
        </div>
        <div className={!nav ? "fixed z-30 left-0 top-0 w-[70%] h-full border-r border-r-secondary bg-background ease-in-out duration-500" : 'fixed left-[-100%]'}>
        <h1 className="w-full text-3xl font-bold m-7">VIGGO ROBERT</h1>
            <ul className="pt-4 uppercase">
            <li className="p-4 border-b border-secondary font-semibold hidden">Home</li>
            <li className="p-4 border-b border-secondary font-semibold hidden">Work</li>
            <li className="p-4 border-b border-secondary font-semibold hidden">About</li>
            <li onClick={openEmail} className="p-4 font-semibold hover:underline">Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
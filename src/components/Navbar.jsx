import React, {useState} from "react";
import {AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";


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
        <div className="w-full text-3xl font-bold">
        <h1 className="text-3xl font-bold">VIGGO ROBERT</h1>
        <h2 className="text-xl font-bold mx-9 text-accent tracking-wide">Sound Designer</h2>
        </div>
        <ul className="hidden md:flex text-center">
            <li className="p-4 font-semibold hover:underline">          
            <Link to="/Work">Audio_work</Link>
            </li>
            <li className="p-4 font-semibold hover:underline">          
            <Link to="/Code">Code_work</Link>
            </li>
            <li onClick={openEmail} className="p-4 font-semibold hover:underline">Contact</li>
            <li className="p-4">
                    <Link to="/">
                    <FaHome className=" hover:text-accent" size={20}/>   
                    </Link> 
            </li>
        </ul>
        <div onClick={handlenav} className="block md:hidden">
             {!nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30}/>}
        </div>
        <div className={!nav ? "fixed z-30 left-0 top-0 w-[70%] h-full border-r border-r-secondary bg-background ease-in-out duration-500" : 'fixed left-[-100%]'}>
        <h1 className="w-full text-3xl font-bold m-7">VIGGO ROBERT</h1>
            <ul className="pt-4 uppercase">
            <li className="p-4 font-semibold hover:underline">          
            <Link to="/Work">Work</Link>
            </li>
            <li onClick={openEmail} className="p-4 font-semibold hover:underline">Contact</li>
            <li className="p-4 font-semibold hover:underline">
            <Link to="/">Home</Link>    
            </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
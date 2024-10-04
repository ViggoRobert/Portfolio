import React from 'react'
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";



const Footer = () => {
  return (
    <div>


<footer class="rounded-lg shadow m-4 bg-secondary px-4 max-w-[1240px] flex justify-between items-center mx-auto">
    <div class="w-full mx-auto p-4 flex items-center justify-between">
      <span class="text-md text-text font-fredoka">2024
    </span>
    <ul class="flex flex-wrap items-center text-sm font-medium text-text font-fredoka">
        <li>
            <a class="hover:underline me-4 md:me-6">email:viggo.robert@gmail.com</a>
        </li>
        <li>
        <Link to="/">
        <FaHome className="hover:text-accent" size={20}/>
        </Link> 
        </li>
    </ul>
    </div>
</footer>
    </div>
  )
}

export default Footer
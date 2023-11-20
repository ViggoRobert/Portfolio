import React from 'react'

const Footer = () => {
  return (
    <div>


<footer class="rounded-lg shadow m-4 bg-secondary">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-text font-fredoka sm:text-center dark:text-gray-400">2023
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-text font-fredoka sm:mt-0">
        <li>
            <a href="#" class="hover:underline me-4 md:me-6 hidden">Contact</a>
        </li>
        <li>
            <a class="hover:underline me-4 md:me-6">email: viggo.robert@gmail.com</a>
        </li>
        <li>
            <a href="#" class="hover:underline">Home</a>
        </li>
    </ul>
    </div>
</footer>
    </div>
  )
}

export default Footer
import React from 'react'
import NavbarItem from './NavbarItem'
import { useEffect ,  useState } from 'react';
import { BellIcon, MagnifyingGlassIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import Confetti from 'react-confetti';

// import { AccountMenu } from './AccountMenu';
// import { RxSwitch } from 'react-icons/rx'



const Navbar = ( ) => {
  const [showConfetti, setShowConfetti] = useState(false);

  const [theme, setTheme] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [users, ] = useState(["John", "Sarah", "Michael ●"]);



  useEffect(() => {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      setTheme('dark');
    }
    else {
      setTheme('light');
    }
  }, [])

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };


  const handleUserIconClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const handleClick = () => {
    setShowConfetti(!showConfetti);
  }
  return (
    
    <div className="w-full fixed z-40 bg-black bg-white dark:bg-black ">
      <div className={`px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 'bg-zinc-900 bg-opacity-90' : ''}`}>

      <div className='text-gray-200 dark:text-gray-900'>
      <button onClick={handleClick}>{showConfetti ? "●" : "●"}</button>
      {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}
      {}
    </div>
        
      <img src='/logo.png' alt='' className="h-4 lg:h-7" />
     
      <div className="flex-row ml-8 gap-7 lg:flex md:flex-row ">
      <NavbarItem label="Home" link="/" />
<NavbarItem label="Series" link="/series" />
<NavbarItem label="Films" link="/films" />
<NavbarItem label="New & Popular" link="/new" />
<NavbarItem label="My List" link="/list" />
<NavbarItem label="Browse by languages" link="/browse" />
        </div>


        <div  className="flex flex-row ml-auto gap-6 items-center">

   


       <input
         type="checkbox"
         className="hidden"
         id="toggleTheme"
         checked={theme === 'dark'}
         onChange={handleThemeSwitch}
/>
<label
  htmlFor="toggleTheme"
  className="flex items-center cursor-pointer mt-2"
>
  <div className="relative">
    <div
      className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"
    ></div>
    <div
      className={`${
        theme === 'dark' ? 'bg-white' : 'bg-gray-600'
      } absolute left-0 top-0  w-6 h-6  rounded-full shadow transition-transform duration-300 transform ${
        theme === 'dark' ? 'translate-x-full' : 'translate-x-0'
      }`}
    ></div>
  </div>
  <div className="ml-3 text-gray-700 dark:text-gray-300 font-medium">
    {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
  </div>
</label>

        {/* <button className="bg-green-200 gap-7 p-2 rounded-3xl" onClick={handleThemeSwitch}>
        Dark Mode
      </button> */}
      <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <MagnifyingGlassIcon className="w-6 dark:text-white text-black" />
          </div>
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <BellIcon className="w-6 dark:text-white text-black" />
          </div>
          <div className="flex flex-row items-center gap-2 cursor-pointer relative">
  <div className="w-4 h-4 lg:w-10 lg:h-10 rounded-md overflow-hidden">
    <img src='/logo5.jpeg' alt="" />
  </div>
  <ChevronDownIcon
    className={`w-4 text-black fill-white transition ${
      isMenuOpen ? 'rotate-180' : 'rotate-0'
    }`}
    onClick={handleUserIconClick}
  />

  {isMenuOpen && (
 <div className="bg-white dark:bg-black w-56 absolute top-14 right-0 py-5 flex-col border-2 border-gray-500 flex">
 <div className="flex flex-col gap-3">
 {users.map(user => (
  <div key={user} className="px-3 group/item flex flex-row gap-3 items-center w-full">
    <img className="w-8 rounded-md" src="/images/default-blue.png" alt="" />
    <p className="text-black dark:text-white text-sm group-hover/item:underline">{user}</p>
  </div>
))}

 </div>
 <hr className="bg-gray-600 border-0 h-px my-4" />
 <div  className="px-3 text-center  text-sm hover:underline text-black dark:text-white">
   Sign out
 </div>
</div>
  )}
</div>

      </div>



      </div>
      
      </div>

      

 
  )
}

export default Navbar
import React from 'react';
import { Link } from 'react-router-dom';

function Enter() {
  return (
    <div className='flex items-center h-full justify-center'>
      <div className='flex flex-col'>
        <h1 className='text-3xl md:text-6xl text-white text-center'>Who is watching?</h1>
        <div className='flex justify-center mt-10'>
          <div className='flex gap-8'>
            <div className='w-44 h-44 rounded-md flex items-center justify-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-white overflow-hidden'>
              <Link to='/'>
                <img src='logo5.jpeg' alt='logozz' />
              </Link>
            </div>
            <div className='w-44 h-44 rounded-md flex items-center justify-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-white overflow-hidden'>
              <Link to='/'>
                <img src='logo2.png' alt='logozz' />
              </Link>
            </div>
            <div className='w-44 h-44 rounded-md flex items-center justify-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-white overflow-hidden'>
              <Link to='/'>
                <img src='logo3.png' alt='logozz' />
              </Link>
            </div>
            <div className='w-44 h-44 rounded-md flex items-center justify-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-white overflow-hidden'>
              <Link to='/'>
                <img src='logo4.jpeg' alt='logozz' />
              </Link>
            </div>
            <div className='w-44 h-44 rounded-md flex items-center justify-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-white overflow-hidden'>
              <Link to='/'>
                <img src='logo6.jpeg' alt='logozz' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



export default Enter;
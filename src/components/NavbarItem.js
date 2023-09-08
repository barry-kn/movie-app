// import React from 'react';

// interface  {
//   label: string;
//   active?: boolean;
// }

// const NavbarItem:  = ({ label, active }) => {
//   return (
//     <div className={active ? 'text-white cursor-default' : 'text-gray-200 hover:text-gray-300 cursor-pointer transition'}>
//       {label}
//     </div>
//   )
// }

// export default NavbarItem;


import React from 'react';

const NavbarItem = ({ label, active, link }) => {
  const handleClick = () => {
    window.location.href = link;
  }

  return (
    <div className={active ? 'text-white cursor-default' : 'text-black hover:text-gray-300 cursor-pointer transition text-black dark:text-white'} onClick={handleClick}>
      {label}
    </div>
  )
}

export default NavbarItem;

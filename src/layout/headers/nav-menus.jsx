import Link from 'next/link';
import React from 'react';
import menu_data from './menu-data';

const NavMenus = () => {
  return (
    <ul>
      {menu_data.map((menu, i) => (
        <li key={i} className={`${menu.has_dropdown ? 'has-dropdown' : ''} ${menu.mega_menu ? 'has-mega_menu'  :''}`}>
          
            <a>{menu.title} </a>
            </li>
      ))}
    </ul>
  );
};

export default NavMenus;
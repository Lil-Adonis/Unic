import Link from "next/link";
import React from "react";
import menu_data from "./menu-data";
import { useRouter } from "next/router";

const NavMenus = () => {
  const router = useRouter()
  const pathName = router.pathname;
  console.log("Path name>>", pathName)
  return (
    <ul>
      {menu_data.map((menu, i) => (
        <li
          key={i}
          className={`${menu.has_dropdown ? "has-dropdown" : ""} ${
            menu.mega_menu ? "has-mega_menu" : ""
          } ${pathName === menu.link ? "border-bottom border-4 border-primary" : ""}`}
          role="button"
        >
          <a onClick={() => router.push(menu.link)}>{menu.title} </a>
        </li>
      ))}
    </ul>
  );
};

export default NavMenus;

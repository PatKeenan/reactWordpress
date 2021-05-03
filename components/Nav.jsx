import React, { useState } from "react";
import Link from "next/link";

const Nav = () => {
  const [menu, setMenu] = useState(false);

  return (
    <header className="nav__header" onMouseLeave={() => setMenu(false)}>
      <div className="menu" onClick={() => setMenu(!menu)}>
        <span
          className={`${menu ? "openMenu menu__burger" : "menu__burger"} `}
        ></span>
      </div>
      <nav className={`${menu ? "navOpen nav" : "nav"}`}>
        <Link href="/">
          <a
            className="nav__list--item--link return__home"
            className={`${
              menu
                ? "nav__list--item--link return__home hideElement"
                : "nav__list--item--link return__home"
            }`}
            onClick={() => setMenu(false)}
          >
            Pat Keenan
          </a>
        </Link>
        <ul className="nav__list">
          <NavItem path={"/"} title={"Home"} func={() => setMenu(false)} />

          <NavItem
            path={"/projects"}
            title={"Projects"}
            func={() => setMenu(false)}
          />
          <NavItem
            path={"/about"}
            title={"About/Contact"}
            func={() => setMenu(false)}
          />
        </ul>
      </nav>
    </header>
  );
};
export default Nav;

const NavItem = ({ path, title, func }) => {
  return (
    <li className="nav__list--item" onClick={func}>
      <Link href={path}>
        <a className="nav__list--item--link">{title}</a>
      </Link>
    </li>
  );
};

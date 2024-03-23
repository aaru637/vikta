import { React, useState, useEffect } from "react";
import { navbarTitles, open, close } from "../../utils/HomeUtils";
import { Link } from "react-scroll";
import "../../index.css";

const NavBar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`flex justify-end w-full place-content-center ps-5 pe-3 py-3 fixed top-0 z-10 text-white ${
        scrolled ? "bg-black" : "bg-transparent"
      }`}
    >
      <ul className="list-none hidden sm:flex flex-row w-[80%] justify-end gap-6">
        {navbarTitles.map((nav) => (
          <li
            key={nav.id}
            className={`px-2 py-1 hover:bg-pink-600 hover:rounded-lg hover:text-white font-bold ${
              active === nav.value
                ? "text-white bg-pink-600 rounded-lg"
                : "text-white"
            } `}
          >
            <Link
              to={`${nav.id}`}
              spy={true}
              smooth={true}
              offset={-80}
              duration={50}
              className={`cursor-pointer decoration-transparent text-white`}
              onClick={() => setActive(nav.value)}
            >
              {nav.value}
            </Link>
          </li>
        ))}
      </ul>
      <div>
        <img
          src={toggle ? close : open}
          alt="menu"
          className="object-contain sm:hidden block pb-3 cursor-pointer"
          onClick={() => setToggle(!toggle)}
        />
      </div>
      <ul
        className={`${
          toggle ? "flex" : "hidden"
        } list-none sm:hidden flex flex-col gap-3 z-10 top-24 right-8 bg-pink-600 py-3 px-7 rounded-xl fixed`}
      >
        {navbarTitles.map((nav) => (
          <li
            key={nav.id}
            onClick={() => {
              setToggle(!toggle);
              setActive(nav.value);
            }}
          >
            <Link
              to={`${nav.id}`}
              spy={true}
              smooth={true}
              offset={-80}
              duration={200}
              className={`cursor-pointer px-2 py-1 decoration-transparent text-black hover:text-white font-bold ${
                active === nav.value ? "text-white" : "text-black"
              }`}
              onClick={() => {
                setActive(nav.value);
                setToggle(!toggle);
              }}
            >
              {nav.value}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;

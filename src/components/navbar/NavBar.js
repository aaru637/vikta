import { React, useState, useEffect } from 'react'
import { navbarTitles, vikta, open, close } from '../../utils/HomeUtils'
import '../../index.css'

const NavBar = () => {
    const [active, setActive] = useState("Home");
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 90) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <nav className={`flex justify-between min-w-full items-center px-5 py-5 fixed top-0 z-20 text-white ${scrolled ? "bg-black" : "bg-transparent"
            }`}>
            <div className='font-signika font-bold ps-3'>{vikta}</div>
            <ul className='list-none hidden sm:flex flex-row w-[83%] justify-end gap-8'>
                {navbarTitles.map((nav) => (
                    <li key={nav.id} onClick={() => setActive(nav.title)} className={`nav-element px-2 py-1 hover:bg-pink-600 hover:rounded-lg hover:text-white font-bold ${active === nav.value ? "text-white bg-pink-600 rounded-lg" : "text-white"}`} >
                        <a href={`#${nav.id}`} >{nav.value}</a></li>
                ))}
            </ul>
            <div>
                <img src={toggle ? close : open}
                    alt='menu'
                    className='object-contain sm:hidden block cursor-pointer'
                    onClick={() => setToggle(!toggle)} />
            </div>
            <ul className={`${toggle ? "flex" : "hidden"} list-none sm:hidden flex flex-col gap-4 z-10 top-28 right-8 bg-pink-600 py-5 px-7 rounded-xl fixed`}>
                {navbarTitles.map((nav) => (
                    <li key={nav.id} onClick={() => {
                        setToggle(!toggle);
                        setActive(nav.value);
                    }} className={`nav-element px-2 py-1 text-start hover:rounded-xl hover:text-white font-bold ${active === nav.value ? "text-white" : "text-black"}`} >
                        <a href={`#${nav.id}`} >{nav.value}</a></li>
                ))}
            </ul>
        </nav>
    )
}

export default NavBar

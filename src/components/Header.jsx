import React, { useState, useEffect } from 'react'

const Header = () => {
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [headerVisible, setHeaderVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const st = window.pageYOffset || document.documentElement.scrollTop;
            setHeaderVisible(st <= lastScrollTop || st <= 0);
            setLastScrollTop(st <= 0 ? 0 : st);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollTop]);

    return (
        <div className={`fixed w-screen navbar bg-transparent lg:bg-gradient-to-b from-black/50 to-transparent transition-transform duration-500 ease-in-out transform ${headerVisible ? 'translate-y-0' : '-translate-y-full'} z-50`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            <defs>
                                <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                                    <feGaussianBlur in="SourceAlpha" stdDeviation="1" />
                                    <feOffset dx="1" dy="1" result="offsetblur" />
                                    <feComponentTransfer>
                                        <feFuncA type="linear" slope="0.3" />
                                    </feComponentTransfer>
                                    <feMerge>
                                        <feMergeNode />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>
                            </defs>
                            <path filter="url(#shadow)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52">
                        {/* <li><a>Item 1</a></li>
                        <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li> */}
                        <li><a onClick={(event) => {
                            event.preventDefault();
                            const element = document.querySelector('#First');
                            if (element) element.scrollIntoView({ behavior: 'smooth' });
                        }}>Home</a></li>
                        <li><a onClick={(event) => {
                            event.preventDefault();
                            const element = document.querySelector('#Second');
                            if (element) element.scrollIntoView({ behavior: 'smooth' });
                        }}>Solution</a></li>
                        <li><a onClick={(event) => {
                            event.preventDefault();
                            const element = document.querySelector('#Third');
                            if (element) element.scrollIntoView({ behavior: 'smooth' });
                        }}>Benefits</a></li>
                        <li><a onClick={(event) => {
                            event.preventDefault();
                            const element = document.querySelector('#Fourth');
                            if (element) element.scrollIntoView({ behavior: 'smooth' });
                        }}>Partners</a></li>
                        <li><a onClick={(event) => {
                            event.preventDefault();
                            const element = document.querySelector('#Fifth');
                            if (element) element.scrollIntoView({ behavior: 'smooth' });
                        }}>Pricing</a></li>
                        <li><a onClick={(event) => {
                            event.preventDefault();
                            const element = document.querySelector('#Sixth');
                            if (element) element.scrollIntoView({ behavior: 'smooth' });
                        }}>Contact</a></li>
                    </ul>
                </div>
                {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
            </div>
            <div className="navbar-center hidden lg:flex bg-grad">
                <ul className="menu menu-horizontal px-1">
                    <li><a onClick={(event) => {
                        event.preventDefault();
                        const element = document.querySelector('#First');
                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}>Home</a></li>
                    <li><a onClick={(event) => {
                        event.preventDefault();
                        const element = document.querySelector('#Second');
                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}>Solution</a></li>
                    <li><a onClick={(event) => {
                        event.preventDefault();
                        const element = document.querySelector('#Third');
                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}>Benefits</a></li>
                    <li><a onClick={(event) => {
                        event.preventDefault();
                        const element = document.querySelector('#Fourth');
                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}>Partners</a></li>
                    <li><a onClick={(event) => {
                        event.preventDefault();
                        const element = document.querySelector('#Fifth');
                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}>Pricing</a></li>
                    <li><a onClick={(event) => {
                        event.preventDefault();
                        const element = document.querySelector('#Sixth');
                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}>Contact</a></li>
                    {/* <li>
                        <details>
                            <summary>Parent</summary>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </details>
                    </li> */}
                    {/* <li><a>Item 3</a></li> */}
                </ul>
            </div>
            <div className="navbar-end">
                {/* <a className="btn">Button</a> */}
            </div>
        </div>
    )
}

export default Header
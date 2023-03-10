import Link from 'next/link';
import React from 'react';
import { useState, useEffect } from "react";

const Header = ({ handleOpen, handleRemove, openClass }) => {
    const [scroll, setScroll] = useState(0)
    const [isToggled, setToggled] = useState(false);
    const toggleTrueFalse = () => setToggled(!isToggled);
    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    })
    return (
        <>
            <header className={scroll ? "header sticky-bar bg-gray-900 stick" : "header sticky-bar bg-gray-900"}>
                <div className="container">
                    <div className="main-header">
                        <div className="header-logo"><Link className="d-flex" href="/"><img alt="GenZ" src="/assets/imgs/template/logo.png" /></Link></div>
                        <div className="header-nav">
                            <nav className="nav-main-menu d-none d-xl-block">
                                <ul className="main-menu">
                                    <li className='home-btn header-underline'><Link className="active" href="/">Home</Link></li>
                                    <li className="header-underline"><Link class="color-gray-500" href="/about">About Me </Link></li>
                                    <li className="has-children header-underline"><Link className="color-gray-500" href="#">Code </Link>
                                        <ul className="sub-menu two-col">
                                            <li><Link className="color-gray-500" href="/python">Python</Link></li>
                                            <li><Link className="color-gray-500" href="/js">JS</Link></li>
                                        </ul>
                                    </li>
                                    <li className="has-children header-underline"><Link className="color-gray-500" href="#">System </Link>
                                        <ul className="sub-menu two-col">
                                            <li><Link className="color-gray-500" href="/linux">Linux</Link></li>
                                            <li><Link className="color-gray-500" href="/jetson">NVIDIA Jetson</Link></li>
                                            <li><Link className="color-gray-500" href="/windows">Windows</Link></li>
                                        </ul>   
                                    </li>
                                    <li className="has-children header-underline"><Link className="color-gray-500" href="#">Articles </Link>
                                        <ul className="sub-menu two-col">
                                            <li><Link className="color-gray-500" href="/ai">AI</Link></li>
                                            <li><Link className="color-gray-500" href="/software">Software</Link></li>
                                            <li><Link className="color-gray-500" href="/hardware">Hardware</Link></li>
                                        </ul>
                                    </li>
                                    <li className='header-underline'><Link className="color-gray-500" href="/page-contact">Contact</Link></li>
                                </ul>
                            </nav>
                            <div className={`burger-icon burger-icon-white ${openClass && "burger-close"}`}
                                onClick={() => { handleOpen(); handleRemove() }}>
                                <span className="burger-icon-top" />
                                <span className="burger-icon-mid" />
                                <span className="burger-icon-bottom" />
                            </div>
                        </div>
                        <div className="header-right text-end">
                            <Link className="btn btn-search" href="#" onClick={toggleTrueFalse} />
                            <div className={isToggled ? "form-search p-20 d-block" : " form-search p-20 d-none"}>
                                <form action="#">
                                    <input className="form-control" type="text" placeholder="Search" />
                                    <input className="btn-search-2" />
                                </form>
                                <div className="popular-keywords text-start mt-20">
                                    <p className="mb-10 color-white">Popular tags:</p>
                                    <Link className="color-gray-600 mr-10 font-xs" href="#"># Travel,</Link>
                                    <Link className="color-gray-600 mr-10 font-xs" href="#"># Tech,</Link>
                                    <Link className="color-gray-600 mr-10 font-xs" href="#"># Movie</Link>
                                    <Link className="color-gray-600 mr-10 font-xs" href="#"># Lifestyle</Link>
                                    <Link className="color-gray-600 mr-10 font-xs" href="#"># Sport</Link>
                                </div>
                            </div><Link className="btn btn-linear-2 d-none d-sm-inline-block hover-up hover-shadow" href="/page-login">Subscribe</Link>
                        </div>
                    </div>
                </div>
            </header>

        </>
    );
};

export default Header;
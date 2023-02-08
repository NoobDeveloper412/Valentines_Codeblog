import Link from "next/link";
import { useState } from "react";

const Sidebar = ({ openClass }) => {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };
    return (
        <>
            <div className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar bg-gray-900 ${openClass}`}>
                <div className="mobile-header-wrapper-inner">
                    <div className="mobile-header-content-area">
                        <div className="mobile-logo border-gray-800"><Link className="d-flex" href="/"><img alt="GenZ" src="assets/imgs/template/logo.svg" /></Link></div>
                        <div className="perfect-scroll">
                            <div className="mobile-menu-wrap mobile-header-border">
                                <nav className="mt-15">
                                    <ul className="mobile-menu font-heading">
                                        <li className={isActive.key == 1 ? "has-children active" : "has-children"} onClick={() => handleToggle(1)}>
                                            <span className="menu-expand"><i className="fi-rr-caret-down"></i></span>
                                            <Link href="/">Home</Link>
                                        </li>
                                        <li className={isActive.key == 2 ? "has-children active" : "has-children"} onClick={() => handleToggle(2)}>
                                            <span className="menu-expand"><i className="fi-rr-caret-down"></i></span>
                                            <Link href="/about">About me</Link>
                                        </li>
                                        <li className={isActive.key == 3 ? "has-children active" : "has-children"} onClick={() => handleToggle(3)}>
                                            <span className="menu-expand"><i className="fi-rr-caret-down"></i></span>
                                            <Link href="/#">Code</Link>
                                            <ul className={isActive.key == 3 ? "sub-menu d-block" : "sub-menu d-none"}>
                                                <li><Link href="/python">Python</Link></li>
                                                <li><Link href="/js">JS</Link></li>
                                            </ul>
                                        </li>
                                        <li className={isActive.key == 4 ? "has-children active" : "has-children"} onClick={() => handleToggle(5)}>
                                        <span className="menu-expand"><i className="fi-rr-caret-down"></i></span>
                                            <Link class="color-gray-500" href="/page-portfolio">System</Link>
                                            <ul className={isActive.key == 4 ? "sub-menu d-block" : "sub-menu d-none"}>
                                                <li><Link class="color-gray-500" href="/page-portfolio">Linux</Link></li>
                                                <li><Link class="color-gray-500" href="/page-portfolio-2">NVIDIA Jetson</Link></li>
                                                <li><Link class="color-gray-500" href="/portfolio-details">Windows</Link></li>
                                            </ul>
                                        </li>
                                        <li className={isActive.key == 5 ? "has-children active" : "has-children"} onClick={() => handleToggle(4)}>
                                            <span className="menu-expand"><i className="fi-rr-caret-down"></i></span>
                                            <Link href="/#">Articles</Link>
                                            <ul className={isActive.key == 5 ? "sub-menu d-block" : "sub-menu d-none"}>
                                                <li><Link href="/page-about">AI</Link></li>
                                                <li><Link href="/page-author">Software</Link></li>
                                                <li><Link href="/page-contact">Hardware</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link href="/page-contact">Contact</Link></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="site-copyright color-gray-400 mt-30">Made by Valentin Cavarec</div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Sidebar;
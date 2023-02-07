import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="footer-1 bg-gray-850 border-gray-800">
                        <div className="row">
                            <div className="col-lg-4 mb-30"><Link className="wow animate__animated animate__fadeInUp" href="/"><img className="logo" src="assets/imgs/template/logo.png" alt="Genz" /></Link>
                                <p className="mb-20 mt-20 text-sm color-gray-500 wow animate__animated animate__fadeInUp">When an
                                    unknown prnoto sans took a galley and scrambled it to make specimen book not only five When
                                    an unknown prnoto sans took a galley and scrambled it to five centurie.</p>                                
                            </div>
                            <div className="col-lg-4 mb-30">
                                <h4 className="mb-30 color-white wow animate__animated animate__fadeInUp color-linear">Categories</h4>
                                <div className="row">
                                    <div className="col-5">
                                        <ul className="menu-footer">
                                            <li className="wow animate__animated animate__fadeInUp"><Link className="color-gray-500" href="/blog-archive">Python</Link></li>
                                            <li className="wow animate__animated animate__fadeInUp"><Link className="color-gray-500" href="/blog-archive">Windows</Link></li>
                                            <li className="wow animate__animated animate__fadeInUp"><Link className="color-gray-500" href="/blog-archive">AI Articles</Link></li>
                                            <li className="wow animate__animated animate__fadeInUp"><Link className="color-gray-500" href="/blog-archive">Software</Link></li>
                                        </ul>
                                    </div>
                                    <div className="col-5">
                                        <ul className="menu-footer">
                                            <li className="wow animate__animated animate__fadeInUp"><Link className="color-gray-500" href="/blog-archive">Javascript</Link></li>
                                            <li className="wow animate__animated animate__fadeInUp"><Link className="color-gray-500" href="/blog-archive">Linux</Link></li>
                                            <li className="wow animate__animated animate__fadeInUp"><Link className="color-gray-500" href="/blog-archive">NVIDIA Jetson</Link></li>
                                            <li className="wow animate__animated animate__fadeInUp"><Link className="color-gray-500" href="/blog-archive">Hardware</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 mb-30">
                                <h4 className="mb-30 color-white wow animate__animated animate__fadeInUp color-linear">Newsletter</h4>
                                <p className="text-base color-gray-500 wow animate__animated animate__fadeInUp">Sign up to be first
                                    to receive the latest stories inspiring us, case studies, and industry news.</p>
                                <div className="form-newsletters mt-15 wow animate__animated animate__fadeInUp">
                                    <form action="#">
                                        <div className="form-group">
                                            <input className="input-name border-gray-500" type="text" placeholder="Your name" />
                                        </div>
                                        <div className="form-group">
                                            <input className="input-email border-gray-500" type="email" placeholder="Emaill address" />
                                        </div>
                                        <div className="form-group mt-20">
                                            <button className="btn btn-linear hover-up">
                                                Subscribe
                                                <i className="fi-rr-arrow-small-right" />
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="footer-bottom border-gray-800">
                            <div className="row">
                                <div className="col-lg-5 text-center text-lg-start">
                                    <p className="text-base color-white wow animate__animated animate__fadeIn">Made by <span className="color-linear-2">vcavarec</span> - Next.js is sometimes painful</p>
                                </div>
                                <div className="col-lg-7 text-center text-lg-end">
                                    <div className="box-socials">
                                        <div className="d-inline-block wow animate__animated animate__fadeIn" data-wow-delay=".4s">
                                            <div className="d-inline-block mr-30 wow animate__animated animate__fadeIn" data-wow-delay=".2s"><Link className="icon-socials icon-linked color-gray-500" href="https://www.linkedin.com">LinkedIn</Link></div>
                                            <div className="d-inline-block mr-30 wow animate__animated animate__fadeIn" data-wow-delay=".2s"><Link className="icon-socials icon-discord color-gray-500" href="https://www.discord.com/users/324612680939864067">Steezy#1333</Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </footer>

        </>
    );
};

export default Footer;
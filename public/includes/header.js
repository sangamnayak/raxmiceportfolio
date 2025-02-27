"use client";
import React, { useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { TypeAnimation } from 'react-type-animation';

//css
import '../css/forAllPages.css'
import '../css/header.css'

export default function header() {
    const pathname = usePathname();
    useEffect(() => {
        console.log("Current Route:", pathname); // Log active page
    }, [pathname]);

    return (
        <header>
            <div className='header'>

                {/* on the left */}
                {/* <Link className='logo-text gradient-text' href='/'>Raxmice</Link> */}
                <TypeAnimation
                className='logo-text gradient-text'
                    sequence={[
                        '<RX/>',10000,
                        'Raxmice', 1000,
                        'Sangam', 1000,
                        () => {
                            // console.log('Sequence completed');
                        },
                    ]}
                    repeat={Infinity}
                />
                {/* on the center */}
                <div className='menus flex-align'>
                    <Link href="/" className={`menu ${pathname === "/" ? "active-menu" : ""}`}>All</Link>
                    <Link href="/about" className={`menu ${pathname === "/about" ? "active-menu" : ""}`}>About</Link>
                    <Link href="/projects" className={`menu ${pathname === "/projects" ? "active-menu" : ""}`}>Projects</Link>
                    <Link href="/media" className={`menu ${pathname === "/media" ? "active-menu" : ""}`}>Media</Link>
                </div>
                {/* on the right */}
                <Link className='right-menu' href='/contact'>Contact</Link>

            </div>
        </header>
    )
}

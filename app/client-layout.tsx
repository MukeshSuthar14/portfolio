"use client";
import Loader from "@/components/Loder";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import { Theme } from "@/utils/types";
import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { VscProject } from "react-icons/vsc";
import { RiContactsFill } from "react-icons/ri";
import { SiReaddotcv } from "react-icons/si";

export default function ClientLayout({
    children,
    theme
}: {
    children: React.ReactNode,
    theme: Theme
}) {
    const [currentTheme, setCurrentThemeTheme] = useState<string | undefined>(theme);
    const [loading, setLoading] = useState<boolean | null>(true);
    const openDropDown = (thisitem: Element) => {
        const parent: Element | null = thisitem.parentElement;
        const navLink = parent?.querySelector('.nav-link');

        if (navLink?.classList?.contains('nav-link-open')) {
            navLink?.classList?.remove('nav-link-open');
            thisitem.innerHTML = "&#9776;";
        } else {
            navLink?.classList?.add('nav-link-open');
            thisitem.innerHTML = "&#9932;";
        }
    }

    const changeTheme = (theme: Theme) => {
        const htmlStyle = getComputedStyle(document.documentElement);
        Cookies.set('theme', theme);
        setCurrentThemeTheme(theme)
        if (theme === "Light") {
            document.body.style.setProperty("--background-theme-color", htmlStyle.getPropertyValue("--background-theme-color"))
            document.body.style.setProperty("--background-invert-theme-color", htmlStyle.getPropertyValue("--background-invert-theme-color"))
        } else {
            document.body.style.setProperty("--background-theme-color", htmlStyle.getPropertyValue("--background-invert-theme-color"))
            document.body.style.setProperty("--background-invert-theme-color", htmlStyle.getPropertyValue("--background-theme-color"))
        }
    }

    useEffect(() => {
        let newTheme = theme;
        if (!newTheme) {
            const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            newTheme = isDark ? "Dark" : "Light";
        }
        Cookies.set('theme', newTheme);
        setCurrentThemeTheme(newTheme);
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer);
    }, [theme]);

    if (loading) {
        return <Loader />
    }

    return (
        <>
            <header className="header">
                <div className="header-section">
                    <div className="header-left">
                        <div style={{ color: "var(--background-color)" }}><Link href={"/"}><span>M</span><span style={{ color: "var(--background-color)" }}>s.</span></Link></div>
                    </div>
                    <div className="header-right">
                        <div className="dropdown" onClick={(e) => openDropDown(e.target as Element)}>
                            &#9776;
                        </div>
                        <ul className="nav-link">
                            <li><Link href="/"><FaHome /> Home</Link></li>
                            <li><Link href="/about"><CgProfile /> About</Link></li>
                            <li><Link href="/project"><VscProject /> Project</Link></li>
                            <li><Link href="/contact"><RiContactsFill /> Contact</Link></li>
                            <li><Link href="/cv.pdf" target="__blank"><SiReaddotcv /> CV</Link></li>
                        </ul>
                        {/* <button className="btn-theme" onClick={(e) => setTheme(theme === "Light" ? "Dark": "Light")} dangerouslySetInnerHTML={{__html: theme === "Light" ? "&#127774;": "&#127770;"}}></button> */}
                        <label className="theme-toggle-switch">
                            <input
                                type="checkbox"
                                name="theme"
                                checked={currentTheme === "Dark"}
                                onChange={(e) => changeTheme(e.target.checked ? "Dark" : "Light")}
                            />
                            <span className="toggle-slider" data-emoji={currentTheme === "Light" ? "🌞" : "🌚"} />
                        </label>
                    </div>
                </div>
            </header>
            {children}
            <footer className="footer">
                <div className="copyright-section">
                    <div> &copy; {new Date().getFullYear()} Mukesh Suthar. All Rights Reserved.</div>
                    <div>Developed by <Link style={{ textDecoration: "none", color: "var(--background-color)" }} href="https://www.linkedin.com/in/mukeshsuthar90">Mukesh Suthar</Link></div>
                </div>
            </footer>
        </>
    )
}
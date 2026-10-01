"use client";
import Loader from "@/components/Loder";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import { Theme } from "@/utils/types";
import themeColors from '../theme-config';
import { FaHeart, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FiSun, FiMoon } from "react-icons/fi";
import { 
    HiHome, 
    HiUser, 
    HiCodeBracket, 
    HiEnvelope, 
    HiDocumentText, 
    HiBars3, 
    HiXMark, 
    HiArrowUpRight 
} from "react-icons/hi2";

export default function ClientLayout({
    children,
    theme
}: {
    children: React.ReactNode,
    theme: Theme
}) {
    const pathname = usePathname();
    const [currentTheme, setCurrentTheme] = useState<Theme>(theme || "Dark");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const changeTheme = (newTheme: Theme) => {
        Cookies.set('theme', newTheme, { expires: 365 });
        setCurrentTheme(newTheme);
        document.body.setAttribute('data-theme', newTheme);
        document.body.style.setProperty("--background-theme-color", themeColors[newTheme].background);
        document.body.style.setProperty("--background-invert-theme-color", themeColors[newTheme].text);
        document.body.style.setProperty("--grid-dot-color", themeColors[newTheme].gridDot);
        document.body.style.setProperty("--card-bg", themeColors[newTheme].cardBg);
        document.body.style.setProperty("--card-border", themeColors[newTheme].cardBorder);
        document.body.style.setProperty("--card-shadow", themeColors[newTheme].cardShadow);
        document.body.style.setProperty("--input-bg", themeColors[newTheme].inputBg);
        document.body.style.setProperty("--input-border", themeColors[newTheme].inputBorder);
        document.body.style.setProperty("--input-placeholder", themeColors[newTheme].inputPlaceholder);
    }

    useEffect(() => {
        const savedCookie = Cookies.get('theme') as Theme;
        const activeTheme: Theme = (savedCookie === "Light" || savedCookie === "Dark")
            ? savedCookie
            : ((theme === "Light" || theme === "Dark") ? theme : "Dark");
        Cookies.set('theme', activeTheme, { expires: 365 });
        setCurrentTheme(activeTheme);
        document.body.setAttribute('data-theme', activeTheme);
        document.body.style.setProperty("--background-theme-color", themeColors[activeTheme].background);
        document.body.style.setProperty("--background-invert-theme-color", themeColors[activeTheme].text);
        document.body.style.setProperty("--grid-dot-color", themeColors[activeTheme].gridDot);
        document.body.style.setProperty("--card-bg", themeColors[activeTheme].cardBg);
        document.body.style.setProperty("--card-border", themeColors[activeTheme].cardBorder);
        document.body.style.setProperty("--card-shadow", themeColors[activeTheme].cardShadow);
        document.body.style.setProperty("--input-bg", themeColors[activeTheme].inputBg);
        document.body.style.setProperty("--input-border", themeColors[activeTheme].inputBorder);
        document.body.style.setProperty("--input-placeholder", themeColors[activeTheme].inputPlaceholder);
    }, [theme]);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    const navLinks = [
        { href: "/", label: "Home", icon: <HiHome size={16} /> },
        { href: "/about", label: "About", icon: <HiUser size={16} /> },
        { href: "/project", label: "Projects", icon: <HiCodeBracket size={16} /> },
        { href: "/contact", label: "Contact", icon: <HiEnvelope size={16} /> },
    ];

    return (
        <Loader theme={currentTheme}>
            <header className="header">
                <div className="header-container">
                    {/* Left: Brand / Logo */}
                    <div className="header-left">
                        <Link href="/" className="header-brand-logo" onClick={() => setIsMobileMenuOpen(false)}>
                            <span className="logo-bracket left">&lt;</span>
                            <span className="logo-name">Mukesh</span>
                            <span className="logo-accent">Suthar</span>
                            <span className="logo-bracket right">/&gt;</span>
                        </Link>
                    </div>

                    {/* Center / Navigation Links */}
                    <nav className={`header-nav ${isMobileMenuOpen ? "open" : ""}`}>
                        <ul className="nav-list">
                            {navLinks.map((item) => {
                                const isActive = item.href === "/" 
                                    ? pathname === "/" 
                                    : pathname?.startsWith(item.href);
                                return (
                                    <li key={item.href} className={`nav-item ${isActive ? "active" : ""}`}>
                                        <Link 
                                            href={item.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            <span className="nav-icon">{item.icon}</span>
                                            <span className="nav-label">{item.label}</span>
                                            {isActive && <span className="active-dot" />}
                                        </Link>
                                    </li>
                                );
                            })}
                            <li className="nav-item-cv">
                                <Link 
                                    href="/cv.pdf" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="nav-cv-btn"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <span className="cv-icon"><HiDocumentText size={16} /></span>
                                    <span className="cv-label">CV</span>
                                    <span className="cv-arrow"><HiArrowUpRight size={13} /></span>
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    {/* Right: Modern Theme Toggle & Mobile Menu Button */}
                    <div className="header-actions">
                        <button
                            type="button"
                            className={`modern-theme-toggle ${currentTheme.toLowerCase()}`}
                            onClick={() => changeTheme(currentTheme === "Dark" ? "Light" : "Dark")}
                            aria-label={`Switch to ${currentTheme === "Dark" ? "Light" : "Dark"} mode`}
                            title={`Switch to ${currentTheme === "Dark" ? "Light" : "Dark"} mode`}
                        >
                            <div className="toggle-track">
                                <span className="track-icon sun-icon" aria-hidden="true">
                                    <FiSun size={13} />
                                </span>
                                <span className="track-icon moon-icon" aria-hidden="true">
                                    <FiMoon size={13} />
                                </span>
                                <div className="toggle-thumb" aria-hidden="true">
                                    {currentTheme === "Dark" ? (
                                        <FiMoon size={13} className="thumb-symbol" />
                                    ) : (
                                        <FiSun size={13} className="thumb-symbol" />
                                    )}
                                </div>
                            </div>
                        </button>

                        <button
                            type="button"
                            className={`mobile-menu-btn ${isMobileMenuOpen ? "open" : ""}`}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle navigation menu"
                        >
                            {isMobileMenuOpen ? <HiXMark size={24} /> : <HiBars3 size={24} />}
                        </button>
                    </div>
                </div>
            </header>
            {isMobileMenuOpen && (
                <div 
                    className="mobile-nav-backdrop" 
                    onClick={() => setIsMobileMenuOpen(false)} 
                    aria-hidden="true" 
                />
            )}
            {children}
            <footer className="site-footer">
                <div className="footer-container">
                    <div className="footer-top-grid">
                        {/* Col 1: Brand & Bio */}
                        <div className="footer-col footer-col-brand">
                            <Link href="/" className="footer-brand-logo">
                                <span className="logo-bracket left">&lt;</span>
                                <span className="logo-name">Mukesh</span>
                                <span className="logo-accent">Suthar</span>
                                <span className="logo-bracket right">/&gt;</span>
                            </Link>
                            <p className="footer-tagline">
                                Full Stack Software Engineer crafting resilient multi-tenant SaaS platforms, real-time distributed systems, and modern web architectures.
                            </p>
                            <div className="footer-status-badge">
                                <span className="status-pulse-dot" />
                                <span>Available for new opportunities</span>
                            </div>
                        </div>

                        {/* Col 2: Navigation */}
                        <div className="footer-col footer-col-nav">
                            <h4 className="footer-col-title">Navigation</h4>
                            <ul className="footer-nav-list">
                                <li><Link href="/">Home</Link></li>
                                <li><Link href="/about">About Me</Link></li>
                                <li><Link href="/project">Featured Projects</Link></li>
                                <li><Link href="/contact">Get In Touch</Link></li>
                                <li><Link href="/cv.pdf" target="_blank" rel="noopener noreferrer">Resume (CV)</Link></li>
                            </ul>
                        </div>

                        {/* Col 3: Connect & Socials */}
                        <div className="footer-col footer-col-socials">
                            <h4 className="footer-col-title">Let&apos;s Connect</h4>
                            <p className="footer-social-desc">
                                Have an opportunity or project in mind? Reach out across any of these channels:
                            </p>
                            <div className="footer-social-icons">
                                <Link href="https://github.com/MukeshSuthar14" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="footer-social-btn github">
                                    <FaGithub size={18} />
                                </Link>
                                <Link href="https://www.linkedin.com/in/mukeshsuthar90" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="footer-social-btn linkedin">
                                    <FaLinkedin size={18} />
                                </Link>
                                <Link href="https://www.x.com/mukeshsuthar90" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="footer-social-btn x-twitter">
                                    <FaXTwitter size={17} />
                                </Link>
                                <Link href="https://www.instagram.com/mukesh_sthr90" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer-social-btn instagram">
                                    <FaInstagram size={18} />
                                </Link>
                                <Link href="mailto:mukeshsuthar6142@gmail.com" aria-label="Email" className="footer-social-btn email">
                                    <IoIosMail size={20} />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="footer-bottom-bar">
                        <div className="footer-copyright">
                            &copy; {new Date().getFullYear()} Mukesh Suthar. All Rights Reserved.
                        </div>
                        <div className="footer-credit">
                            Built with <FaHeart className="credit-heart" /> by{" "}
                            <Link
                                href="https://www.linkedin.com/in/mukeshsuthar90"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="credit-author"
                            >
                                Mukesh Suthar
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </Loader>
    )
}
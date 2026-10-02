"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import { Theme } from "@/utils/types";
import { THEME_COLOR } from "@/utils/theme";
import { SITE, SOCIALS } from "@/utils/site";
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

const navLinks = [
    { href: "/", label: "Home", icon: <HiHome size={16} /> },
    { href: "/about", label: "About", icon: <HiUser size={16} /> },
    { href: "/project", label: "Projects", icon: <HiCodeBracket size={16} /> },
    { href: "/contact", label: "Contact", icon: <HiEnvelope size={16} /> },
];

export default function ClientLayout({
    children,
    theme
}: {
    children: React.ReactNode,
    theme: Theme
}) {
    const pathname = usePathname();
    const [currentTheme, setCurrentTheme] = useState<Theme>(theme);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const nextTheme: Theme = currentTheme === "Dark" ? "Light" : "Dark";

    const changeTheme = (newTheme: Theme) => {
        const root = document.documentElement;
        // Colours only animate while switching, so hovers elsewhere stay snappy.
        root.classList.add("theme-switching");
        root.setAttribute("data-theme", newTheme);
        document.querySelector('meta[name="theme-color"]')?.setAttribute("content", THEME_COLOR[newTheme]);
        Cookies.set('theme', newTheme, { expires: 365, sameSite: "lax" });
        setCurrentTheme(newTheme);
        window.setTimeout(() => root.classList.remove("theme-switching"), 350);
    }

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    useEffect(() => {
        if (!isMobileMenuOpen) return;
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIsMobileMenuOpen(false);
        };
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", onKeyDown);
        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [isMobileMenuOpen]);

    return (
        <>
            <a href="#main" className="skip-link">Skip to content</a>
            <header className="header">
                <div className="header-container wrap">
                    {/* Left: Brand / Logo */}
                    <Link href="/" className="brand-logo" onClick={() => setIsMobileMenuOpen(false)}>
                        <span className="logo-bracket" aria-hidden="true">&lt;</span>
                        <span className="logo-name">Mukesh</span>
                        <span className="logo-accent">Suthar</span>
                        <span className="logo-bracket" aria-hidden="true">/&gt;</span>
                    </Link>

                    {/* Center / Navigation Links */}
                    <nav id="site-nav" className={`header-nav ${isMobileMenuOpen ? "open" : ""}`} aria-label="Main">
                        <ul className="nav-list">
                            {navLinks.map((item) => {
                                const isActive = item.href === "/"
                                    ? pathname === "/"
                                    : pathname === item.href || pathname?.startsWith(`${item.href}/`);
                                return (
                                    <li key={item.href} className={`nav-item ${isActive ? "active" : ""}`}>
                                        <Link
                                            href={item.href}
                                            aria-current={isActive ? "page" : undefined}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            <span className="nav-icon">{item.icon}</span>
                                            <span className="nav-label">{item.label}</span>
                                        </Link>
                                    </li>
                                );
                            })}
                            <li className="nav-item-cv">
                                <a
                                    href={SITE.cv}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="nav-cv-btn"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <HiDocumentText size={16} />
                                    <span>CV</span>
                                    <HiArrowUpRight size={13} className="cv-arrow" />
                                </a>
                            </li>
                        </ul>
                    </nav>

                    {/* Right: Theme Toggle & Mobile Menu Button */}
                    <div className="header-actions">
                        <button
                            type="button"
                            className="icon-btn theme-toggle"
                            onClick={() => changeTheme(nextTheme)}
                            aria-label={`Switch to ${nextTheme} mode`}
                            title={`Switch to ${nextTheme} mode`}
                        >
                            {currentTheme === "Dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
                        </button>

                        <button
                            type="button"
                            className="icon-btn mobile-menu-btn"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                            aria-expanded={isMobileMenuOpen}
                            aria-controls="site-nav"
                        >
                            {isMobileMenuOpen ? <HiXMark size={22} /> : <HiBars3 size={22} />}
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
            <main id="main" className="site-main">
                {children}
            </main>
            <footer className="site-footer">
                <div className="footer-container wrap">
                    <div className="footer-top-grid">
                        {/* Col 1: Brand & Bio */}
                        <div className="footer-col footer-col-brand">
                            <Link href="/" className="brand-logo">
                                <span className="logo-bracket" aria-hidden="true">&lt;</span>
                                <span className="logo-name">Mukesh</span>
                                <span className="logo-accent">Suthar</span>
                                <span className="logo-bracket" aria-hidden="true">/&gt;</span>
                            </Link>
                            <p className="footer-tagline">
                                Full Stack Software Engineer crafting resilient multi-tenant SaaS platforms, real-time distributed systems, and modern web architectures.
                            </p>
                            <div className="status-badge">
                                <span className="status-dot" />
                                <span>Available for new opportunities</span>
                            </div>
                        </div>

                        {/* Col 2: Navigation */}
                        <div className="footer-col footer-col-nav">
                            <h2 className="footer-col-title">Navigation</h2>
                            <ul className="footer-nav-list">
                                <li><Link href="/">Home</Link></li>
                                <li><Link href="/about">About Me</Link></li>
                                <li><Link href="/project">Featured Projects</Link></li>
                                <li><Link href="/contact">Get In Touch</Link></li>
                                <li><a href={SITE.cv} target="_blank" rel="noopener noreferrer">Resume (CV)</a></li>
                            </ul>
                        </div>

                        {/* Col 3: Connect & Socials */}
                        <div className="footer-col footer-col-socials">
                            <h2 className="footer-col-title">Let&apos;s Connect</h2>
                            <p className="footer-social-desc">
                                Have an opportunity or project in mind? Reach out across any of these channels:
                            </p>
                            <div className="social-icons">
                                <a href={SOCIALS.github.href} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-btn github">
                                    <FaGithub size={18} />
                                </a>
                                <a href={SOCIALS.linkedin.href} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-btn linkedin">
                                    <FaLinkedin size={18} />
                                </a>
                                <a href={SOCIALS.x.href} target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="social-btn x-twitter">
                                    <FaXTwitter size={17} />
                                </a>
                                <a href={SOCIALS.instagram.href} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-btn instagram">
                                    <FaInstagram size={18} />
                                </a>
                                <a href={`mailto:${SITE.email}`} aria-label="Email" className="social-btn email">
                                    <IoIosMail size={20} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="footer-bottom-bar">
                        <div className="footer-copyright">
                            &copy; {new Date().getFullYear()} Mukesh Suthar. All Rights Reserved.
                        </div>
                        <div className="footer-credit">
                            Built with <FaHeart className="credit-heart" aria-label="love" /> by{" "}
                            <a
                                href={SOCIALS.linkedin.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="credit-author"
                            >
                                Mukesh Suthar
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

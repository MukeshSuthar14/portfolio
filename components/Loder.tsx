'use client';
import "./css/loader.css";
import { useLoader } from '../context/LoaderContext';
import React, { useState, useEffect } from "react";
import { Theme } from "@/utils/types";
import Cookies from "js-cookie";

interface LoaderProps {
    children: React.ReactNode;
    theme?: Theme;
}

export default function Loader({ children, theme }: LoaderProps) {
    const { loading } = useLoader();
    const [activeTheme, setActiveTheme] = useState<Theme>(theme || "Dark");

    useEffect(() => {
        if (theme) {
            setActiveTheme(theme);
        } else {
            const saved = Cookies.get("theme") as Theme;
            if (saved === "Light" || saved === "Dark") {
                setActiveTheme(saved);
            }
        }
    }, [theme]);

    if (loading) {
        const isLight = activeTheme === "Light";
        return (
            <div 
                className={`loader-screen ${isLight ? 'light-mode' : 'dark-mode'}`} 
                data-theme={activeTheme}
            >
                <div className="loader-circle">
                    <div className="loader-logo">
                        <span className="loader-bracket left">&lt;</span>
                        <span className="loader-name">MS</span>
                        <span className="loader-bracket right">/&gt;</span>
                    </div>
                </div>
                <div className="loader-text">
                    <span className="loader-label">Loading</span>
                    <span className="loader-dots">
                        <span className="dot dot-1">.</span>
                        <span className="dot dot-2">.</span>
                        <span className="dot dot-3">.</span>
                    </span>
                </div>
            </div>
        );
    }

    return <>{children}</>;
}

import "./css/loader.css";
import { useLoader } from '../context/LoaderContext';
import React from "react";

export default function Loader({ children }: { children: React.ReactNode }) {
    const { loading } = useLoader();

    if (loading) {
        return (
            <div className="loader-screen">
                <div className="loader-circle">
                    <div className="loader-logo">
                        <span role="img" aria-label="logo" className="emoji"><span>M</span><span style={{ color: "var(--background-color)" }}>s.</span></span>
                    </div>
                </div>
                <div className="loader-text">Loading...</div>
            </div>
        )
    }

    return children;
}

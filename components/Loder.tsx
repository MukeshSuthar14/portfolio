import "./css/loader.css";

export default function Loader() {

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

    return (
        <div id="loader" className="loader-screen">
            <div className="loader-content">
                <span className="loader-text">Loading <span className="dot">.</span><span className="dot">.</span><span className="dot">.</span></span>
            </div>
        </div>
    );
}

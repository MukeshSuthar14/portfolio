import "./css/loader.css";

// Intro splash. Rendered as an overlay that fades itself out in CSS, so the page
// underneath is always in the server HTML and never waits on JavaScript.
export default function Loader() {
    return (
        <div className="loader-screen" aria-hidden="true">
            <div className="loader-circle">
                <div className="loader-logo">
                    <span className="loader-bracket">&lt;</span>
                    <span className="loader-name">MS</span>
                    <span className="loader-bracket">/&gt;</span>
                </div>
            </div>
        </div>
    );
}

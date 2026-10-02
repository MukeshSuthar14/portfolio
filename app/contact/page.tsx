import type { Metadata } from "next";
import './page.css';
import Contact from "@/components/Contact";

export const metadata: Metadata = {
    title: "Contact",
    description: "Get in touch with Mukesh Suthar about full stack roles, SaaS projects, or collaborations.",
};

export default function Page() {
    return (
        <div className="page wrap">
            <header className="page-head">
                <span className="eyebrow">Contact</span>
                <h1 className="page-title">Get In Touch</h1>
                <p className="page-lead">
                    Open to full stack roles, SaaS builds, and interesting collaborations.
                </p>
            </header>
            <Contact />
        </div>
    )
}

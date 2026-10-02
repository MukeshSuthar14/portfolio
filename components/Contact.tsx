"use client";
import React, { useState } from "react";
import { FaLinkedin, FaInstagram, FaGithub, FaYoutube } from "react-icons/fa";
import { FaPhone, FaXTwitter } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { SiGmail } from "react-icons/si";
import { SITE, SOCIALS } from "@/utils/site";

export default function Contact() {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const trimmedName = name.trim();
    const trimmedMessage = message.trim();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${trimmedName}`);
    const body = encodeURIComponent(`Hi Mukesh,\n\nName: ${trimmedName}\n\nMessage:\n${trimmedMessage}\n\n---\nSent from Portfolio Website`);

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!trimmedName || !trimmedMessage) return;

        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(SITE.email)}&su=${subject}&body=${body}`;

        window.open(gmailUrl, "_blank", "noopener,noreferrer");
    };

    return (
        <div className="contact-grid">
            {/* Left Card: Direct Contact Details & Socials */}
            <section className="contact-info card" aria-labelledby="contact-info-title">
                <h2 id="contact-info-title" className="contact-card-title">Let&apos;s get in touch</h2>
                <p className="contact-desc">
                    Have an opportunity, exciting SaaS project, or want to discuss full stack engineering? Reach out directly or send a message via the form!
                </p>

                {/* Direct Contact Info */}
                <div className="contact-methods">
                    <a className="single-contact" href={`tel:${SITE.phone}`}>
                        <span className="contact-icon"><FaPhone size={16} /></span>
                        <span className="contact-detail">
                            <span className="contact-detail-label">Phone</span>
                            <span className="contact-detail-value">{SITE.phoneDisplay}</span>
                        </span>
                    </a>
                    <a className="single-contact" href={`mailto:${SITE.email}`}>
                        <span className="contact-icon"><IoIosMail size={20} /></span>
                        <span className="contact-detail">
                            <span className="contact-detail-label">Email</span>
                            <span className="contact-detail-value">{SITE.email}</span>
                        </span>
                    </a>
                </div>

                <div className="contact-socials-wrapper">
                    <span className="contact-socials-label">Connect across platforms</span>
                    <div className="social-icons">
                        <a href={SOCIALS.linkedin.href} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-btn linkedin"><FaLinkedin size={19} /></a>
                        <a href={SOCIALS.github.href} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-btn github"><FaGithub size={19} /></a>
                        <a href={SOCIALS.x.href} target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="social-btn x-twitter"><FaXTwitter size={17} /></a>
                        <a href={SOCIALS.instagram.href} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-btn instagram"><FaInstagram size={19} /></a>
                        <a href={SOCIALS.youtube.href} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="social-btn youtube"><FaYoutube size={19} /></a>
                    </div>
                </div>
            </section>

            {/* Right Card: Simplified Name + Message Form */}
            <section className="contact-form card" aria-labelledby="contact-form-title">
                <h2 id="contact-form-title" className="contact-card-title">Leave a message</h2>
                <form onSubmit={onSubmit}>
                    <div className="field">
                        <label htmlFor="contact-name">Your Name</label>
                        <input
                            id="contact-name"
                            type="text"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="e.g. John Doe"
                            required
                            autoComplete="name"
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="contact-message">Your Message</label>
                        <textarea
                            id="contact-message"
                            name="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Write your message or project requirements here..."
                            required
                            rows={6}
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">
                        <SiGmail /> Send via Gmail
                    </button>
                    <p className="form-alt">
                        Not on Gmail?{" "}
                        <a href={`mailto:${SITE.email}?subject=${subject}&body=${body}`}>Open in your mail app</a>
                    </p>
                </form>
            </section>
        </div>
    );
}

"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaLinkedin, FaInstagram, FaGithub, FaYoutube } from "react-icons/fa";
import { FaPhone, FaXTwitter } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { SiGmail } from "react-icons/si";

export default function Contact() {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim() || !message.trim()) return;

        const recipient = "mukeshsuthar6142@gmail.com";
        const subject = encodeURIComponent(`Portfolio Inquiry from ${name.trim()}`);
        const body = encodeURIComponent(`Hi Mukesh,\n\nName: ${name.trim()}\n\nMessage:\n${message.trim()}\n\n---\nSent from Portfolio Website`);
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${subject}&body=${body}`;
        
        window.open(gmailUrl, "_blank");
    };

    return (
        <section className="contact-section">
            <div className="contact-me">
                {/* Left Card: Direct Contact Details & Socials */}
                <div className="contact-info">
                    <b>Let&apos;s get in touch</b>
                    <p className="contact-desc">
                        Have an opportunity, exciting SaaS project, or want to discuss full stack engineering? Reach out directly or send a message via the form!
                    </p>
                    
                    {/* Direct Contact Info */}
                    <div className="contact-methods">
                        <div className="single-contact">
                            <div className="contact-icon"><FaPhone size={17} /></div>
                            <div className="contact-detail">
                                <span className="contact-detail-label">Phone</span>
                                <Link href="tel:+919016281095">+91 9016281095</Link>
                            </div>
                        </div>
                        <div className="single-contact">
                            <div className="contact-icon"><IoIosMail size={19} /></div>
                            <div className="contact-detail">
                                <span className="contact-detail-label">Email</span>
                                <Link href="mailto:mukeshsuthar6142@gmail.com">mukeshsuthar6142@gmail.com</Link>
                            </div>
                        </div>
                    </div>

                    <div className="contact-socials-wrapper">
                        <span className="contact-socials-label">Connect across platforms:</span>
                        <div className="other-links">
                            <Link href="https://www.linkedin.com/in/mukeshsuthar90" target="_blank" aria-label="LinkedIn"><FaLinkedin size={22}/></Link>
                            <Link href="https://github.com/MukeshSuthar14" target="_blank" aria-label="GitHub"><FaGithub size={22}/></Link>
                            <Link href="https://www.x.com/mukeshsuthar90" target="_blank" aria-label="X (Twitter)"><FaXTwitter size={20}/></Link>
                            <Link href="https://www.instagram.com/mukesh_sthr90" target="_blank" aria-label="Instagram"><FaInstagram size={22}/></Link>
                            <Link href="https://www.youtube.com/@msdoticon" target="_blank" aria-label="YouTube"><FaYoutube size={22}/></Link>
                        </div>
                    </div>
                </div>

                {/* Right Card: Simplified Name + Message Form */}
                <div className="form-div">
                    <div className="form-container">
                        <b>Leave a message</b>
                        <form onSubmit={onSubmit}>
                            <div>
                                <label htmlFor="contact-name">Your Name</label>
                                <input
                                    id="contact-name"
                                    type="text"
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="e.g. John Doe"
                                    required
                                    autoComplete="off"
                                />
                            </div>
                            <div>
                                <label htmlFor="contact-message">Your Message</label>
                                <textarea
                                    id="contact-message"
                                    name="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Write your message or project requirements here..."
                                    required
                                    autoComplete="off"
                                    rows={5}
                                ></textarea>
                            </div>
                            <div className="submit-btn">
                                <button type="submit" className="btn-submit">
                                    <SiGmail style={{ marginRight: "10px", fontSize: "18px" }} /> Send via Gmail
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
"use client";
import Link from "next/link";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaLinkedin, FaInstagram, FaTwitter, FaGithub, FaYoutube } from "react-icons/fa";

export default function Contact() {

    const onSubmit = () => {

    }

    return (
        <section className="contact-section">
            {/* <p>Contact Me</p> */}
            <div className="contact-me">
                <div className="contact-info">
                    <b>Let&apos;s get in touch</b>
                    <div>
                        <div className="social-links">
                            <div className="single-link">
                                <div><FaPhone size={25} /></div><Link href="tel:+919016281095">9016281095</Link>
                            </div>
                            <div className="single-link">
                                <div><IoIosMail size={25} /></div><Link href="mailto:mukeshsuthar6142@gmail.com">mukeshsuthar6142@gmail.com</Link>
                            </div>
                        </div>
                        <div className="other-links">
                            <div><Link href="https://www.linkedin.com/in/mukeshsuthar90"><FaLinkedin size={25}/></Link></div>
                            <div><Link href="https://www.instagram.com/mukesh_sthr90"><FaInstagram size={25}/></Link></div>
                            <div><Link href="https://www.x.com/mukeshsuthar90"><FaTwitter size={25}/></Link></div>
                            <div><Link href="https://github.com/MukeshSuthar14"><FaGithub size={25}/></Link></div>
                            <div><Link href="https://www.youtube.com/@msdoticon"><FaYoutube size={25}/></Link></div>
                        </div>
                    </div>
                </div>
                <div className="form-div">
                    <div className="form-container">
                        <b>Leave a message</b>
                        <form onSubmit={onSubmit}>
                            <div>
                                <input type="text" name="name" placeholder="Name" required autoComplete="off" />
                            </div>
                            <div>
                                <input type="tel" name="mobile" placeholder="Mobile No." required autoComplete="off" />
                            </div>
                            <div>
                                <input type="email" name="email" placeholder="Email" required autoComplete="off" />
                            </div>
                            <div>
                                <textarea name="message" placeholder="Message..." required autoComplete="off"></textarea>
                            </div>
                            <div className="submit-btn">
                                <button type="submit" className="btn-submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
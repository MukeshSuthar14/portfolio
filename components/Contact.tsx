"use client";

export default function Contact() {
    
    const onSubmit = () => {

    }

    return (
        <section className="contact-section">
            <p>Contact Me</p>
            <div className="contact-me">
                <div className="form-div">
                    <div className="form-container">
                        <form onSubmit={onSubmit}>
                            <div>
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name" required autoComplete="off"/>
                            </div>
                            <div>
                                <label htmlFor="mobile">Mobile No.</label>
                                <input type="tel" name="mobile" required autoComplete="off"/>
                            </div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" required autoComplete="off"/>
                            </div>
                            <div>
                                <label htmlFor="message">Message</label>
                                <textarea name="message" required autoComplete="off"></textarea>
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
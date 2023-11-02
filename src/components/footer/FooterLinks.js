import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import "./FooterLinks.scss";
import LogoImg from "../../assets/maibe.PNG"


const FooterLinks = () => {
    return (
        <>
        <section className="contact-section">
            <div className="container contact">
                <div className="contact-icon">
                    <FaFacebookF className="i" />
                    <FaTwitter className="i" />
                    <FaInstagram className="i" />
                    <FaYoutube className="i" />
                    
                </div>
                <h2>Let's Talk</h2>
                <a href="#home" className="btn btn-dark">Make an enquiry</a>
            </div>

        </section>

        <section className="footer-section">
            <div className="container footer">
                <div className="footer-logo">
                    <img src={LogoImg} alt=""/>
                </div>

                <div className="footer-menu">
                    <p className="link-heading">
                        Features
                    </p>
                    <ul className="nav-ul footer-links">
                        <li>
                            <a href="#home">Link Shortening</a>
                        </li>
                        <li>
                            <a href="#home">Branded Links</a>
                        </li>
                        <li>
                            <a href="#home">Analytics</a>
                        </li>
                        <li>
                            <a href="#home">Blog</a>
                        </li>
                    </ul>
                </div>

                <div className="footer-menu">
                    <p className="link-heading">
                      Resources
                    </p>
                    <ul className="nav-ul footer-links">
                        <li>
                            <a href="#home">Link Shortening</a>
                        </li>
                        <li>
                            <a href="#home">Branded Links</a>
                        </li>
                        <li>
                            <a href="#home">Analytics</a>
                        </li>
                        <li>
                            <a href="#home">Blog</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-menu">
                    <p className="link-heading">
                       Company
                    </p>
                    <ul className="nav-ul footer-links">
                        <li>
                            <a href="#home">Link Shortening</a>
                        </li>
                        <li>
                            <a href="#home">Branded Links</a>
                        </li>
                        <li>
                            <a href="#home">Analytics</a>
                        </li>
                        <li>
                            <a href="#home">Blog</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-menu">
                    <p className="link-heading">
                    Partners
                    </p>
                    <ul className="nav-ul footer-links">
                        <li>
                            <a href="#home">Email</a>
                        </li>
                        <li>
                            <a href="#home">Shop</a>
                        </li>
                        <li>
                            <a href="#home">Analytics</a>
                        </li>
                        <li>
                            <a href="#home">Blog</a>
                        </li>
                    </ul>
                </div>
            </div>

        </section>
        </>
    )
}

export default FooterLinks;
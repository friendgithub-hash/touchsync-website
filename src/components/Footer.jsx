import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer__container container">
                <div className="footer__grid">
                    <div className="footer__brand">
                        <h3 className="footer__logo">TouchSync</h3>
                        <p className="footer__description">
                            Leading provider of interactive display solutions for education,
                            enterprise collaboration, and digital signage worldwide.
                        </p>
                        <div className="footer__social">
                            <a href="#" className="footer__social-link" aria-label="LinkedIn">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="footer__social-link" aria-label="Twitter">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="footer__social-link" aria-label="YouTube">
                                <Youtube size={20} />
                            </a>
                        </div>
                    </div>

                    <div className="footer__section">
                        <h4 className="footer__title">Products</h4>
                        <ul className="footer__list">
                            <li><Link to="/products?application=Meeting Room">Meeting Room Displays</Link></li>
                            <li><Link to="/products?application=Education">Education Solutions</Link></li>
                            <li><Link to="/products?application=Digital Signage">Digital Signage</Link></li>
                            <li><Link to="/products?application=Video Wall">Video Walls</Link></li>
                        </ul>
                    </div>

                    <div className="footer__section">
                        <h4 className="footer__title">Solutions</h4>
                        <ul className="footer__list">
                            <li><Link to="/solutions#enterprise-meeting">Enterprise Meeting</Link></li>
                            <li><Link to="/solutions#smart-classroom">Smart Classroom</Link></li>
                            <li><Link to="/solutions#retail-display">Retail Display</Link></li>
                            <li><Link to="/solutions#control-center">Control Center</Link></li>
                        </ul>
                    </div>

                    <div className="footer__section">
                        <h4 className="footer__title">Contact</h4>
                        <ul className="footer__contact">
                            <li>
                                <Mail size={16} />
                                <a href="mailto:info@szcurve.com">info@szcurve.com</a>
                            </li>
                            <li>
                                <Phone size={16} />
                                <span>+1 (800) 123-4567</span>
                            </li>
                            <li>
                                <MapPin size={16} />
                                <span>Shenzhen, China</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p>&copy; {currentYear} TouchSync. All rights reserved.</p>
                    <div className="footer__legal">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

import React from 'react';
import {
    FooterContainer,
    FooterContent,
    FooterMain,
    FooterBottom,
    FooterElements,
} from './Footer.style';

const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <FooterMain>
                    <div className="one-liner">
                        <FooterElements>
                            <h4>Quick Links</h4>
                            <ul>
                                <li>Services</li>
                                <li>Portfolio</li>
                                <li>About</li>
                                <li>Contact</li>
                            </ul>
                        </FooterElements>
                        <FooterElements>
                            <h4>Socials</h4>
                            <ul>
                                <li>Facebook</li>
                                <li>Instagram</li>
                                <li>Twitter</li>
                            </ul>
                        </FooterElements>
                    </div>
                    <FooterElements>
                        <h3>Newsletter</h3>
                        <div className="subscribe">
                            <input type="text" placeholder="Enter your Email" />
                            <button>Subscribe</button>
                        </div>
                    </FooterElements>
                </FooterMain>
                <FooterBottom>
                    <p>© 2024 AT Tech. All rights reserved.</p>
                </FooterBottom>
            </FooterContent>
        </FooterContainer>
    );
};

export default Footer;

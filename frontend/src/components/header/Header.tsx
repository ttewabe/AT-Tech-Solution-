import React, { useState } from 'react';
import {
    HeaderContainer,
    Logo,
    ContactInfo,
    HamburgerContainer,
    HamburgerButton,
    HeaderDetails,
    HeaderNavitems,
    HeaderMainLine,
} from './Header.style';
import SlideDrawer from '../slideDrawer/SlideDrawer';
import MenuDetails from '../menuDetails/MenuDetails';
import { FaAngleDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
    const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
    const [isMenuDetailsOpen, setMenuDetailsOpen] = useState<boolean>(false);

    const toggleMenu = () => setMenuOpen(!isMenuOpen);

    const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node)) {
            setMenuOpen(false);
        }
    };

    return (
        <HeaderContainer onMouseLeave={() => setMenuDetailsOpen(false)}>
            <Logo>AT Tech</Logo>
            <HeaderMainLine>
                <ContactInfo>
                    <span>Contact: +1-123-456-7890</span>
                    <span>Email: info@attechsolution.com</span>
                </ContactInfo>
                <HeaderDetails>
                    <HeaderNavitems>
                        <span onMouseEnter={() => setMenuDetailsOpen(false)}>
                            <Link to="/home">Home</Link>
                        </span>
                        <span onMouseEnter={() => setMenuDetailsOpen(true)}>
                            <Link to="/services">Services</Link>
                            <FaAngleDown />
                        </span>
                        <span onMouseEnter={() => setMenuDetailsOpen(false)}>
                            <Link to="/portfolio">Portfolio</Link>
                        </span>
                        <span onMouseEnter={() => setMenuDetailsOpen(false)}>
                            <Link to="/about">About</Link>
                        </span>
                        <span onMouseEnter={() => setMenuDetailsOpen(false)}>
                            <Link to="/contact">Contact Us</Link>
                        </span>
                    </HeaderNavitems>
                </HeaderDetails>
            </HeaderMainLine>
            <HamburgerContainer onBlur={handleBlur} tabIndex={-1}>
                <HamburgerButton onClick={toggleMenu}>☰</HamburgerButton>
                {isMenuOpen && <SlideDrawer setMenuOpen={setMenuOpen} />}
            </HamburgerContainer>
            {isMenuDetailsOpen && (
                <MenuDetails setMenuDetailsOpen={setMenuDetailsOpen} />
            )}
        </HeaderContainer>
    );
};

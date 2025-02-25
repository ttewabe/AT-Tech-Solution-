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
import { Link, useLocation } from 'react-router-dom';

export const Header: React.FC = () => {
    const location = useLocation();
    const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
    const [isMenuDetailsOpen, setMenuDetailsOpen] = useState<boolean>(false);

    const toggleMenu = () => setMenuOpen(!isMenuOpen);

    const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node)) {
            setMenuOpen(false);
        }
    };

    const isActive = (path: string) => location.pathname === path;

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
                        <span
                            className={isActive('/home') ? 'active' : ''}
                            onMouseEnter={() => setMenuDetailsOpen(false)}
                        >
                            <Link to="/home">Home</Link>
                        </span>
                        <span
                            className={isActive('/services') ? 'active' : ''}
                            onMouseEnter={() => setMenuDetailsOpen(true)}
                        >
                            <Link to="/services">Services</Link>
                            <FaAngleDown />
                        </span>
                        <span
                            className={isActive('/portfolio') ? 'active' : ''}
                            onMouseEnter={() => setMenuDetailsOpen(false)}
                        >
                            <Link to="/portfolio">Portfolio</Link>
                        </span>
                        <span
                            className={isActive('/about') ? 'active' : ''}
                            onMouseEnter={() => setMenuDetailsOpen(false)}
                        >
                            <Link to="/about">About</Link>
                        </span>
                        <span
                            className={isActive('/contact') ? 'active' : ''}
                            onMouseEnter={() => setMenuDetailsOpen(false)}
                        >
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

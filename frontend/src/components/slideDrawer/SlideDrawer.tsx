import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    ContactList,
    DropdownContentContainer,
    DropdownList,
    DropdownListItem,
    DropdownLogoContainer,
    DropdownMenu,
    Logo,
    SocialMediaLogos,
    SocialMediaLogoItem,
    CloseButton,
    ContactListContent,
    DropdownMenuContent,
    OneLineContainer,
    DropdownListItemDiv,
} from '../header/Header.style';
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaTelegram,
    FaYoutube,
    FaPhone,
    FaAngleRight,
} from 'react-icons/fa';
import { FaXmark, FaEnvelope } from 'react-icons/fa6';

const services = [
    { title: 'Website Development', link: 'software-development' },
    { title: 'Application Development', link: 'software-development' },
    { title: 'Software Maintenance', link: 'software-development' },
    { title: 'Teaching Coding', link: 'education-services' },
    { title: 'Social Services', link: 'other-services' },
];

const navItems = ['Home', 'Services', 'Portfolio', 'About', 'Contact Us'];

const socialMediaIcons = [
    { Icon: FaFacebook, size: 20 },
    { Icon: FaInstagram, size: 20 },
    { Icon: FaLinkedin, size: 20 },
    { Icon: FaTelegram, size: 20 },
    { Icon: FaYoutube, size: 20 },
];

const contactInfo = [
    { Icon: FaPhone, text: 'Contact: +1-123-456-7890', size: 40 },
    { Icon: FaEnvelope, text: 'Email: info@attechsolution.com', size: 40 },
];

const SlideDrawer: React.FC<{
    setMenuOpen: (isOpen: boolean) => void;
}> = ({ setMenuOpen }) => {
    const navigate = useNavigate();
    const handleNavClick = (
        e: React.MouseEvent<HTMLLIElement>,
        navigateTo: string
    ): void => {
        navigate(`/${navigateTo?.split(' ')[0]?.toLowerCase()}`);
    };

    const handleServiceClick = (
        e: React.MouseEvent<HTMLLIElement>,
        link: string
    ): void => {
        navigate(`/services#${link}`);
    };

    return (
        <DropdownMenu>
            <DropdownMenuContent>
                <OneLineContainer>
                    <CloseButton onClick={() => setMenuOpen(false)}>
                        <FaXmark size={25} />
                    </CloseButton>
                </OneLineContainer>
                <DropdownLogoContainer>
                    <Logo>AT Tech</Logo>
                </DropdownLogoContainer>
                <DropdownContentContainer>
                    <DropdownList className="services-nav">
                        {services.map((service, index) => (
                            <DropdownListItem
                                key={index}
                                onClick={(e: React.MouseEvent<HTMLLIElement>) =>
                                    handleServiceClick(e, service.link)
                                }
                            >
                                <DropdownListItemDiv>
                                    {service.title}
                                    <FaAngleRight />
                                </DropdownListItemDiv>
                            </DropdownListItem>
                        ))}
                    </DropdownList>
                    <DropdownList className="slide-drawer-nav">
                        {navItems.map((navItem, index) => (
                            <DropdownListItem
                                key={index}
                                onClick={(e: React.MouseEvent<HTMLLIElement>) =>
                                    handleNavClick(e, navItem)
                                }
                            >
                                <DropdownListItemDiv>
                                    {navItem}
                                    <FaAngleRight />
                                </DropdownListItemDiv>
                            </DropdownListItem>
                        ))}
                    </DropdownList>
                </DropdownContentContainer>
                <ContactList>
                    <SocialMediaLogos>
                        {socialMediaIcons.map(({ Icon, size }, index) => (
                            <SocialMediaLogoItem key={index}>
                                <Icon size={size} />
                            </SocialMediaLogoItem>
                        ))}
                    </SocialMediaLogos>
                    <ContactListContent>
                        {contactInfo.map(({ Icon, text, size }, index) => (
                            <React.Fragment key={index}>
                                <Icon size={size} />
                                <span>{text}</span>
                            </React.Fragment>
                        ))}
                    </ContactListContent>
                </ContactList>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default SlideDrawer;

import React from 'react';
import { Link } from 'react-router-dom';

import {
    WallPaper,
    CompanyMoto,
    CustomButton,
    WallPaperButtons,
    ServicesGrid,
    ServiceCard,
    ServiceCardIcon,
    ProjectLink,
} from './HomeContent.style';
import {
    MainWrapper,
    Section,
    SectionTitle,
} from '../../commonStyledComponents/CommonStyledComponents.style';

import WallPaperImage from '../../../assets/wallpaper.jpg';
import EducationIcon from '../../../assets/education-icon.png';
import AppDevelopmentIcon from '../../../assets/app-development-icon.png';
import MobileDevelopmentIcon from '../../../assets/mobile-development-icon.jpg';
import clientImage1 from '../../../assets/client-graph.jpg';
import clientImage2 from '../../../assets/client-buildings.jpg';
import { FaAngleRight } from 'react-icons/fa';
import ChartComponent from '../../charts/ChartComponent';
import { Carousel } from '../../carousel/Carousel';
import { Testimonials } from '../../testimonials/Testimonials';

const services = [
    {
        icon: AppDevelopmentIcon,
        title: 'Web Development',
        description: ['Custom websites and web applications'],
    },
    {
        icon: MobileDevelopmentIcon,
        title: 'Application Development',
        description: ['Mobile and Desktop applications'],
    },
    {
        icon: EducationIcon,
        title: 'Educational Services',
        description: ['Coding classes for all ages'],
    },
];

const featuredProjects = [
    {
        title: 'Enterprise Resource Planning System',
        description: [
            'An ERP system integrates business processes into a single system, improving efficiency and decision-making.',
            'It provides real-time data and insights for better resource management.',
        ],
    },
    {
        title: 'Inventory Management System',
        description: [
            'An Inventory Management System tracks and manages inventory levels, orders, sales, and deliveries.',
            'It optimizes stock levels, reduces costs, and improves overall efficiency.',
        ],
    },
    {
        title: 'Insurance Claim Management System',
        description: [
            'An Insurance Claim Management System streamlines the process of filing, tracking, and managing insurance claims.',
            'It enhances efficiency, reduces errors, and improves customer satisfaction.',
        ],
    },
    {
        title: 'Customer Relationship Management System',
        description: [
            'A Customer Relationship Management (CRM) system helps manage interactions with customers and prospects.',
            'It improves customer service, boosts sales, and enhances customer retention.',
        ],
    },
];

const skills = [
    {
        title: 'Programming Languages',
        description: [
            'Expertise in multiple programming languages including JavaScript, TypeScript, Python',
        ],
    },
    {
        title: 'UI/UX Design',
        description: ['Creating intuitive and responsive user interfaces'],
    },
    {
        title: 'Application Development',
        description: ['Full-stack development for web and mobile applications'],
    },
    {
        title: 'Social Service Expertise',
        description: ['Community engagement and social impact solutions'],
    },
];

const skillsData = {
    labels: skills.map((skill) => skill.title),
    datasets: [
        {
            label: 'Skill Level',
            data: [90, 80, 85, 70], // Example skill levels
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 205, 86, 1)',
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

const testimonials = [
    {
        title: 'Happy HR Management',
        description: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus et felis.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus et felis.',
        ],
        image: clientImage1,
    },
    {
        title: 'Global Tours',
        description: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus et felis.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus et felis.',
        ],
        image: clientImage2,
    },
];

const HomeContent: React.FC = () => {
    return (
        <MainWrapper>
            <WallPaper $backgroundimage={WallPaperImage}>
                <CompanyMoto>
                    <h1>Empowering Ideas With Code</h1>
                    <p>
                        Crafting Websites, Applications, and Dreams Since March
                        2023. Your trusted partner for web development,
                        application solutions, business presence, and
                        educational services.
                    </p>
                    <WallPaperButtons>
                        <Link to={'/portfolio'}>
                            <CustomButton>View Portfolio</CustomButton>
                        </Link>
                        <Link to={'/contact'}>
                            <CustomButton>Contact Us</CustomButton>
                        </Link>
                    </WallPaperButtons>
                </CompanyMoto>
            </WallPaper>
            <Section key={'about-us'}>
                <SectionTitle>About AT Tech Solutions</SectionTitle>
                <p>
                    Founded by passionate software engineers in March 2023,
                    Dream Soft has rapidly evolved into a comprehensive
                    technology solutions provider. Our expertise spans across
                    web development, application creation, and social services.
                    Our team combines extensive expertise in coding, teaching,
                    and social services to deliver comprehensive solutions that
                    make a real difference.
                </p>
                <Link to={'/about'}>
                    <CustomButton>Meet the Team</CustomButton>
                </Link>
                <ServicesGrid>
                    {services.map((service, index) => (
                        <ServiceCard key={index}>
                            <ServiceCardIcon>
                                <img alt="" src={service.icon} />
                            </ServiceCardIcon>
                            <h4>{service.title}</h4>
                            <p>{service.description}</p>
                            {service.description.map((desc) => (
                                <p key={desc}>{desc}</p>
                            ))}
                        </ServiceCard>
                    ))}
                </ServicesGrid>
                <Carousel items={skills} />
            </Section>
            <Section key={'featured-projects'}>
                <SectionTitle>Featured Projects</SectionTitle>
                <p>Explore some of our recent work and success stories</p>
                <ServicesGrid className="featured-projects">
                    {featuredProjects.map((project, index) => (
                        <ServiceCard
                            key={index}
                            className="featured-project-card"
                        >
                            <ServiceCard className="title-card">
                                <h4>{project.title}</h4>
                            </ServiceCard>
                            {project.description.map((desc, i) => (
                                <p key={i}>{desc}</p>
                            ))}
                            <ProjectLink>
                                View Project <FaAngleRight />
                            </ProjectLink>
                        </ServiceCard>
                    ))}
                </ServicesGrid>
                <Carousel items={featuredProjects} />
            </Section>
            <Section key="skill-knowledge">
                <SectionTitle>Our Skills and Knowledge</SectionTitle>
                <p>
                    Our team combines extensive expertise in coding, teaching,
                    and social services to deliver comprehensive solutions that
                    make a real difference.
                </p>
                <ServicesGrid>
                    {skills.map((skill, index) => (
                        <ServiceCard key={index}>
                            <h4>{skill.title}</h4>
                            {skill.description.map((desc) => (
                                <p key={desc}>{desc}</p>
                            ))}
                        </ServiceCard>
                    ))}
                </ServicesGrid>
                <Carousel items={skills} />
                <ChartComponent data={skillsData} />
            </Section>
            <Testimonials testimonials={testimonials} />
        </MainWrapper>
    );
};

export default HomeContent;

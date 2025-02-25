import React from 'react';
import { SectionContentP, SectionContentDiv, ContactInfo } from './About.style';
import {
    MainWrapper,
    Section,
    SectionTitle,
} from '../../commonStyledComponents/CommonStyledComponents.style';
import { Testimonials } from '../../testimonials/Testimonials';
import { testimonials } from '../../../commonData/data';

const sectionContents = [
    {
        title: 'Company Overview',
        content: (
            <SectionContentP>
                We are a company dedicated to helping people achieve their goals
                and dreams through technology. Our mission is to empower ideas
                with code, offering a range of services including application
                and web development, coding training, and various social
                services.
            </SectionContentP>
        ),
    },
    {
        title: 'Company History',
        content: (
            <SectionContentP>
                Tewabe and Abenezer founded the company with a shared vision of
                harnessing the power of technology to transform lives. They
                started the company to offer application and web development,
                coding training, and essential social services such as
                citizenship forms, USIS forms, and notary services.
            </SectionContentP>
        ),
    },
    {
        title: 'Core Values',
        content: (
            <SectionContentDiv>
                <ul>
                    <li>Innovation</li>
                    <li>Integrity</li>
                    <li>Customer-Centricity</li>
                    <li>Collaboration</li>
                    <li>Excellence</li>
                </ul>
            </SectionContentDiv>
        ),
    },
    {
        title: 'Team Introduction',
        content: (
            <SectionContentP>
                The company currently consists of two members: Tewabe and
                Abenezer. Tewabe is in charge, and they bring diverse
                perspectives and experiences from different countries, enriching
                the company's approach to problem-solving and innovation.
            </SectionContentP>
        ),
    },
    {
        title: 'Services and Expertise',
        content: (
            <SectionContentDiv>
                We offer a range of services, including:
                <ul>
                    <li>Application and Web Development</li>
                    <li>Coding Training</li>
                    <li>
                        Social Services (citizenship forms, USIS forms, notary
                        services)
                    </li>
                </ul>
            </SectionContentDiv>
        ),
    },
    {
        title: 'Corporate Social Responsibility',
        content: (
            <SectionContentP>
                [Share how our company contributes to the community and the
                causes we support. like basic tech education and training and
                social services]
            </SectionContentP>
        ),
    },
    {
        title: 'Contact Information',
        content: (
            <ContactInfo>
                You can reach us via email or phone number:
                <ul>
                    <li>Email: info@attechsolution.com</li>
                    <li>Phone: +1-123-456-7890</li>
                </ul>
            </ContactInfo>
        ),
    },
];

const About: React.FC = () => {
    return (
        <MainWrapper>
            {sectionContents.map((section, index) => (
                <Section key={index}>
                    <SectionTitle>{section.title}</SectionTitle>
                    {section.content}
                </Section>
            ))}
            <Testimonials
                testimonials={testimonials.map((testimonial) => ({
                    title: testimonial.company,
                    description: [testimonial.quote, testimonial.author],
                    image: testimonial.image,
                }))}
            />
        </MainWrapper>
    );
};

export default About;

import React from 'react';
import { SectionContentP, SectionContentDiv, ContactInfo } from './About.style';
import {
    MainWrapper,
    Section,
    SectionTitle,
} from '../../commonStyledComponents/CommonStyledComponents.style';
import { Testimonials } from '../../testimonials/Testimonials';
import clientImage1 from '../../../assets/client-graph.jpg';
import clientImage2 from '../../../assets/client-buildings.jpg';

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

const About: React.FC = () => {
    return (
        <MainWrapper>
            <Section>
                <SectionTitle>Company Overview</SectionTitle>
                <SectionContentP>
                    We are a company dedicated to helping people achieve their
                    goals and dreams through technology. Our mission is to
                    empower ideas with code, offering a range of services
                    including application and web development, coding training,
                    and various social services.
                </SectionContentP>
            </Section>
            <Section>
                <SectionTitle>Company History</SectionTitle>
                <SectionContentP>
                    Tewabe and Abenezer founded the company with a shared vision
                    of harnessing the power of technology to transform lives.
                    They started the company to offer application and web
                    development, coding training, and essential social services
                    such as citizenship forms, USIS forms, and notary services.
                </SectionContentP>
            </Section>
            <Section>
                <SectionTitle>Core Values</SectionTitle>
                <SectionContentDiv>
                    <ul>
                        <li>Innovation</li>
                        <li>Integrity</li>
                        <li>Customer-Centricity</li>
                        <li>Collaboration</li>
                        <li>Excellence</li>
                    </ul>
                </SectionContentDiv>
            </Section>
            <Section>
                <SectionTitle>Team Introduction</SectionTitle>
                <SectionContentP>
                    The company currently consists of two members: Tewabe and
                    Abenezer. Tewabe is in charge, and they bring diverse
                    perspectives and experiences from different countries,
                    enriching the company's approach to problem-solving and
                    innovation.
                </SectionContentP>
            </Section>
            <Section>
                <SectionTitle>Services and Expertise</SectionTitle>
                <SectionContentDiv>
                    We offer a range of services, including:
                    <ul>
                        <li>Application and Web Development</li>
                        <li>Coding Training</li>
                        <li>
                            Social Services (citizenship forms, USIS forms,
                            notary services)
                        </li>
                    </ul>
                </SectionContentDiv>
            </Section>
            <Testimonials testimonials={testimonials} />
            <Section>
                <SectionTitle>Corporate Social Responsibility</SectionTitle>
                <SectionContentP>
                    [Share how our company contributes to the community and the
                    causes we support. like basic tech education and training
                    and social services]
                </SectionContentP>
            </Section>
            <Section>
                <SectionTitle>Contact Information</SectionTitle>
                <ContactInfo>
                    You can reach us via email or phone number:
                    <ul>
                        <li>Email: info@attechsolution.com</li>
                        <li>Phone: +1-123-456-7890</li>
                    </ul>
                </ContactInfo>
            </Section>
        </MainWrapper>
    );
};

export default About;

import React from 'react';
import {
    Card,
    MainWrapper,
    Section,
    SectionTitle,
    CardIcon,
} from '../../commonStyledComponents/CommonStyledComponents.style';
import { ProjectGrid, ImpactGrid } from './Portfolio.style';

import { StatCard } from '../../statCard/StatCard';

import {
    projects,
    caseStudies,
    stats,
    testimonials,
    awards,
} from '../../../commonData/data';

import WebDevelopmentIcon from '../../../assets/web-development-icon.png';
import MobileDevelopmentIcon from '../../../assets/mobile-development-icon.jpg';
import EducationIcon from '../../../assets/education-icon.png';
import SocialIcon from '../../../assets/social-icon.png';

import { FaCode, FaChartLine } from 'react-icons/fa6';
import { Carousel } from '../../carousel/Carousel';

const Portfolio: React.FC = () => {
    return (
        <MainWrapper>
            <Section id="projects" className="projects">
                <SectionTitle>Project Highlights</SectionTitle>
                <ProjectGrid>
                    {projects.map((project, index) => (
                        <Card>
                            <Card className="title-card" key={index}>
                                <h3>{project.name}</h3>
                            </Card>
                            <p className="client">Client: {project.client}</p>
                            <p className="description">{project.description}</p>
                            <div className="technologies">
                                {project.technologies.map((tech) => (
                                    <>
                                        <span className="tag">
                                            <FaCode /> {tech}
                                        </span>
                                    </>
                                ))}
                            </div>
                            <p className="outcome">
                                <>
                                    <FaChartLine /> {project.outcome}
                                </>
                            </p>
                        </Card>
                    ))}
                </ProjectGrid>
            </Section>

            <Section id="case-studies" className="case-studies">
                <div className="vertical-container">
                    <SectionTitle>Case Studies</SectionTitle>
                    {caseStudies.map((caseStudy) => (
                        <Card>
                            <h3>{caseStudy.title}</h3>
                            <div className="left-align">
                                <p>
                                    <b>Problem</b>
                                </p>
                                <p>{caseStudy.problem}</p>
                                <p>
                                    <b>Solution</b>
                                </p>
                                <p>{caseStudy.solution}</p>
                                <p>
                                    <b>Results</b>
                                </p>
                                <p>{caseStudy.results}</p>
                            </div>
                        </Card>
                    ))}
                </div>
            </Section>

            <Section id="services" className="services">
                <SectionTitle>Our Services</SectionTitle>
                <ProjectGrid>
                    <Card>
                        <CardIcon>
                            <img alt="" src={WebDevelopmentIcon} />
                        </CardIcon>
                        <h3>Web Development</h3>
                        <div className="service-examples" id="webExamples">
                            {projects[0].name}
                        </div>
                    </Card>
                    <Card>
                        <CardIcon>
                            <img alt="" src={MobileDevelopmentIcon} />
                        </CardIcon>
                        <h3>Mobile Development</h3>
                        <div className="service-examples" id="mobileExamples">
                            {projects[1].name}
                        </div>
                    </Card>
                    <Card>
                        <CardIcon>
                            <img alt="" src={EducationIcon} />
                        </CardIcon>
                        <h3>Coding Education</h3>
                        <div
                            className="service-examples"
                            id="educationExamples"
                        >
                            {projects[2].name}
                        </div>
                    </Card>
                    <Card>
                        <CardIcon>
                            <img alt="" src={SocialIcon} />
                        </CardIcon>
                        <h3>Other Services</h3>
                        <div className="service-examples" id="otherExamples">
                            Notary Services
                        </div>
                    </Card>
                </ProjectGrid>
            </Section>

            <Section id="stats" className="stats">
                <SectionTitle>Our Impact</SectionTitle>
                <ImpactGrid>
                    {stats.map((stat, index) => (
                        <StatCard
                            key={index}
                            value={stat.value}
                            label={stat.label}
                        />
                    ))}
                </ImpactGrid>
            </Section>

            <Section id="awards" className="awards">
                <div className="vertical-container">
                    <SectionTitle>Recognition</SectionTitle>
                    <Card>
                        {awards.map((award) => (
                            <div className="left-align">
                                <h3>{award.title}</h3>
                                <p>{award.description}</p>
                                <p>{award.year}</p>
                            </div>
                        ))}
                    </Card>
                </div>
            </Section>

            <Section id="testimonials" className="testimonials">
                <div className="vertical-container">
                    <SectionTitle>Client Testimonials</SectionTitle>
                    <Carousel
                        items={testimonials.map((testimonial) => ({
                            title: testimonial.quote,
                            description: [
                                testimonial.author,
                                testimonial.company,
                            ],
                        }))}
                        showButton={false}
                        useTitleParagraph={true}
                        useTitleCard={false}
                        className={'always-visible'}
                        cardContentClassName={'left-align'}
                    />
                </div>
            </Section>
        </MainWrapper>
    );
};

export default Portfolio;

import React from 'react';
import { Carousel } from '../carousel/Carousel';
import {
    Section,
    SectionTitle,
} from '../commonStyledComponents/CommonStyledComponents.style';

interface Testimonial {
    title: string;
    description: string[];
    image?: string;
}

export const Testimonials: React.FC<{ testimonials: Testimonial[] }> = ({
    testimonials,
}) => {
    return (
        <Section key="testimonials">
            <SectionTitle>Client Testimonials</SectionTitle>
            <p>See what our clients have to say about us</p>
            <Carousel
                items={testimonials}
                className="always-visible"
                showButton={false}
                useTitleCard={false}
            />
        </Section>
    );
};

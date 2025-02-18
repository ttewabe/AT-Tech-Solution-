import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

export const CarouselWrapper = styled.div`
    padding: 0 2rem;
    margin: 0 3rem;

    @media (max-width: 768px) {
        margin: 0 1.5rem;
    }

    @media (max-width: 480px) {
        margin: 0 0.8rem;
    }

    @media (max-width: 320px) {
        margin: 0;
    }
`;

export const CarouselStyled = styled(Slider)<{ className?: string }>`
    display: ${({ className }) =>
        className === 'always-visible' ? 'block' : 'none'};

    img {
        width: 100%;
        image-cover: contain;
    }

    @media (max-width: 1024px) {
        display: block;
    }
`;

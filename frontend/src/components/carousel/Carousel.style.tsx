import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

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

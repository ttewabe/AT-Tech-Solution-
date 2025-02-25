import styled from 'styled-components';

export const ServiceList = styled.ol`
    text-align: left;
    margin-top: 3rem;

    li {
        margin: 1.5rem 0;
    }

    @media (max-width: 1024px) {
        margin-top: 2rem;
    }

    @media (max-width: 720px) {
        margin-top: 1.5rem;

        li {
            margin: 0.5rem 0;
        }
    }

    @media (max-width: 480px) {
        margin-top: 0.5rem;
    }
`;

export const ImageContainer = styled.div`
    height: 30rem;
    overflow: hidden;
    position: relative;

    img {
        width: 100%;
        height: 100%;
        padding: 0 20px;
        object-fit: contain;
    }
`;

export const ImageContainerSmall = styled.div`
    width: 100%;
    height: 20rem;
    overflow: hidden;

    img {
        height: 100%;
        margin: 2rem 0;
        object-fit: contain;
    }
`;

import styled from 'styled-components';

export const MainWrapper = styled.div`
    width: 100%;
    padding: 4rem 0;
    min-height: 80dvh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f9f9f9;
`;

export const Section = styled.section`
    width: 70%;
    text-align: center;
    position: relative;
    margin-bottom: 1rem;

    .featured-projects {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 1024px) {
        width: 80%;
    }

    @media (max-width: 768px) {
        width: 90%;
    }
`;

export const SectionTitle = styled.h1`
    font-size: 2rem;
    margin-bottom: 0;
    color: #003366;

    @media (max-width: 1024px) {
        font-size: 1.8rem;
    }

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }

    @media (max-width: 480px) {
        font-size: 1rem;
    }
`;

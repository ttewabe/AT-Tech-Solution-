import styled from 'styled-components';

export const ProjectGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
    margin-top: 2rem;

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const ImpactGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
    margin-top: 2rem;

    .low-padding {
        padding: 2rem 0.5rem;
    }

    h1 {
        margin-top: 0;
        color: #003366;
    }

    @media (max-width: 875px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

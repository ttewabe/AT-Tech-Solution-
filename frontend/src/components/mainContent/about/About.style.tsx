import styled from 'styled-components';

export const SectionContentP = styled.p`
    font-size: 1.2rem;
    color: #333;
    text-align: center;
    width: fit-content;

    ul {
        margin-top: 0;
        text-align: left;
        padding-left: 3rem;
    }

    @media (max-width: 768px) {
        font-size: 1rem;
    }

    @media (max-width: 480px) {
        font-size: 0.8rem;
    }
`;

export const SectionContentDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 1.2rem;
    color: #333;

    ul {
        margin-top: 0;
        text-align: left;
        padding-left: 3rem;
    }

    @media (max-width: 768px) {
        font-size: 1rem;
    }

    @media (max-width: 480px) {
        font-size: 0.8rem;
    }
`;

export const ContactInfo = styled.div`
    font-size: 1.2rem;
    color: #333;

    ul {
        list-style: none;

        li {
            margin-bottom: 0.5rem;
        }
    }
`;

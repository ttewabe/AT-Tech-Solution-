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

    .vertical-container {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .horizontal-container.uneven.left-bigger {
        display: flex;
        flex-direction: row;
        gap: 1rem;

        .left {
            flex: 2;
        }
        .right {
            flex: 1;
        }
    }

    .horizontal-container.uneven.right-bigger {
        display: flex;
        flex-direction: row;
        gap: 1rem;

        .left {
            flex: 1;
        }
        .right {
            flex: 2;
        }
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

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    align-items: center;
    background: var(--darker);
    padding: 2rem 3.5rem 3rem 3.5rem;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    text-align: center;
    border: 1px solid #b8860b;
    position: relative;
    overflow: hidden;

    .title-card {
        margin-top: 0;
        padding-top: 1rem;
        padding-bottom: 1rem;
        min-height: 1rem;
    }

    .center-align {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .left-align {
        text-align: left;
        width: 100%;
    }

    img {
        max-width: 75%;
    }

    h4 {
        margin: 0;
        padding: 0;
    }

    h3 {
        margin: 0;
        padding: 0;
    }

    p {
        font-size: 14px;
        width: 100%;
    }

    .tag {
        display: inline-block;
        padding: 0.5rem 1rem;
        margin: 0.25rem;
        background: #dddddd;
        border-radius: 20px;
        font-size: 0.9rem;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .tag:hover {
        background: #eeeeee;
        transform: scale(1.05);
    }
`;

export const CardIcon = styled.div`
    width: 60px;
    height: 60px;
    text-align: center;
    padding: 10px;
    color: #444444;
    margin-bottom: 0.5rem;

    img {
        width: 100%;
        height: 100%;
    }
`;

export const CardLink = styled.div`
    position: absolute;
    bottom: 20px;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 1rem;
    cursor: pointer;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    background-color: #eeeeee;

    &:hover {
        scale: 1.05;
        transition: all 0.3s ease;
        background-color: #dddddd;
    }
`;

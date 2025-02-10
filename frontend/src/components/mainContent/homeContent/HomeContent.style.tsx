import styled from 'styled-components';

export const MainContent = styled.div`
    width: 100%;
    padding-bottom: 4rem;
    min-height: 80dvh;
    min-width: 320px;
`;

interface WallPaperProps {
    $backgroundimage: string;
}

export const WallPaper = styled.div<WallPaperProps>`
    height: 85dvh;
    background-color: #efefef;
    background-image: url(${(props) => props.$backgroundimage});
    background-size: cover;
    background-position: center;
`;

export const CompanyMoto = styled.div`
    width: 50%;
    position: absolute;
    top: 30%;
    left: 6%;

    h1 {
        font-weight: 900;
        font-size: 4rem;
        margin-top: 0;
    }

    p {
        font-size: 1.2rem;
        font-weight: 500;
    }

    @media (max-width: 1024px) {
        width: 60%;
        top: 30%;
        left: 6%;

        h1 {
            font-size: 3rem;
        }
    }

    @media (max-width: 768px) {
        width: 70%;
        top: 30%;
        left: 6%;

        h1 {
            font-size: 2.5rem;
        }
    }

    @media (max-width: 480px) {
        width: 80%;
        top: 30%;
        left: 5%;

        h1 {
            font-size: 2rem;
        }
    }
`;

export const AboutSection = styled.section`
    width: 70%;
    text-align: center;
    position: relative;
    left: 15%;
    margin-bottom: 4rem;

    .featured-projects {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 1024px) {
        width: 80%;
        left: 10%;
    }

    @media (max-width: 768px) {
        width: 90%;
        left: 5%;
    }
`;

export const WallPaperButtons = styled.div`
    display: flex;
    gap: 1rem;

    @media (max-width: 480px) {
        flex-direction: column;
    }
`;

export const CustomButton = styled.button`
    padding: 1rem 2rem;
    border-radius: 20px;
    border: none;
    background-color: #003366;
    color: #fff;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background-color: #000;
        color: #ffffff;
    }
`;

export const ServicesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: 2rem;

    @media (max-width: 1024px) {
        display: none;
    }
`;

export const ServiceCard = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    align-items: center;
    background: var(--darker);
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    text-align: center;
    border: 1px solid #b8860b;
    position: relative;
    overflow: hidden;
    padding-bottom: 4rem;

    .title-card {
        height: 1rem;
    }

    h4 {
        margin: 0;
    }

    p {
        font-size: 14px;
        width: 100%;
    }
`;

export const ServiceCardIcon = styled.div`
    width: 40px;
    height: 40px;
    text-align: center;
    padding: 10px;
    color: #444444;

    img {
        width: 100%;
        height: 100%;
    }
`;

export const ProjectLink = styled.div`
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

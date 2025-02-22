import styled from 'styled-components';

interface WallPaperProps {
    $backgroundimage: string;
}

export const WallPaper = styled.div<WallPaperProps>`
    width: 100%;
    min-height: 75dvh;
    background-color: #efefef;
    background-image: url(${(props) => props.$backgroundimage});
    background-size: cover;
    background-position: center;

    @media (max-width: 480px) {
        min-height: 80dvh;
    }

    @media (max-width: 400px) {
        min-height: 90dvh;
    }

    @media (max-width: 300px) {
        min-height: 100dvh;
    }
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

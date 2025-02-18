import styled from 'styled-components';

export const ContactWrapper = styled.div`
    width: 100%;
    padding: 4rem 0;
    min-height: 80dvh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f9f9f9;
`;

export const ContactTitle = styled.h1`
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: #003366;
`;

export const ContactForm = styled.form`
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    @media (max-width: 768px) {
        width: 80%;
    }

    @media (max-width: 480px) {
        width: 90%;
    }
`;

export const InputField = styled.input`
    padding: 1rem;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-size: 1rem;
`;

export const TextArea = styled.textarea`
    padding: 1rem;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-size: 1rem;
    resize: none;
`;

export const SubmitButton = styled.button`
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

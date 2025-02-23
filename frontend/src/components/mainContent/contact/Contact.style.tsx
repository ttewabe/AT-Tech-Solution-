import styled from 'styled-components';

export const ContactWrapper = styled.div`
    margin: 20px;
    padding: 3px 0px;
`;

export const ContactTitle = styled.h1`
    text-align: center;
    width: 50%;
    margin: 0 auto;
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #003366;
`;

export const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    width: 50%;
    margin: 0 auto;
    background: var(--darker);
    @media (max-width: 768px) {
        width: 80%;
    }
    @media (max-width: 480px) {
        width: 90%;
    }
    > div > span {
        display: flex;
        flex-direction: column;
        font-size: 14px;
        > input {
         hight: 30px;
         left:10px;
            border-radius: 5px;
            border: 0.1px solid #b8860b;
            padding: 1rem;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3)
            font-size: 1rem;
        }
            >label {
            padding: 5px;
                font-size: 14px;
                color: #333;
            }
        }
`;

export const ErrorMessage = styled.div`
    padding: 5px;
    color: red;
    font-size: 12px;
    margin-top: 1px;
`;

export const TextArea = styled.textarea`
    left: 5px;
    padding: 1rem;
    border-radius: 10px;
    border: 0.1px solid #b8860b;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3)
    font-size: 1rem;
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

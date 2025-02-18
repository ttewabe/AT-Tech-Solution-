import styled from 'styled-components';

export const FooterContainer = styled.footer`
    color: #fff;
    position: relative;
    bottom: 0;
    width: 100%;
    overflow: hidden;
`;

export const FooterContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const FooterMain = styled.div`
    display: flex;
    min-height: 15rem;
    padding-bottom: 30px;
    background-color: #eeeeee;
    width: 100%;
    padding-right: 1.5rem;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;

    .one-liner {
        display: flex;
        flex-direction: row;
        justify-content: left;
        gap: 10rem;
        width: 100%;
    }

    @media (max-width: 800px) {
        .one-liner {
            padding: 0 1rem;
            justify-content: left;
            gap: 3rem;
        }
    }

    @media (max-width: 600px) {
        display: flex;
        flex-direction: column;

        .one-liner {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding: 0 3rem;
        }
    }
`;

export const FooterElements = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #000;

    h4 {
        margin-bottom: 0;
        margin-left: 25px;
    }

    ul {
        list-style: none;

        li {
            margin-bottom: 5px;
            cursor: pointer;
        }

        li:hover {
            scale: 1.05;
        }
    }

    input {
        padding: 10px;
        width: 250px;
        border: 0.2px solid #999;
        border-radius: 5px;
        margin-right: 10px;
    }

    button {
        padding: 10px;
        border: 0.2px solid #999;
        background-color: #003366;
        color: #fff;
        border-radius: 5px;
        width: 120px;

        &:hover {
            background-color: #114477;
            scale: 1.05;
        }
    }

    .subscribe {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    @media (max-width: 800px) {
        .subscribe {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
    }

    @media (max-width: 600px) {
        .subscribe {
            display: flex;
            flex-direction: row;
            align-items: center;
        }
    }

    @media (max-width: 400px) {
        .subscribe {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
`;

export const FooterBottom = styled.div`
    background-color: #333;
    display: flex;
    flex-direction: row
    padding: 0 1rem;
    font-size: 12px;
    margin-top: 0;
    width: 100%;
    justify-content: flex-end;
    box-sizing: border-box;
`;

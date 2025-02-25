import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #003366;
    color: white;
    padding: 0.4rem 0.8rem 1.2rem 1.2rem;
    overflow-x: hidden;
`;

export const HeaderMainLine = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    padding-right: 20px;
    font-family: Arial, sans-serif;
    gap: 30px;

    @media (max-width: 768px) {
        align-items: flex-start;
    }
`;

export const Logo = styled.div`
    font-size: 24px;
    font-weight: bold;
    min-width: max-content;
    padding-top: 10px;
`;

export const HeaderDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    gap: 15px;
`;

export const HeaderNavitems = styled.div`
    display: flex;
    gap: 80px;
    justify-content: space-between;
    margin-right: 20%;

    span {
        cursor: pointer;
        min-width: max-content;

        a {
            text-decoration: none;
            color: white;
        }

        &.active {
            font-weight: bold;
            border-bottom: 2px solid white;
        }
    }

    @media (max-width: 1024px) {
        gap: 60px;
        margin-right: 10%;
    }

    @media (max-width: 768px) {
        display: none;
    }
`;

export const ContactInfo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    gap: 20px;
    margin-left: 5%;
    width: 100%;

    span {
        font-size: 12px;
    }

    @media (max-width: 550px) {
        flex-direction: column;
        margin-left: 10px;
        align-items: flex-start;
        gap: 5px;
    }
`;

export const HamburgerContainer = styled.div`
    position: relative;
`;

export const HamburgerButton = styled.button`
    background: none;
    border: none;
    color: white;
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
    padding-top: 10px;
`;

export const DropdownLogoContainer = styled.div`
    display: flex;
    justify-content: center;
    padding-right: 1rem;
    margin: 0 2rem 0.2rem 0;
`;

export const OneLineContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;

export const CloseButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #aa2222;
    text-align: center;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    border: solid 1px #a2a2a2;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
    cursor: pointer;
`;

export const DropdownMenuContent = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding: 0 1.8rem;

    /* Hide scrollbar for Webkit browsers (Chrome, Safari) */
    &::-webkit-scrollbar {
        display: none;
    }

    /* Hide scrollbar for IE, Edge, and Firefox */
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
`;

export const DropdownContentContainer = styled.div`
    .slide-drawer-nav {
        display: none;
    }

    .services-nav {
        display: block;
    }

    @media (max-width: 768px) {
        .slide-drawer-nav {
            display: block;
        }

        .services-nav {
            display: none;
        }
    }
`;

export const DropdownList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const DropdownListItem = styled.li`
    padding: 10px 20px;
    margin: 0.8rem 0;
    cursor: pointer;
    background-color: #efefef;
    border-radius: 5px;

    &:hover {
        background-color: #e8e5e5;
        box-shadow: 0.1rem 0.3rem 0.3rem rgba(0, 0, 0, 0.15);
    }
`;

export const DropdownListItemDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ContactList = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5px;
    margin: 1rem 0;
    border 1px solid #a2a2a2;
    background-color: #efefef;
    border-radius: 4px;
    padding-bottom: 2rem;
    box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15);
`;

export const SocialMediaLogos = styled.div`
    display: flex;
    width: 100%;
    box-sizing: border-box;
    flex-direction: row;
    gap: 0.3rem;
    padding: 0.5rem;
    justify-content: space-between;
    margin-bottom: 1.5rem;
`;

export const SocialMediaLogoItem = styled.div`
    display: flex;
    padding: 10px;
    border-radius: 4px;
    text-align: center;
    border: 2px solid #cdcdcd;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
`;

export const ContactListContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 25px;
`;

export const DropdownMenu = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    color: black;
    background: white;
    box-sizing: border-box;
    border: 1px solid #c9c9c9;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
    width: 350px;
    height: 100vh;
    z-index: 1000;
    padding: 0.5rem 0;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
    overflow-y: auto;

    /* Hide scrollbar for Webkit browsers (Chrome, Safari) */
    &::-webkit-scrollbar {
        display: none;
    }

    /* Hide scrollbar for IE, Edge, and Firefox */
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
`;

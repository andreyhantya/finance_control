import styled from 'styled-components';

export const StyledHeader = styled.header`
    padding: 5px;
    background-color: #fff;
`;

export const StyledMenu = styled.ul`
    width: 800px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
`;

export const MenuItem = styled.li`
    list-style: none;
    padding: 20px;

    & a {
        text-decoration: none;
        font-family: 'Roboto', sans-serif;
        text-transform: uppercase;
        font-weight: bold;
        color: black;
    }
`;

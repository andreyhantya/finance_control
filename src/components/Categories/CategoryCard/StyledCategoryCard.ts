import styled from 'styled-components';

export const CardWrapper = styled.div`
    width: 80px;
    height: 80px;
    padding: 10px;
    background-color: #f1f1f1;
    border: 1px solid black;
    border-radius: 5px;
    text-align: center;
    font-weight: bold;
    text-transform: capitalize;
    color: orange;
    cursor: pointer;
    &:hover {
        background-color: lightgray;
    }
`;

export const Image = styled.img`
    width: 50px;
    height: 50px;
`;

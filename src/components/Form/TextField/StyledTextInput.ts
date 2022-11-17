import styled from 'styled-components';
import TextField from '@mui/material/TextField';

export const StyledInput = styled(TextField)`
    width: 100%;

    & .MuiInputBase-input {
        background-color: #fff;
    }
`;

export const InputWrapper = styled.div`
    margin-top: 10px;
`;

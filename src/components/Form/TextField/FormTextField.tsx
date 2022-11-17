import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { StyledInput, InputWrapper } from './StyledTextInput';

interface IFormTextFieldProps {
    placeholder: string;
    onChange: (e: React.ChangeEvent<any>) => void;
    onBlur: (e: React.FocusEvent<any>) => void;
    id: string;
    variant?: 'outlined' | 'filled' | 'standard';
    width?: string;
    margin?: number;
    autoComplete?: 'on' | 'off';
}

const FormTextField = ({
    variant = 'outlined',
    width = '200px',
    margin = 2,
    placeholder,
    autoComplete = 'off',
    onChange,
    id,
}: IFormTextFieldProps) => {
    return (
        // <Box
        //     component="form"
        //     sx={{
        //         '& > :not(style)': { m: margin, width: width },
        //     }}
        //     noValidate
        //     autoComplete={autoComplete}>
        <InputWrapper>
            <StyledInput id={id} onChange={onChange} label={placeholder} variant={variant} />
        </InputWrapper>
        // </Box>
    );
};

export default FormTextField;

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

interface IFormTextFieldProps {
    placeholder: string;
    onChange: () => React.ChangeEvent<HTMLInputElement>;
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
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: margin, width: width },
            }}
            noValidate
            autoComplete={autoComplete}>
            <TextField
                id={id}
                onChange={(e) => onChange(e)}
                label={placeholder}
                variant={variant}
            />
        </Box>
    );
};

export default FormTextField;

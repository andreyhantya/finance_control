import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import FieldWrapper from '../FieldWrapper/FieldWrapper';

interface IButtonProps {
    value: string;
    handlerClick?: () => void;
    variant?: 'text' | 'contained' | 'outlined';
    spacing?: number;
    direction?: 'row' | 'column';
    color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
    type: 'button' | 'submit';
}

const FormButton = ({
    variant = 'contained',
    spacing = 2,
    direction = 'row',
    color,
    value,
    handlerClick,
    type,
}: IButtonProps) => {
    return (
        <FieldWrapper>
            <Stack spacing={spacing} direction={direction}>
                <Button type={type} variant={variant} color={color} onClick={handlerClick}>
                    {value}
                </Button>
            </Stack>
        </FieldWrapper>
    );
};

export default FormButton;

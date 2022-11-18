import * as React from 'react';
import { StyledInput, InputWrapper } from './StyledTextInput';

interface IFormTextFieldProps {
    placeholder: string;
    onChange: (e: React.ChangeEvent<any>) => void;
    handleBlur: (e: React.FocusEvent<any>) => void;
    id: string;
    errorData: boolean;
    name: string;
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
    name,
    id,
    handleBlur,
    errorData,
}: IFormTextFieldProps) => {
    return (
        <InputWrapper>
            <StyledInput
                id={id}
                error={!!errorData}
                onChange={onChange}
                label={errorData ? errorData : placeholder}
                name={name}
                value={null}
                variant={variant}
                onBlur={handleBlur}
            />
        </InputWrapper>
    );
};

export default React.memo(FormTextField);

import React from 'react';
import { StyledFieldWrapper } from './StyledInputWrapper';

const FieldWrapper = ({ children, marginTop = '10' }: React.ReactNode) => {
    return <StyledFieldWrapper>{children}</StyledFieldWrapper>;
};

export default FieldWrapper;

import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Formik, Form, Field } from 'formik';
import FieldWrapper from '../FieldWrapper/FieldWrapper';

interface IItem {
    value: string;
    label: string;
    id: number;
}

interface IFormSelectProps {
    label: string;
    minWudth?: number;
    margin?: number;
    size?: 'small' | 'medium';
    selectItemsData: IItem[];
    children: any;
    field: any;
    form: any;
}

interface ICustomSelectProps {
    children: React.ReactNode;
    name: string;
    id: string;
}

const FormSelect = ({ field, form, children }: IFormSelectProps) => {
    const { name, value } = field;
    const { setFieldValue } = form;

    return (
        <Select
            name={name}
            value={value}
            placeholder="Выберите цвет"
            onChange={(e) => {
                setFieldValue(name, e.target.value);
            }}>
            {children}
        </Select>
    );
};

const CustomSelect = ({ children, name, id }: ICustomSelectProps) => {
    return (
        <FieldWrapper>
            <FormControl fullWidth={true}>
                <Field name={name} id={id} component={FormSelect}>
                    {children}
                </Field>
            </FormControl>
        </FieldWrapper>
    );
};

export default CustomSelect;

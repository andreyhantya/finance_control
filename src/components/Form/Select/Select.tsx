import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Formik, Form, Field } from "formik";

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
    field: any
    form: any
}

const FormSelect = ({
    label,
    field,
    form,
    selectItemsData,
    minWudth = 110,
    children,
    margin = 1,
    size = 'medium',
}: IFormSelectProps) => {
  
    
    const { name, value } = field;
    const { setFieldValue } = form;
    return (
      <Select
        name={name}
        value={value}
        placeholder='Выберите цвет'
        onChange={e => {
          setFieldValue(name, e.target.value);
        }}
      >
        {children}
      </Select>
    );
};

export default FormSelect;

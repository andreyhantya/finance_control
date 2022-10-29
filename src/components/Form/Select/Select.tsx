import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

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
}

const FormSelect = ({
    label,
    selectItemsData,
    minWudth = 110,
    margin = 1,
    size = 'small',
}: IFormSelectProps) => {
    const [SelectedValue, setSelectedValue] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setSelectedValue(event.target.value);
    };

    return (
        <FormControl sx={{ m: margin, minWidth: minWudth }} size={size}>
            <InputLabel id="demo-select-small">{label}</InputLabel>
            <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={SelectedValue}
                label={label}
                onChange={handleChange}>
                {selectItemsData.map((elem) => (
                    <MenuItem key={elem.id} value={elem.value}>
                        {elem.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default FormSelect;

interface ICategories {
    value: string;
    label: string;
    id: number;
}

export const categories: ICategories[] = [
    {
        value: 'goods',
        label: 'goods',
        id: 1,
    },
    {
        value: 'entertainment',
        label: 'entertainment',
        id: 2,
    },
];

export const currencies = [
    {
        value: 'USD',
        label: 'USD',
        id: 1,
    },
    {
        value: 'EUR',
        label: 'EUR',
        id: 2,
    },
];

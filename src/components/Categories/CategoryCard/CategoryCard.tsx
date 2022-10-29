import React from 'react';
import present from '../../../assets/images/categories/present.png';
import { CardWrapper, Image } from './StyledCategoryCard';

interface CategoryCardProps {
    image: string;
    name: string;
    id: number;
}

const CategoryCard = () => {
    console.log(present, 'present');
    

    return (
        <CardWrapper>
            <Image src={present} />
            <div>asdasd</div>
        </CardWrapper>
    );
};

export default CategoryCard;

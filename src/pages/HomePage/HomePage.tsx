import { memo } from 'react';

import { FoodCard } from 'components/FoodCard';
import { FoodFilterHeader } from 'components/FoodFilterHeader';

import styles from './HomePage.module.scss';

export const HomePage = memo(() => {
    const { wrap, foodCards } = styles;

    const info = [
        { name: 'all' },
        { name: 'vegetarian' },
        { name: 'fast food' },
        { name: 'asian food' },
        { name: 'drink' },
    ];

    return (
        <div className={wrap}>
            <FoodFilterHeader info={info} attribute="Quality" />
            <div className={foodCards}>
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
            </div>
            
        </div>
    );
});

HomePage.displayName = 'HomePage';

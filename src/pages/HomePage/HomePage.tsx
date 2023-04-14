import { memo } from 'react';
import { useSelector } from 'react-redux';

import { FoodCard } from 'components/FoodCard';
import { FoodFilterHeader } from 'components/FoodFilterHeader';
import { getAllMeals } from 'store';

import styles from './HomePage.module.scss';

export const HomePage = memo(() => {
    const { wrap, foodCards } = styles;
    const meals = useSelector(getAllMeals);

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
                {meals &&
                    meals.map(meal => (
                        <FoodCard
                            key={meal.id}
                            mealName={meal.title}
                            mealTaste={meal.taste}
                            mealPrice={meal.price}
                            mealPhoto={meal.img}
                        />
                    ))}
            </div>
        </div>
    );
});

HomePage.displayName = 'HomePage';

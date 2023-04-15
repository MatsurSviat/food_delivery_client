import { memo } from 'react';
import { useSelector } from 'react-redux';

import { FoodCard } from 'components/FoodCard';
import { FoodFilterHeader } from 'components/FoodFilterHeader';
import { category } from 'shared/constants/meal';
import { getAllMeals, searchQuery, sortMeals } from 'store';

import styles from './HomePage.module.scss';

export const HomePage = memo(() => {
    const { wrap, foodCards } = styles;
    const meals = useSelector(getAllMeals);
    const quary = useSelector(searchQuery);
    const sort = useSelector(sortMeals);

    const mealsRender = (info: string) => {
        switch (info) {
            case 'all':
                return meals;
            case 'vegetarian':
                return meals.filter(meal => meal.category === 'vegetarian');
            case 'fast food':
                return meals.filter(meal => meal.category === 'fast food');
            case 'asian food':
                return meals.filter(meal => meal.category === 'asian food');
            case 'fish':
                return meals.filter(meal => meal.category === 'fish');

            default:
                return meals;
        }
    };

    const searchedMeals = mealsRender(sort).filter(meal => meal.title.toLowerCase().includes(quary.toLowerCase()));

    return (
        <div className={wrap}>
            <FoodFilterHeader info={category} attribute="Quality" />
            <div className={foodCards}>
                {quary.length === 0
                    ? mealsRender(sort).map(meal => (
                        <FoodCard
                            key={meal.id}
                            mealName={meal.title}
                            mealTaste={meal.taste}
                            mealPrice={meal.price}
                            mealPhoto={meal.img}
                            mealId={meal.id}
                            mealDescription={meal.description}
                            mealCategory={meal.category}
                            mealCookTime={meal.cookTime}
                            mealRating={meal.rating}
                        />
                    ))
                    : searchedMeals.map(meal => (
                        <FoodCard
                            key={meal.id}
                            mealName={meal.title}
                            mealTaste={meal.taste}
                            mealPrice={meal.price}
                            mealPhoto={meal.img}
                            mealId={meal.id}
                            mealDescription={meal.description}
                            mealCategory={meal.category}
                            mealCookTime={meal.cookTime}
                            mealRating={meal.rating}
                        />
                    ))}
            </div>
        </div>
    );
});

HomePage.displayName = 'HomePage';

import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Coupon } from 'components/Coupon';
import { FoodCard } from 'components/FoodCard';
import { FoodFilterHeader } from 'components/FoodFilterHeader';
import { Button } from 'shared/ui/Button';
import { fetchFavoriteMeals, sortMealsByTaste, useAppDispatch } from 'store';
import { getFavoriteMeals } from 'store/selectors/user.selectors';

import styles from './FavoritePage.module.scss';

export const FavoritePage = memo(() => {
    const { wrap, coupon, favorite, foodCards } = styles;

    const taste = [{ name: 'all' }, { name: 'spicy' }, { name: 'salty' }, { name: 'sour' }, { name: 'umami' }];

    const dispatch = useAppDispatch();

    const favoriteMeals = useSelector(getFavoriteMeals);
    // const quary = useSelector(searchQuery);
    const sort = useSelector(sortMealsByTaste);

    useEffect(() => {
        dispatch(fetchFavoriteMeals());
    }, [dispatch]);

    const mealsRender = (info: string) => {
        switch (info) {
            case 'all':
                return favoriteMeals;
            case 'spicy':
                return favoriteMeals?.filter(meal => meal.taste === 'spicy');
            case 'salty':
                return favoriteMeals?.filter(meal => meal.taste === 'salty');
            case 'sour':
                return favoriteMeals?.filter(meal => meal.taste === 'sour');
            case 'umami':
                return favoriteMeals?.filter(meal => meal.taste === 'umami');

            default:
                return favoriteMeals;
        }
    };

    // const searchedMeals = favoriteMeals?.filter(meal => (meal.title || '').toLowerCase().includes(quary.toLowerCase()));

    return (
        <div className={wrap}>
            <FoodFilterHeader info={taste} attribute="Favorite" />
            <div className={coupon}>
                <Coupon />
            </div>
            <div className={favorite}>
                <p className={styles['favorite-title']}>Your Favorite</p>
                <Button color="white" outlined>
                    See more
                </Button>
            </div>
            <div className={foodCards}>
                {mealsRender(sort)?.map(meal => (
                    <FoodCard
                        isFavorite={!!sort}
                        key={meal.id}
                        mealId={meal.id}
                        mealName={meal.title}
                        mealTaste={meal.taste}
                        mealPrice={meal.price}
                        mealPhoto={meal.img}
                        mealDescription={meal.description}
                        mealCategory={meal.category}
                        mealCookTime={meal.cookTime}
                        mealRating={meal.rating}
                    />
                ))}
                {/* {quary.length === 0
                    ? mealsRender(sort)?.map(meal => (
                        <FoodCard
                            key={meal.id}
                            mealId={meal.id}
                            mealName={meal.title}
                            mealTaste={meal.taste}
                            mealPrice={meal.price}
                            mealPhoto={meal.img}
                            mealDescription={meal.description}
                            mealCategory={meal.category}
                            mealCookTime={meal.cookTime}
                            mealRating={meal.rating}
                        />
                    ))
                    : searchedMeals?.map(meal => (
                        <div key={meal.id}>
                            <FoodCard
                                key={meal.id}
                                mealId={meal.id}
                                mealName={meal.title}
                                mealTaste={meal.taste}
                                mealPrice={meal.price}
                                mealPhoto={meal.img}
                                mealDescription={meal.description}
                                mealCategory={meal.category}
                                mealCookTime={meal.cookTime}
                                mealRating={meal.rating}
                            />
                        </div>
                    ))} */}
            </div>
        </div>
    );
});

FavoritePage.displayName = 'FavoritePage';

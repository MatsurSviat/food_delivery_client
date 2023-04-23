import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Coupon } from 'components/Coupon';
import { FoodCard } from 'components/FoodCard';
import { FoodFilterHeader } from 'components/FoodFilterHeader';
import { Button } from 'shared/ui/Button';
import { fetchFavoriteMeals, searchQuery, sortMeals, useAppDispatch } from 'store';
import { getFavoriteMeals } from 'store/selectors/user.selectors';

import styles from './FavoritePage.module.scss';

export const FavoritePage = memo(() => {
    const { wrap, coupon, favorite, foodCards } = styles;

    const taste = [{ name: 'all' }, { name: 'spicy' }, { name: 'salty' }, { name: 'sour' }, { name: 'umami' }];

    const dispatch = useAppDispatch();

    const favoriteMeals = useSelector(getFavoriteMeals);
    const quary = useSelector(searchQuery);
    const sort = useSelector(sortMeals);

    useEffect(() => {
        dispatch(fetchFavoriteMeals());
    }, [dispatch]);

    const mealsRenderSort = (info: string) => {
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

    const searchedMeals = favoriteMeals?.filter(meal =>
        (meal?.title || '').toLowerCase().includes(quary.toLowerCase()),
    );

    const renderMeals = () => {
        if (favoriteMeals && favoriteMeals.length === 0) {
            return <p>You do not have any favorite meals</p>;
        }

        if (quary.length === 0) {
            return mealsRenderSort(sort)?.map(meal => (
                <FoodCard
                    isFavorite={Boolean(favoriteMeals?.find(item => item?.id === meal?.id))}
                    key={meal?.id}
                    meal={meal}
                />
            ));
        }

        if (searchedMeals) {
            return searchedMeals?.map(meal => (
                <div key={meal?.id}>
                    <FoodCard
                        isFavorite={Boolean(favoriteMeals?.find(item => item?.id === meal?.id))}
                        key={meal?.id}
                        meal={meal}
                    />
                </div>
            ));
        }

        return null;
    };

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
            <div className={foodCards}>{renderMeals()}</div>
        </div>
    );
});

FavoritePage.displayName = 'FavoritePage';

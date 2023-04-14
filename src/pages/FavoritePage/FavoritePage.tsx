import { memo } from 'react';

import { Coupon } from 'components/Coupon';
// import { FoodCard } from 'components/FoodCard';
import { FoodFilterHeader } from 'components/FoodFilterHeader';
import { Button } from 'shared/ui/Button';

import styles from './FavoritePage.module.scss';

export const FavoritePage = memo(() => {
    const { wrap, coupon, favorite, foodCards } = styles;

    const info = [{ name: 'all' }, { name: 'spicy' }, { name: 'salty' }, { name: 'sour' }, { name: 'umami' }];

    return (
        <div className={wrap}>
            <FoodFilterHeader info={info} attribute="Favorite" />
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
                {/* <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard /> */}
            </div>
        </div>
    );
});

FavoritePage.displayName = 'FavoritePage';

import { memo } from 'react';

import likeImage from 'shared/assets/icons/favorite.svg';
import { Button } from 'shared/ui/Button';
import { Icon } from 'shared/ui/Icon';
import { modalActions, useAppDispatch } from 'store';

import styles from './FoodCard.module.scss';

interface IFoodCard {
    mealName: string;
    mealTaste: string;
    mealPrice: number;
    mealPhoto: string;
}

export const FoodCard = memo(({ mealName, mealTaste, mealPrice, mealPhoto }: IFoodCard) => {
    const { wrap, imageContainer, foodImg, likeImg, textContainer, title, subtitle, price, dollar, addButtonCont } =
        styles;

    const dispatch = useAppDispatch();

    return (
        <div className={wrap} onClick={() => dispatch(modalActions.openModal())}>
            <div className={imageContainer}>
                <Icon src={`${process.env.REACT_APP_API_URL}/${mealPhoto}`} alt="foodImg" className={foodImg} />
                <Button square>
                    <Icon src={likeImage} alt="likeImg" className={likeImg} />
                </Button>
            </div>
            <div className={textContainer}>
                <p className={title}>{mealName}</p>
                <p className={subtitle}>
                    `${mealTaste} ${mealName}`
                </p>
                <p className={price}>
                    <span className={dollar}>$</span>
                    {mealPrice}
                </p>
                <div className={addButtonCont}>
                    <Button wave>Add to card</Button>
                </div>
            </div>
        </div>
    );
});

FoodCard.displayName = 'FoodCard';

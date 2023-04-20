/* eslint-disable @typescript-eslint/indent */
import { memo, useCallback } from 'react';

import { ReactComponent as LikeImage } from 'shared/assets/icons/favorite.svg';
import { ReactComponent as LikeImageRed } from 'shared/assets/icons/favorite_red.svg';
import { Button } from 'shared/ui/Button';
import { Icon } from 'shared/ui/Icon';
import { addFavoriteMeal, mealActions, modalActions, removeFavoriteMeal, useAppDispatch } from 'store';

import styles from './FoodCard.module.scss';

interface IFoodCard {
    mealId: string;
    mealName: string;
    mealTaste: string;
    mealPrice: number;
    mealPhoto: string;
    mealDescription: string;
    mealCategory: string;
    mealCookTime: number;
    mealRating: number;
    isFavorite: boolean;
}

export const FoodCard = memo(
    ({
        mealId,
        mealName,
        mealTaste,
        mealPrice,
        mealPhoto,
        mealDescription,
        mealCategory,
        mealCookTime,
        mealRating,
        isFavorite,
    }: IFoodCard) => {
        const { wrap, imageContainer, foodImg, likeImg, textContainer, title, subtitle, price, dollar, addButtonCont } =
            styles;

        const dispatch = useAppDispatch();

        const handleFavoriteClick = useCallback(() => {
            if (isFavorite) {
                dispatch(removeFavoriteMeal(mealId));
            } else {
                dispatch(addFavoriteMeal(mealId));
            }
        }, [dispatch, mealId, isFavorite]);

        return (
            <div
                className={wrap}
                onClick={() => {
                    dispatch(modalActions.openModal());
                    dispatch(
                        mealActions.setCurrentMeal({
                            currentImg: mealPhoto,
                            currentTitle: mealName,
                            currentDescription: mealDescription,
                            currentPrice: mealPrice,
                            currentTaste: mealTaste,
                            currentCategory: mealCategory,
                            currentCookTime: mealCookTime,
                            currentRating: mealRating,
                        }),
                    );
                }}
            >
                <div className={imageContainer}>
                    <Icon src={`${process.env.REACT_APP_API_URL}/${mealPhoto}`} alt="foodImg" className={foodImg} />
                    <div onClick={e => e.stopPropagation()}>
                        <Button square onClick={handleFavoriteClick}>
                            {isFavorite ? <LikeImageRed className={likeImg} /> : <LikeImage className={likeImg} />}
                        </Button>
                    </div>
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
                    <div className={addButtonCont} onClick={e => e.stopPropagation()}>
                        <Button wave>Add to card</Button>
                    </div>
                </div>
            </div>
        );
    },
);

FoodCard.displayName = 'FoodCard';

/* eslint-disable @typescript-eslint/indent */
import { memo, useCallback } from 'react';
import type { IMeal } from 'store/types/meal';

import { ReactComponent as LikeImage } from 'shared/assets/icons/favorite.svg';
import { ReactComponent as LikeImageRed } from 'shared/assets/icons/favorite_red.svg';
import { Button } from 'shared/ui/Button';
import { Icon } from 'shared/ui/Icon';
import { addFavoriteMeal, mealActions, modalActions, orderActions, removeFavoriteMeal, useAppDispatch } from 'store';

import styles from './FoodCard.module.scss';

interface IMealFoodCard {
    meal: IMeal;
    isFavorite: boolean;
}

export const FoodCard = memo(({ meal, isFavorite }: IMealFoodCard) => {
    const {
        wrap,
        imageContainer,
        foodImg,
        likeImg,
        textContainer,
        titleMeal,
        subtitle,
        priceMeal,
        dollar,
        addButtonCont,
    } = styles;

    const { id, img, title, description, price, taste, category, cookTime, rating } = meal;

    const dispatch = useAppDispatch();

    const handleFavoriteClick = useCallback(() => {
        if (isFavorite) {
            dispatch(removeFavoriteMeal(id));
        } else {
            dispatch(addFavoriteMeal(id));
        }
    }, [dispatch, id, isFavorite]);

    const addToCardHandleClick = (value: IMeal) => {
        dispatch(orderActions.addToOrder(value));
    };

    return (
        <div
            className={wrap}
            onClick={() => {
                dispatch(modalActions.openModal());
                dispatch(
                    mealActions.setCurrentMeal({
                        currentImg: img,
                        currentTitle: title,
                        currentDescription: description,
                        currentPrice: price,
                        currentTaste: taste,
                        currentCategory: category,
                        currentCookTime: cookTime,
                        currentRating: rating,
                    }),
                );
            }}
        >
            <div className={imageContainer}>
                <Icon src={`${process.env.REACT_APP_API_URL}/${img}`} alt="foodImg" className={foodImg} />
                <div onClick={e => e.stopPropagation()}>
                    <Button square onClick={handleFavoriteClick}>
                        {isFavorite ? <LikeImageRed className={likeImg} /> : <LikeImage className={likeImg} />}
                    </Button>
                </div>
            </div>
            <div className={textContainer}>
                <p className={titleMeal}>{title}</p>
                <p className={subtitle}>
                    `${taste} ${title}`
                </p>
                <p className={priceMeal}>
                    <span className={dollar}>$</span>
                    {price}
                </p>
                <div className={addButtonCont} onClick={e => e.stopPropagation()}>
                    <Button wave onClick={() => addToCardHandleClick(meal)}>
                        Add to card
                    </Button>
                </div>
            </div>
        </div>
    );
});

FoodCard.displayName = 'FoodCard';

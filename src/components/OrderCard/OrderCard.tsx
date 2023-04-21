import { memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import type { IItems } from 'store/types/order';

import { Button } from 'shared/ui/Button';
import { Icon } from 'shared/ui/Icon';
import { orderActions } from 'store';

import styles from './OrderCard.module.scss';

export const OrderCard = memo((meal: IItems) => {
    const { wrap, titleMeal, subtitle, priceMeal, dollar } = styles;
    const { img, title, price, taste, count } = meal;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(orderActions.getTotal());
    }, [dispatch, meal]);

    const increaseOrderHandleClick = (value: IItems) => {
        dispatch(orderActions.addToOrder(value));
    };

    const decreaseOrderHandleClick = (value: IItems) => {
        dispatch(orderActions.decreaseOrder(value));
    };

    return (
        <div className={wrap}>
            <div className={styles['image-container']}>
                <Icon src={`${process.env.REACT_APP_API_URL}/${img}`} alt="foodImg" className={styles['food-img']} />
            </div>
            <div className={styles['text-container']}>
                <p className={titleMeal}>{title}</p>
                <p className={subtitle}>
                    {taste} {title.toLowerCase()}
                </p>
                <p className={priceMeal}>
                    <span className={dollar}>$</span>
                    {price}
                </p>
            </div>
            <div className={styles['quantity-container']}>
                <Button size="xxxs" onClick={() => decreaseOrderHandleClick(meal)}>
                    -
                </Button>
                <p>{count}</p>
                <Button size="xxxs" onClick={() => increaseOrderHandleClick(meal)}>
                    +
                </Button>
            </div>
        </div>
    );
});

OrderCard.displayName = 'OrderCard';

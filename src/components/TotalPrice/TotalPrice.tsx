import { memo } from 'react';
import { useSelector } from 'react-redux';

import { orderItems, totalPrice } from 'store';

import styles from './TotalPrice.module.scss';

export const TotalPrice = memo(() => {
    const { wrap, subtotal, total, price } = styles;

    const totalAmount = useSelector(totalPrice);
    const orderedMeals = useSelector(orderItems);

    return (
        <div className={wrap}>
            <div className={subtotal}>
                <p>Subtotal</p>
                <p>${orderedMeals.length !== 0 ? totalAmount : 0}</p>
            </div>
            <div className={subtotal}>
                <p>Delivery</p>
                <p>Free</p>
            </div>
            <div className={styles['total-wrap']}>
                <p className={total}>Total</p>
                <p className={price}>${orderedMeals.length !== 0 ? totalAmount : 0}</p>
            </div>
        </div>
    );
});

TotalPrice.displayName = 'TotalPrice';

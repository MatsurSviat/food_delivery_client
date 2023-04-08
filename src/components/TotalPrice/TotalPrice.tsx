import { memo } from 'react';

import styles from './TotalPrice.module.scss';

export const TotalPrice = memo(() => {
    const { wrap, subtotal, total, price } = styles;

    return (
        <div className={wrap}>
            <div className={subtotal}>
                <p>Subtotal</p>
                <p>$15.00</p>
            </div>
            <div className={subtotal}>
                <p>Delivery</p>
                <p>Free</p>
            </div>
            <div className={styles['total-wrap']}>
                <p className={total}>Total</p>
                <p className={price}>$15.00</p>
            </div>
        </div>
    );
});

TotalPrice.displayName = 'TotalPrice';

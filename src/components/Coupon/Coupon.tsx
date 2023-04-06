import { memo } from 'react';

import ShoppingIcon from 'shared/assets/icons/image_shopping_app.svg';
import { Button } from 'shared/ui/Button';
import { Icon } from 'shared/ui/Icon';

import styles from './Coupon.module.scss';

export const Coupon = memo(() => {
    const { wrap, title, subtitle, button } = styles;

    return (
        <div className={wrap}>
            <Icon src={ShoppingIcon} />
            <div className={styles['info-btn']}>
                <p className={title}>Free delivery</p>
                <p className={subtitle}>May 10 - June 21</p>
                <Button size="s" color="yellow" className={button}>
                    Order now
                </Button>
            </div>
        </div>
    );
});

Coupon.displayName = 'Coupon';

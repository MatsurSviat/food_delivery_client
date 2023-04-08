import { memo } from 'react';

import image from 'shared/assets/images/image_grilled_fish.png';
import { Button } from 'shared/ui/Button';
import { Icon } from 'shared/ui/Icon';

import styles from './OrderCard.module.scss';

export const OrderCard = memo(() => {
    const { wrap, title, subtitle, price, dollar } = styles;

    return (
        <div className={wrap}>
            <div className={styles['image-container']}>
                <Icon src={image} alt="foodImg" className={styles['food-img']} />
            </div>
            <div className={styles['text-container']}>
                <p className={title}>Grilled Fish</p>
                <p className={subtitle}>Spicy grilled fish</p>
                <p className={price}>
                    <span className={dollar}>$</span>8.50
                </p>
            </div>
            <div className={styles['quantity-container']}>
                <Button size="xxxs">-</Button>
                <p>1</p>
                <Button size="xxxs">+</Button>
            </div>
        </div>
    );
});

OrderCard.displayName = 'OrderCard';

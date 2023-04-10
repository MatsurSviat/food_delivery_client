import { memo } from 'react';

import MealImage from 'shared/assets/images/image_grilled_fish_big.png';
import { Icon } from 'shared/ui/Icon';

import styles from './ModalContent.module.scss';

export const ModalContent = memo(() => {
    const { wrap } = styles;

    return (
        <div className={wrap}>
            <Icon src={MealImage} alt="meal" className={styles['meal-image']} />
            <div className={styles['info-wrap']}>
                <div className={styles['title-wrap']}>
                    <div>
                        <p>Grilled Fish</p>
                        <p>Spicy grilled fish</p>
                    </div>
                    <p>$8.5</p>
                </div>
                <div>Icons</div>
                <div>
                    <p>About</p>
                    <p>
                        Our most popular choice! A delicious mix of different meal with various ingredients like salmon,
                        tomato, bean, potato and much more.
                    </p>
                    About
                </div>
                <div>Buttons</div>
            </div>
        </div>
    );
});

ModalContent.displayName = 'ModalContent';

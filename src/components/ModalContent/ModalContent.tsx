import { memo } from 'react';

import rateImg from 'shared/assets/icons/ic_star1.svg';
import timeImg from 'shared/assets/icons/ic_time11.svg';
import MealImage from 'shared/assets/images/image_grilled_fish_big.png';
import { Button } from 'shared/ui/Button';
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
                        <p className={styles.title}>Grilled Fish</p>
                        <p className={styles.subtitle}>Spicy grilled fish</p>
                    </div>
                    <p className={styles.price}>
                        <span className={styles.dollar}>$</span>8.50
                    </p>
                </div>
                <div className={styles.imgCont}>
                    <div className={styles.rateCont}>
                        <div className={styles.rateImgCont}>
                            <img src={rateImg} alt="rateImg" className={styles.rateImg} />
                        </div>
                        <p className={styles.rateText}>4.8</p>
                    </div>
                    <div className={styles.timeCont}>
                        <div className={styles.timeImgCont}>
                            <img src={timeImg} alt="timeImg" className={styles.timeImg} />
                        </div>
                        <p className={styles.timeText}>25 min</p>
                    </div>
                </div>
                <div>
                    <p className={styles.aboutTitle}>About</p>
                    <p className={styles.aboutText}>
                        Our most popular choice! A delicious mix of different meal with various ingredients like salmon,
                        tomato, bean, potato and much more.
                    </p>
                </div>
                <div className={styles['quantity-add-container']}>
                    <div className={styles['quantity-container']}>
                        <Button size="xxxs">-</Button>
                        <p>1</p>
                        <Button size="xxxs">+</Button>
                    </div>
                    <div className={styles.addBtnCont}>
                        <button type="button" className={styles.addButton}>
                            ADD TO CART
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
});

ModalContent.displayName = 'ModalContent';

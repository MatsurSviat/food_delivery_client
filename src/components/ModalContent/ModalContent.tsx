import { memo } from 'react';
import { useSelector } from 'react-redux';
import type { IMeal } from 'store/types/meal';

import rateImg from 'shared/assets/icons/ic_star1.svg';
import timeImg from 'shared/assets/icons/ic_time11.svg';
import { Button } from 'shared/ui/Button';
import { Icon } from 'shared/ui/Icon';
import { currentMeal, modalActions, orderActions, useAppDispatch } from 'store';

import styles from './ModalContent.module.scss';

export const ModalContent = memo(() => {
    const { wrap } = styles;
    const meal = useSelector(currentMeal);
    const dispatch = useAppDispatch();

    const { title, description, price, taste, cookTime, rating, img, count } = meal;

    const addToCardHandleClick = (value: IMeal) => {
        dispatch(orderActions.addCurrentMealToOrder(value));
        dispatch(modalActions.closeModal());
    };

    return (
        <div className={wrap}>
            <Icon src={`${process.env.REACT_APP_API_URL}/${img}`} alt="meal" className={styles['meal-image']} />
            <div className={styles['info-wrap']}>
                <div className={styles['title-wrap']}>
                    <div>
                        <p className={styles.title}>{title}</p>
                        <p className={styles.subtitle}>{`${taste} ${title}`}</p>
                    </div>
                    <p className={styles.price}>
                        <span className={styles.dollar}>$</span>
                        {price}
                    </p>
                </div>
                <div className={styles.imgCont}>
                    <div className={styles.rateCont}>
                        <div className={styles.rateImgCont}>
                            <img src={rateImg} alt="rateImg" className={styles.rateImg} />
                        </div>
                        <p className={styles.rateText}>{rating}</p>
                    </div>
                    <div className={styles.timeCont}>
                        <div className={styles.timeImgCont}>
                            <img src={timeImg} alt="timeImg" className={styles.timeImg} />
                        </div>
                        <p className={styles.timeText}>{cookTime}</p>
                    </div>
                </div>
                <div>
                    <p className={styles.aboutTitle}>About</p>
                    <p className={styles.aboutText}>{description}</p>
                </div>
                <div className={styles['quantity-add-container']}>
                    <div className={styles['quantity-container']}>
                        <Button size="xxxs" onClick={() => dispatch(orderActions.decreaseCurrentMealCount())}>-</Button>
                        <p>{count}</p>
                        <Button size="xxxs" onClick={() => dispatch(orderActions.increaseCurrentMealCount())}>
                            +
                        </Button>
                    </div>
                    <div className={styles.addBtnCont}>
                        <button type="button" className={styles.addButton} onClick={() => addToCardHandleClick(meal)}>
                            ADD TO CART
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
});

ModalContent.displayName = 'ModalContent';

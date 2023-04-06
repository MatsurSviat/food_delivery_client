import { memo } from 'react';

import courierCall from 'shared/assets/icons/call.svg';
import cityImg from 'shared/assets/icons/map.svg';
import timeImg from 'shared/assets/icons/time.svg';
import courierPhoto from 'shared/assets/images/avatar2.png';
import { Icon } from 'shared/ui/Icon';

import styles from './CourierCard.module.scss';

export const CourierCard = memo(() => {
    const { wrap, name, id, position, time, city } = styles;

    return (
        <div className={wrap}>
            <div className={styles['courier-info-cont']}>
                <div className={styles['courier-photo-cont']}>
                    <Icon src={courierPhoto} alt="courierPhoto" className={styles['courier-photo']} />
                </div>
                <div className={styles['courier-data-cont']}>
                    <p className={name}>Budi Sanjaya</p>
                    <p className={id}>ID : 78A6767</p>
                    <p className={position}>Food courier</p>
                </div>
                <div className={styles['courier-call-cont']}>
                    <Icon src={courierCall} alt="courierCall" className={styles['courier-call']} />
                </div>
            </div>
            <div className={styles['delivery-info-cont']}>
                <div className={styles['delivery-time-cont']}>
                    <div className={styles['time-img-cont']}>
                        <Icon src={timeImg} alt="timeImg" className={styles['time-img']} />
                    </div>
                    <div className={styles['time-text-cont']}>
                        <p className={styles['time-title']}>Your Delivery Time</p>
                        <p className={time}>50 minutes</p>
                    </div>
                </div>
                <div className={styles['delivery-city-cont']}>
                    <div className={styles['city-img-cont']}>
                        <Icon src={cityImg} alt="cityImg" className={styles['city-img']} />
                    </div>
                    <div className={styles['city-text-cont']}>
                        <p className={styles['city-title']}>Your Delivery Address</p>
                        <p className={city}>Kediri City</p>
                    </div>
                </div>
            </div>
        </div>
    );
});

CourierCard.displayName = 'CourierCard';

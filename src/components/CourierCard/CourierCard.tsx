import { Icon } from 'shared/ui/Icon';

import courierPhoto from '../../shared/assets/images/avatar2.png';
import courierCall from '../../shared/assets/images/call.svg';
import cityImg from '../../shared/assets/images/map.svg';
import timeImg from '../../shared/assets/images/time.svg';

import styles from './CourierCard.module.scss';

export const CourierCard = () => (
    <div className={styles.wrapper}>
        <div className={styles.courierInfoCont}>
            <div className={styles.courierPhotoCont}>
                <Icon src={courierPhoto} alt="courierPhoto" className={styles.courierPhoto} />
            </div>
            <div className={styles.courierDataCont}>
                <p className={styles.name}>Budi Sanjaya</p>
                <p className={styles.id}>ID : 78A6767</p>
                <p className={styles.position}>Food courier</p>
            </div>
            <div className={styles.courierCallCont}>
                <Icon src={courierCall} alt="courierCall" className={styles.courierCall} />
            </div>
        </div>
        <div className={styles.deliveryInfoCont}>
            <div className={styles.deliveryTimeCont}>
                <div className={styles.timeImgCont}>
                    <Icon src={timeImg} alt="timeImg" className={styles.timeImg} />
                </div>
                <div className={styles.timeTextCont}>
                    <p className={styles.timeTitle}>Your Delivery Time</p>
                    <p className={styles.time}>50 minutes</p>
                </div>
            </div>
            <div className={styles.deliveryCityCont}>
                <div className={styles.CityImgCont}>
                    <Icon src={cityImg} alt="cityImg" className={styles.cityImg} />
                </div>
                <div className={styles.cityTextCont}>
                    <p className={styles.cityTitle}>Your Delivery Address</p>
                    <p className={styles.city}>Kediri City</p>
                </div>
            </div>
        </div>
    </div>
);

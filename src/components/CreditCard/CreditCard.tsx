import logoImage from 'shared/assets/icons/Mastercard-Logo.wine.svg';
import amazonImage from 'shared/assets/images/amazon.png';
import { Button } from 'shared/ui/Button';
import { Icon } from 'shared/ui/Icon';

import styles from './CreditCard.module.scss';

export const CreditCard = () => {
    const { wrap, name, sum, logo, plus } = styles;

    return (
        <div className={wrap}>
            <div className={styles['card-container']}>
                <Icon src={amazonImage} alt="amazon image" className={styles['amazon-img']} />
                <div className={styles['name-container']}>
                    <p className={name}>Achmad Qomarudin</p>
                </div>
                <p className={styles['card-number']}>5763 •••• •••• 2021</p>
                <div className={styles['sum-logo-container']}>
                    <div className={styles['sum-container']}>
                        <p className={sum}>$3.464.98</p>
                    </div>
                    <div className={styles['logo-container']}>
                        <Icon src={logoImage} alt="logoImg" className={styles['logo-img']} />
                        <p className={logo}>Platinum Card</p>
                    </div>
                </div>
            </div>
            <Button size="xsx" circle>
                <span className={plus}>+</span>
            </Button>
        </div>
    );
};

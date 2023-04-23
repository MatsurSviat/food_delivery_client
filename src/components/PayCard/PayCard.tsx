import { memo } from 'react';

import { ReactComponent as PaypalIcon } from 'shared/assets/icons/ic_paypal 1.svg';
import { ReactComponent as GoogleCardIcon } from 'shared/assets/icons/icons8-google.svg';
import { ReactComponent as MasterCardIcon } from 'shared/assets/icons/master.svg';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';

import styles from './PayCard.module.scss';

export const PayCard = memo(() => {
    const { wrap, plus, inputRadio } = styles;

    return (
        <div className={wrap}>
            <div className={styles['payment-methods']}>
                <Input
                    type="radio"
                    label="Credit Card"
                    name="payment"
                    iconSize="small"
                    InputLabelRadio
                    className={inputRadio}
                    iconRadio={<MasterCardIcon />}
                />
                <Input
                    type="radio"
                    label="Paypal"
                    name="payment"
                    iconSize="small"
                    InputLabelRadio
                    className={inputRadio}
                    iconRadio={<PaypalIcon />}
                />
                <Input
                    type="radio"
                    label="Google Pay"
                    name="payment"
                    iconSize="small"
                    InputLabelRadio
                    className={inputRadio}
                    iconRadio={<GoogleCardIcon />}
                />
            </div>
            <Button size="xsx" circle>
                <span className={plus}>+</span>
            </Button>
        </div>
    );
});

PayCard.displayName = 'PayCard';

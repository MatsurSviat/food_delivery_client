import { memo } from 'react';
import { useNavigate } from 'react-router-dom';

import { OrderCard } from 'components/OrderCard';
import { TotalPrice } from 'components/TotalPrice';
import CloseIcon from 'shared/assets/icons/close.svg';
import { ReactComponent as PromoIcon } from 'shared/assets/icons/promo_code.svg';
import { ROUTES } from 'shared/constants/routes';
import { Button } from 'shared/ui/Button';
import { Icon } from 'shared/ui/Icon';
import { Input } from 'shared/ui/Input';

import styles from './OrderPage.module.scss';

export const OrderPage = memo(() => {
    const navigate = useNavigate();
    const { wrap, title, icon, orders, promo, apply } = styles;
    const closeHandle = () => {
        navigate(ROUTES.MAIN);
    };

    return (
        <div className={wrap}>
            <div className={styles['title-wrap']}>
                <h2 className={title}>My Order</h2>
                <Button close onClick={closeHandle}>
                    <Icon src={CloseIcon} className={icon} />
                </Button>
            </div>
            <div className={orders}>
                <OrderCard />
                <OrderCard />
            </div>
            <div className={promo}>
                <Input placeholder="Promo code . . ." iconSize="small" position="left" promo icon={<PromoIcon />} />
                <Button size="xs" className={apply}>
                    Apply
                </Button>
            </div>
            <TotalPrice />
            <Button size="xl" className={styles['confirm-btn']}>
                CONFIRM ORDER
            </Button>
        </div>
    );
});

OrderPage.displayName = 'OrderPage';

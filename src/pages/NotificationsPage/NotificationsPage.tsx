import { memo } from 'react';

import { CourierCard } from 'components/CourierCard';

import styles from './NotificationsPage.module.scss';

export const NotificationsPage = memo(() => {
    const { wrap, title, couriers } = styles;

    return (
        <div className={wrap}>
            <h2 className={title}>Notification</h2>
            <div className={couriers}>
                <CourierCard />
                <CourierCard />
                <CourierCard />
            </div>
        </div>
    );
});

NotificationsPage.displayName = 'NotificationsPage';

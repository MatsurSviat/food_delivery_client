import { memo } from 'react';

import styles from './NotificationsPage.module.scss';

export const NotificationsPage = memo(() => {
    const { wrap } = styles;

    return (
        <div className={wrap}>
            <p>Notification</p>
        </div>
    );
});

NotificationsPage.displayName = 'NotificationsPage';

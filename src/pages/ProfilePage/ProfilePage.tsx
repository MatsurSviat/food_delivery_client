import { memo, useCallback, useState } from 'react';

import { CreditCard } from 'components/CreditCard';
import { Logout } from 'components/Logout';
import { PayCard } from 'components/PayCard';
import { Profile } from 'components/Profile';
import { ThemesSwitcher } from 'components/ThemesSwitcher/ThemesSwitcher';

import styles from './ProfilePage.module.scss';

export const ProfilePage = memo(() => {
    const { wrap, card, active, account } = styles;
    const tabStyle = styles['tab-container'];
    const [tab, setTab] = useState(2);

    const toggleTab = useCallback(
        (index: number): void => {
            setTab(index);
        },
        [setTab],
    );

    return (
        <div className={wrap}>
            <Profile toggleTab={toggleTab} tab={tab} />
            <div className={`${tabStyle} ${tab === 1 ? active : ''}`}>
                <div className={account}>
                    <Logout />
                    <ThemesSwitcher />
                </div>
            </div>
            <div className={`${tabStyle} ${tab === 2 ? active : ''}`}>
                <div className={card}>
                    <p>My Card</p>
                    <CreditCard />
                    <p>Payment Method</p>
                    <PayCard />
                </div>
            </div>
            <div className={`${tabStyle} ${tab === 3 ? active : ''}`}>History</div>
        </div>
    );
});

ProfilePage.displayName = 'ProfilePage';

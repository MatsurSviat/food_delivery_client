import { memo } from 'react';
import { useSelector } from 'react-redux';

import { Avatar } from 'shared/ui/Avatar';
import { getUserEmail, getUserName, getUserPhoto } from 'store';

import styles from './Profile.module.scss';

interface IToggleTab {
    toggleTab: (index: number) => void;
    tab: number;
}

export const Profile = memo(({ toggleTab, tab }: IToggleTab) => {
    const { info, name, tabs, subname, button, active } = styles;
    const userPhoto = useSelector(getUserPhoto);
    const userName = useSelector(getUserName);
    const userEmail = useSelector(getUserEmail);

    return (
        <div className={styles['profile-wrap']}>
            <h2 className={styles['profile-title']}>My Profile</h2>
            <div className={styles['info-wrap']}>
                <Avatar size="big" src={`${process.env.REACT_APP_API_URL}/${userPhoto}`} />
                <div className={info}>
                    <p className={name}>{userName}</p>
                    <p className={subname}>{userEmail}</p>
                    <p className={subname}>User ID: 34A6V7</p>
                </div>
            </div>
            <div className={tabs}>
                <button type="button" className={`${button} ${tab === 1 ? active : ''}`} onClick={() => toggleTab(1)}>
                    Account
                </button>
                <button type="button" className={`${button} ${tab === 2 ? active : ''}`} onClick={() => toggleTab(2)}>
                    Payment
                </button>
                <button type="button" className={`${button} ${tab === 3 ? active : ''}`} onClick={() => toggleTab(3)}>
                    History
                </button>
            </div>
        </div>
    );
});

Profile.displayName = 'Profile';

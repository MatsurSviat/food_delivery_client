import { memo } from 'react';

import AvatarImg from 'shared/assets/images/avatar2.png';
import { Avatar } from 'shared/ui/Avatar';

import styles from './Profile.module.scss';

interface IToggleTab {
    toggleTab: (index: number) => void;
    tab: number;
}

export const Profile = memo(({ toggleTab, tab }: IToggleTab) => {
    const { info, name, tabs, subname, button, active } = styles;

    return (
        <div className={styles['profile-wrap']}>
            <h2>My Profile</h2>
            <div className={styles['info-wrap']}>
                <Avatar size="big" src={AvatarImg} />
                <div className={info}>
                    <p className={name}>Achmad Qamarudin</p>
                    <p className={subname}>achmadprogrammer@gmail.com</p>
                    <p className={subname}>User ID: 3766482</p>
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

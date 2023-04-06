import { memo } from 'react';
import { NavLink } from 'react-router-dom';

import FavoriteIcon from 'shared/assets/icons/book.svg';
import HomeIcon from 'shared/assets/icons/home.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import OrderIcon from 'shared/assets/icons/shopping_bag.svg';
import { ROUTES } from 'shared/constants/routes';
import { Icon } from 'shared/ui/Icon';

import NotificationsIcon from '../../shared/assets/icons/bell.svg';

import styles from './NavBar.module.scss';

export const NavBar = memo(() => {
    const { wrap } = styles;

    return (
        <nav className={wrap}>
            <div className={styles['div-wrap']}>
                <NavLink to={ROUTES.ORDER} className={styles['order-btn']}>
                    <Icon src={OrderIcon} alt="order" className={styles['order-img']} />
                </NavLink>
                <div className={styles['footer-figure']}>
                    <div className={styles['main-favorite']}>
                        <NavLink to={ROUTES.MAIN}>
                            <Icon src={HomeIcon} alt="home" className={styles['home-img']} />
                        </NavLink>
                        <NavLink to={ROUTES.FAVORITE}>
                            <Icon src={FavoriteIcon} alt="favorite" className={styles['favorite-img']} />
                        </NavLink>
                    </div>
                    <div className={styles['empty-wrap']} />
                    <div className={styles['notific-profile']}>
                        <NavLink to={ROUTES.PROFILE}>
                            <Icon src={ProfileIcon} alt="profile" className={styles['profile-img']} />
                        </NavLink>
                        <NavLink to={ROUTES.NOTIFICATIONS}>
                            <Icon src={NotificationsIcon} alt="notification" className={styles['notification-img']} />
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
});

NavBar.displayName = 'NavBar';

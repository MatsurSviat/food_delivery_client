import { memo } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { ReactComponent as NotificationsIcon } from 'shared/assets/icons/bell.svg';
import { ReactComponent as FavoriteIcon } from 'shared/assets/icons/book.svg';
import { ReactComponent as HomeIcon } from 'shared/assets/icons/home.svg';
import { ReactComponent as ProfileIcon } from 'shared/assets/icons/profile.svg';
import OrderIcon from 'shared/assets/icons/shopping_bag.svg';
import { ROUTES } from 'shared/constants/routes';
import { Icon } from 'shared/ui/Icon';

import styles from './NavBar.module.scss';

export const NavBar = memo(() => {
    const { wrap } = styles;
    const size = 22;
    const location = useLocation();

    return (
        <nav className={wrap}>
            <div className={styles['div-wrap']}>
                <NavLink to={ROUTES.ORDER} className={styles['order-btn']}>
                    <Icon src={OrderIcon} alt="order" className={styles['order-img']} />
                </NavLink>
                <div className={styles['footer-figure']}>
                    <div className={styles['main-favorite']}>
                        <NavLink to={ROUTES.MAIN}>
                            <HomeIcon
                                fill={location.pathname === ROUTES.MAIN ? '#fdc27a' : '#D1D1D1'}
                                width={size}
                                height={size}
                            />
                        </NavLink>
                        <NavLink to={ROUTES.FAVORITE}>
                            <FavoriteIcon
                                fill={location.pathname === `/${ROUTES.FAVORITE}` ? '#fdc27a' : '#D1D1D1'}
                                width={size}
                                height={size}
                            />
                        </NavLink>
                    </div>
                    <div className={styles['empty-wrap']} />
                    <div className={styles['notific-profile']}>
                        <NavLink to={ROUTES.PROFILE}>
                            <ProfileIcon
                                fill={location.pathname === `/${ROUTES.PROFILE}` ? '#fdc27a' : '#D1D1D1'}
                                width={size}
                                height={size}
                            />
                        </NavLink>
                        <NavLink to={ROUTES.NOTIFICATIONS}>
                            <NotificationsIcon
                                fill={location.pathname === `/${ROUTES.NOTIFICATIONS}` ? '#fdc27a' : '#D1D1D1'}
                                width={size}
                                height={size}
                            />
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
});

NavBar.displayName = 'NavBar';

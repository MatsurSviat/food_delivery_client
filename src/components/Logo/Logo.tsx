import { memo } from 'react';
import { Link } from 'react-router-dom';

import DeliverySign from 'shared/assets/images/shopping-bag.png';
import { ROUTES } from 'shared/constants/routes';
import { FULL_URL_SIGN_IN, FULL_URL_SIGN_UP } from 'shared/constants/url';
import { Icon } from 'shared/ui/Icon';

import styles from './Logo.module.scss';

export const Logo = memo(() => {
    const { logo, title, subtitle, buttons, active } = styles;
    const routerLocation = window.location.href;

    return (
        <div className={logo}>
            <Icon src={DeliverySign} alt="delivery sign"  className='sign'/>
            <span className={title}>Corner Food</span>
            <span className={subtitle}>Delivery App</span>
            <div className={buttons}>
                <Link to={`/${ROUTES.SIGN_IN}`}>
                    <button
                        type="button"
                        className={`${styles['log-button']} ${routerLocation === FULL_URL_SIGN_IN ? active : ''}`}
                    >
                        Login
                    </button>
                </Link>
                <Link to={`/${ROUTES.SIGN_UP}`}>
                    <button
                        type="button"
                        className={`${styles['log-button']} ${routerLocation === FULL_URL_SIGN_UP ? active : ''}`}
                    >
                        Signup
                    </button>
                </Link>
            </div>
        </div>
    );
});

Logo.displayName = 'Logo';

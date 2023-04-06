import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { ThemesSwitcher } from 'components/ThemesSwitcher/ThemesSwitcher';
import { TOKEN_KEY } from 'shared/constants/localStorage';
import { ROUTES } from 'shared/constants/routes';
import { Input } from 'shared/ui/Input';
import { getUserName, logoutAction, useAppDispatch } from 'store';

import cls from './Header.module.scss';

export const Header = memo(() => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const userName = useSelector(getUserName);

    const onLogoutHandler = useCallback((): void => {
        localStorage.removeItem(TOKEN_KEY);
        dispatch(logoutAction());
        navigate(ROUTES.SIGN_IN);
    }, [dispatch, navigate]);

    return (
        <div className={cls.header}>
            <div className={cls.header__input}>
                <Input placeholder="Search on twitter" />
            </div>
            <div className={cls.header__btn}>
                <ThemesSwitcher />
            </div>
            <div className={cls.header__profile}>
                <div className={cls.header__info}>
                    <p className={cls.header__title}>{userName}</p>
                    <p className={cls.header__subtitle}>Profile</p>
                </div>
                <div className="header__drop">
                    <button type="button" onClick={onLogoutHandler}>
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
});

Header.displayName = 'Header';

import { PropsWithChildren, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { NavBar } from 'components/NavBar';
import { LOCATION_ORDER } from 'shared/constants/url';
import { fetchUserData, useAppDispatch } from 'store';

import cls from './MainLayout.module.scss';

export const MainLayout = ({ children }: PropsWithChildren) => {
    const dispatch = useAppDispatch();
    const location = useLocation();

    useEffect(() => {
        dispatch(fetchUserData());
    }, [dispatch, location]);

    return (
        <div className={cls.wrap}>
            {children}
            {location.pathname !== LOCATION_ORDER && <NavBar />}
        </div>
    );
};

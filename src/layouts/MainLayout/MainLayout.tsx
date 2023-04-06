import { PropsWithChildren, useEffect } from 'react';

import { NavBar } from 'components/NavBar';
import { fetchUserData, useAppDispatch } from 'store';

import cls from './MainLayout.module.scss';

export const MainLayout = ({ children }: PropsWithChildren) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchUserData());
    }, [dispatch]);

    return (
        <div className={cls.wrap}>
            {children}
            <NavBar />
        </div>
    );
};

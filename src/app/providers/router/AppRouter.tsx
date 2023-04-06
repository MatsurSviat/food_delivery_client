import { memo } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';

import { AuthLayout } from 'layouts/AuthLayout';
import { MainLayout } from 'layouts/MainLayout';
import { FavoritePage } from 'pages/FavoritePage';
import { HomePage } from 'pages/HomePage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { NotificationsPage } from 'pages/NotificationsPage';
import { OrderPage } from 'pages/OrderPage';
import { ProfilePage } from 'pages/ProfilePage';
import { SignInPage } from 'pages/SignInPage';
import { SignUpPage } from 'pages/SignUpPage';
import { ROUTES } from 'shared/constants/routes';

import { AlreadyAuth } from './AlreadyAuth';
import { RequireAuth } from './RequireAuth';

const AuthRootElement = () => (
    <AlreadyAuth>
        <AuthLayout>
            <Outlet />
        </AuthLayout>
    </AlreadyAuth>
);

const AppRootElement = () => (
    <RequireAuth>
        <MainLayout>
            <Outlet />
        </MainLayout>
    </RequireAuth>
);

export const AppRouter = memo(() => (
    <Routes>
        <Route path={ROUTES.MAIN} element={<AuthRootElement />}>
            <Route path={ROUTES.SIGN_IN} element={<SignInPage />} />
            <Route path={ROUTES.SIGN_UP} element={<SignUpPage />} />
        </Route>

        <Route path={ROUTES.MAIN} element={<AppRootElement />}>
            <Route index element={<HomePage />} />
            <Route path={ROUTES.FAVORITE} element={<FavoritePage />} />
            <Route path={ROUTES.ORDER} element={<OrderPage />} />
            <Route path={ROUTES.NOTIFICATIONS} element={<NotificationsPage />} />
            <Route path={ROUTES.PROFILE} element={<ProfilePage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
    </Routes>
));

AppRouter.displayName = 'AppRouter';

import type { ReactElement } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { TOKEN_KEY } from 'shared/constants/localStorage';
import { ROUTES } from 'shared/constants/routes';

interface IRequireAuthProps {
    children: ReactElement;
}

export const RequireAuth = ({ children }: IRequireAuthProps) => {
    const auth = localStorage.getItem(TOKEN_KEY);
    const location = useLocation();

    if (!auth) {
        return <Navigate to={ROUTES.SIGN_IN} state={{ from: location }} replace />;
    }

    return children;
};

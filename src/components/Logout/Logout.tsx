import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { TOKEN_KEY } from 'shared/constants/localStorage';
import { ROUTES } from 'shared/constants/routes';
import { Button } from 'shared/ui/Button';
import { logoutAction, useAppDispatch } from 'store';

export const Logout = memo(() => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const onLogoutHandler = useCallback((): void => {
        localStorage.removeItem(TOKEN_KEY);
        dispatch(logoutAction());
        navigate(`../${ROUTES.SIGN_IN}`);
    }, [dispatch, navigate]);

    return (
        <Button type="button" onClick={onLogoutHandler}>
            Logout
        </Button>
    );
});

Logout.displayName = 'Logout';

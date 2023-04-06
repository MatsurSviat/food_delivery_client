import axios from 'axios';

import { TOKEN_KEY } from 'shared/constants/localStorage';
import { ROUTES } from 'shared/constants/routes';

export const apiInstance = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/api`,
});

apiInstance.interceptors.request.use(config => {
    const isAuthRequest = config.url?.includes('auth');

    if (!isAuthRequest) {
        config.headers.setAuthorization(`Bearer ${localStorage.getItem(TOKEN_KEY)}`);
    }

    return config;
});

apiInstance.interceptors.response.use(
    config => config,
    error => {
        if (error.response.status === 401) {
            localStorage.removeItem(TOKEN_KEY);

            window.location.href = ROUTES.SIGN_IN;
        }

        return Promise.reject(error);
    },
);

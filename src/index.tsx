import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { StoreProvider } from './app/providers/store/StoreProvider';
import { ThemeContextProvider } from './app/providers/theme/ThemeContext';
import { App } from './app';

import './app/styles/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <StrictMode>
        <StoreProvider>
            <ThemeContextProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ThemeContextProvider>
        </StoreProvider>
    </StrictMode>,
);

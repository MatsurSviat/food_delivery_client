import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useContext,
    useLayoutEffect,
    useMemo,
    useState,
} from 'react';

import { THEME_KEY } from 'shared/constants/localStorage';
import { THEMES } from 'shared/constants/themes';

export type Theme = (typeof THEMES)[keyof typeof THEMES];

export type ThemeContextType = {
    theme?: Theme;
    setTheme?: Dispatch<SetStateAction<Theme>>;
};

export type ThemeContextProviderProps = {
    children: ReactNode;
};

export const ThemeContext = createContext<ThemeContextType>({});

const defaultTheme = (localStorage.getItem(THEME_KEY) as Theme) || THEMES.light;

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
    const [theme, setTheme] = useState(defaultTheme);

    useLayoutEffect(() => {
        document.documentElement.setAttribute(THEME_KEY, theme);
        localStorage.setItem(THEME_KEY, theme);
    }, [theme]);

    const value = useMemo(() => ({ theme, setTheme }), [theme]);

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
    return useContext(ThemeContext);
}

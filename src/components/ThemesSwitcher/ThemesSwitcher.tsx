import { useTheme } from 'app/providers/theme/ThemeContext';
import { THEMES } from 'shared/constants/themes';
import { Button } from 'shared/ui/Button';

export const ThemesSwitcher = () => {
    const { theme, setTheme } = useTheme();

    return (
        <Button
            className="theme-button"
            onClick={() => {
                setTheme?.(theme === THEMES.light ? THEMES.dark : THEMES.light);
            }}
        >
            {theme}
        </Button>
    );
};

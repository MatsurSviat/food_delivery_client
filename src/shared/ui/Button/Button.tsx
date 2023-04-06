import { type ButtonHTMLAttributes, memo } from 'react';
import classNames from 'classnames';

import cls from './Button.module.scss';

type ButtonSize = 'xxs' | 'xs' | 's' | 'l' | 'm' | 'xl'; // 40/40 | 76/33 | 90/30 | 111/40 | 248/45 | 302\50
type ButtoColor = 'white' | 'yellow';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    size?: ButtonSize;
    square?: boolean;
    wave?: boolean;
    circle?: boolean;
    color?: ButtoColor;
    outlined?: boolean;
}

export const Button = memo((props: IButtonProps) => {
    const { className, children, size = 'l', color = 'yellow', square, wave, circle, outlined, ...otherProps } = props;

    return (
        <button
            type="button"
            className={classNames(cls.button, className, cls[`size-${size}`], cls[`color-${color}`], {
                [cls.square]: square,
                [cls.wave]: wave,
                [cls.circle]: circle,
                [cls.outlined]: outlined,
            })}
            {...otherProps}
        >
            {children}
        </button>
    );
});

Button.displayName = 'Button';

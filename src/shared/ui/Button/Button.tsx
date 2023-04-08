import { type ButtonHTMLAttributes, memo } from 'react';
import classNames from 'classnames';

import cls from './Button.module.scss';

type ButtonSize = 'xxxs' | 'xxs' | 'xs' | 's' | 'l' | 'm' | 'xl'; // 26/26 | 40/40 | 76/33 | 90/30 | 111/40 | 248/45 | 302\50
type ButtonColor = 'white' | 'yellow';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    size?: ButtonSize;
    square?: boolean;
    wave?: boolean;
    circle?: boolean;
    color?: ButtonColor;
    outlined?: boolean;
    close?: boolean;
}

export const Button = memo((props: IButtonProps) => {
    const {
        className,
        children,
        size = 'l',
        color = 'yellow',
        square,
        wave,
        circle,
        outlined,
        close,
        ...otherProps
    } = props;

    return (
        <button
            type="button"
            className={classNames(cls.button, className, cls[`size-${size}`], cls[`color-${color}`], {
                [cls.square]: square,
                [cls.wave]: wave,
                [cls.circle]: circle,
                [cls.outlined]: outlined,
                [cls.close]: close,
            })}
            {...otherProps}
        >
            {children}
        </button>
    );
});

Button.displayName = 'Button';

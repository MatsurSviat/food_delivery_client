import { memo, type ReactElement, type ReactNode } from 'react';
import { NavLink, type NavLinkProps } from 'react-router-dom';
import classNames from 'classnames';

import cls from './Link.module.scss';

interface ILinkProps extends NavLinkProps {
    className?: string;
    icon: ReactElement;
    children?: ReactNode;
}

export const Link = memo((props: ILinkProps) => {
    const { className, children, to, icon, ...otherProps } = props;

    return (
        <NavLink
            className={({ isActive }) =>
                classNames(cls.link, className, {
                    [cls.active]: isActive,
                })
            }
            to={to}
            {...otherProps}
        >
            {icon}
            <span>{children}</span>
        </NavLink>
    );
});

Link.displayName = 'Link';

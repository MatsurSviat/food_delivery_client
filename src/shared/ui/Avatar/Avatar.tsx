import { memo } from 'react';
import classNames from 'classnames';

import cls from './Avatar.module.scss';

type AvatarSize = 'small' | 'big';

interface IAvatarProps {
    className?: string;
    src: string | undefined;
    size?: AvatarSize;
    alt?: string;
    bordered?: boolean;
}

export const Avatar = memo((props: IAvatarProps) => {
    const { className, src, size = 'small', alt = 'avatar-image', bordered } = props;

    return (
        <img
            className={classNames(cls.avatar, cls[size], className, { [cls.bordered]: bordered })}
            src={src}
            alt={alt}
        />
    );
});

Avatar.displayName = 'Avatar';

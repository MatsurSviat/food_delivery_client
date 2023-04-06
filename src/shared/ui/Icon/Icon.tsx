import { memo } from 'react';

interface IIconProps {
    src: string;
    alt?: string;
    className?: string;
}

export const Icon = memo(({ className, src, alt = 'icon' }: IIconProps) => (
    <img src={src} alt={alt} className={className} />
));

Icon.displayName = 'Icon';

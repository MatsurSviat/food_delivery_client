import { type ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface IPortalProps {
    children: ReactNode;
    keepMounted?: boolean;
}

export const Portal = ({ children, keepMounted = false }: IPortalProps) => {
    const [container] = useState(() => document.createElement('div'));

    useEffect(() => {
        document.body.appendChild(container);

        return () => {
            if (!keepMounted) {
                document.body.removeChild(container);
            }
        };
    }, [container, keepMounted]);

    return createPortal(children, container);
};

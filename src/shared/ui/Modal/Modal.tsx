import { type MouseEvent, type ReactNode, useCallback, useEffect } from 'react';
import classNames from 'classnames';

import { Portal } from '../Portal';

import cls from './Modal.module.scss';

interface IModalProps {
    children?: ReactNode;
    className?: string;
    isOpen?: boolean;
    onClose?: () => void;
}

export const Modal = (props: IModalProps) => {
    const { className, children, isOpen, onClose } = props;

    const closeHandler = useCallback(() => {
        if (onClose) {
            onClose();
        }
    }, [onClose]);

    const onContentClick = (e: MouseEvent) => {
        e.stopPropagation();
    };

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                closeHandler();
            }
        },
        [closeHandler],
    );

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = '10px';
        } else {
            window.removeEventListener('keydown', onKeyDown);
            document.body.style.overflow = 'unset';
            document.body.style.paddingRight = '0px';
        }
    }, [isOpen, onKeyDown]);

    return (
        <Portal>
            <div
                className={classNames(cls.modal, className, {
                    [cls.opened]: isOpen,
                    [cls.closed]: !isOpen,
                })}
            >
                <div className={cls.overlay} onMouseDown={closeHandler}>
                    <div className={cls.content} onMouseDownCapture={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};

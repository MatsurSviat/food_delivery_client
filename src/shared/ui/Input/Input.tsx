import { type ChangeEvent, type InputHTMLAttributes, memo, type ReactElement, useRef } from 'react';
import classNames from 'classnames';

import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;
type InputPurpose = 'log' | 'search';
type IconPosition = 'right' | 'left';
type IconSize = 'small' | 'big';
type InputColor = 'transparent' | 'white';

interface IInputProps extends HTMLInputProps {
    value?: string;
    onChange?: (value: string, name?: string) => void;
    icon?: ReactElement;
    label?: string;
    purpose?: InputPurpose;
    position?: IconPosition;
    iconSize?: IconSize;
    inputColor?: InputColor;
    promo?: boolean;
    iconRadio?: ReactElement;
    InputLabelRadio?: boolean;
}

export const Input = memo((props: IInputProps) => {
    const {
        className,
        value,
        onChange,
        icon,
        type = 'text',
        label,
        purpose,
        position,
        iconSize,
        inputColor,
        iconRadio,
        promo,
        InputLabelRadio,
        ...otherProps
    } = props;

    const inputRef = useRef<HTMLInputElement>(null);

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
        onChange?.(event.target.value, props.name);
    };

    const onClickHandler = (): void => {
        if (inputRef && inputRef.current) {
            inputRef.current.focus();
        }
    };

    return (
        <div className={classNames(cls.InputContainer, className)}>
            {iconRadio && (
                <span
                    className={classNames(
                        cls.InputIcon,
                        className,
                        cls[`svg-size-${iconSize}`],
                    )}
                >
                    {iconRadio}
                </span>
            )}

            {label && (
                <label
                    className={classNames(cls.InputLabel, className, { [cls.InputLabelRadio]: InputLabelRadio })}
                    htmlFor={label.toLowerCase()}
                >
                    {label}
                </label>
            )}
            <div
                className={classNames(cls.InputInnerWrapper, className, cls[`purpose-${purpose}`])}
                onClick={onClickHandler}
            >
                <input
                    id={label?.toLowerCase()}
                    ref={inputRef}
                    className={classNames(cls.Input, className, cls[`color-${inputColor}`], {
                        [cls.WithIcon]: icon != null,
                        [cls.promo]: promo,
                    })}
                    tabIndex={0}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    {...otherProps}
                />
                {icon && (
                    <span
                        className={classNames(
                            cls.InputIcon,
                            className,
                            cls[`position-${position}`],
                            cls[`svg-size-${iconSize}`],
                        )}
                    >
                        {icon}
                    </span>
                )}
            </div>
        </div>
    );
});

Input.displayName = 'Input';

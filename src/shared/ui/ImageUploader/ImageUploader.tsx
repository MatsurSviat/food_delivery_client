import { type ChangeEvent, memo, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

import { ReactComponent as CameraIcon } from '../../assets/icons/camera.svg';
import emptyImage from '../../assets/images/placeholder.png';

import cls from './ImageUploader.module.scss';

interface IImageUploaderProps {
    className?: string;
    asIcon?: boolean;
    value?: Blob;
    circle?: boolean;
    onChange?: (file: File) => void;
}

export const ImageUploader = memo((props: IImageUploaderProps) => {
    const { className, asIcon, value, circle, onChange } = props;

    const inputRef = useRef<HTMLInputElement>(null);

    const [previewImage, setPreviewImage] = useState<string>('');

    useEffect(() => {
        setPreviewImage(value ? URL.createObjectURL(value) : emptyImage);
    }, [value]);

    const onClickHandler = (): void => {
        inputRef.current?.click();
    };

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
        const [file] = Array.from(event.target.files || []);

        if (file) {
            if (onChange) {
                onChange(file);
            }

            setPreviewImage(URL.createObjectURL(file));
        }
    };

    return (
        <div
            className={classNames(cls['image-uploader'], className, { [cls['as-icon']]: asIcon, [cls.circle]: circle })}
        >
            {asIcon ? (
                <CameraIcon className={cls.icon} onClick={onClickHandler} />
            ) : (
                <div className={cls.preview}>
                    <CameraIcon className={cls.icon} onClick={onClickHandler} />
                    <div className={cls.overlay} />
                    <img className={cls.image} src={previewImage} alt="preview" />
                </div>
            )}
            <input
                ref={inputRef}
                className={cls['file-input']}
                type="file"
                accept="image/*"
                onChange={onChangeHandler}
            />
        </div>
    );
});

ImageUploader.displayName = 'ImageUploader';

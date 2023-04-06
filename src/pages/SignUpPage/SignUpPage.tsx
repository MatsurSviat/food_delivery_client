import { memo, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Logo } from 'components/Logo';
import { ROUTES } from 'shared/constants/routes';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { signUp, useAppDispatch } from 'store';

import { ReactComponent as EyeSign } from '../../shared/assets/icons/show-password-eye.svg';

import styles from './SignUp.module.scss';

export const SignUpPage = memo(() => {
    const navigate = useNavigate();
    const { wrapper, form } = styles;
    const [userName, setUserName] = useState<string>('');
    const [userEmail, setUserEmail] = useState<string>('');
    const [userPassword, setUserPassword] = useState<string>('');
    const dispatch = useAppDispatch();

    const handlerUserData = useCallback((value: string, name?: string) => {
        if (name) {
            switch (name) {
                case 'name':
                    setUserName(value);

                    break;
                case 'email':
                    setUserEmail(value);

                    break;
                case 'password':
                    setUserPassword(value);

                    break;
                default:
                    break;
            }
        }
    }, []);

    const onSignUpClick = useCallback(() => {
        dispatch(
            signUp({
                userName,
                email: userEmail,
                password: userPassword,
            }),
        );

        navigate(`/${ROUTES.SIGN_IN}`);
    }, [dispatch, navigate, userEmail, userName, userPassword]);

    return (
        <div className={wrapper}>
            <Logo />
            <div className={form}>
                <Input
                    name="name"
                    placeholder="Enter Username"
                    label="Username"
                    purpose="log"
                    iconSize="big"
                    inputColor="transparent"
                    onChange={handlerUserData}
                />
                <Input
                    name="email"
                    placeholder="Enter Email Address"
                    label="Email Address"
                    purpose="log"
                    iconSize="big"
                    inputColor="transparent"
                    onChange={handlerUserData}
                />
                <Input
                    name="password"
                    placeholder="Enter Password"
                    label="Password"
                    purpose="log"
                    position="right"
                    iconSize="big"
                    inputColor="transparent"
                    onChange={handlerUserData}
                    icon={<EyeSign />}
                />
                <Input
                    name="confirm"
                    placeholder="Confirm Password"
                    label="Confirm Password"
                    purpose="log"
                    position="right"
                    iconSize="big"
                    inputColor="transparent"
                    onChange={handlerUserData}
                    icon={<EyeSign />}
                />
                <Button size="m" onClick={onSignUpClick}>
                    Sign up
                </Button>
            </div>
        </div>
    );
});

SignUpPage.displayName = 'SignUpPage';

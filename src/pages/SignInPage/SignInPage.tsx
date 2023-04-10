import { memo, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { SignTop } from 'components/SignTop';
import { ReactComponent as EyeSign } from 'shared/assets/icons/show-password-eye.svg';
import { ROUTES } from 'shared/constants/routes';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { signIn, useAppDispatch } from 'store';

import { ReactComponent as EyeSignClosed } from '../../shared/assets/icons/show-password-eye-closed.svg';

import styles from './SignIn.module.scss';

export const SignInPage = memo(() => {
    const navigate = useNavigate();
    const { wrapper, form, password, forgot } = styles;
    const [userEmail, setUserEmail] = useState<string>('first@mail.ru');
    const [userPassword, setUserPassword] = useState<string>('test-pass');
    const [passwordShown, setPasswordShown] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    const handlerUserData = useCallback((value: string, name?: string) => {
        if (name) {
            name === 'email' ? setUserEmail(value) : setUserPassword(value);
        }
    }, []);

    const onSignInClick = useCallback(async () => {
        await dispatch(signIn({ email: userEmail, password: userPassword }));

        navigate(ROUTES.MAIN);
    }, [dispatch, navigate, userEmail, userPassword]);

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    return (
        <div className={wrapper}>
            <SignTop />
            <div className={form}>
                <Input
                    name="email"
                    placeholder="Enter Email Address"
                    label="Email Address"
                    purpose="log"
                    iconSize="big"
                    inputColor="transparent"
                    value={userEmail}
                    onChange={handlerUserData}
                />
                <div className={password}>
                    <Input
                        type={passwordShown ? 'text' : 'password'}
                        name="password"
                        placeholder="Enter Password"
                        label="Password"
                        position="right"
                        purpose="log"
                        iconSize="big"
                        inputColor="transparent"
                        value={userPassword}
                        onChange={handlerUserData}
                        icon={
                            passwordShown ? (
                                <EyeSignClosed onClick={togglePassword} />
                            ) : (
                                <EyeSign onClick={togglePassword} />
                            )
                        }
                    />
                </div>
            </div>
            <p className={forgot}>Forgot Password?</p>
            <div className={styles['login-btn']}>
                <Button size="m" onClick={onSignInClick}>
                    Login
                </Button>
            </div>
        </div>
    );
});

SignInPage.displayName = 'SignInPage';

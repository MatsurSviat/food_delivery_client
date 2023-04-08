import { memo, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { SignTop } from 'components/SignTop';
import { ROUTES } from 'shared/constants/routes';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { signUp, useAppDispatch } from 'store';

import { ReactComponent as EyeSign } from '../../shared/assets/icons/show-password-eye.svg';
import { ReactComponent as EyeSignClosed } from '../../shared/assets/icons/show-password-eye-closed.svg';

import styles from './SignUp.module.scss';

export const SignUpPage = memo(() => {
    const navigate = useNavigate();
    const { wrapper, form } = styles;
    const [userName, setUserName] = useState<string>('');
    const [userEmail, setUserEmail] = useState<string>('');
    const [userPassword, setUserPassword] = useState<string>('');
    const [passwordShown, setPasswordShown] = useState(false);
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

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    return (
        <div className={wrapper}>
            <SignTop />
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
                    type={passwordShown ? 'text' : 'password'}
                    placeholder="Enter Password"
                    label="Password"
                    purpose="log"
                    position="right"
                    iconSize="big"
                    inputColor="transparent"
                    onChange={handlerUserData}
                    icon={
                        passwordShown ? (
                            <EyeSignClosed onClick={togglePassword} />
                        ) : (
                            <EyeSign onClick={togglePassword} />
                        )
                    }
                />
                <Input
                    name="confirm"
                    type={passwordShown ? 'text' : 'password'}
                    placeholder="Confirm Password"
                    label="Confirm Password"
                    purpose="log"
                    position="right"
                    iconSize="big"
                    inputColor="transparent"
                    onChange={handlerUserData}
                    icon={
                        passwordShown ? (
                            <EyeSignClosed onClick={togglePassword} />
                        ) : (
                            <EyeSign onClick={togglePassword} />
                        )
                    }
                />
                <Button size="m" onClick={onSignUpClick}>
                    Sign up
                </Button>
            </div>
        </div>
    );
});

SignUpPage.displayName = 'SignUpPage';

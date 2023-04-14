import { PropsWithChildren, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { ModalContent } from 'components/ModalContent';
import { NavBar } from 'components/NavBar';
import { LOCATION_ORDER } from 'shared/constants/url';
import { Modal } from 'shared/ui/Modal';
import { fetchMealsData, fetchUserData, isModalOpen, modalActions, useAppDispatch } from 'store';

import cls from './MainLayout.module.scss';

export const MainLayout = ({ children }: PropsWithChildren) => {
    const dispatch = useAppDispatch();
    const location = useLocation();
    const isOpen = useSelector(isModalOpen);

    const onCloseHandler = useCallback(() => {
        dispatch(modalActions.closeModal());
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchUserData());
        dispatch(fetchMealsData());
    }, [dispatch, location]);

    return (
        <div className={cls.wrap}>
            {children}
            {location.pathname !== LOCATION_ORDER && <NavBar />}
            <Modal isOpen={isOpen} onClose={onCloseHandler}>
                <ModalContent />
            </Modal>
        </div>
    );
};

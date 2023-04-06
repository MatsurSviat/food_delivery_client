import type { PropsWithChildren } from 'react';

import styles from './AuthLayout.module.scss';

export const AuthLayout = ({ children }: PropsWithChildren) => <div className={styles.wrapper}>{children}</div>;

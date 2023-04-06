import type { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';

import { createReduxStore } from 'store';

export const StoreProvider = (props: PropsWithChildren) => {
    const { children } = props;

    const store = createReduxStore();

    return <Provider store={store}>{children}</Provider>;
};

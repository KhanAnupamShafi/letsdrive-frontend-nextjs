'use client';

/* Core */
import { Provider } from 'react-redux';
import { reduxStore } from './redux/store';

/* Instruments */

export const Providers = (props: React.PropsWithChildren) => {
  return <Provider store={reduxStore}>{props.children}</Provider>;
};

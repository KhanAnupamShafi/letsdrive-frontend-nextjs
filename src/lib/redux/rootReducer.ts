/* Instruments */

import { apiSlice } from './api/apiSlice';
import modalReducer from './slices/modalSlice';

export const reducer = {
  [apiSlice.reducerPath]: apiSlice.reducer,
  modal: modalReducer,
};

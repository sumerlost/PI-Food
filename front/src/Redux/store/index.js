import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducer/reducer';

const store = configureStore({
    reducer: rootReducer,
    middleware: [thunkMiddleware],
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;

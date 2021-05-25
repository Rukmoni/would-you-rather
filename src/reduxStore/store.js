import {configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from './authSlice';

const reducer={
    auth:authReducer,
}

export default configureStore({
    reducer,
    middleware: [logger],
  });
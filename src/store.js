import { configureStore } from "@reduxjs/toolkit";
import userReducer from './store/users/usersSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
    }
})
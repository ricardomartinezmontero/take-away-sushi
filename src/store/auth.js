import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: null,
    isLogging: false,
    error: null,
    isLoggedIn: false,
    redirectPath: '/'
}

const authSlice = createSlice({
    name: 'auth',
    reducers: {
        setLogin: (state, action) => {
            state.user = action.payload;
            state.isLoggedIn = true;
        },
        startLogin: (state) => {
            state.isLogging = true;
        },
        successLogin: (state, action) => {
            state.user = action.payload;
            state.isLogging = false;
            state.isLoggedIn = true;
        },
        errorLogin: (state) => {
            state.isLogging = false;
        },
        startLogout: (state) => {
            state.isLogging = true;
        },
        successLogout: (state, action) => {
            state.user = null;
            state.redirectPath = '/';
            state.isLogging = false;
            state.isLoggedIn = false;
        },
        errorLogout: (state) => {
            state.isLogging = false;
            state.isLoggedIn = false;
        }
    },
    initialState: initialState
});

export const { setLogin, startLogin, successLogin, errorLogin, startLogout, successLogout, errorLogout } = authSlice.actions;

export default authSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';
import { getCookie, removeCookie, setCookie } from '../../utils/cookies.js';

let initialTheme;

if (getCookie('cookieConsent') === 'accepted') {
    initialTheme = getCookie('theme'); 
} else {
    removeCookie('theme');
    initialTheme = 'light';
}

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        currentTheme: initialTheme,
    },
    reducers: {
        setTheme: (state, action) => {
            state.currentTheme = action.payload;
                setCookie('theme', action.payload);
            
        },
        toggleTheme: (state) => {
            const newTheme = state.currentTheme === 'light' ? 'dark' : 'light';
            state.currentTheme = newTheme;
                setCookie('theme', newTheme);
            
        }
    },
});

export const selectTheme = (state) => state.theme.currentTheme;

export const { setTheme, toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;

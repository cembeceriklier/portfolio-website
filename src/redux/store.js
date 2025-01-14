import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "../features/theme/themeSlice.js";

const store = configureStore({
    reducer: {
        theme: themeSlice,
    },
});

export default store;

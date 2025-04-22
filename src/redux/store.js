import { configureStore } from "@reduxjs/toolkit";
import interfaceReducer from "./slice/mainReducer.js";

const state = {
    interface: { theme: 'light' },
}

const store = configureStore(
    {
        reducer: {
            interface: interfaceReducer,

        },
        preloadedState: state,

    }
);
export default store;
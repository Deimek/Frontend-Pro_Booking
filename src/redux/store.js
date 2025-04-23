import { configureStore } from "@reduxjs/toolkit";
import interfaceReducer from "./slice/mainReducer.js";
import hotelsReducer from "./slice/hotelsReducer.js";



const state = {
    interface: { theme: 'light' },
    hotels: {
        list: [],
        isLoading: false,
    },
}

const store = configureStore(
    {
        reducer: {
            interface: interfaceReducer,
            hotels: hotelsReducer,
        },
        preloadedState: state,

    }
);
export default store;
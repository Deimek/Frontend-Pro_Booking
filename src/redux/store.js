import { configureStore } from "@reduxjs/toolkit";
import interfaceReducer from "./slice/mainReducer.js";
import hotelsReducer from "./slice/hotelsReducer.js";
import destinationReducer from "./slice/destinationReducer.js";
import { createLogger } from 'redux-logger';
const logger = createLogger();



const state = {
    interface: { theme: 'light' },
    hotels: {
        list: [],
        isLoading: false,
    },
    destinations: {
        list: [],
        isLoading: false,
        selectedDestination: null
    },

}

const store = configureStore(
    {
        reducer: {
            interface: interfaceReducer,
            hotels: hotelsReducer,
            destinations: destinationReducer,

        },
        preloadedState: state,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)

    }
);
export default store;
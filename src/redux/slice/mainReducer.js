import { createSlice } from "@reduxjs/toolkit";


const interfaceSlice = createSlice({
    name: 'interface',
    initialState: {
        theme: 'light',
    },
    reducers: {
        setTheme: (state, action) => {
            state.theme = action.payload;
        }
    }
})



export const { setTheme } = interfaceSlice.actions;
const interfaceReducer = interfaceSlice.reducer;
export default interfaceReducer;
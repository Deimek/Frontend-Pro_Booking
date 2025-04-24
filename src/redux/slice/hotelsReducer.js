import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';



export const fetchHotels = createAsyncThunk('hotels/fetchHotels', async () => {

    // const resp = await fetch('/static/db.json');
    // return await resp.json();

    const { data } = await axios.get('./static/db.json');
    return data;

    // let resp = await fetch('/static/db.json');
    // const { hotels } = await resp.json();

    // resp = await fetch('/static/imgs.json');
    // const imgData = await resp.json();

    // hotels.forEach(hotel => {
    //     hotel.url = imgData.find(({ id }) => id === hotel.id)?.url || '';
    // });

    // return hotels;

});

const hotelsSlice = createSlice({
    name: 'hotels',
    initialState: {
        list: [],
        isLoading: false
    },
    extraReducers: builder => {
        builder.addCase(fetchHotels.pending, (prevState) => {
            prevState.isLoading = true;
        });
        builder.addCase(fetchHotels.fulfilled, (prevState, { payload }) => {
            prevState.list = payload.hotels;
            prevState.isLoading = false;
        });
    }
});

const hotelsReducer = hotelsSlice.reducer;
export default hotelsReducer;

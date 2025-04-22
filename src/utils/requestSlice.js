import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
    name: 'requests',
    initialState: null,
    reducers: {
        addRequest: (store, action) => action.payload
    },
});

export const{addRequest} = requestSlice.actions;

export default requestSlice.reducer;
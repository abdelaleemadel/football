import { createSlice } from "@reduxjs/toolkit";

let initialState = { filtered: [], search: '' }

const filterCountriesSlice = createSlice({
    name: 'filterCountriesSlice',
    initialState,
    reducers: {
        initiateFilter: (state, action) => {
            const { countries } = action.payload;

        },
        filter: (state, action) => {
            const { searchTerm } = action.payload;
            state.filtered = state.filtered.filter()
        }
    }
})



export const filterCountriesReducer = filterCountriesSlice.reducer;

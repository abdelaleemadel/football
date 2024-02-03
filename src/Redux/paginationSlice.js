import { createSlice } from "@reduxjs/toolkit";
let initialState = { displayed: [], initial: 0, final: 20, countries: [], itemsPerPage: 20, notfiltered: [] }
const paginationSlice = createSlice({
    name: 'paginationSlice',
    initialState,
    reducers: {
        start: (state, action) => {
            const { display, continentId } = action.payload;
            state.countries = display?.filter(country => country.continent_id == continentId);
            state.notfiltered = state.countries;
            state.displayed = state.countries?.slice(state.initial, state.final);
            console.log(`START: initial: ${state.initial}, final: ${state.final}`);
        },
        next: (state, action) => {
            state.initial += 20;
            state.final += 20;
            console.log(` NEXT: initial: ${state.initial}, final: ${state.final}`);
            state.displayed = state.countries?.slice(state.initial, state.final);
        },

        prev: (state, action) => {
            state.initial -= 20;
            state.final -= 20;
            state.displayed = state.countries?.slice(state.initial, state.final);
            console.log(`PREV: initial: ${state.initial}, final: ${state.final}`);
        },
        goToPage: (state, action) => {
            const { initial, final } = action.payload;
            state.initial = initial;
            state.final = final;
            state.displayed = state.countries?.slice(state.initial, state.final);
            console.log(`GOTO PAGE: initial: ${state.initial}, final: ${state.final}`);
        },
        searchCountries: (state, action) => {
            const { searchTerm } = action.payload;
            state.countries = state.notfiltered?.filter(country => country?.name?.toLowerCase().includes(searchTerm?.toLowerCase()));
            state.displayed = state.countries.slice(0, state.itemsPerPage)
        }
    }
})

export const paginationReducer = paginationSlice.reducer;
export const { next, prev, start, goToPage, searchCountries } = paginationSlice.actions
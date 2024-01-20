import { createSlice } from "@reduxjs/toolkit";
let initialState = { displayed: [], initial: 0, final: 20 }
const paginationSlice = createSlice({
    name: 'paginationSlice',
    initialState,
    reducers: {
        start: (state) => {
            state.displayed = []
        },
        next: (state, action) => {
            const { display } = action.payload;
            state.initial += 20;
            state.final += 20;
            console.log(state.final, state.length);
            state.displayed = display?.slice(state.initial, state.final);
        },

        prev: (state, action) => {
            const { display } = action.payload;
            state.initial -= 20;
            state.final -= 20;
            state.displayed = display?.slice(state.initial, state.final)
        },
        goToPage: (state, action) => {
            const { display, initial, final } = action.payload;
            state.initial = initial;
            state.final = final;
            state.displayed = display?.slice(state.initial, state.final)
        }

    }
})

export const paginationReducer = paginationSlice.reducer;
export const { next, prev, start, goToPage } = paginationSlice.actions
import { createSlice } from "@reduxjs/toolkit";

let initialState = { displayed: [], notfiltered: [] }
const sortSlice = createSlice({
    name: 'sortSlice',
    initialState,
    reducers: {
        startSorting: (state, action) => {
            let { display } = action.payload;
            state.notfiltered = display;
            state.displayed = display;
        },
        deSort: (state) => {
            state.displayed = state.notfiltered;
        },
        sortAlphabetical: (state, action) => {
            let { order } = action.payload;

            state.displayed = state.displayed?.toSorted((a, b) => {
                let nameA = a["display_name"]?.toLowerCase();
                let nameB = b["display_name"]?.toLowerCase();
                if (nameA < nameB) return -1 * order;
                if (nameA > nameB) return 1 * order;
                return 0;
            })
        },
        sortAge: (state, action) => {
            let { order } = action.payload;

            state.displayed = state.displayed?.toSorted((a, b) => {
                let birthdateA = a["birthdate"]?.split('/').reverse().join('/');
                let birthdateB = b["birthdate"]?.split('/').reverse().join('/');

                if (a["birthdate"] === null && b["birthdate"] === null) return 0;
                if (a["birthdate"] === null) return 1;
                if (b["birthdate"] === null) return -1;
                if (birthdateA < birthdateB) return -1 * order;
                if (birthdateA > birthdateB) return 1 * order;
                return 0;
            })
        },

        searchPlayers: (state, action) => {
            const { searchTerm } = action.payload;
            state.displayed = state.notfiltered?.filter(player => player?.display_name?.toLowerCase().includes(searchTerm?.toLowerCase()))
        }


    }
})

export const sortReducer = sortSlice.reducer;
export const { startSorting, sortAlphabetical, sortAge, searchPlayers, deSort } = sortSlice.actions;
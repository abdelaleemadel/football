import { createSlice } from "@reduxjs/toolkit";

let initialState = { displayed: [] }
const sortSlice = createSlice({
    name: 'sortSlice',
    initialState,
    reducers: {
        startSorting: (state, action) => {
            let { display } = action.payload;
            state.displayed = display;
            console.log(state.displayed?.slice(0, 25));
        },
        sortAlphabetical: (state, action) => {
            let { order } = action.payload;
            console.log('hello');
            console.log(state.displayed?.slice(0, 25));
            state.displayed = state.displayed.toSorted((a, b) => {
                let nameA = a["display_name"].toLowerCase();
                let nameB = b["display_name"].toLowerCase();
                if (nameA < nameB) return -1 * order;
                if (nameA > nameB) return 1 * order;
                return 0;
            })
        },
        sortAge: (state, action) => {
            let { order } = action.payload;
            console.log(`action:`, action, typeof order);

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
        }


    }
})

export const sortReducer = sortSlice.reducer;
export const { startSorting, sortAlphabetical, sortAge } = sortSlice.actions;
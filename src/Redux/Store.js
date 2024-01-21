import { configureStore } from "@reduxjs/toolkit";
import { paginationReducer } from "./paginationSlice";
import { sortReducer } from "./sortSlice";

export const store = configureStore({
    reducer: {
        pagination: paginationReducer,
        sort: sortReducer
    }
})
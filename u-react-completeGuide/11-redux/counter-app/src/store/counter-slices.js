import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
    showCounter: true
}

const counterSlice = createSlice({
    name: 'conter',
    initialState: initialState,
    reducers: {
        increment(state, action) {
            state.value = state.value + action.payload;
        },
        decrement(state, action) {
            state.value = state.value - action.payload;
        },
        toggl(state) {
            state.showCounter = !state.showCounter;
        }
    }
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
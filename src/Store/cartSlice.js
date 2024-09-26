import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        add(state, action){
            state.items.push(action.payload);
        },
        remove(state, action){
            const index = state.items.findIndex(item => item.id === action.payload);
            if (index !== -1) {
                state.items.splice(index, 1);
            }
        }
    }
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
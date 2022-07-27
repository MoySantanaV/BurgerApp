import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
    countDoubleCheese: number,
    countBacon: number,
}

const initialState: CounterState = {
    countDoubleCheese: 0,
    countBacon: 0
  }

export const counterSlice= createSlice({
    name: 'count',
    initialState,
    reducers:{
        incrementDoubleCheese: (state) => {
            state.countDoubleCheese += 1
        },
        decrementDoubleCheese: (state) => {
            state.countDoubleCheese -= 1
        },
        incrementCountBacon: (state) => {
            state.countBacon += 1
        },
        decrementCountBacon: (state) => {
            state.countBacon -= 1
        }
    }
});
/* agregar productos y agregar las ordenes */

export const {incrementDoubleCheese, decrementDoubleCheese, incrementCountBacon, decrementCountBacon} = counterSlice.actions;

export default counterSlice.reducer

import { createSlice } from "@reduxjs/toolkit";

interface ModeState {
  mode: boolean;
}

const initialState: ModeState = {
  mode: false,
};

export const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    changeMode: (state: ModeState, action: { payload: boolean }) => {
      state.mode = !action.payload;
    },
  },
});

export const { changeMode } = modeSlice.actions;
export default modeSlice.reducer;
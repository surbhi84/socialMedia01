import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface miscTypes {
  error: string;
}
const initialState: miscTypes = {
  error: "",
};

export const miscSlice = createSlice({
  name: "misc",
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      return state;
    },
  },
});

export const { setError } = miscSlice.actions;
export default miscSlice.reducer;

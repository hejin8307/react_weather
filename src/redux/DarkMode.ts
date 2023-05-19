import {createSlice} from '@reduxjs/toolkit';

interface DarkModeType {
  value: boolean;
}

const initialState: DarkModeType = {
  value: false,
};

// reducer
const darkModeReducer = createSlice({
  name: 'darkModeReducer',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.value = !state.value;
    },
  },
});

export const {toggleDarkMode} = darkModeReducer.actions;

const DarkModeReducer = darkModeReducer.reducer;

export default DarkModeReducer;

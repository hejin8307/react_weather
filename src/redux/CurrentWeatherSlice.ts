import {createSlice} from '@reduxjs/toolkit';
import {AxiosError} from 'axios';

export interface CurrentWeatherType {
  loading: boolean;
  data: (number | string)[] | null;
  error: AxiosError | null;
}

const initialState: CurrentWeatherType = {
  loading: false,
  data: null,
  error: null,
};

// reducer
const currentWeatherReducer = createSlice({
  name: 'currentWeatherReducer',
  initialState,
  reducers: {
    loading: (state) => {
      state.loading = true;
    },
    success: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    fail: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const currentWeatherActions = currentWeatherReducer.actions;

const CurrentWeatherReducer = currentWeatherReducer.reducer;

export default CurrentWeatherReducer;

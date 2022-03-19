import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  weather: [],
  loading: false,
  error: null,
}

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        setWeatherData: (state, action) => {
          state.weather = action.payload;
        },
        changeLoading: (state, action) => {
          state.loading = action.payload;
        },
        setError: (state, action) => {
          state.error = action.payload;
        },
    },
})

// Action creators are generated for each case reducer function
export const { setWeatherData, changeLoading, setError } = weatherSlice.actions;

export default weatherSlice.reducer;
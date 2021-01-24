/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface HomeState {
  loading: boolean;
  data: []
}

const initialState: HomeState = {
  loading: false,
  data: [],
};

export const homeSlice = createSlice({
  name: 'themeReducer',
  initialState,
  reducers: {
    startFetchingRickAndMortyCharacter: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setRickAndMortyCharacterData: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
  },
});

export const { setRickAndMortyCharacterData, startFetchingRickAndMortyCharacter } = homeSlice.actions;

export default homeSlice.reducer;

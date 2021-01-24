/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface HomeState {
  loading: boolean;
  isFetching: boolean;
  data: []
}

const initialState: HomeState = {
  loading: false,
  isFetching: true,
  data: [],
};

export const homeSlice = createSlice({
  name: 'themeReducer',
  initialState,
  reducers: {
    setIsLoadingStatus: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    startFetchingRickAndMortyCharacter: (state) => state,
    setRickAndMortyCharacterData: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
  },
});

export const { setRickAndMortyCharacterData, startFetchingRickAndMortyCharacter, setIsLoadingStatus } = homeSlice.actions;

export default homeSlice.reducer;

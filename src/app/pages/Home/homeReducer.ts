/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface HomeState {
  loading: boolean;
  isFetching: boolean;
  data: [];
  locationId: number | null;
  locationName: string | null;
}

const initialState: HomeState = {
  loading: false,
  isFetching: true,
  data: [],
  locationId: null,
  locationName: null,
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
    startFetchingRickAndMortyLocation: (state, action: PayloadAction<number>) => {
      state.locationId = action.payload;
    },
    setRickAndMortyCharacterData: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
  },
});

export const { setRickAndMortyCharacterData, startFetchingRickAndMortyCharacter, setIsLoadingStatus } = homeSlice.actions;

export default homeSlice.reducer;

/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface HomeState {
  loading: boolean;
  isFetching: boolean;
  data: [];
  locationId: string | null;
  location: [];
}

const initialState: HomeState = {
  loading: false,
  isFetching: true,
  data: [],
  locationId: '',
  location: [],
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
    startFetchingRickAndMortyLocation: (state, action: PayloadAction<string>) => {
      state.locationId = action.payload;
    },
    setRickAndMortyCharacterLocation: (state, action: PayloadAction<any>) => {
      state.location = action.payload;
    },
  },
});

export const {
  setRickAndMortyCharacterData,
  startFetchingRickAndMortyCharacter,
  setIsLoadingStatus,
  startFetchingRickAndMortyLocation,
  setRickAndMortyCharacterLocation,
} = homeSlice.actions;

export default homeSlice.reducer;

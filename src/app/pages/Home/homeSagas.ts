import {
  takeEvery, all, call, put,
} from 'redux-saga/effects';
import { fetchWrapper } from '../../components/FetchWrapper/index';
import { setIsLoadingStatus, setRickAndMortyCharacterData, startFetchingRickAndMortyCharacter } from './homeReducer';

// eslint-disable-next-line import/prefer-default-export
function* getRickAndMortyCharacters() {
  const endPoint = 'character';
  try {
    const response = yield call(fetchWrapper, endPoint);
    yield put(setIsLoadingStatus(false));
    yield put(setRickAndMortyCharacterData(response));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('error', error);
  }
}

export default function* root() {
  yield all([
    takeEvery(startFetchingRickAndMortyCharacter.type, getRickAndMortyCharacters),
  ]);
}

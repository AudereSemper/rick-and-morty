import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startFetchingRickAndMortyCharacter } from './homeReducer';

const Home = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: any) => state.homeSliceReducer.loading);
  useEffect(() => {
    dispatch(startFetchingRickAndMortyCharacter(true));
  }, [dispatch]);

  return (
    <div>
      {
        isLoading ? 'Caricamento' : 'Dati'
      }
    </div>
  );
};

export default Home;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from 'src/app/components/Pagination';
import { startFetchingRickAndMortyCharacter, setIsLoadingStatus } from './homeReducer';

const Home = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: any) => state.homeSliceReducer.loading);
  useEffect(() => {
    dispatch(setIsLoadingStatus(true));
    dispatch(startFetchingRickAndMortyCharacter());
  }, []);

  return (
    <div>
      {
        isLoading ? 'Caricamento' : <Pagination />
      }
    </div>
  );
};

export default Home;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';
import List from 'src/app//components/List/index';
import {
  StyledPaginateContainer,
  StyledHomeContainer,
  StyledListContainer,
} from './styles';
import { startFetchingRickAndMortyCharacter, setIsLoadingStatus } from './homeReducer';

const Home = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: any) => state.homeSliceReducer.loading);
  const rickAndMortyCharacterData = useSelector((state: any) => state.homeSliceReducer.data);
  const { info } = rickAndMortyCharacterData;
  const { results } = rickAndMortyCharacterData;
  const { pages } = info || {};
  const readyToLoad = isLoading && rickAndMortyCharacterData.info && rickAndMortyCharacterData.results;

  useEffect(() => {
    dispatch(setIsLoadingStatus(true));
    dispatch(startFetchingRickAndMortyCharacter());
  }, []);

  return (
    <>
      {
        readyToLoad ? 'Caricamento'
          : (
            <StyledHomeContainer>
              <StyledListContainer>
                <List list={results} />
              </StyledListContainer>
              <StyledPaginateContainer>
                <ReactPaginate
                  previousLabel="previous"
                  nextLabel="next"
                  breakLabel="..."
                  breakClassName="break-me"
                  pageCount={pages}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  // onPageChange={this.handlePageClick}
                  containerClassName="pagination"
                  subContainerClassName="pages pagination"
                  activeClassName="active"
                />
              </StyledPaginateContainer>
            </StyledHomeContainer>
          )
      }
    </>
  );
};

export default Home;

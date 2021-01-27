import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';
import List from 'src/app/components/List';
import {
  StyledPaginateContainer,
  StyledHomeContainer,
  StyledListContainer,
  StyledRow,
} from './styles';
import {
  startFetchingRickAndMortyCharacter,
  setIsLoadingStatus,
  startFetchingRickAndMortyCharacterWithPage,
} from './homeReducer';

const Home = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: any) => state.homeSliceReducer.loading);
  const rickAndMortyCharacterData = useSelector((state: any) => state.homeSliceReducer.data);
  const { info } = rickAndMortyCharacterData;
  const { results } = rickAndMortyCharacterData;
  const resultsReady = results !== undefined;
  const { pages } = info || {};
  const Loading = isLoading && rickAndMortyCharacterData.info && rickAndMortyCharacterData.results;

  const chunk = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (v, i) => arr.slice(i * size, i * size + size));

  useEffect(() => {
    dispatch(setIsLoadingStatus(true));
    dispatch(startFetchingRickAndMortyCharacter());
  }, []);

  const rowsWithContent: any = resultsReady && chunk(results, 3);

  const changePage = useCallback(
    (values) => {
      const { selected } = values;
      dispatch(startFetchingRickAndMortyCharacterWithPage(selected));
    },
    [],
  );

  console.log('sei qua', resultsReady);
  console.log('sei qua', isLoading);
  console.log('sei qua', rickAndMortyCharacterData.info && rickAndMortyCharacterData.results);
  console.log('sei qua', resultsReady);

  return (
    <>
      {
        Loading ? 'Caricamento'
          : (
            <StyledHomeContainer>
              <StyledListContainer>
                {
                  resultsReady ? rowsWithContent.map(
                    (singleRow) => (
                      <StyledRow key={singleRow[0].name}>
                        <List list={singleRow} />
                      </StyledRow>
                    ),
                  ) : 'loading'
                }
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
                  onPageChange={changePage}
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

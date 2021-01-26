import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';
import List from 'src/app/components/List';
import {
  StyledPaginateContainer,
  StyledHomeContainer,
  StyledListContainer,
  StyledRow,
} from './styles';
import { startFetchingRickAndMortyCharacter, setIsLoadingStatus } from './homeReducer';

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

  const rowsWithContent: any = resultsReady && chunk(results, 5);

  console.log('sei qua', rowsWithContent);

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
                      <StyledRow>
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

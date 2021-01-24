import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';
import { StyledPaginateContainer } from './styles';
import { startFetchingRickAndMortyCharacter, setIsLoadingStatus } from './homeReducer';

const Home = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: any) => state.homeSliceReducer.loading);
  const rickAndMortyCharacterData = useSelector((state: any) => state.homeSliceReducer.data);
  const { info } = rickAndMortyCharacterData;
  const { pages } = info || {};

  console.log('sei qua', info);
  useEffect(() => {
    dispatch(setIsLoadingStatus(true));
    dispatch(startFetchingRickAndMortyCharacter());
  }, []);

  return (
    <>
      {
        isLoading && rickAndMortyCharacterData.info ? 'Caricamento'
          : (
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
          )
      }
    </>
  );
};

export default Home;

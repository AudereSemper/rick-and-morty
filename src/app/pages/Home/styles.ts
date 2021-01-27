import styled from 'styled-components';

export const StyledHomeContainer = styled.div``;

export const StyledRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledListContainer = styled.div`
  height: 90wh;
  display: 'flex';
`;

export const StyledPaginateContainer = styled.div`
  .pagination {
    padding-top: 1rem;
    text-align: center;
  }
  
  .pagination > ul {
      padding: 0;
      margin: 0;
  }

  .pagination li {
      display: inline-block;
  }

  .pagination li > a {
      padding: 0.5rem;
      margin: 1px;
      color: blue;
      display: inline-block;
      cursor: pointer;
      background-color: #fff;
      border: 1px solid #d8eef5;
      border-radius: 2px;
      min-width: 1rem;
  }

  .pagination li > a:focus {
      outline: none;
      background-color: #ff9;
      border: 1px solid blue;
  }

  .pagination li > a:active {
      outline: none;
      background-color: #fff;
      border: 1px solid #d8eef5;
  }
`;

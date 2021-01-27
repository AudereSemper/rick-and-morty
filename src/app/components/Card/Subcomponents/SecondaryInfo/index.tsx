import React from 'react';
import { useSelector } from 'react-redux';
import {
  SubTitle,
} from '../../styles';

const SecondaryInfo = ({
  status,
  gender,
  origin,
  episode,
}) => {
  const isDarkTheme = useSelector((state: any) => state.themeSliceReducer.theme) === 'dark';
  console.log('sei qua', origin, episode);
  return (
    <>
      <SubTitle isDarkTheme={isDarkTheme}>
        Status:
        {' '}
        {status}
      </SubTitle>
      <SubTitle isDarkTheme={isDarkTheme}>
        Gender:
        {' '}
        {gender}
      </SubTitle>
      <SubTitle isDarkTheme={isDarkTheme}>
        Origin:
        {' '}
        {origin.name}
      </SubTitle>
      {/* <SubTitle isDarkTheme={isDarkTheme}>
        {episode}
      </SubTitle> */}
      {' '}
    </>
  );
};

export default SecondaryInfo;

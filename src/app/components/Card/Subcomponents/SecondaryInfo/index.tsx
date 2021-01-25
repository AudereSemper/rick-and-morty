import React from 'react';
import { useSelector } from 'react-redux';
import {
  SubTitle,
} from '../../styles';

const MainInfo = ({
  status,
  gender,
  origin,
  location,
  episode,
}) => {
  const isDarkTheme = useSelector((state: any) => state.themeSliceReducer.theme) === 'dark';
  console.log('sei qua', origin, location, episode);
  return (
    <>
      <SubTitle isDarkTheme={isDarkTheme}>
        {status}
      </SubTitle>
      <SubTitle isDarkTheme={isDarkTheme}>
        {gender}
      </SubTitle>
      {/* <SubTitle isDarkTheme={isDarkTheme}>
        {origin}
      </SubTitle> */}
      {/* <SubTitle isDarkTheme={isDarkTheme}>
        {location}
      </SubTitle>
      <SubTitle isDarkTheme={isDarkTheme}>
        {episode}
      </SubTitle> */}
    </>
  );
};

export default MainInfo;

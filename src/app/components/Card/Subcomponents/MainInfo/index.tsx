import React from 'react';
import { useSelector } from 'react-redux';
import {
  Shape,
  Image,
  MainTitle,
  SubTitle,
} from '../../styles';

const MainInfo = ({
  image,
  name,
  species,
  type,
}) => {
  const isDarkTheme = useSelector((state: any) => state.themeSliceReducer.theme) === 'dark';

  return (
    <>
      <Shape isDarkTheme={isDarkTheme}>
        <Image isDarkTheme={isDarkTheme} imageUrl={image} />
      </Shape>

      <MainTitle isDarkTheme={isDarkTheme}>
        {name}
      </MainTitle>
      <SubTitle isDarkTheme={isDarkTheme}>
        {species}
      </SubTitle>
      <SubTitle isDarkTheme={isDarkTheme}>
        {type}
      </SubTitle>
    </>
  );
};

export default MainInfo;

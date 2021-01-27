import React from 'react';
import { useSelector } from 'react-redux';
import {
  MainContainer,
  MainTitle,
  Paragraph,
} from './styles';

const Curiosity = () => {
  const isDarkTheme = useSelector((state: any) => state.themeSliceReducer.theme) === 'dark';

  return (
    <MainContainer>
      <MainTitle isDarkTheme={isDarkTheme}>
        1. Dov’è Wally?
      </MainTitle>
      <Paragraph isDarkTheme={isDarkTheme}>
        Nell’episodio “Total Rickall“, la scena con tutti i personaggi creati dai
        parassiti alieni è un omaggio alla  serie di libri per bambini Dov’è Wally?,
        popolarissimo personaggio nei Paesi anglofoni.
      </Paragraph>
    </MainContainer>
  );
};

export default Curiosity;

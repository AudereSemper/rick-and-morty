import React from 'react';
// import IrickAndMortyCharacter from './type';
import {
  CardContainer,
  Shape,
  Image,
  MainTitle,
  SubTitle,
} from './styles';

const Card = ({ characterInfo }: any) => {
  console.log('sei qua', characterInfo);
  return (
    <>
      <CardContainer>
        <Shape>
          <Image />
        </Shape>
        <MainTitle>
          test
        </MainTitle>
        <SubTitle>
          test
        </SubTitle>
      </CardContainer>
    </>
  );
};

export default Card;

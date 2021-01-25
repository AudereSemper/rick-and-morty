import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import IrickAndMortyCharacter from './type';
import MainInfo from './Subcomponents/MainInfo';
import SecondaryInfo from './Subcomponents/SecondaryInfo';
import {
  CardContainer,
  MoreInfo,
} from './styles';

const Card = ({ characterInfo }: IrickAndMortyCharacter) => {
  const [moreInfo, setMoreInfo] = useState(false);
  const buttonText = moreInfo ? 'Close' : 'More info...';
  const isDarkTheme = useSelector((state: any) => state.themeSliceReducer.theme) === 'dark';

  const {
    image,
    name,
    status,
    species,
    type,
    gender,
    origin,
    location,
    episode,
  } = characterInfo;

  return (
    <>
      <CardContainer isDarkTheme={isDarkTheme}>
        {moreInfo ? (
          <SecondaryInfo
            status={status}
            gender={gender}
            origin={origin}
            location={location}
            episode={episode}
          />
        )
          : (
            <MainInfo
              image={image}
              name={name}
              species={species}
              type={type}
            />
          )}

        <MoreInfo
          isDarkTheme={isDarkTheme}
          onClick={() => setMoreInfo(!moreInfo)}
        >
          {buttonText}
        </MoreInfo>

      </CardContainer>
    </>
  );
};

export default Card;

import React from 'react';
import CustomButton from 'src/app/components/CustomButton';
import { useSelector, useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import MenuContainer from './styles';
import MenuVoices from './constants';
import Voice from './types';

export default function index() {
  const dispatch = useDispatch();
  const location = useSelector((state: any) => state.router.location);

  const menuAction = (page: {}) => {
    console.log('sei qua', page);
    dispatch(push(`/${page}`));
  };

  const currentPath = location.pathname;

  const voices = [
    MenuVoices.home,
    MenuVoices.myCharacters,
    MenuVoices.about,
  ];

  return (
    <MenuContainer>
      {voices.map(({ text, value, regexp }: Voice) => (
        <CustomButton
          key={text}
          text={text.toUpperCase()}
          // textColor={regexp.test(currentPath) ? 'white' : 'black'}
          selected={regexp.test(currentPath)}
          onClick={() => menuAction(value)}
        />
      ))}
    </MenuContainer>
  );
}

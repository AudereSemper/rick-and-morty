import React from 'react';
import { ButtonContainer, Button } from './styles';
import CustomButtonProps from './types';

export default function CustomButton({
  text,
  bgColor,
  onClick,
  selected,
}: CustomButtonProps) {
  return (
    <ButtonContainer selected={selected || false}>
      <Button bgColor={bgColor} onClick={onClick}>
        {text}
      </Button>
    </ButtonContainer>
  );
}

import styled from 'styled-components';

interface ButtonProps {
  bgColor?: string,
  textColor?: string,
}

interface ButtonContainerProps {
  selected: boolean;
}

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    border-bottom: ${({ selected }: ButtonContainerProps) => (selected ? '5px solid green' : 'none')} ;
`;

export const Button = styled.button`
  margin: 10px;
  background-color: ${(props: ButtonProps) => (props.bgColor ? props.bgColor : 'transparent')};
  cursor: pointer;
  color: ${(props: ButtonProps) => (props.textColor ? props.textColor : 'black')};
  border-radius: 5px;
  width: 100px;
  height: 30px;
  border:none;
  outline: 0;
  &:active {
    background-color: grey;
  }
`;

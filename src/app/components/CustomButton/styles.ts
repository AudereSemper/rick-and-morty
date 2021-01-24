import styled from 'styled-components';

interface ButtonProps {
  bgColor?: string,
  textColor?: string,
}

interface ButtonContainerProps {
  withMarginTop?: boolean;
  withBorder?: boolean;
  selected: boolean;
}

export const ButtonContainer = styled.div`
    margin-top: ${(props: ButtonContainerProps) => (props.withMarginTop ? '50px' : '0')};
    display: flex;
    justify-content: center;
    border: ${(props: ButtonContainerProps) => (props.withBorder ? '1px solid #EFEFEF' : '0')};
    background-color: ${({ selected }) => (selected ? '#582828' : 'transparent')};
`;

export const Button = styled.button`
  background-color: ${(props: ButtonProps) => (props.bgColor ? props.bgColor : '#1565c0')};
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

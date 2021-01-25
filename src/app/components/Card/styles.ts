import styled from 'styled-components';

export const CardContainer = styled.div<{isDarkTheme: boolean}>`
  margin: 15px;
  height: 450px;
  width: 300px;
  box-shadow: ${({ isDarkTheme }) => (isDarkTheme ? '0 10px 20px white' : '0 10px 20px black')}; ;
  background-size: cover;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;     
`;

export const Shape = styled.div<{isDarkTheme: boolean}>`
  height: 250px;
  width: 400px;
  background-color: ${({ isDarkTheme }) => (isDarkTheme ? 'white' : 'black')};;
  margin-left: -20px;
  position: relative;
  top: -80px;
  box-shadow: ${({ isDarkTheme }) => (isDarkTheme ? '0 2px 15px white' : '0 2px 15px black')};
  transform: rotate(25deg);
`;

export const Image = styled.div<{isDarkTheme: boolean, imageUrl: string}>`
  height: 100px;
  width: 100px;
  background-image: ${({ imageUrl }) => (imageUrl && `url(${imageUrl})`)};
  background-size: cover;
  border-radius: 50%;
  border: 8px solid white;
  position: relative;
  top: 200px;
  margin-left: 170px;
  box-shadow: 0 2px 15px rgb(58, 54, 54);
  transform: rotate(-20deg);
`;

export const MainTitle = styled.h3<{isDarkTheme: boolean}>`
  color: ${({ isDarkTheme }) => (isDarkTheme ? 'white' : 'black')};
  margin-bottom: 10px;
`;

export const SubTitle = styled.p<{isDarkTheme: boolean}>`
  padding-left: 30px;
  padding-right: 30px;
  color: ${({ isDarkTheme }) => (isDarkTheme ? 'white' : 'black')};
`;

export const MoreInfo = styled.button<{isDarkTheme: boolean}>`
  background: transparent;
  border-radius: 5px;
  outline: 0px;
  border: ${({ isDarkTheme }) => (isDarkTheme ? '1px solid white' : '1px solid black')};
  color: ${({ isDarkTheme }) => (isDarkTheme ? 'white' : 'black')};
`;

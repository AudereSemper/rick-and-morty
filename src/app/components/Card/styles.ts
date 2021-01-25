import styled from 'styled-components';

export const CardContainer = styled.div`
  margin: 15px;
  height: 450px;
  width: 300px;
  box-shadow: 0 10px 20px black;
  background-size: cover;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;
`;

export const Shape = styled.div`
  height: 250px;
  width: 400px;
  background-color: black;
  margin-left: -20px;
  position: relative;
  top: -80px;
  box-shadow: 0 2px 15px black;
  transform: rotate(25deg);
`;

export const Image = styled.div`
  height: 100px;
  width: 100px;
  background-image: url('https://images.wallpaperscraft.com/image/man_silhouette_night_barbed_wire_115312_1280x720.jpg');
  background-size: cover;
  border-radius: 50%;
  border: 8px solid white;
  position: relative;
  top: 200px;
  margin-left: 170px;
  box-shadow: 0 2px 15px rgb(58, 54, 54);
  transform: rotate(-20deg);
`;

export const MainTitle = styled.h3`
      margin-bottom: 10px;
`;

export const SubTitle = styled.p`
  padding-left: 30px;
  padding-right: 30px;
  color: rgb(105, 100, 109);
`;

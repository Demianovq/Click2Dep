import styled from 'styled-components';

export const CarouselItem = styled('div')`
  width: 600px;
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  align-items: center;
  font-weight: 500;
  font-size: 16px;

  font-family: 'Montserrat', sans-serif;
  letter-spacing: 0.08em;
  line-height: 1.71;
`;

export const CarouselBlock = styled('div')`
  background-color: #f0f8ff;
  position: relative;
  border-radius: 45px;
  overflow: hidden;
  padding-top: 50px;
  padding-bottom: 50px;
`;

export const CarouselTitle = styled('h3')`
  font-family: 'Libre Baskerville', sans-serif;
  font-weight: 500;
  font-size: 65px;
  line-height: calc(60 / 44);
  text-align: center;
  color: #f0f8ff;

  display: block;

  display: block;

  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
`;
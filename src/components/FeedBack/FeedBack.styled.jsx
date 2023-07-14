import styled from 'styled-components';

export const CarouselItem = styled('div')`
  width: 600px;
  display: flex;
  text-align: center;
  display: flex;
  flex-direction: column;

  margin-left: auto;
  margin-right: auto;

  font-weight: 500;
  font-size: 16px;

  font-family: 'Montserrat', sans-serif;
  letter-spacing: 0.08em;
  line-height: 1.71;

  @media screen and (max-width: 767px) {
    width: 200px;
    font-size: 12px;
  }

  @media screen and (min-width: 430px) and (max-width: 767px) {
    width: 320px;
    font-size: 16px;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    width: 580px;
    font-size: 16px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 18px;
  }
`;

export const CarouselBlock = styled('div')`
  background-color: #f0f8ff;
  position: relative;
  border-radius: 45px;
  overflow: hidden;
  padding-top: 50px;
  padding-bottom: 50px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 767px) {
    min-width: 300px;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    width: 738px;
  }
`;

export const CarouselTitle = styled('h3')`
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  line-height: calc(60 / 44);
  text-align: center;
  color: #f0f8ff;
  text-transform: uppercase;

  display: block;

  display: block;

  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;

  @media screen and (max-width: 767px) {
    font-size: 50px;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    font-size: 55px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 65px;
  }
`;

export const CarouselName = styled('b')`
  margin-bottom: 10px;
`;

import styled from 'styled-components';

export const AboutStyledBlock = styled('div')`
  display: flex;
  background-color: #0793fa;

  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 767px) {
    min-width: 300px;
    display: block;

    margin: 0 0;
    &:not(:last-child) {
      display: flex;
      flex-direction: column-reverse;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    width: 738px;
  }

  @media screen and (min-width: 1200px) {
    width: 1170px;
  }
`;

export const AboutImg = styled('img')`
  @media screen and (max-width: 767px) {
    min-width: 300px;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    width: 530px;
  }
  @media screen and (min-width: 1200px) {
    width: 585px;
  }
`;

export const AboutTitle = styled('h2')`
  font-weight: 500;
  line-height: calc(60 / 44);
  text-align: center;
  background-color: linear-gradient(to right, black 50%, white 50%);
  display: block;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  color: #0793fa;

  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;

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

export const AboutText = styled('p')`
  font-weight: 500;
  font-size: 19px;
  line-height: calc(60 / 44);
  text-align: center;
  color: #f0f8ff;
  display: block;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 0.03em;
  display: block;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.71;

  margin-top: 30px;

  @media screen and (max-width: 767px) {
    max-width: 450px;
    font-size: 23px;
    padding-bottom: 30px;
    padding-top: 10px;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    font-size: 12px;
    width: 530px;
  }

  @media screen and (min-width: 1200px) {
    width: 530px;
  }
`;

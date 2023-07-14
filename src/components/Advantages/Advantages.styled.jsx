import styled from 'styled-components';

export const AdvantagesTitle = styled('h2')`
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;

  line-height: calc(60 / 44);
  text-align: center;
  text-transform: uppercase;
  color: #0793fa;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;

  @media screen and (max-width: 767px) {
    font-size: 45px;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    font-size: 55px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 65px;
  }
`;

export const AdvantagesBlock = styled('div')`
  flex-wrap: wrap;
  display: flex;
  gap: 30px;
  padding-top: 7px;

  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 767px) {
    display: block;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    width: 738px;
    display: flex;
  }

  @media screen and (min-width: 1200px) {
    width: 1170px;
  }
`;

export const AdvantagesIconsBlock = styled('div')`
  text-align: center;
  align-items: center;

  background-image: radial-gradient(
    circle at -20.44% 56.16%,
    #40f2ff 0,
    #0793fa 50%,
    #003f77 100%
  );

  padding-bottom: 30px;
  transition: transform 0.2s;

  @media screen and (max-width: 767px) {
    min-width: 300px;
    border-radius: 30px;
    &:not(:last-child) {
      margin-bottom: 25px;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    width: 354px;
    border-radius: 30px;
  }

  @media screen and (min-width: 1200px) {
    width: 370px;
    border-radius: 30px;
  }
`;

export const AdvantagesImg = styled('img')`
  margin-left: auto;
  margin-right: auto;
`;

export const AdvantagesItemTitle = styled('p')`
  font-weight: 700;

  line-height: calc(60 / 44);
  text-align: center;
  color: #f0f8ff;
  display: block;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 0.06em;
  display: block;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 767px) {
    font-size: 15px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 21px;
  }
`;

export const AdvantagesItemText = styled('p')`
  font-weight: 500;

  line-height: calc(60 / 44);
  text-align: center;
  color: #f0f8ff;
  display: block;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 0.08em;
  display: block;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.71;
  margin-top: 15px;

  @media screen and (max-width: 767px) {
    font-size: 15px;
    width: 200px;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    font-size: 17px;
    width: 250px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 17px;
    width: 250px;
  }
`;

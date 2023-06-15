import styled from 'styled-components';

const windowInnerHeight = document.documentElement.clientHeight;

export const AdvertiserBlock = styled('div')`
  align-items: center;
  text-align: center;

  @media screen and (max-width: 767px) {
    padding-top: 70px;
    padding-bottom: 50px;
    padding-left: 10px;
    padding-right: 10px;
    align-items: center;
    text-align: center;
  }
  @media screen and (min-width: 768px) and (max-width: 1199px) {
    display: flex;
    gap: 15px;
    padding-bottom: 50px;
  }
  @media screen and (min-width: 1200px) {
    display: flex;
    gap: 15px;
  }
`;

export const AdvertiserTextContentBlock = styled('div')`
  align-items: center;
  text-align: center;
  @media screen and (min-width: 768px) {
    padding-right: 15px;
  }
`;

export const AdvertiserTitle = styled('h2')`
  display: block;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 65px;
  line-height: calc(60 / 44);
  text-align: center;
  color: #0793fa;
  text-transform: uppercase;

  margin-bottom: 40px;

  @media screen and (max-width: 767px) {
    font-size: 45px;
  }

  @media screen and (min-width: 1200px) {
    margin-top: 30px;
  }
`;

export const AdvertiserImg = styled('img')`
  display: block;
  margin-bottom: auto;

  height: ${windowInnerHeight - 77}px;
  @media screen and (max-width: 1199px) {
    display: none;
  }
`;

export const AdvertiserLink = styled('a')`
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 25px;
  line-height: calc(60 / 44);
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  background-color: red;
  padding: 15px 25px;
  position: relative;

  color: #f0f8ff;
  background: #bae498;
  border-radius: 30px;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 60px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 30px;
    transition: all 2s ease;
  }
  &:hover:before {
    width: 100%;
  }
`;

export const AdvertiserText = styled('p')`
  margin-top: 70px;
  font-weight: 500;
  font-size: 21px;
  line-height: calc(60 / 44);
  text-align: center;
  color: #151515;
  display: block;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 0.06em;
  display: block;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 1199px) {
    font-size: 18px;
  }
`;

export const AdvertiserList = styled('ul')`
  display: flex;
  gap: 30px;
  margin-top: 70px;
  justify-content: center;

  @media screen and (max-width: 767px) {
    display: block;
  }
`;

export const AdvertiserItem = styled('li')`
  text-align: center;
  background-image: radial-gradient(
    circle at -20.44% 56.16%,
    #40f2ff 0,
    #0793fa 50%,
    #003f77 100%
  );
  border-radius: 30px;

  @media screen and (max-width: 767px) {
    min-width: 300px;
    &:not(:last-child) {
      margin-bottom: 30px;
    }
  }
  @media screen and (min-width: 768px) {
    width: 186px;
  }
`;

export const AdvertiserItemSvg = styled('img')`
  margin-left: auto;
  margin-right: auto;
  display: block;
`;

export const AdvertiserItemText = styled('p')`
  font-weight: 500;
  font-size: 17px;
  line-height: calc(60 / 44);
  text-align: center;
  color: #f0f8ff;
  display: block;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 0.06em;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-top: 15px;
  padding-bottom: 15px;
`;

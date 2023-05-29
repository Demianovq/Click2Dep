import styled from 'styled-components';

export const AffiliatesBlock = styled('div')`
  display: flex;
  gap: 15px;
  align-items: center;
  text-align: center;
`;

export const AffiliatesTextContentBlock = styled('div')`
  align-items: center;
  text-align: center;
  padding-left: 15px;
`;

export const AffiliatesTitle = styled('h2')`
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 65px;
  line-height: calc(60 / 44);
  text-align: center;
  color: #0793fa;
  text-transform: uppercase;
  margin-top: 30px;
  margin-bottom: 40px;
`;

export const AffiliatesLink = styled('a')`
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

export const AffiliatesText = styled('p')`
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
`;

export const AffiliatesList = styled('ul')`
  display: flex;
  gap: 30px;
  margin-top: 70px;
  justify-content: center;
`;

export const AffiliatesItem = styled('li')`
  width: 186px;
  text-align: center;
  background-image: radial-gradient(
    circle at -20.44% 56.16%,
    #40f2ff 0,
    #0793fa 50%,
    #003f77 100%
  );
  border-radius: 30px;
`;

export const AffiliatesItemSvg = styled('img')`
  margin-left: auto;
  margin-right: auto;
  display: block;
`;

export const AffiliatesItemText = styled('p')`
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

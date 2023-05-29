import styled from 'styled-components';

export const AdvantagesTitle = styled('h2')`
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 65px;
  line-height: calc(60 / 44);
  text-align: center;
  text-transform: uppercase;
  color: #0793fa;

  display: block;

  display: block;

  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
`;

export const AdvantagesBlock = styled('div')`
  flex-wrap: wrap;
  display: flex;
  gap: 30px;
  padding-top: 7px;
  width: 1170px;
  margin-left: auto;
  margin-right: auto;
`;

export const AdvantagesIconsBlock = styled('div')`
  text-align: center;
  align-items: center;
  width: 370px;
  background-image: radial-gradient(
    circle at -20.44% 56.16%,
    #40f2ff 0,
    #0793fa 50%,
    #003f77 100%
  );
  border-radius: 50%;
  padding-bottom: 30px;
  transition: transform 0.2s;
  &:hover,
  &:focus {
    transform: scale(1.05);
    box-shadow: inset 0 0 0 3px #3a7999;
  }
`;

export const AdvantagesImg = styled('img')`
  margin-left: auto;
  margin-right: auto;
`;

export const AdvantagesItemTitle = styled('p')`
  font-weight: 700;
  font-size: 21px;
  line-height: calc(60 / 44);
  text-align: center;
  color: #f0f8ff;
  display: block;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 0.06em;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

export const AdvantagesItemText = styled('p')`
  font-weight: 500;
  font-size: 17px;
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
  width: 250px;
`;

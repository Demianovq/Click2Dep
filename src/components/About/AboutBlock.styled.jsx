import styled from 'styled-components';

export const AboutStyledBlock = styled('div')`
  display: flex;
  background-color: #0793fa;
  width: 1170px;
  margin-left: auto;
  margin-right: auto;
`;

export const AboutTitle = styled('h2')`
  font-weight: 500;
  font-size: 65px;
  line-height: calc(60 / 44);
  text-align: center;
  background-color: linear-gradient(to right, black 50%, white 50%);
  display: block;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  color: #0793fa;

  display: block;

  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
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
  width: 530px;
  margin-top: 30px;
`;
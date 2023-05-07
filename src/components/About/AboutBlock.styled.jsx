import styled from 'styled-components';

export const AboutStyledBlock = styled('div')`
  display: flex;
`;

export const AboutTitle = styled('h2')`
  font-weight: 900;
  font-size: 44px;
  line-height: calc(60 / 44);
  text-align: center;
  text-shadow: 1px 1px 0 black, 1px -1px 0 black, -1px 1px 0 black,
    -1px -1px 0 black;
  color: white;
  display: block;
  width: 696px;
  font-family: 'Morganite';
  letter-spacing: 0.06em;
  text-transform: uppercase;
  display: block;

  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
`;

export const AboutText = styled('p')`
  font-weight: 500;
  font-size: 20px;
  line-height: calc(60 / 44);
  text-align: center;
  color: black;
  display: block;
  font-family: 'Morganite';
  letter-spacing: 0.06em;
  display: block;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.71;
  width: 530px;
  margin-top: 30px;
`;

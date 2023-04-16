import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeroTitle = styled('h1')`
  font-weight: 900;
  font-size: 44px;
  line-height: calc(60 / 44);
  text-align: center;
  color: #3d3d3d;
  display: block;
  width: 696px;
  font-family: 'Morganite';

  letter-spacing: 0.06em;
  text-transform: uppercase;
  display: block;
  text-shadow: 2px 2px 3px pink;

  margin-left: auto;
  margin-right: auto;
`;

export const HeroSection = styled('section')`
  padding-top: 300px;
  padding-bottom: 300px;
  /* background-image: linear-gradient(to left, #553c9a, #b393d3); */
  background-color: #ffffff;
`;

export const HeroBtn = styled('button')`
  border: none;
`;

export const StyledHeroLink = styled(NavLink)`
  display: block;
  text-decoration: none;
  color: #3d3d3d;
  font-weight: 700;
  font-size: 16px;
  line-height: calc(30 / 16);
  text-align: center;

  align-items: center;
  letter-spacing: 0.06em;
  margin-top: 50px;
  background-image: linear-gradient(to left, #553c9a, #b393d3);
  border-radius: 4px;

  width: 150px;
  padding: 10px 32px;

  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
`;

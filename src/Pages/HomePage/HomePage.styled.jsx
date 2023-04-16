import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Image from 'images/mesh-1430107.png';

export const HeroTitle = styled('h1')`
  font-weight: 900;
  font-size: 44px;
  line-height: calc(60 / 44);
  text-align: center;
  color: #fff;
  display: block;
  width: 696px;
  font-family: 'Morganite';

  letter-spacing: 0.06em;
  text-transform: uppercase;
  display: block;
  text-shadow: 2px 2px 3px black;

  margin-left: auto;
  margin-right: auto;
`;

export const HeroSection = styled('section')`
  padding-top: 300px;
  padding-bottom: 300px;
  background-image: linear-gradient(
      rgba(47, 48, 58, 0.4),
      rgba(47, 48, 58, 0.4)
    ),
    url(${Image});
  background-repeat: no-repeat;
  background-size: cover;

  /* background-image: linear-gradient(to left, #553c9a, #b393d3); */
  background-color: #ffffff;
`;

export const HeroBtn = styled('button')`
  border: none;
`;

export const StyledHeroLink = styled(NavLink)`
  display: block;
  line-height: 42px;
  font-family: 'Rubik', sans-serif;
  font-size: 19px;
  font-weight: 500;
  margin-top: 30px;
  text-decoration: none;
  text-align: center;
  align-items: center;
  letter-spacing: 0.06em;
  border: none;
  border-radius: 4px;
  width: 150px;
  padding: 8px 20px;
  margin-left: auto;
  margin-right: auto;

  cursor: pointer;

  /* background-image: linear-gradient(to left, #553c9a, #b393d3); */
  background-color: black;
  color: #fff;

  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;

  outline: none;
  &:hover {
    background: transparent;
    box-shadow: none;
  }
  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    height: 2px;
    width: 0;
    height: 2px;
    background: #fff;
    box-shadow: -1px -1px 5px 0px black, 7px 7px 20px 0px #0003,
      4px 4px 5px 0px #0002;
    transition: 400ms ease all;
  }
  &:after {
    right: inherit;
    top: inherit;
    left: 0;
    bottom: 0;
  }
  &:hover:before,
  &:hover:after {
    width: 100%;
    transition: 800ms ease all;
  }
`;

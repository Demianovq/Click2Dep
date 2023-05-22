import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const windowInnerHeight = document.documentElement.clientHeight;

export const HeroTitle = styled('h1')`
  padding-top: 300px;
  padding-bottom: 80px;
  font-weight: 900;
  font-size: 30px;
  line-height: calc(60 / 44);
  text-align: center;
  color: #fff;
  display: block;
  width: 696px;

  font-family: 'Libre Baskerville', sans-serif;
  letter-spacing: 10px;
  text-transform: uppercase;

  text-shadow: 2px 2px 3px black;
  margin-left: auto;
  margin-right: auto;
`;

export const HeroTitleNameOfAgency = styled('span')`
  font-size: 100px;

  font-family: 'Montserrat', sans-serif;
  letter-spacing: 10px;
`;

export const HeroSection = styled('section')`
  background-color: black;
  width: 100%;
  height: ${windowInnerHeight}px;
`;

export const StyledHeroLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  line-height: 42px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;

  width: 300px;
  height: 70px;
  background-image: radial-gradient(
    circle at -20.44% 56.16%,
    #40f2ff 0,
    #0793fa 50%,
    #003f77 100%
  );

  font-size: 18px;
  color: white;
  transition: 0.3s ease-in;

  text-decoration: none;
  text-align: center;
  align-items: center;
  letter-spacing: 0.06em;
  border: none;
  border-radius: 35px;

  margin-left: auto;
  margin-right: auto;

  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;

  outline: none;
  &:hover {
    background: transparent;
    box-shadow: none;
    color: white;
  }
  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 25px;
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
    left: 35px;

    bottom: 0;
  }
  &:hover:before,
  &:hover:after {
    width: 80%;
    transition: 800ms ease all;
  }
`;

export const PositionsBlock = styled('div')`
  display: flex;
  gap: 50px;
  margin-top: 50px;
`;

export const ScrollMouse = styled('div')`
  display: block;
  position: absolute;
  left: 50%;
  margin-top: 120px;

  width: 30px;
  height: 50px;
  border: 2px solid white;
  border-radius: 50px;
  -webkit-transform: translateX(-50%);
  -moz-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  -o-transform: translateX(-50%);
  transform: translateX(-50%);
  &:after,
  &:before {
    content: '';
    position: absolute;

    top: 10%;
    left: 45%;
    height: 20px;

    border: 3px solid #004691;
    -webkit-transform: translate (-50%, -100%) rotate(45deg);
    -moz-transform: translate(-50%, -100%) rotate(45deg);
    -ms-transform: translate(-50%, -100%) rotate(45deg);
    -o-transform: translate(-50%, -100%) rotate(45deg);
    transform: translate (-50%, -100%) rotate(45deg);
    border-top: transparent;
    border-left: transparent;
    animation: scrollDown 2s ease infinite;
    &:after {
      top: 0%;
      animation-delay: 0.4s;
    }
  }
`;

export const ScrollText = styled('p')`
  display: block;
  text-align: center;
  margin-top: 180px;
  font-size: 20px;
  line-height: calc(60 / 44);
`;

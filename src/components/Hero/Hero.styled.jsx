import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { device } from 'utils/breakpoints.styled';

const windowInnerHeight = document.documentElement.clientHeight;

export const HeroTitle = styled('h1')`
  padding-top: ${windowInnerHeight / 3.5}px;

  font-weight: 900;
  font-size: 30px;
  line-height: calc(60 / 44);
  text-align: center;
  color: #fff;
  display: block;

  background-size: cover;

  font-family: 'Libre Baskerville', sans-serif;
  letter-spacing: 10px;
  text-transform: uppercase;

  text-shadow: 2px 2px 3px black;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 767px) {
    width: 300px;
    font-size: 18px;
  }
  @media screen and (max-width: 767px) and (orientation: landscape) {
    padding-top: 100px;
  }

  @media screen and (min-width: 430px) and (max-width: 767px) {
    width: 410px;
    font-size: 30px;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    padding-top: 150px;
    width: 550px;
  }

  @media screen and (min-width: 1200px) {
    width: 680px;
  }
`;

export const HeroTitleNameOfAgency = styled('span')`
  font-size: 100px;

  font-family: 'Montserrat', sans-serif;
  letter-spacing: 10px;

  @media screen and (max-width: 767px) {
    font-size: 30px;
  }

  @media screen and (min-width: 430px) and (max-width: 767px) {
    font-size: 50px;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    font-size: 75px;
  }
`;

export const HeroSection = styled('section')`
  width: 100%;
  /* height: var(--client-height); */
  height: 100vh;

  @media screen and (max-width: 767px) and (orientation: landscape) {
    height: 680px;
  }
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

  @media ${device.mobileEnd} {
    &:first-child {
      margin-bottom: 40px;
    }
  }
`;

export const PositionsBlock = styled('div')`
  display: flex;
  gap: 50px;
  margin-top: 50px;
  @media screen and (max-width: 767px) {
    display: block;
  }
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

import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Image from 'images/hero-min.svg';

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
  padding-bottom: 100px;
  padding-left: 0;

  background-image: linear-gradient(
      rgba(47, 48, 58, 0.4),
      rgba(47, 48, 58, 0.4)
    ),
    url(${Image});
  background-repeat: no-repeat;
  background-size: cover;
  width: auto;
  height: auto;

  margin-left: auto;
  margin-right: auto;
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
    @keyframes scrollDown {
      0% {
        opacity: 0;
      }
      30% {
        opacity: 1;
      }
      60% {
        opacity: 1;
      }
      100% {
        opacity: 0;
        top: 50%;
      }
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

export const AboutSection = styled('section')`
  padding-top: 50px;
  padding-bottom: 200px;
  background-color: white;
  color: black;
`;

export const AdvantagesSection = styled('section')`
  padding-top: 50px;
  padding-bottom: 200px;
  background-color: black;
  color: white;
  position: relative;
`;

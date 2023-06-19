import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { device } from 'utils/breakpoints.styled';

export const StyledLink = styled(NavLink)`
  font-family: 'Montserrat', sans-serif;
  text-decoration: none;
  color: #f0f8ff;
  position: relative;
  display: block;
  font-size: 20px;
  text-decoration: none;
  margin: 20px 0;
  padding: 7px 20px;
  overflow: hidden;
  transition: 1s all ease;
  letter-spacing: 1px;
  text-transform: uppercase;

  &::before {
    background-image: radial-gradient(
      circle at -20.44% 56.16%,
      #40f2ff 0,
      #0793fa 50%,
      #003f77 100%
    );
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: -1;
    transition: all 0.8s ease;
    width: 100%;
    height: 0%;
    transform: translate(-50%, -50%) rotate(-45deg);
  }
  &:hover::before {
    height: 500%;
  }
`;

export const StyledLinkJoin = styled(NavLink)`
  font-family: 'Montserrat', sans-serif;
  text-decoration: none;
  color: #0793fa;
  position: relative;
  text-transform: uppercase;
  display: block;
  font-size: 20px;
  text-decoration: none;
  margin: 20px 0;

  padding: 7px 20px;
  letter-spacing: 1px;
  background-color: #f0f8ff;
  border-radius: 35px;
  &:hover {
    scale: calc(1.1);
  }
`;

export const StyledLinkLogo = styled(NavLink)`
  display: block;
  margin-top: 12px;
  margin-left: 0px;
`;

export const NavList = styled('ul')`
  list-style: none;
  display: flex;
  gap: 30px;
  justify-content: center;
  position: relative;
  @media ${device.tabletEnd} {
    display: none;
  }
`;

export const NavItem = styled('li')`
  &:first-child {
    margin-right: auto;
  }
  &:last-child {
    margin-left: auto;
  }
`;

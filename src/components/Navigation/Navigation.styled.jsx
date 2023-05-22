import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  font-family: 'Montserrat', sans-serif;
  text-decoration: none;
  color: #dce0e1;
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
  background-color: white;
  border-radius: 35px;
  &:hover {
    scale: calc(1.1);
  }
`;

export const NavList = styled('ul')`
  list-style: none;
  display: flex;
  gap: 30px;
  justify-content: center;
  position: relative;
`;

export const NavItem = styled('li')`
  &:first-child {
    margin-right: auto;
    margin-left: 15px;
  }
  &:last-child {
    margin-left: auto;
  }
`;

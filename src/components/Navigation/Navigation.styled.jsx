import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #dce0e1;
  position: relative;
  display: block;
  font-size: 14px;
  text-decoration: none;
  margin: 30px 0;

  padding: 7px 20px;
  text-transform: uppercase;
  overflow: hidden;
  transition: 1s all ease;

  &::before {
    background: linear-gradient(to left, #553c9a, #b393d3);
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
  &::after {
    /* content: '';
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 4px;
    background-color: #2196f3;
    border-radius: 2px; */
    /* content: '';
    display: block;
    width: 1%;
    height: 2px;
    position: absolute;
    bottom: 5px;
    left: 50%;
    transform: translate(-50%);
    transition: width 0.25s ease-in-out; */
  }
`;

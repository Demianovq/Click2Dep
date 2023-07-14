import styled from 'styled-components';
import { device } from 'utils/breakpoints.styled';
import { NavLink } from 'react-router-dom';

export const ModalNav = styled('div')`
  @media ${device.desktop} {
    display: none;
  }
`;

export const SocialBlock = styled('ul')`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const SocialBtn = styled('button')`
  border: none;
  text-decoration: none;
  background-color: transparent;
`;

export const StyledLink = styled(NavLink)`
  font-family: 'Montserrat', sans-serif;
  text-decoration: none;
  color: #0793fa;
  margin-left: 15px;
  font-size: 30px;
`;

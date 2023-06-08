import styled from 'styled-components';
import { device } from 'utils/breakpoints.styled';
import { NavLink } from 'react-router-dom';

export const ModalNav = styled('div')`
  @media ${device.desktop} {
    display: none;
  }
`;

export const SocialBlock = styled('ul')`
  margin-left: 65px;
  display: flex;
  flex-wrap: wrap;
`;

export const SocialLink = styled('a')`
  display: block;
  margin-top: 15px;
`;

export const StyledLink = styled(NavLink)`
  font-family: 'Montserrat', sans-serif;
  text-decoration: none;
  color: #0793fa;
  margin-left: 15px;
  font-size: 30px;
`;

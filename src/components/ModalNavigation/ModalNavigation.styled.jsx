import styled from 'styled-components';
import { device } from 'utils/breakpoints.styled';
import { NavLink } from 'react-router-dom';

export const ModalNav = styled('div')`
  @media ${device.desktop} {
    display: none;
  }
`;

export const StyledLink = styled(NavLink)`
  font-family: 'Montserrat', sans-serif;
  text-decoration: none;
  color: #0793fa;
`;

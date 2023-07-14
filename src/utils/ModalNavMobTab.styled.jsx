import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const ModalNavBlock = styled('div')`
  background-color: #151515;
  height: 80px;

  @media screen and (min-width: 1200px) {
    display: none;
  }
`;

export const StyledLinkLogo = styled(NavLink)`
  display: block;
  padding-left: 15px;
  padding-top: 13px;

  margin-left: 0px;
`;

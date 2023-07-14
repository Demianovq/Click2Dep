import styled from 'styled-components';

import { NavLink } from 'react-router-dom';
import { device } from 'utils/breakpoints.styled';

export const AffiliatesSection = styled('section')`
  padding-top: 77px;
  background-color: #f0f8ff;
  @media ${device.tabletEnd} {
    padding-top: 0px;
  }
`;

export const AffiliatesNavBlock = styled('div')`
  background-color: #151515;
  height: 80px;

  @media screen and (min-width: 1199px) {
    display: none;
  }
`;

export const StyledLinkLogo = styled(NavLink)`
  display: block;
  padding-left: 15px;
  padding-top: 13px;

  margin-left: 0px;
`;

import styled from 'styled-components';
import { device } from 'utils/breakpoints.styled';

export const AffiliatesSection = styled('section')`
  padding-top: 77px;
  background-color: #f0f8ff;
  @media ${device.tabletEnd} {
    padding-top: 0px;
  }
`;

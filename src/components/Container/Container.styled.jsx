import styled from 'styled-components';
import { device } from 'utils/breakpoints.styled';

export const Container = styled('div')`
  min-width: 1170px;
  padding-left: 15px;
  padding-right: 15px;

  margin: 0 auto;

  @media ${device.mobileEnd} {
    max-width: 480px;
  }
`;

export const PureContainer = styled('div')`
  min-width: 1200px;
`;

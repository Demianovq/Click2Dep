import styled from 'styled-components';
import { device } from 'utils/breakpoints.styled';

export const TickerBlock = styled('div')`
  white-space: nowrap;
  width: 800px;
  padding-top: 15px;
  padding-bottom: 15px;
  margin-bottom: 100px;

  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
  color: white;
  font-size: 30px;
  background-color: #151515;
  border-radius: 20px;
  overflow: hidden;

  @media ${device.mobileEnd} {
  }
  @media ${device.tabletEnd} {
    width: 550px;
  }
`;

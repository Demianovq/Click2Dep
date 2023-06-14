import styled from 'styled-components';

export const TickerBlock = styled('div')`
  white-space: nowrap;

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

  @media screen and (max-width: 767px) {
    max-width: 450px;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    width: 550px;
  }

  @media screen and (min-width: 1200px) {
    width: 800px;
  }
`;

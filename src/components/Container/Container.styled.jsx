import styled from 'styled-components';

export const Container = styled('div')`
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;

  @media screen and (max-width: 767px) {
    max-width: 480px;
    padding-left: 10px;
    padding-right: 10px;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    width: 768px;
  }

  @media screen and (min-width: 1200px) {
    width: 1170px;
  }
`;

export const PureContainer = styled('div')`
  @media screen and (max-width: 767px) {
    max-width: 480px;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    width: 768px;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 1200px) {
    min-width: 1200px;
  }
`;

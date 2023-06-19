import styled from 'styled-components';

export const AboutSection = styled('section')`
  padding-top: 50px;
  padding-bottom: 166px;

  background-color: #f0f8ff;

  background-size: cover;

  color: black;

  @media screen and (max-width: 767px) {
    padding-bottom: 50px;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    padding-bottom: 100px;
  }
`;

export const FeedBackSection = styled('section')`
  padding-top: 50px;
  padding-bottom: 200px;
  background-color: #0793fa;

  color: black;

  @media screen and (max-width: 767px) {
    padding-bottom: 50px;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    padding-bottom: 100px;
  }
`;

export const AdvantagesSection = styled('section')`
  padding-top: 50px;
  padding-bottom: 200px;
  background-color: #f0f8ff;
  color: white;
  position: relative;

  @media screen and (max-width: 767px) {
    padding-bottom: 50px;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    padding-bottom: 100px;
  }
`;

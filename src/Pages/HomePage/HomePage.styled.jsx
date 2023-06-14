import styled from 'styled-components';
import backGroudImage from 'images/Global-BackGround-min.svg';

export const AboutSection = styled('section')`
  padding-top: 50px;
  padding-bottom: 166px;
  /* background: linear-gradient(to top, #292929 50%, #f0f8ff 50%); */

  background-color: #f0f8ff;
  /* background-image: url(${backGroudImage}); */
  background-size: cover;

  color: black;

  @media screen and (max-width: 767px) {
    padding-bottom: 50px;
  }
`;

export const FeedBackSection = styled('section')`
  padding-top: 50px;
  padding-bottom: 200px;
  background-color: #0793fa;
  /* background-image: url(${backGroudImage});
  background-size: cover; */

  color: black;

  @media screen and (max-width: 767px) {
    padding-bottom: 50px;
  }
`;

export const AdvantagesSection = styled('section')`
  padding-top: 50px;
  padding-bottom: 200px;
  background-color: #f0f8ff;
  /* background: linear-gradient(to top, #f0f8ff 50%, #292929 50%); */
  color: white;
  position: relative;

  @media screen and (max-width: 767px) {
    padding-bottom: 50px;
  }
`;

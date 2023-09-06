import styled from 'styled-components';

export const BlogSection = styled('section')`
  padding-top: 77px;
  padding-bottom: 200px;
  background-color: #f0f8ff;
  color: black;
  @media screen and (min-width: 768px) and (max-width: 1199px) {
    padding-bottom: 100px;
  }

  @media screen and (max-width: 1199px) {
    padding-top: 0px;
  }
`;

export const BlogTitle = styled('h3')`
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  line-height: calc(60 / 44);
  text-align: center;
  color: #151515;
  text-transform: uppercase;
  display: block;

  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
  margin-top: 50px;

  @media screen and (max-width: 767px) {
    font-size: 50px;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    font-size: 55px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 65px;
  }
`;

export const BlogList = styled('ul')`
  margin-top: 80px;

  gap: 20px;

  @media screen and (max-width: 1199px) {
    margin-top: 20px;
  }
  @media screen and (min-width: 768px) {
    display: flex;
  }
  @media screen and (max-width: 767px) {
    text-align: center;
    list-style: none;
  }
`;

export const BlogListItem = styled('li')`
  background-color: #151515;
  border-radius: 50px;
  padding-bottom: 20px;
  &:hover,
  &:focus {
    scale: calc(1.05);
  }
  @media screen and (min-width: 768px) {
    width: 376px;
  }

  @media screen and (max-width: 767px) {
    min-width: 300px;
    display: inline-block;
    &:not(:last-child) {
      margin-bottom: 50px;
    }
  }
`;

export const BlogContentBlock = styled('div')`
  display: flex;
  background-color: #0793fa;
  border-radius: 50px;
  overflow: hidden;
  color: #f0f8ff;
`;

export const BlogListItemTitle = styled('p')`
  font-weight: 500;
  font-size: 20px;
  line-height: calc(60 / 44);
  text-align: center;
  display: block;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 0.06em;
  margin-bottom: 30px;
  text-transform: uppercase;
  color: white;
  height: 137px;
  background-color: white;
  background-image: linear-gradient(90deg, #e3535d, #0793fa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  padding: 20px 20px 0px 20px;
`;

export const BlogText = styled('p')`
  font-weight: 500;
  font-size: 21px;
  line-height: calc(60 / 44);
  text-align: center;
  display: block;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 0.06em;
  padding: 15px 15px;
  @media screen and (min-width: 768px) and (max-width: 1199px) {
    font-size: 18px;
  }
`;

export const BlogImg = styled('img')`
  display: block;
  width: 250px;
  margin-left: auto;
  margin-right: auto;
  padding: 0;

  @media screen and (min-width: 767px) and (max-width: 1199px) {
    width: 200px;
  }
`;

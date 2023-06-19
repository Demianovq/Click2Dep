import styled from 'styled-components';

export const BlogSection = styled('section')`
  padding-top: 77px;
  padding-bottom: 150px;
  background-color: #f0f8ff;
  color: black;
  @media screen and (min-width: 768px) and (max-width: 1199px) {
    padding-bottom: 100px;
  }
`;

export const BlogList = styled('ul')`
  margin-top: 80px;

  @media screen and (max-width: 1199px) {
    margin-top: 20px;
  }
`;

export const BlogListItem = styled('li')`
  &:not(:last-child) {
    margin-bottom: 100px;
  }
`;

export const BlogContentBlock = styled('div')`
  display: flex;
  background-color: #0793fa;
  border-radius: 50px;
  overflow: hidden;
  color: #f0f8ff;
`;

export const BlogTitle = styled('h2')`
  font-weight: 500;
  font-size: 28px;
  line-height: calc(60 / 44);
  text-align: center;
  display: block;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 0.06em;
  margin-bottom: 30px;
  text-transform: uppercase;
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
  width: 500px;
  @media screen and (max-width: 1199px) {
    display: none;
  }
`;

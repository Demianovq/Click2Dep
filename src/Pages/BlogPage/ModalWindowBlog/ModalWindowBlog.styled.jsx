import styled from 'styled-components';

import BlogBackGround from 'images/Blog/darkBlogBackGround.jpg';

export const Wrapper = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: #00000085;
`;

export const ModalBody = styled('div')`
  background-image: url(${BlogBackGround});
  background-size: cover;
  z-index: 15;
  padding: 50px;
  width: 80%;
  margin-top: 70px;
  border-radius: 50px;
  letter-spacing: 1px;
  font-family: 'Montserrat', sans-serif;
  position: relative;

  color: white;

  @media screen and (max-width: 767px) {
    width: 80%;
    padding: 25px;
    font-size: 12px;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    width: 85%;
    font-size: 15px;
  }
`;

export const ModalTitle = styled('h2')`
  margin-bottom: 15px;
  @media screen and (max-width: 767px) {
    padding-right: 27px;
  }
`;

export const ModalSubTitle = styled('p')`
  font-weight: bold;
  margin-bottom: 5px;
`;

export const ModalParagraph = styled('div')`
  margin-bottom: 15px;
`;

export const ModalCloseBtn = styled('button')`
  position: absolute;
  top: 12px;
  right: 7px;
  width: 60px;
  border: none;
  background-color: inherit;
  &:hover {
    scale: 1.1;
  }
`;

import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const FooterBlock = styled('div')`
  padding-top: 30px;
  padding-bottom: 50px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 767px) {
    padding-bottom: 30px;
  }
`;

export const LinkForDocs = styled('a')`
  font-size: 16px;

  font-family: 'Libre Baskerville', sans-serif;
  text-decoration: none;
  color: white;
  text-align: center;
  display: flex;
  gap: 10px;

  align-items: center;

  @media screen and (max-width: 1199px) {
    font-size: 10px;
    gap: 0px;
  }
`;

export const SocialTitle = styled('p')`
  font-weight: 500;
  font-size: 25px;
  line-height: calc(60 / 44);

  display: block;
  font-family: 'Libre Baskerville', sans-serif;

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    font-size: 21px;
  }
`;

export const SocialBlock = styled('div')`
  display: flex;
  gap: 30px;
  margin-left: auto;
  align-items: center;

  @media screen and (max-width: 767px) {
    gap: 10px;
    margin-left: 20px;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
  }
`;

export const MailToBlock = styled('div')`
  align-items: center;
  background-color: #0793fa;
  padding: 5px 10px;
  border-radius: 20px;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const BlockOfDocs = styled('div')`
  display: flex;
  gap: 30px;
  padding-bottom: 50px;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const DocsArrowImg = styled('img')`
  width: 50px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;
export const PdfIconForDocs = styled('img')`
  width: 30px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const BtnOfDocs = styled('button')`
  font-family: 'Libre Baskerville', sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: calc(60 / 44);
  color: white;
  display: flex;
  gap: 20px;
  align-items: center;
  border: none;
  overflow: hidden;
  background-color: #0793fa;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    scale: 1.05;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    font-size: 17px;
    width: 200px;
  }
`;

export const HiddenBlockOfDocs = styled('div')`
  display: flex;

  @media screen and (min-width: 1199px) {
    gap: 10px;
  }
`;

export const RightsTitle = styled('p')`
  font-weight: 500;
  font-size: 20px;
  line-height: calc(60 / 44);
  margin-top: 10px;
  margin-left: auto;

  font-family: 'Libre Baskerville', sans-serif;
`;

export const DocsList = styled('ul')`
  display: flex;
  gap: 30px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const DocsItem = styled('li')`
  margin-bottom: 10px;
`;

export const StyledLinkLogoFooter = styled(NavLink)``;

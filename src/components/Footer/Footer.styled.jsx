import styled from 'styled-components';
import { device } from 'utils/breakpoints.styled';
import { NavLink } from 'react-router-dom';

export const FooterBlock = styled('div')`
  padding-top: 30px;
  padding-bottom: 50px;
  display: flex;
  align-items: center;
`;

export const FooterTitle = styled('p')`
  font-weight: 500;
  font-size: 25px;
  line-height: calc(60 / 44);
  margin-left: 40px;

  display: block;
  font-family: 'Libre Baskerville', sans-serif;
  @media ${device.tabletEnd} {
    display: none;
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
  @media ${device.tabletEnd} {
    font-size: 10px;
    gap: 5px;
  }
`;

export const SocialTitle = styled('p')`
  font-weight: 500;
  font-size: 25px;
  line-height: calc(60 / 44);

  display: block;
  font-family: 'Libre Baskerville', sans-serif;
`;

export const SocialBlock = styled('div')`
  display: flex;
  gap: 30px;
  margin-left: auto;
  align-items: center;
  @media ${device.tabletEnd} {
    text-align: center;
  }
  @media ${device.mobileEnd} {
    gap: 10px;
    margin-left: 10px;
  }
`;

export const MailToBlock = styled('div')`
  align-items: center;
  background-color: #0793fa;
  padding: 5px 10px;
  border-radius: 20px;

  @media ${device.mobileEnd} {
    display: none;
  }
`;

export const BlockOfDocs = styled('div')`
  display: flex;
  gap: 30px;
  padding-bottom: 50px;
`;

export const StyledBlockOfDocs = styled('div')`
  display: flex;
  gap: 30px;
  text-align: center;
  align-items: center;
  background-color: #0793fa;
  padding: 0px 10px;

  border-radius: 20px;
  @media ${device.tabletEnd} {
    padding: 0px 2px;
  }
`;

export const TitleOfDocs = styled('p')`
  font-weight: 500;
  font-size: 20px;
  line-height: calc(60 / 44);
  margin-left: 10px;

  display: block;
  font-family: 'Libre Baskerville', sans-serif;
  @media ${device.tabletEnd} {
    font-size: 15px;
    width: 100px;
  }
`;

export const BtnOfDocs = styled('button')`
  border: none;
  background-color: transparent;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    scale: 1.05;
  }
`;

export const HiddenBlockOfDocs = styled('div')`
  display: flex;
  gap: 10px;
`;

export const RightsTitle = styled('p')`
  font-weight: 500;
  font-size: 20px;
  line-height: calc(60 / 44);
  margin-top: 10px;
  margin-left: auto;

  font-family: 'Libre Baskerville', sans-serif;
`;

export const StyledLinkLogoFooter = styled(NavLink)``;

import { bubble as Menu } from 'react-burger-menu';
import {
  ModalNav,
  StyledLink,
  SocialBlock,
  SocialLink,
} from './ModalNavigation.styled';

import instagram from 'images/socials/instagram.png';
import telegram from 'images/socials/telegram.svg';
import linkedin from 'images/socials/linkedin.svg';
import facebook from 'images/socials/facebook.svg';

export const ModalNavigation = () => {
  return (
    <ModalNav>
      <Menu>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/affiliates">Affiliates</StyledLink>
        <StyledLink to="/advertiser">Advertiser</StyledLink>
        <StyledLink to="/blog">Blog</StyledLink>
        <SocialBlock>
          <a href="https://t.me/click2dep" target="_blank" rel="noreferrer">
            <img src={telegram} alt="Telegram" width={50} />
          </a>
          <SocialLink
            href="https://instagram.com/click2dep?igshid=YmMyMTA2M2Y="
            target="_blank"
            rel="noreferrer"
          >
            <img src={instagram} alt="instagram" width={50} />
          </SocialLink>
        </SocialBlock>
      </Menu>
    </ModalNav>
  );
};

import { slide as Menu } from 'react-burger-menu';
import { useState } from 'react';

import {
  ModalNav,
  StyledLink,
  SocialBlock,
  SocialBtn,
} from './ModalNavigation.styled';

import burgerIcon from 'images/globalimg/menu-hamburger.svg';
import instagram from 'images/socials/instagram.png';
import telegram from 'images/socials/telegram.svg';
import linkedin from 'images/socials/linkedin.svg';
import facebook from 'images/socials/facebook.svg';

export const ModalNavigation = () => {
  const [seeTheMenu, seeTheMenuToggle] = useState(false);

  const handleOnClose = e => {
    seeTheMenuToggle(false);
  };
  return (
    <ModalNav>
      <Menu
        right
        isOpen={seeTheMenu}
        onStateChange={state => seeTheMenuToggle(state.isOpen)}
        customBurgerIcon={
          <img src={burgerIcon} width={200} alt="burger icon" />
        }
      >
        <StyledLink id="home" to="/" onClick={handleOnClose}>
          Home
        </StyledLink>
        <StyledLink to="/affiliates" onClick={handleOnClose}>
          Affiliates
        </StyledLink>
        <StyledLink to="/advertiser" onClick={handleOnClose}>
          Advertiser
        </StyledLink>
        <StyledLink to="/blog" onClick={handleOnClose}>
          Blog
        </StyledLink>
        <div>
          <SocialBlock>
            <SocialBtn>
              <a href="https://t.me/click2dep" target="_blank" rel="noreferrer">
                <img src={telegram} alt="Telegram" width={50} />
              </a>
            </SocialBtn>
            <SocialBtn>
              <a
                href="https://instagram.com/click2dep?igshid=YmMyMTA2M2Y="
                target="_blank"
                rel="noreferrer"
              >
                <img src={instagram} alt="instagram" width={50} />
              </a>
            </SocialBtn>
          </SocialBlock>
          <SocialBlock>
            <SocialBtn>
              <a
                href="https://www.linkedin.com/company/92789773"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedin} alt="linkedin" width={50} />
              </a>
            </SocialBtn>
            <SocialBtn>
              <a
                href="https://www.facebook.com/Click2Dep "
                target="_blank"
                rel="noreferrer"
              >
                <img src={facebook} alt="facebook" width={50} />
              </a>
            </SocialBtn>
          </SocialBlock>
        </div>
      </Menu>
    </ModalNav>
  );
};

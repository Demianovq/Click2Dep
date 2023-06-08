import React, { useState } from 'react';

import { Container } from 'components/Container/Container.styled';
import {
  FooterBlock,
  SocialTitle,
  SocialBlock,
  MailToBlock,
  FooterTitle,
  LinkForDocs,
  BlockOfDocs,
  BtnOfDocs,
  StyledLinkLogoFooter,
  StyledBlockOfDocs,
  TitleOfDocs,
  HiddenBlockOfDocs,
  RightsTitle,
} from './Footer.styled';
import instagram from 'images/socials/instagram.png';
import telegram from 'images/socials/telegram.svg';
import linkedin from 'images/socials/linkedin.svg';
import facebook from 'images/socials/facebook.svg';
import mail from 'images/socials/mail.svg';
import pdf from 'images/socials/PDFDoc.svg';
import logo from 'images/logo.png';
import arrow from 'images/arrow.svg';
export const Footer = () => {
  const [docs, WatchADocs] = useState(false);

  return (
    <Container>
      <FooterBlock>
        <StyledLinkLogoFooter to="/">
          <img src={logo} alt="Logo" />
        </StyledLinkLogoFooter>
        <FooterTitle>We work for Your result.</FooterTitle>

        <SocialBlock>
          <MailToBlock>
            <SocialTitle>Get In Touch</SocialTitle>
          </MailToBlock>
          <a href="https://t.me/click2dep" target="_blank" rel="noreferrer">
            <img src={telegram} alt="Telegram" width={50} />
          </a>

          <a
            href="https://instagram.com/click2dep?igshid=YmMyMTA2M2Y="
            target="_blank"
            rel="noreferrer"
          >
            <img src={instagram} alt="instagram" width={50} />
          </a>

          <a
            href="https://www.linkedin.com/company/92789773"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="linkedin" width={50} />
          </a>
          <a
            href="https://www.facebook.com/Click2Dep"
            target="_blank"
            rel="noreferrer"
          >
            <img src={facebook} alt="facebook" width={50} />
          </a>
          <a href="mailto:click2dep@gmail.com">
            <img src={mail} alt="mail" width={50} />
          </a>
        </SocialBlock>
      </FooterBlock>
      <BlockOfDocs>
        <StyledBlockOfDocs>
          <TitleOfDocs>Terms and conditions</TitleOfDocs>
          <BtnOfDocs type="button" onClick={() => WatchADocs(!docs)}>
            <img src={arrow} alt="arrow for docs" width={50} />
          </BtnOfDocs>
        </StyledBlockOfDocs>
        {docs ? (
          <>
            <HiddenBlockOfDocs>
              <LinkForDocs
                href="https://drive.google.com/file/d/1ftGka7kCPtVNHEAp-aXC23tAwUx4r2U1/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <img src={pdf} alt="Document" width={30} />
                Privat Policy
              </LinkForDocs>
              <LinkForDocs
                href="https://drive.google.com/file/d/1K9suIi0RVTFk_rZVibsQKfv_wuqts-YW/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <img src={pdf} alt="Document" width={30} />
                Terms&Conditions for Advertisers
              </LinkForDocs>
              <LinkForDocs
                href="https://drive.google.com/file/d/1pdSiaOphQSnD31F_mJiUaoYtwcn-iJaT/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <img src={pdf} alt="Document" width={30} />
                Terms&Conditions for Affiliates
              </LinkForDocs>
            </HiddenBlockOfDocs>
          </>
        ) : (
          <RightsTitle>All rights reserved © 2021</RightsTitle>
        )}
      </BlockOfDocs>
    </Container>
  );
};

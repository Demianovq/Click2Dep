import React, { useState } from 'react';

import { Container } from 'components/Container/Container.styled';
import {
  FooterBlock,
  SocialTitle,
  SocialBlock,
  MailToBlock,
  LinkForDocs,
  BlockOfDocs,
  BtnOfDocs,
  StyledLinkLogoFooter,
  HiddenBlockOfDocs,
  RightsTitle,
  DocsArrowImg,
  PdfIconForDocs,
  DocsList,
  DocsItem,
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

        <SocialBlock>
          <MailToBlock>
            <SocialTitle>Follow Us</SocialTitle>
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
        <BtnOfDocs type="button" onClick={() => WatchADocs(!docs)}>
          Terms and conditions
          <DocsArrowImg src={arrow} alt="arrow for docs" />
        </BtnOfDocs>

        {docs ? (
          <>
            <HiddenBlockOfDocs>
              <LinkForDocs
                href="https://drive.google.com/file/d/1ftGka7kCPtVNHEAp-aXC23tAwUx4r2U1/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <PdfIconForDocs src={pdf} alt="Document" />
                Privat Policy
              </LinkForDocs>
              <LinkForDocs
                href="https://drive.google.com/file/d/1K9suIi0RVTFk_rZVibsQKfv_wuqts-YW/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <PdfIconForDocs src={pdf} alt="Document" />
                Terms&Conditions for Advertisers
              </LinkForDocs>
              <LinkForDocs
                href="https://drive.google.com/file/d/1pdSiaOphQSnD31F_mJiUaoYtwcn-iJaT/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <PdfIconForDocs src={pdf} alt="Document" />
                Terms&Conditions for Affiliates
              </LinkForDocs>
            </HiddenBlockOfDocs>
          </>
        ) : (
          <RightsTitle>All rights reserved © 2021</RightsTitle>
        )}
      </BlockOfDocs>
      <DocsList>
        <DocsItem>
          <LinkForDocs
            href="https://drive.google.com/file/d/1ftGka7kCPtVNHEAp-aXC23tAwUx4r2U1/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <PdfIconForDocs src={pdf} alt="Document" />
            Privat Policy
          </LinkForDocs>
        </DocsItem>
        <DocsItem>
          <LinkForDocs
            href="https://drive.google.com/file/d/1K9suIi0RVTFk_rZVibsQKfv_wuqts-YW/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <PdfIconForDocs src={pdf} alt="Document" />
            Terms&Conditions for Advertisers
          </LinkForDocs>
        </DocsItem>
        <DocsItem>
          <LinkForDocs
            href="https://drive.google.com/file/d/1pdSiaOphQSnD31F_mJiUaoYtwcn-iJaT/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <PdfIconForDocs src={pdf} alt="Document" />
            Terms&Conditions for Affiliates
          </LinkForDocs>
        </DocsItem>
      </DocsList>
    </Container>
  );
};

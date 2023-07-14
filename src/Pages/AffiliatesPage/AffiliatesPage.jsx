import { AffiliatesSection } from './AffiliatesPage.styled';

import { ModalNavBlock, StyledLinkLogo } from 'utils/ModalNavMobTab.styled';
import { PureContainer } from 'components/Container/Container.styled';
import { Affiliates } from 'components/AffiliatesBlock/Affiliates';

import logo from 'images/logo.png';

export const AffiliatesPage = () => {
  return (
    <>
      <AffiliatesSection>
        <ModalNavBlock>
          <StyledLinkLogo to="/">
            <img src={logo} alt="Logo" />
          </StyledLinkLogo>
        </ModalNavBlock>
        <PureContainer>
          <Affiliates />
        </PureContainer>
      </AffiliatesSection>
    </>
  );
};

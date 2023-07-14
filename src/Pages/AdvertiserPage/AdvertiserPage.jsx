import { AdvertiserSection } from './AdvertiserPage.styled';

import { ModalNavBlock, StyledLinkLogo } from 'utils/ModalNavMobTab.styled';
import { PureContainer } from 'components/Container/Container.styled';
import { Advertiser } from 'components/Advertiser/Advertiser';

import logo from 'images/logo.png';

export const AdvertiserPage = () => {
  return (
    <>
      <AdvertiserSection>
        <ModalNavBlock>
          <StyledLinkLogo to="/">
            <img src={logo} alt="Logo" />
          </StyledLinkLogo>
        </ModalNavBlock>
        <PureContainer>
          <Advertiser />
        </PureContainer>
      </AdvertiserSection>
    </>
  );
};

import { AdvertiserSection } from './AdvertiserPage.styled';
import { PureContainer } from 'components/Container/Container.styled';
import { Advertiser } from 'components/Advertiser/Advertiser';

export const AdvertiserPage = () => {
  return (
    <>
      <AdvertiserSection>
        <PureContainer>
          <Advertiser />
        </PureContainer>
      </AdvertiserSection>
    </>
  );
};

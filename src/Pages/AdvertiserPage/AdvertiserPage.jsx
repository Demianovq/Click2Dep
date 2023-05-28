import { AdvertiserSection } from './AdvertiserPage.styled';
import { Container } from 'components/Container/Container.styled';
import { Advertiser } from 'components/Advertiser/Advertiser';

export const AdvertiserPage = () => {
  return (
    <>
      <AdvertiserSection>
        <Container>
          <Advertiser />
        </Container>
      </AdvertiserSection>
    </>
  );
};

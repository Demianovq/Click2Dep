import { AffiliatesSection } from './AffiliatesPage.styled';
import { Container } from 'components/Container/Container.styled';
import { Affiliates } from 'components/AffiliatesBlock/Affiliates';

export const AffiliatesPage = () => {
  return (
    <>
      <AffiliatesSection>
        <Container>
          <Affiliates />
        </Container>
      </AffiliatesSection>
    </>
  );
};

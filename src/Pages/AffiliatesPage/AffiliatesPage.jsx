import { AffiliatesSection } from './AffiliatesPage.styled';
import { PureContainer } from 'components/Container/Container.styled';
import { Affiliates } from 'components/AffiliatesBlock/Affiliates';

export const AffiliatesPage = () => {
  return (
    <>
      <AffiliatesSection>
        <PureContainer>
          <Affiliates />
        </PureContainer>
      </AffiliatesSection>
    </>
  );
};

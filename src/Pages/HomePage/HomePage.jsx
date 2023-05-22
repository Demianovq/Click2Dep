import {
  AboutSection,
  AdvantagesSection,
  FeedBackSection,
} from './HomePage.styled';
import { Container } from 'components/Container/Container.styled';
import { AboutBlock } from 'components/About/About';
import { Advantages } from 'components/Advantages/Advantages';
import { Hero } from 'components/Hero/Hero';
import { FeedBack } from 'components/FeedBack/FeedBack';

export const HomePage = () => {
  return (
    <>
      <Hero />
      <AboutSection>
        <Container>
          <AboutBlock />
        </Container>
      </AboutSection>
      <FeedBackSection>
        <Container>
          <FeedBack />
        </Container>
      </FeedBackSection>
      <AdvantagesSection>
        <Container>
          <Advantages />
        </Container>
      </AdvantagesSection>
    </>
  );
};

// export default Homepage;

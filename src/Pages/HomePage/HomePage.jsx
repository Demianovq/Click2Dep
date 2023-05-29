import {
  AboutSection,
  AdvantagesSection,
  FeedBackSection,
} from './HomePage.styled';
import {
  Container,
  PureContainer,
} from 'components/Container/Container.styled';
import { AboutBlock } from 'components/About/About';
import { Advantages } from 'components/Advantages/Advantages';
import { Hero } from 'components/Hero/Hero';
import { FeedBack } from 'components/FeedBack/FeedBack';
import { Ticker } from 'components/Ticker/Ticker';

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
        <Ticker />
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

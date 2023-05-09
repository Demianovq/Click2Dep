import { AboutSection, AdvantagesSection } from './HomePage.styled';
import { Container } from 'components/Container/Container.styled';
import { AboutBlock } from 'components/About/About';
import { Advantages } from 'components/Advantages/Advantages';
import { Hero } from 'components/Hero/Hero';

export const HomePage = () => {
  return (
    <>
      <Hero />
      <AboutSection>
        <Container>
          <AboutBlock />
        </Container>
      </AboutSection>
      <AdvantagesSection>
        <Container>
          <Advantages />
        </Container>
      </AdvantagesSection>
    </>
  );
};

// export default Homepage;

import {
  HeroTitle,
  HeroSection,
  StyledHeroLink,
  ScrollMouse,
  ScrollText,
  AboutSection,
  AdvantagesSection,
} from './HomePage.styled';
import { Container } from 'components/Container/Container.styled';
import { AboutBlock } from 'components/About/About';
import { Advantages } from 'components/Advantages/Advantages';

export const HomePage = () => {
  return (
    <>
      <HeroSection>
        <Container>
          <HeroTitle>Performance Digital CPA Agency</HeroTitle>
          <StyledHeroLink to="/about">About us</StyledHeroLink>
          <ScrollMouse></ScrollMouse>
          <ScrollText>Scroll Down</ScrollText>
        </Container>
      </HeroSection>
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

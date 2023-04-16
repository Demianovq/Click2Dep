import { HeroTitle, HeroSection, StyledHeroLink } from './HomePage.styled';
import { Container } from 'components/Container/Container.styled';

export const HomePage = () => {
  return (
    <HeroSection>
      <Container>
        <HeroTitle>Performance Digital CPA Agency</HeroTitle>
        <StyledHeroLink to="/about">About us</StyledHeroLink>
      </Container>
    </HeroSection>
  );
};

// export default Homepage;

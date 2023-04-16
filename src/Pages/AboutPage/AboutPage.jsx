import { HeroSection } from '../HomePage/HomePage.styled';
import { Container } from 'components/Container/Container.styled';
import { AboutText } from './AboutPage.styled';

export const AboutPage = () => {
  return (
    <>
      <HeroSection>
        <Container>
          <AboutText>
            Click2Dep is a team of devoted marketing professionals who are
            passionate about delivering results. Our affection for what we do is
            matched only by our dedication to our clients' success. With a
            wealth of experience and skills, we are able to turn even the most
            challenging of opportunities into successful ventures. We understand
            the importance of being flexible and intuitive in a constantly
            changing market, and we work tirelessly to keep up with the latest
            technology in our industry. Our international team of dynamic
            individuals is committed to building strong relationships with every
            client. So if you're looking for a reliable and experienced partner,
            contact us today to learn more about how we can help you to earn
            more!
          </AboutText>
        </Container>
      </HeroSection>
    </>
  );
};

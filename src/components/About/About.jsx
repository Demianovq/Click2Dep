import meetingImage from 'images/About2-min.svg';
import workImage from 'images/About-min.svg';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  AboutStyledBlock,
  AboutTitle,
  AboutText,
  AboutImg,
} from './AboutBlock.styled';

export const AboutBlock = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <>
      <AboutTitle>About Us</AboutTitle>
      <AboutStyledBlock ref={ref}>
        <AboutText>
          Click2Dep is a team of devoted marketing professionals who are
          passionate about delivering results. Our affection for what we do is
          matched only by our dedication to our clients' success. With a wealth
          of experience and skills, we are able to turn even the most
          challenging of opportunities into successful ventures.
        </AboutText>
        <div
          style={{
            transform: isInView ? 'none' : 'translateY(+200px)',
            opacity: isInView ? 1 : 0,
            transition: 'all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s',
          }}
        >
          <AboutImg src={meetingImage} alt="About Us" />
        </div>
      </AboutStyledBlock>
      <AboutStyledBlock>
        <div
          style={{
            transform: isInView ? 'none' : 'translateY(-200px)',
            opacity: isInView ? 1 : 0,
            transition: 'all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s',
          }}
        >
          <AboutImg src={workImage} alt="About Us" />
        </div>

        <AboutText>
          We understand the importance of being flexible and intuitive in a
          constantly changing market, and we work tirelessly to keep up with the
          latest technology in our industry. Our international team of dynamic
          individuals is committed to building strong relationships with every
          client. So if you're looking for a reliable and experienced partner,
          contact us today to learn more about how we can help you to earn more!
        </AboutText>
      </AboutStyledBlock>
    </>
  );
};

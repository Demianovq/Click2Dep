import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CarouselItem, CarouselBlock, CarouselTitle } from './FeedBack.styled';
import { PositionsBlock, StyledHeroLink } from 'components/Hero/Hero.styled';
import { Ticker } from 'components/Ticker/Ticker';

export const FeedBack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1199, min: 768 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <CarouselTitle>Feedback from our clients</CarouselTitle>
      <CarouselBlock
        ref={ref}
        style={{
          transform: isInView ? 'none' : 'translateY(+200px)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s',
        }}
      >
        <Carousel responsive={responsive} autoPlay={true} infinite={true}>
          <CarouselItem>
            The team at Click2Dep is always willing to go above and beyond to
            ensure my success. They provide valuable insights and
            recommendations that have helped me optimize my campaigns and
            increase my earnings. I have been blown away by the professionalism
            of Click2Dep. They truly value their affiliates and work hard to
            provide the resources and tools needed to succeed in this
            competitive industry.
          </CarouselItem>
          <CarouselItem>
            As an affiliate, I can confidently say that Click2Dep is one of the
            best networks out there. Here are some reasons why I love working
            with them: Click2Dep offers some of the highest payouts in the
            industry. The support team is simply amazing. They are always
            available to answer my questions and provide me with any assistance
            I need. They have a wide variety of offers that are relevant to my
            niche. The platform is easy to use, and I can easily track my
            earnings and performance. They pay on time, every time. This is
            something that is very important to me as an affiliate. Overall, I
            highly recommend Click2Dep to any affiliate looking to increase
            their earnings and work with a reputable network that values its
            affiliates.
          </CarouselItem>
          <CarouselItem>
            Working with Click2Dep has been a game-changer for my affiliate
            marketing efforts. Their high payouts and diverse range of offers
            make it easy to find the right fit for my audience.
          </CarouselItem>
          <CarouselItem>
            I appreciate how easy it is to navigate the Click2Dep platform.
            Their user-friendly dashboard and reporting tools make it simple to
            track my earnings and optimize my campaigns. Click2Dep's support
            team is top-notch. They are always available to help me with any
            questions or concerns I have, which has made my experience with them
            seamless.
          </CarouselItem>
          <CarouselItem>
            I have worked with many CPA networks, but Click2Dep stands out from
            the rest. Their professionalism, reliability, and dedication to
            their affiliates make them one of the best in the business. I
            appreciate the level of transparency that they provides. They are
            open and honest about their policies, payouts, and offers, which has
            helped me build trust with them as a partner.
          </CarouselItem>
          <CarouselItem>
            As an affiliate, it's important to work with a CPA network that you
            can trust. Click2Dep has exceeded my expectations in terms of
            transparency and honesty, and I feel confident in recommending them
            to others. I've been able to achieve a high ROI thanks to the
            advanced tracking and reporting tools provided by Click2Dep. The
            payout rates are some of the best I've seen in the industry. I
            appreciate the fact that they value their affiliates and are willing
            to pay top dollar for high-quality traffic.
          </CarouselItem>
        </Carousel>
      </CarouselBlock>
      <Ticker />
      <PositionsBlock>
        <StyledHeroLink to="/affiliates">Become An Affiliate</StyledHeroLink>
        <StyledHeroLink to="/advertiser">Become An Advertiser</StyledHeroLink>
      </PositionsBlock>
    </>
  );
};

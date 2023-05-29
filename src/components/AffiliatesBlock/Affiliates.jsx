import {
  AffiliatesBlock,
  AffiliatesTitle,
  AffiliatesText,
  AffiliatesList,
  AffiliatesItemSvg,
  AffiliatesItem,
  AffiliatesItemText,
  AffiliatesLink,
  AffiliatesTextContentBlock,
} from './Affiliates.styled';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import aboutLeft from 'images/about-leftside.jpg';
import niches from 'images/affiliates/Many niches.svg';
import trackingSystem from 'images/affiliates/User-friendly tracking system.svg';
import offers from 'images/affiliates/Wide range of offers and GEOs.svg';

export const Affiliates = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <AffiliatesBlock>
      <AffiliatesTextContentBlock>
        <AffiliatesTitle>Affiliates</AffiliatesTitle>
        <AffiliatesLink
          href="https://instagram.com/click2dep?igshid=YmMyMTA2M2Y="
          target="_blank"
        >
          Become An
        </AffiliatesLink>
        <AffiliatesText
          ref={ref}
          style={{
            transform: isInView ? 'none' : 'translateY(+200px)',
            opacity: isInView ? 1 : 0,
            transition: 'all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s',
          }}
        >
          If you are an affiliate, our CPA network will give you access to the
          best offers on the market with high payouts. We offer a simple and
          user-friendly interface. So, if you want to work with us, contact our
          managers.
        </AffiliatesText>
        <AffiliatesList>
          <AffiliatesItem
            ref={ref}
            style={{
              transform: isInView ? 'none' : 'translateY(+200px)',
              opacity: isInView ? 1 : 0,
              transition: 'all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s',
            }}
          >
            <AffiliatesItemSvg src={niches} alt="Many niches" width={100} />
            <AffiliatesItemText>Many niches</AffiliatesItemText>
          </AffiliatesItem>
          <AffiliatesItem
            ref={ref}
            style={{
              transform: isInView ? 'none' : 'translateY(+200px)',
              opacity: isInView ? 1 : 0,
              transition: 'all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s',
            }}
          >
            <AffiliatesItemSvg
              src={trackingSystem}
              alt="User-friendly tracking system"
              width={100}
            />
            <AffiliatesItemText>
              User-friendly tracking system
            </AffiliatesItemText>
          </AffiliatesItem>
          <AffiliatesItem
            ref={ref}
            style={{
              transform: isInView ? 'none' : 'translateY(+200px)',
              opacity: isInView ? 1 : 0,
              transition: 'all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s',
            }}
          >
            <AffiliatesItemSvg
              src={offers}
              alt="Wide range of offers and GEOs"
              width={100}
            />
            <AffiliatesItemText>
              Wide range of offers and GEOs
            </AffiliatesItemText>
          </AffiliatesItem>
        </AffiliatesList>
      </AffiliatesTextContentBlock>
      <img
        src={aboutLeft}
        alt="About Us"
        width={500}
        ref={ref}
        style={{
          transform: isInView ? 'none' : 'translateY(-200px)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s',
        }}
      />
    </AffiliatesBlock>
  );
};

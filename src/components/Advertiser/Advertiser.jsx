import antiFraud from 'images/advertisers/Anti-fraud system.svg';
import expirianced from 'images/advertisers/Experienced affiliates.svg';
import traffic from 'images/advertisers/Quality traffic.svg';
import advertiserImg from 'images/advertisers/advertiserimg.jpg';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  AdvertiserBlock,
  AdvertiserItem,
  AdvertiserList,
  AdvertiserTitle,
  AdvertiserItemSvg,
  AdvertiserItemText,
  AdvertiserText,
  AdvertiserLink,
  AdvertiserTextContentBlock,
  AdvertiserImg,
} from './Advertiser.styled';

export const Advertiser = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <AdvertiserBlock ref={ref}>
      <AdvertiserImg
        src={advertiserImg}
        alt="About Us"
        ref={ref}
        style={{
          transform: isInView ? 'none' : 'translateY(-200px)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s',
        }}
      />
      <AdvertiserTextContentBlock>
        <AdvertiserTitle>Advertiser</AdvertiserTitle>

        <AdvertiserLink
          href="https://instagram.com/click2dep?igshid=YmMyMTA2M2Y="
          target="_blank"
        >
          Become An
        </AdvertiserLink>

        <AdvertiserText
          ref={ref}
          style={{
            transform: isInView ? 'none' : 'translateY(+200px)',
            opacity: isInView ? 1 : 0,
            transition: 'all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s',
          }}
        >
          If you are an advertiser, our CPA network will help you get the most
          out of your offers with high quality traffic and innovative
          technology. If you have offers for any GEOs, please contact our
          managers.
        </AdvertiserText>

        <AdvertiserList>
          <AdvertiserItem
            ref={ref}
            style={{
              transform: isInView ? 'none' : 'translateY(+200px)',
              opacity: isInView ? 1 : 0,
              transition: 'all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s',
            }}
          >
            <AdvertiserItemSvg
              src={antiFraud}
              alt="Anti-fraud system"
              width={100}
            />
            <AdvertiserItemText>Anti-fraud system</AdvertiserItemText>
          </AdvertiserItem>
          <AdvertiserItem
            ref={ref}
            style={{
              transform: isInView ? 'none' : 'translateY(+200px)',
              opacity: isInView ? 1 : 0,
              transition: 'all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s',
            }}
          >
            <AdvertiserItemSvg
              src={expirianced}
              alt="Experienced affiliates"
              width={100}
            />
            <AdvertiserItemText>Experienced affiliates</AdvertiserItemText>
          </AdvertiserItem>
          <AdvertiserItem
            style={{
              transform: isInView ? 'none' : 'translateY(+200px)',
              opacity: isInView ? 1 : 0,
              transition: 'all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s',
            }}
          >
            <AdvertiserItemSvg
              src={traffic}
              alt="Quality traffic"
              width={100}
            />
            <AdvertiserItemText>Quality traffic</AdvertiserItemText>
          </AdvertiserItem>
        </AdvertiserList>
      </AdvertiserTextContentBlock>
    </AdvertiserBlock>
  );
};

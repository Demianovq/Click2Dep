import React, { useState, useEffect, useLayoutEffect } from 'react';
import WAVES from 'vanta/dist/vanta.waves.min';
import { useSpring, animated } from '@react-spring/web';
import {
  HeroSection,
  HeroTitle,
  StyledHeroLink,
  PositionsBlock,
  HeroTitleNameOfAgency,
} from './Hero.styled';

export const Hero = () => {
  const [state, toggle] = useState(false);
  const { x } = useSpring({
    from: { x: 0 },
    x: state ? 1 : 0,
    config: { duration: 1000 },
  });

  useEffect(() => {
    toggle(true);
  }, []);

  useLayoutEffect(() => {
    const root = document.getElementsByTagName('body')[0];

    const height = document.documentElement.clientHeight;

    console.log(height);
    // console.log(root);
    root.style.setProperty('--client-height', height);
  }, []);

  const [vantaEffect, setVantaEffect] = React.useState(0);
  const vantaRef = React.useRef(null);

  // const windowInnerHeight = document.documentElement.clientHeight;

  React.useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        WAVES({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          shininess: 150.0,
          waveHeight: 40.0,
          waveSpeed: 0.85,
          zoom: 0.7,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <HeroSection ref={vantaRef}>
      <HeroTitle>
        Digital Performance{' '}
        <HeroTitleNameOfAgency>Click2Dep</HeroTitleNameOfAgency> CPA Agency
      </HeroTitle>
      <animated.div
        style={{
          opacity: x.to({ range: [0, 1], output: [1, 1] }),
          scale: x.to({
            range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
            output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
          }),
        }}
      >
        <PositionsBlock>
          <StyledHeroLink to="/affiliates">Become An Affiliate</StyledHeroLink>
          <StyledHeroLink to="/advertiser">Become An Advertiser</StyledHeroLink>
        </PositionsBlock>
      </animated.div>
    </HeroSection>
  );
};

import {
  NavList,
  NavItem,
  StyledLink,
  StyledLinkJoin,
} from './Navigation.styled';
import { Container } from 'components/Container/Container.styled';

import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';

export const Navigation = () => {
  const [state, setAOpacity] = useState(false);
  const { x } = useSpring({
    from: { x: 0 },
    x: state ? 1 : 0,
    config: { duration: 1000 },
  });

  useEffect(() => {
    setAOpacity(true);
  }, []);
  return (
    <Container>
      <animated.div
        style={{
          opacity: x.to({ range: [0, 1], output: [0, 1] }),
        }}
      >
        <NavList>
          <NavItem>
            <StyledLink to="/">Click2Dep</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="/affiliates">Affiliates</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="/advertiser">Advertiser</StyledLink>
          </NavItem>

          <NavItem>
            <StyledLink to="/blog">Blog</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLinkJoin to="/start">Join Us</StyledLinkJoin>
          </NavItem>
        </NavList>
      </animated.div>
    </Container>
  );
};

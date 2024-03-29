import {
  NavList,
  NavItem,
  StyledLink,
  StyledLinkJoin,
  StyledLinkLogo,
} from './Navigation.styled';

import logo from 'images/logo.png';

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
    <>
      <animated.div
        style={{
          opacity: x.to({ range: [0, 1], output: [0, 1] }),
        }}
      >
        <NavList backColor="black">
          <NavItem>
            <StyledLinkLogo to="/">
              <img src={logo} alt="Logo" />
            </StyledLinkLogo>
          </NavItem>
          <NavItem>
            <StyledLink to="/affiliates">Affiliates</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="/advertiser">Advertisers</StyledLink>
          </NavItem>

          <NavItem>
            <StyledLink to="/blog">Blog</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLinkJoin
              href="https://click2dep.affise.com/v2/sign/up"
              target="_blank"
            >
              Join Us
            </StyledLinkJoin>
          </NavItem>
        </NavList>
      </animated.div>
    </>
  );
};

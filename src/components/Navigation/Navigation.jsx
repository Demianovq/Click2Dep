import { NavList, NavItem, StyledLink } from './Navigation.styled';

import { Container } from 'components/Container/Container.styled';

export const Navigation = () => {
  return (
    <Container>
      <nav>
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
            <StyledLink to="/about">About us</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="/blog">Blog</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="/start">Start to work</StyledLink>
          </NavItem>
        </NavList>
      </nav>
    </Container>
  );
};

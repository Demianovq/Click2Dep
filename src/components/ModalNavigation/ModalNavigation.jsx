import { bubble as Menu } from 'react-burger-menu';
import { ModalNav, StyledLink } from './ModalNavigation.styled';

export const ModalNavigation = () => {
  return (
    <ModalNav>
      <Menu>
        <StyledLink to="/">Click2Dep</StyledLink>
        <StyledLink to="/affiliates">Affiliates</StyledLink>
        <StyledLink to="/advertiser">Advertiser</StyledLink>
        <StyledLink to="/blog">Blog</StyledLink>
      </Menu>
    </ModalNav>
  );
};

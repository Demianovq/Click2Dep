import { Outlet } from 'react-router-dom';

import { Navigation } from '../Navigation/Navigation';
import { Container } from 'components/Container/Container.styled';

export const Layout = () => {
  return (
    <>
      <header>
        <Container>
          <Navigation />
        </Container>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Container></Container>
      </footer>
    </>
  );
};

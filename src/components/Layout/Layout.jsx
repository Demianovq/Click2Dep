import { Outlet } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';
import { ModalNavigation } from 'components/ModalNavigation/ModalNavigation';
import { Header } from './Layout.styled';
import { Footer } from 'components/Footer/Footer';
import { Container } from 'components/Container/Container.styled';

export const Layout = () => {
  return (
    <>
      <Header>
        <nav>
          <ModalNavigation />
          <Container>
            <Navigation />
          </Container>
        </nav>
      </Header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

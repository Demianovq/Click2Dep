import { Outlet } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';
import { Header } from './Layout.styled';
import { Footer } from 'components/Footer/Footer';

export const Layout = () => {
  return (
    <>
      <Header>
        <nav>
          <Navigation />
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

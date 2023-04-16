import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { HomePage } from 'Pages/HomePage/HomePage';
import { AffiliatesPage } from 'Pages/AffiliatesPage';
import { AdvertiserPage } from 'Pages/AdvertiserPage';
import { AboutPage } from 'Pages/AboutPage/AboutPage';
import { BlogPage } from 'Pages/BlogPage';
import { StartToWorkPage } from 'Pages/StartToWorkPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/affiliates" element={<AffiliatesPage />} />
        <Route path="/advertiser" element={<AdvertiserPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/start" element={<StartToWorkPage />} />
      </Route>
    </Routes>
  );
};

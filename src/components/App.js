import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { HomePage } from 'Pages/HomePage/HomePage';
import { AffiliatesPage } from 'Pages/AffiliatesPage/AffiliatesPage';
import { AdvertiserPage } from 'Pages/AdvertiserPage/AdvertiserPage';

import { BlogPage } from 'Pages/BlogPage/BlogPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/affiliates" element={<AffiliatesPage />} />
        <Route path="/advertiser" element={<AdvertiserPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};

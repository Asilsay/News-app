import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import ScrollToTop from '../components/ScrollToTop';
import LoadingAll from '../components/LoadingAll';

const DetailNews = lazy(() => import('../pages/DetailNews'));
const Homepage = lazy(() => import('../pages/Homepage'));

function Router() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<LoadingAll />}>
        <Routes>
          <Route
            path="/"
            element={<Homepage />}
          />
          <Route
            path="/:detail"
            element={<DetailNews />}
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default Router;

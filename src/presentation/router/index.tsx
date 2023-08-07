import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ScrollToTop from '../components/ScrollToTop';
import LoadingAll from '../components/LoadingAll';

const Homepage = lazy(() => import('../pages/Homepage'));
const DetailNews = lazy(() => import('../pages/DetailNews'));

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

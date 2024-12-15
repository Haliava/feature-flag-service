import { lazy } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router';

import { IndexPage, Layout, LogoutPage, AuthPage } from '@/pages';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import '@/app/index.css';

const queryClient = new QueryClient();

const UMLViewerPage = lazy(() => import(/* webpackPrefetch: true */ '@/pages/umlViewerPage'));
const FlagsPage = lazy(() => import(/* webpackPrefetch: true */ '@/pages/flagsPage'));
const ProfilePage = lazy(() => import(/* webpackPrefetch: true */ '@/pages/profilePage'));
const OrganizationPage = lazy(() => import(/* webpackPrefetch: true */ '@/pages/organizationPage'));
const LogsPage = lazy(() => import(/* webpackPrefetch: true */ '@/pages/logsPage'));

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route index element={<IndexPage />} />
        <Route path="logout" element={<LogoutPage />} />
        <Route element={<Layout />}>
          <Route path="uml" element={<UMLViewerPage />} />
          <Route path="flags" element={<FlagsPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="organizations" element={<OrganizationPage />} />
          <Route path="logs" element={<LogsPage />} />
          <Route path="login" element={<AuthPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
)

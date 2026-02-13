import { createBrowserRouter, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import { PATHS } from '@/config/paths';
import { PublicLayout } from '@/layouts/PublicLayout';
import { Loadable } from '@/components/utils/Loadable';


const HomePage = Loadable(lazy(() => import('@/features/home/pages/HomePage')));
const ContactPage = Loadable(lazy(() => import('@/features/info/pages/Contact')));
const CookiesPage = Loadable(lazy(() => import('@/features/info/pages/Cookies')));
const FAQPage = Loadable(lazy(() => import('@/features/info/pages/FAQ')));
const PrivacyPage = Loadable(lazy(() => import('@/features/info/pages/Privacy')));
const TermsPage = Loadable(lazy(() => import('@/features/info/pages/Terms')));

export const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    children: [
      {
        path: PATHS.HOME,
        element: <HomePage />, 
      },
      {
        path: PATHS.INFO.CONTACT,
        element: <ContactPage />,
      },
      {
        path: PATHS.INFO.COOKIES,
        element: <CookiesPage />,
      },
      {
        path: PATHS.INFO.FAQ,
        element: <FAQPage />,
      },
      {
        path: PATHS.INFO.PRIVACY,
        element: <PrivacyPage />,
      },
      {
        path: PATHS.INFO.TERMS,
        element: <TermsPage />,
      },
      {
        path: '*',
        element: <Navigate to={PATHS.HOME} replace />,
      },
    ],
  },
]);
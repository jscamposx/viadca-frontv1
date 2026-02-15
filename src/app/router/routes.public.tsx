import { createBrowserRouter, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import { PATHS } from '@/app/config/paths';
import { PublicLayout } from '@/layouts/PublicLayout';
import { Loadable } from '@/shared/lib/Loadable';


const HomePage = Loadable(lazy(() => import('@/pages/HomePage')));
const ContactPage = Loadable(lazy(() => import('@/pages/Legal/ContactPage')));
const CookiesPage = Loadable(lazy(() => import('@/pages/Legal/CookiesPage')));
const FAQPage = Loadable(lazy(() => import('@/pages/Legal/FaqPage')));
const PrivacyPage = Loadable(lazy(() => import('@/pages/Legal/PrivacyPage')));
const TermsPage = Loadable(lazy(() => import('@/pages/Legal/TermsPage')));

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
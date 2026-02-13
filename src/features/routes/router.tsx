import { createBrowserRouter, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { PATHS } from '@/features/config/paths';
import { PublicLayout } from '@/features/layouts/PublicLayout';

const PageLoader = () => (
  <div className="flex min-h-[50vh] items-center justify-center">
    <div className="h-8 w-8 animate-spin rounded-full border-4 border-muted border-t-foreground" />
  </div>
);

const Loadable = (Component: React.ComponentType) => (props: object) => (
  <Suspense fallback={<PageLoader />}>
    <Component {...props} />
  </Suspense>
);


const HomePage = lazy(() => import('@/features/home/pages/HomePage'));
const ContactPage = lazy(() => import('@/features/info/pages/Contact'));
const CookiesPage = lazy(() => import('@/features/info/pages/Cookies'));
const FAQPage = lazy(() => import('@/features/info/pages/FAQ'));
const PrivacyPage = lazy(() => import('@/features/info/pages/Privacy'));
const TermsPage = lazy(() => import('@/features/info/pages/Terms'));

const HomePageRoute = Loadable(HomePage);
const ContactPageRoute = Loadable(ContactPage);
const CookiesPageRoute = Loadable(CookiesPage);
const FAQPageRoute = Loadable(FAQPage);
const PrivacyPageRoute = Loadable(PrivacyPage);
const TermsPageRoute = Loadable(TermsPage);

export const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    children: [
      {
        path: PATHS.HOME,
        element: <HomePageRoute />,
      },
      {
        path: PATHS.INFO.CONTACT,
        element: <ContactPageRoute />,
      },
      {
        path: PATHS.INFO.COOKIES,
        element: <CookiesPageRoute />,
      },
      {
        path: PATHS.INFO.FAQ,
        element: <FAQPageRoute />,
      },
      {
        path: PATHS.INFO.PRIVACY,
        element: <PrivacyPageRoute />,
      },
      {
        path: PATHS.INFO.TERMS,
        element: <TermsPageRoute />,
      },
      {
        path: '*',
        element: <Navigate to={PATHS.HOME} replace />,
      },
    ],
  },
]);
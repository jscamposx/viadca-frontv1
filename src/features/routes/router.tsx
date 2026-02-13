import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import { PATHS } from "@/config/paths";
import { PublicLayout } from "@/layouts/PublicLayout";

const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="animate-pulse text-muted">Cargando...</div>
  </div>
);

const Loadable = (Component: React.ComponentType) => (props: any) => (
  <Suspense fallback={<PageLoader />}>
    <Component {...props} />
  </Suspense>
);

const HomePage = lazy(() => import("@/features/home/pages/HomePage"));
const ContactPage = lazy(() => import("@/features/info/pages/Contact"));
const CookiesPage = lazy(() => import("@/features/info/pages/Cookies"));
const FAQPage = lazy(() => import("@/features/info/pages/FAQ"));
const PrivacyPage = lazy(() => import("@/features/info/pages/Privacy"));
const TermsPage = lazy(() => import("@/features/info/pages/Terms"));

export const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    children: [
      {
        path: PATHS.HOME,
        element: <Loadable(HomePage) />,
      },
      {
        path: PATHS.INFO.CONTACT,
        element: <Loadable(ContactPage) />,
      },
      {
        path: PATHS.INFO.COOKIES,
        element: <Loadable(CookiesPage) />,
      },
      {
        path: PATHS.INFO.FAQ,
        element: <Loadable(FAQPage) />,
      },
      {
        path: PATHS.INFO.PRIVACY,
        element: <Loadable(PrivacyPage) />,
      },
      {
        path: PATHS.INFO.TERMS,
        element: <Loadable(TermsPage) />,
      },
      {
        path: "*",
        element: <div className="p-20 text-center">404 - Página no encontrada</div>,
      },
    ],
  },
]);
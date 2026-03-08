import { lazy } from 'react';
import Hero from '@/features/home/components/Hero';
import { Loadable } from '@/shared/lib/Loadable';

// Componentes below-the-fold: se descargan solo cuando el browser los necesita renderizar
const Carousel      = Loadable(lazy(() => import('@/features/home/components/Carousel')));
const Features      = Loadable(lazy(() => import('@/features/home/components/Features')));
const TravelInsights = Loadable(lazy(() => import('@/features/home/components/TravelInsights')));
const Reviews       = Loadable(lazy(() => import('@/features/home/components/Reviews')));
const ContactCTA    = Loadable(lazy(() => import('@/features/home/components/ContactCTA')));
const LegalFoot     = Loadable(lazy(() => import('@/features/home/components/LegalFoot')));
const Logos         = Loadable(lazy(() => import('@/features/home/components/Logos')));

const HomePage = () => (
  <>
    <Hero />
    <Carousel />
    <Features />
    <TravelInsights />
    <Reviews />
    <ContactCTA />
    <LegalFoot />
    <Logos />
  </>
);

export default HomePage;

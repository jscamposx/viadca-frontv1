import Carousel from '@/features/home/components/Carousel';
import ContactCTA from '@/features/home/components/ContactCTA';
import Features from '@/features/home/components/Features';
import Hero from '@/features/home/components/Hero';
import LegalFoot from '@/features/home/components/LegalFoot';
import Logos from '@/features/home/components/Logos';
import Reviews from '@/features/home/components/Reviews';
import TravelInsights from '@/features/home/components/TravelInsights';

export const HomePage = () => {
  return (
    <main>
      <Hero />
      <Carousel />
      <Features />
      <TravelInsights />
      <Reviews />
      <ContactCTA />
      <LegalFoot />
      <Logos />
    </main>
  );
};

export default HomePage;
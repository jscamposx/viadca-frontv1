import Hero from '../components/Hero';
import Carousel from '../components/Carousel';
import Features from '../components/Features';
import TravelInsights from '../components/TravelInsights';
import Reviews from '../components/Reviews';
import ContactCTA from '../components/ContactCTA';
import LegalFoot from '../components/LegalFoot';  
import Logos from '../components/Logos';

export const HomePage = () => {
  return (
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
};

export default HomePage;
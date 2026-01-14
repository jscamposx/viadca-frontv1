import Hero from '../components/Hero';
import Carousel from '../components/Carousel';
import Features from '../components/Features';
import TravelInsights from '../components/TravelInsights';
import Reviews from '../components/Reviews';

export const HomePage = () => {
  return (
    <>
        <Hero />
        <Carousel />
        <Features />
        <TravelInsights />
        <Reviews />
    </>
    );
};

export default HomePage;
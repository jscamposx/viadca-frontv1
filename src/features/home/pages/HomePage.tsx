import Hero from '../components/Hero';
import Carousel from '../components/Carousel';
import Features from '../components/Features';
import TravelInsights from '../components/TravelInsights';

export const HomePage = () => {
  return (
    <div>
        <Hero />
        <Carousel />
        <Features />
        <TravelInsights />
    </div>
    );
};

export default HomePage;
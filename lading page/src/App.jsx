import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Testimonials from './components/Testimonials';
import { CTA, Footer } from './components/CTAFooter';

export default function App() {
  return (
    <div className="grain-overlay">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

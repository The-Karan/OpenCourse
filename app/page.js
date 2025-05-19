import { CallToAction } from "./_components/CallToAction";
import { Footer } from "./_components/Footer";
import { Hero } from "./_components/Hero";
import { LogoTicker } from "./_components/LogoTicker";
import Navbar from "./_components/Navbar";
import { Pricing } from "./_components/Pricing";
import { ProductShowcase } from "./_components/ProductShowcase";
import { Testimonials } from "./_components/Testimonials";

export default function Home() {
  return (
    <>
    <Navbar />
      <Hero/>
      <LogoTicker />
      <ProductShowcase />
      <Pricing />
      <Testimonials />
      <CallToAction/>
      <Footer />
      </>
  );
}

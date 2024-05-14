import CallToAction from "@/Components/CallToAction";
import FAQ from "@/Components/FAQ";
import Features from "@/Components/Features";
import Footer from "@/Components/Footer";
import Gift from "@/Components/Gift";
import Hero from "@/Components/Hero";
import Testimonials from "@/Components/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero/>
      <Features/>
      <Gift/>
      <Testimonials/>
      <CallToAction/>
      <FAQ/>
      <Footer/>
    </main>
  );
}

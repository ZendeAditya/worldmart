import CallToAction from "@/Components/CallToAction";
import Features from "@/Components/Features";
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
    </main>
  );
}

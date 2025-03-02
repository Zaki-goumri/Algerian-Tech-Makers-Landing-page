import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Initiatives from "@/components/sections/Initiatives";
import Success from "@/components/sections/Success";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="font-['IBM_Plex_Sans_Arabic'] overflow-hidden">
      <Hero />
      <About />
      <Initiatives />
      <Success />
      <Contact />
      <Footer />
    </main>
  );
}

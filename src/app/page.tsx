import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-navy text-white">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Footer />
    </main>
  );
}

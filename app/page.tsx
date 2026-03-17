import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Solutions from "@/components/Solutions/Solutions";

import Network from "@/components/Network/Network";
import Systems from "@/components/Systems/Systems";
import SaaS from "@/components/SaaS/SaaS";
import AkelMed from "@/components/AkelMed/AkelMed";
import Dedicated from "@/components/Dedicated/Dedicated";

import Contact from "@/components/Contact/Contact";
import About from "@/components/About/About";
import Footer from "@/components/Footer/Footer";
import ScrollMotion from "@/components/ScrollMotion/ScrollMotion";

export default function Home() {
  return (
    <>
      <Navbar />
      <ScrollMotion />

      <main>

        <Hero />

        <Solutions />

        <Network />

        <Systems />

        <SaaS />

        <AkelMed />

        <Dedicated />

        <Contact />

        <About />

      </main>

      <Footer />
    </>
  );
}

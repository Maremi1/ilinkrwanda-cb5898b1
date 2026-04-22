import { useReveal } from "@/hooks/useReveal";
import Nav from "@/components/site/Nav";
import Hero from "@/components/site/Hero";
import TrustStrip from "@/components/site/TrustStrip";
import About from "@/components/site/About";
import Leadership from "@/components/site/Leadership";
import Services from "@/components/site/Services";
import Innovations from "@/components/site/Innovations";
import SalesAccelerator from "@/components/site/SalesAccelerator";
import FIA from "@/components/site/FIA";
import Ecosystem from "@/components/site/Ecosystem";
import Platforms from "@/components/site/Platforms";
import Foundation from "@/components/site/Foundation";
import Contact from "@/components/site/Contact";
import BrandMarquee from "@/components/site/BrandMarquee";
import Footer from "@/components/site/Footer";
import { useEffect } from "react";

const Index = () => {
  useReveal();

  useEffect(() => {
    document.title = "I Link Rwanda — Architecting Rwanda's Digital & Financial Future";
    const desc = "I Link Rwanda Limited: pioneering MARTECH and digital financial services with a 361° holistic approach — proprietary platforms, executive training, and the FIA network reaching 1.8M+ households.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);
  }, []);

  return (
    <main className="relative">
      <Nav />
      <Hero />
      <TrustStrip />
      <About />
      <Leadership />
      <Services />
      <Innovations />
      <SalesAccelerator />
      <FIA />
      <Ecosystem />
      <Platforms />
      <Foundation />
      <BrandMarquee />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;

import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Offer from "@/components/Offer";
import HowItWorks from "@/components/HowItWorks";
import CaseStudy from "@/components/CaseStudy";
import WhoWeServe from "@/components/WhoWeServe";
import SocialProof from "@/components/SocialProof";
import MarketRule from "@/components/MarketRule";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Offer />
        <HowItWorks />
        <CaseStudy />
        <WhoWeServe />
        <SocialProof />
        <MarketRule />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

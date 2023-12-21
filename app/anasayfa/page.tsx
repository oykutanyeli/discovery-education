import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
// import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
// import Features from "@/components/Features";
import Hero from "@/components/Hero";
// import Pricing from "@/components/Pricing";
// import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Discover Education | Gezerek Dil Öğren",
  description: "Discover Education | Gezerek Dil Öğren",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      {/* <Features />
      <Brands /> */}
      <AboutSectionOne />
      <AboutSectionTwo />
      {/* <Testimonials />
      <Pricing /> */}
      <Blog />
    </>
  );
}

import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import HomePage from "@/components/homepage/homepage";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
};

const Anasayfa = () => {
  return (
    <>
      <Hero />
      <HomePage />
    </>
  );
};

export default Anasayfa;

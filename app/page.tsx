import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import HomePage from "@/components/homepage/homepage";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Discover Education | Gezerek Dil Öğren",
  description: "Discover Education | Gezerek Dil Öğren",
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

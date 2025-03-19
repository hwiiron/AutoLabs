"use client";

import HighlightSection from "@/components/Landing/HighlightSection";
import SolutionSection from "@/components/Landing/SolutionSection";
import TeamSection from "@/components/Landing/TeamSection";
import VisualSection from "@/components/Landing/VisualSection";
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";

function MainPage() {
  return (
    <>
      <Header />
      <VisualSection />
      <SolutionSection />
      <HighlightSection />
      <TeamSection />
      <Footer />
    </>
  );
}

export default MainPage;

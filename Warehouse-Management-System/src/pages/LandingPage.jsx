import Navbar from "../components/layouts/Navbar";
import CTA from "../components/sections/CTA";
import Customize from "../components/sections/Customize";
import Data from "../components/sections/Data";
import Extension from "../components/sections/Extension";
import Hero from "../components/sections/Hero";
import Pricing from "../components/sections/Pricing";
import Project from "../components/sections/Projects";
import WorkTogether from "../components/sections/WorkTogether";

function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
       <Project />
      <WorkTogether />
      <Extension />
      <Customize />
      <Pricing />
      <CTA />
      <Data />
    </>
  );
}

export default LandingPage;
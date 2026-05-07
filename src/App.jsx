import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUp from './pages/SignupPage/SignUp'
import { Link } from "react-router-dom";
import { ChevronDown, Menu } from "lucide-react";


import "./App.css";

import Footer from "./components/layouts/Footer";
import Testimonials from "./components/sections/Testimonials";
import Whitepaceend from "./components/sections/Whitespaceend";
import Hero from "./components/sections/Hero";
import Project from "./components/sections/Projects";
import WorkTogether from "./components/sections/WorkTogether";
import Extension from "./components/sections/Extension";
import Customize from "./components/sections/Customize";
import Pricing from "./components/sections/Pricing";
import CTA from "./components/sections/CTA";
import Data from "./components/sections/Data";
import Navbar from "./components/layouts/Navbar";
import Work from "./components/sections/Work";
import Sponsors from "./components/sections/Sponsors";
import ForgotPassword from './pages/ForgetPassword/ForgetPassword'

function Home() {
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
      <Sponsors />
      <Work />
      <Testimonials />
      <Whitepaceend />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/login"
          element={<LoginPage />}
        />
        <Route
          path="/signup"
          element={<SignUp />}
        />
        <Route
          path="/forgot-password"
          element={<ForgotPassword />}
        />
        
      </Routes>
     

    </BrowserRouter>
  );
}

export default App;
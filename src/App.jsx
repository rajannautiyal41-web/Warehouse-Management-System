import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ChevronDown, Menu } from "lucide-react";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUp from './pages/SignupPage/SignUp'
//WMS
import Sidebar from "./components/wms sidebar/Sidebar";
import Dashboard from "./pages/Dashboard";
import ItemsPage from "./pages/ItemsPage";
import CreateItem from "./pages/CreateItem";



//WMS

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
   const [collapsed, setCollapsed] = useState(true);
 useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setCollapsed(false); // always open on desktop
    } else {
      setCollapsed(true); // closed on mobile
    }
  };

  window.addEventListener("resize", handleResize);
  handleResize();

  return () => window.removeEventListener("resize", handleResize);
}, []);
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
        

        
     {/* WMS ROUTES */}

<Route
  path="/dashboard"
  element={
    <div className="flex">

      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      {!collapsed && (
        <div
          className="fixed inset-0 bg-transparent z-40 md:hidden"
          onClick={() => setCollapsed(true)}
        />
      )}

      <div className="flex-1 w-full">
        {/* ✅ MOBILE HEADER */}
  <div className="md:hidden flex items-center p-3 bg-white shadow-sm">
    <button
      className="p-2 text-xl"
      onClick={() => setCollapsed(false)}
    >
      ☰
    </button>

    <h1 className="ml-3 font-semibold">Menu</h1>
  </div>
        <Dashboard />
      </div>

    </div>
  }
/>

<Route
  path="/items"
  element={
    <div className="flex">

      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      {/* ✅ ADD OVERLAY */}
      {!collapsed && (
        <div
          className="fixed inset-0 bg-transparent z-40 md:hidden"
          onClick={() => setCollapsed(true)}
        />
      )}

      {/* ✅ ADD LEFT MARGIN */}
      <div className="flex-1 w-full">

  {/* ✅ MOBILE HEADER */}
  <div className="md:hidden flex items-center p-3 bg-white shadow-sm">
    <button
      className="p-2 text-xl"
      onClick={() => setCollapsed(false)}
    >
      ☰
    </button>

    <h1 className="ml-3 font-semibold">Menu</h1>
  </div>
        <ItemsPage />
      </div>

    </div>
  }
/>

<Route
  path="/create-item"
  element={
    <div className="flex">

      {/* SIDEBAR */}
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      {/* OVERLAY */}
      {!collapsed && (
        <div
          className="fixed inset-0 bg-transparent z-40 md:hidden"
          onClick={() => setCollapsed(true)}
        />
      )}

      {/* PAGE */}
      <div className="flex-1 w-full">
        {/* ✅ MOBILE HEADER */}
  <div className="md:hidden flex items-center p-3 bg-white shadow-sm">
    <button
      className="p-2 text-xl"
      onClick={() => setCollapsed(false)}
    >
      ☰
    </button>

    <h1 className="ml-3 font-semibold">Menu</h1>
  </div>
        <CreateItem />
      </div>

    </div>
  }
/>
      </Routes>
     

    </BrowserRouter>
  );
}

export default App;
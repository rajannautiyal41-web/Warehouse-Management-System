import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import LoginPage from "./pages/LoginPage/LoginPage";
import SignUp from "./pages/SignupPage/SignUp";
import ForgotPassword from "./pages/ForgetPassword/ForgetPassword";

// WMS
import WMSNavbar from "./pages/Navbar/WMSNavbar";
import Sidebar from "./components/wms sidebar/Sidebar";
import Layout from "./components/layouts/Layout";
import Dashboard from "./pages/Dashboard";
import ItemsPage from "./pages/ItemsPage";
import CreateItem from "./pages/CreateItem";

// Website
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

import "./App.css";


// HOME PAGE
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


// ✅ WMS LAYOUT (CLEAN STRUCTURE)
function WMSLayout({ children, collapsed, setCollapsed }) {
  return (
    <div className="flex">

      {/* SIDEBAR */}
      <div
        className={`fixed top-[70px] bottom-0 z-40 bg-white border-r transition-all duration-300
        ${collapsed ? "w-[70px]" : "w-[260px]"}`}
      >
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      </div>

      {/* OVERLAY (MOBILE) */}
      {!collapsed && (
        <div
          className="fixed inset-0 bg-transparent z-40 md:hidden"
          onClick={() => setCollapsed(true)}
        />
      )}

      {/* CONTENT */}
      <div className="flex-1 w-full md:ml-[260px]">

        {/* ✅ NAVBAR (DESKTOP) */}
        <div className="hidden md:block">
          <WMSNavbar />
        </div>

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

        {/* PAGE CONTENT */}
        <div className="p-4">
          {children}
        </div>

      </div>
    </div>
  );
}


// ✅ MAIN APP
function App() {
  const [collapsed, setCollapsed] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setCollapsed(false); // open on desktop
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

        {/* WEBSITE */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* WMS ROUTES */}
        <Route
          path="/dashboard"
          element={
            <WMSLayout collapsed={collapsed} setCollapsed={setCollapsed}>
              <Dashboard />
            </WMSLayout>
          }
        />

        <Route
          path="/items"
          element={
            <WMSLayout collapsed={collapsed} setCollapsed={setCollapsed}>
              <ItemsPage />
            </WMSLayout>
          }
        />

        <Route
          path="/create-item"
          element={
            <WMSLayout collapsed={collapsed} setCollapsed={setCollapsed}>
              <CreateItem />
            </WMSLayout>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
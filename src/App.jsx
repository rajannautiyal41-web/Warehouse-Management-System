import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { useState } from "react";

/* ================= AUTH PAGES ================= */

import LoginPage from "./pages/LoginPage/LoginPage";

import SignUp from "./pages/SignupPage/SignUp";

import ForgotPassword from "./pages/ForgetPassword/ForgetPassword";

/* ================= DASHBOARD ================= */

import Dashboard from "./pages/Dashboard/Dashboard";

/* ================= NAVBAR + SIDEBAR ================= */

import WMSNavbar from "./pages/Navbar/WMSNavbar";

import WMSSidebar from "./pages/Main Layout/WMSSidebar";

/* ================= LANDING PAGE ================= */

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

import Space from "./pages/Space/Space";

import Rack from "./pages/Space/Rack/Rack";

import Slot from "./pages/Space/Slot/Slot";

import CreateSpace from "./pages/Space/CreateSpace/CreateSpace";

import Shipment from "./pages/Dashboard/Shipment/Shipment";

import CreateShipment from "./pages/Dashboard/Shipment/CreateShipment";

import ItemsPage from "./pages/MasterItems/ItemsPage";

import UserPage from "./pages/User/UserPage";

import CreateUser from "./pages/User/CreateUser";
/* ================================================= */
/* HOME PAGE */
/* ================================================= */

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

/* ================================================= */
/* DASHBOARD LAYOUT */
/* ================================================= */

function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  return (
    <div className="flex bg-[#F5F6FA]">
      {/* SIDEBAR */}
      <WMSSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* MAIN CONTENT */}
      <div className="flex-1 md:ml-[260px]">
        {/* NAVBAR */}
        <WMSNavbar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        {/* DASHBOARD PAGE */}
        <div className="pt-[90px] p-5">
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

/* ================================================= */
/* APP */
/* ================================================= */

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* HOME */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* AUTH */}
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

        {/* DASHBOARD */}
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />
        <Route
          path="/space"
          element={<Space />}
        />
        <Route
          path="/rack"
          element={<Rack />}
        />
        <Route
          path="/slot"
          element={<Slot />}
        />
        <Route
          path="/createspace"
          element={<CreateSpace />}
        />
        <Route
          path="/shipment"
          element={<Shipment />}
        />
        <Route
          path="/shipment/create"
          element={<CreateShipment />}
        />
        <Route path="/items"
          element={<ItemsPage />}
        />
        <Route
          path="/users"
          element={<UserPage />}
        />

        <Route
          path="/create-user"
          element={<CreateUser />}
        />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
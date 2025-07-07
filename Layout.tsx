import React from "react";
import { Outlet } from "react-router-dom";
import Menu from "./components/navigation/index"; // Adjust path if needed
import Footer from "./components/Footer"; // Adjust path if needed

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Menu />
      {/* background */}
      <main className="pt-8 w-full flex-grow text-[var(--umber);]">
        <div className=" container mx-auto px-4 py-8">
          {/* Outlet renders the matched child route component (e.g., HomePage, AboutPage) */}
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
}

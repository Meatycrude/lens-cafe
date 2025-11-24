import React from "react";
import Link from "next/link";
import Navbar from "@/components/navbar/page";
import Hero from "@/components/hero/page";
import Menu from "@/components/menu/page";
import QuickInfoBar from "@/components/quickbar/page";
import Specials from "@/components/specials/page";
import AboutSnippet from "@/components/about/page";

export default function Homepage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <QuickInfoBar />
      <Specials />
      <Menu />
      <AboutSnippet />
    </div>
  );
}

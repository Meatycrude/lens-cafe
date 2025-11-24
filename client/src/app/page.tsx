import React from "react";
import Link from "next/link";
import Navbar from "@/components/navbar/page";
import Hero from "@/components/hero/page";

export default function Homepage() {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
}

"use client"
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './globals.css'
import Hero from "@/components/ui/sections/Hero";
import Solutions from "@/components/ui/sections/Solutions";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <main>
      <Hero />
      <Solutions />
    </main>
  );
}
"use client"
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // <-- mana shuni qo‘sh
import './globals.css'
import Hero from "@/components/ui/sections/Hero";

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
    </main>
  );
}
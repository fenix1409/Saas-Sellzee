"use client"
import { useEffect } from "react";
import AOS from 'aos';
import './globals.css'

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, 
    })
  }, [])
  return (
    <h1>salom</h1>
  );
}

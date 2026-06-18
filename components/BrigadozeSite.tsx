"use client";

import { About } from "@/components/About";
import { Cakes } from "@/components/Cakes";
import { Contact } from "@/components/Contact";
import { Flavors } from "@/components/Flavors";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Order } from "@/components/Order";
import { Products } from "@/components/Products";
import { LanguageProvider } from "@/lib/LanguageContext";

export function BrigadozeSite() {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <Flavors />
        <Cakes />
        <Order />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}

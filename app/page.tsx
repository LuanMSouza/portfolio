"use client";

import Contact from "@/componentes/contato";
import Hero from "@/componentes/hero";
import Projetos from "@/componentes/projetos";
import Stack from "@/componentes/stack";
import TopBar from "@/componentes/topBar";

export default function Home() {

  return (
    <main>
      <TopBar />
      <Hero />
      <Projetos />
      <Stack />
      <Contact />
    </main>
  );
}
"use client";

import dynamic from 'next/dynamic';
import TopBar from "@/componentes/topBar";
import Hero from "@/componentes/hero";

const Projetos = dynamic(() => import("@/componentes/projetos"));
const Stack = dynamic(() => import("@/componentes/stack"));
const Contact = dynamic(() => import("@/componentes/contato"));

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
import { Asterisk } from "@/components/Asterisk";
import { Seal } from "@/components/Seal";
import { AboutUs } from "@/components/sections/AboutUs";
import { Agenda } from "@/components/sections/Agenda";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { NewHero } from "@/components/sections/NewHero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-screen overflow-x-hidden space-y-[15vh]">
      {/* <Hero /> */}

      <NewHero />

      <Agenda />

      <HowItWorks />

      <AboutUs />

      <Contact />
    </main>
  );
}

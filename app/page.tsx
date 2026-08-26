import { Hero } from "@/components/sections/MainPage/Hero";
import { Works } from "@/components/sections/MainPage/Works";
import { Capabilities } from "@/components/sections/MainPage/Capabilities";
import { About } from "@/components/sections/MainPage/About";
import { Experience } from "@/components/sections/MainPage/Experience";
import { Contact } from "@/components/sections/MainPage/Contact";
import { Footer } from "@/components/Footer";


export default function Home() {
  return (
      <main id="top">
        <Hero/>
        <Works/>
        <About/>
        {/* <Capabilities/> */}
        {/* <Experience/> */}
        <Contact/>
        <Footer/>
      </main>
  );
}

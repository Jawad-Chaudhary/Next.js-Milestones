import About from "@/components/about";
import Contact from "@/components/contact";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Project from "@/components/project";

export default function Home() {
  return (
    <main>
      <Header/>
      <Hero/>
      <Project/>
      <About/>
      <Contact/>
      <Navbar/>
    </main>
  )
}
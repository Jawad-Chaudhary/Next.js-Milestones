import About from "@/components/about";
import Cause from "@/components/cause";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Volunteer from "@/components/volunteer";


export default function Home() {
  return (
    <main>
      <Hero/> 
      <About/>
      <Cause/>
      <Volunteer/>
      <Contact/>
    </main>
  );
}

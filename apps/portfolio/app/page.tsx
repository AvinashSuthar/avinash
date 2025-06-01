import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import TechStack from "@/components/TechStack";
import Drag from "@/components/ui/Animation/Drag";
import SmoothScrollWrapper from "@/components/ui/Animation/SmoothScroller";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";

export default function Home() {
  return (
    <>
      <FloatingNav navItems={navItems} />

      <SmoothScrollWrapper>
        <main className="relative bg-black-100 flex justify-center items-center flex-col  mx-auto sm:px-10 px-5 ">
          <div className="max-w-7xl w-full">
            <Hero />
            <Grid />
            <TechStack />
            <RecentProjects />
            <Approach />
          </div>
        </main>
        <Footer />
      </SmoothScrollWrapper>
      <Drag />
    </>
  );
}

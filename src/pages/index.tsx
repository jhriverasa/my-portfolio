import NavBar from "@/components/NavBar";
import Intro from "@/components/Intro";
import About from "@/components/About";
import MeAndProgramming from "@/components/MeAndProgramming";
import Experience from "@/components/Experience";
import WhyMe from "@/components/WhyMe";

const Home = () => {
  return (
    <div className=" bg-slate-900 ">
      <NavBar />
      <Intro />
      <About />
      <MeAndProgramming />

      <Experience />

      <WhyMe />

      <About />
      <About />
      <About />
      <About />
    </div>
  );
};

export default Home;

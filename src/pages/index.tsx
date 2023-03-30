import NavBar from "@/components/NavBar";
import Intro from "@/components/Intro";
import About from "@/components/About";
import MeAndProgramming from "@/components/MeAndProgramming";
import Experience from "@/components/Experience";
import WhyMe from "@/components/WhyMe";

const Home = () => {
  return (
    <div className=" flex flex-col w-full bg-oxford-blue">
      <NavBar />
      <Intro />
      <About />
      <MeAndProgramming />
      <Experience />
      <WhyMe />

      {/*<div className="h-36">
        <div className="w-1/2" data-aos="fade-up">
          here
        </div>
  </div>*/}
    </div>
  );
};

export default Home;

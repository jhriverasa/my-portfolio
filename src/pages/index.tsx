import NavBar from "@/components/NavBar";
import Intro from "@/components/Intro";
import About from "@/components/About";
import MeAndProgramming from "@/components/MeAndProgramming";
import Experience from "@/components/Experience";
import WhyMe from "@/components/WhyMe";
import Layout from "@/components/Layout";

const Home = () => {
  return (
    <div className=" bg-slate-900 ">
      <NavBar />
      <Layout>
        <Intro />
        <About />
        <MeAndProgramming />

        <Experience />

        <WhyMe />


      </Layout>
    </div>
  );
};

export default Home;

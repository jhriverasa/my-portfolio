import NavBar from "@/components/NavBar";
import Intro from "@/components/Intro";
import About from "@/components/About";
import MeAndProgramming from "@/components/MeAndProgramming";
import Experience from "@/components/Experience";
import WhyMe from "@/components/WhyMe";
import Layout from "@/components/Layout";
import SkillsCloud from "@/components/SkillsCloud";
import SideBar from "@/components/sidebar/SideBar";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <Layout>
      <Intro />
      <About />
      <MeAndProgramming />

      <Experience />
      <SkillsCloud />

      <WhyMe />
      <Projects />
      
      <Footer />
      <SideBar />
    </Layout>
  );
};

export default Home;

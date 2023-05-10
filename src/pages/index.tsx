import Footer from "@/components/base/Footer";
import SideBar from "@/components/base/sidebar/SideBar";
import Layout from "@/components/base/Layout";

import Intro from "@/components/sections/Intro";
import About from "@/components/sections/About";
import MeAndProgramming from "@/components/sections/MeAndProgramming";
import Experience from "@/components/sections/Experience";
import WhyMe from "@/components/sections/WhyMe";
import SkillsCloud from "@/components/sections/SkillsCloud";
import Projects from "@/components/sections/Projects";


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

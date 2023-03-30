import NavBar from "@/components/NavBar";
import Intro from "@/components/Intro";
import About from "@/components/About";


const Home = () => {
  return (
    <div className="absolute h-full w-full bg-oxford-blue">
      <NavBar />
      <Intro />

      <div className="h-36">
        <div className="w-1/2" data-aos="fade-up">
          here
        </div>
      </div>

    </div>
  );
};

export default Home;

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Jogos from "../../components/Jogos/Jogos";
import Ultimas from "../../components/Ultimas/Ultimas";
import Launcher from "../../components/Launcher/Launcher";

const Home = () => {
  return (
    <div className="max-w-[1440px] bg-[#101010] m-auto text-white">
      <Header />
      <Hero />
      <Jogos />
      <Ultimas />
      <Launcher />
      <Footer />
    </div>
  );
};

export default Home;

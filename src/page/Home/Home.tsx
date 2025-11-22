import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Jogos from "../../components/Jogos/Jogos";

const Home = () => {
  return (
    <div className="max-w-[1440px] bg-[#101010] m-auto text-white">
      <Header />
      <Hero />
      <Jogos />
      <Footer />
    </div>
  );
};

export default Home;

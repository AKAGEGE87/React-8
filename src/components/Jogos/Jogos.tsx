import img1 from "/images/img1.png";
import img2 from "/images/img2.png";
import img3 from "/images/img3.png";
import img4 from "/images/img4.png";
import Button from "../Button/Button";

const links = [
  {
    title: "Pc"
  },
  {
    title: "Console"
  },
  {
    title: "Dispositivos Portateis"
  }
];

const cards = [
  {
    link: img1
  },
  {
    link: img2
  },
  {
    link: img3
  },
  {
    link: img4
  }
];

const Jogos = () => {
  return (
    <section className="mb-20 text-center">
      <div className="px-[140px] flex justify-between items-center mb-10">
        <h2 className="text-5xl font-bold">Jogos em Destaque</h2>
        <ul>
          <li className="flex gap-4">
            {links.map((link, index) => (
              <a
                key={index}
                href="#"
                className="px-6 py-1 bg-[#606060] rounded-[20px] hover:bg-[#7a7a7a] hover:transition-colors hover:duration-300 cursor-pointer"
              >
                {link.title}
              </a>
            ))}
          </li>
        </ul>
      </div>
      <div className="px-[140px] grid grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-[#1A1A1A] rounded-lg overflow-hidden hover:scale-105 hover:transition-transform hover:duration-300 cursor-pointer mb-16"
          >
            <img src={card.link} alt="Game Cover" className="w-full" />
          </div>
        ))}
      </div>
      <Button text="Ver todos os jogos" className="mx-auto py-[15px] px-12" />
    </section>
  );
};

export default Jogos;

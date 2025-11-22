import logo from "/images/Logo.svg";
import search from "/images/search.svg";
import login from "/images/login.svg";
import arrow from "/images/arrow.svg";
import Button from "../Button/Button";

const Header = () => {
  return (
    <header className="bg-[#020202] px-[140px] py-[29px] flex justify-between items-center">
      <div className="flex items-center gap-[47px]">
        <img
          src={logo}
          alt="logo"
          className="hover:text-amber-500 cursor-pointer"
        />
        <ul className="flex gap-6">
          <li>
            <a href="/" className="flex  hover:text-amber-500 text-white">
              Jogos
              <img src={arrow} alt="arrow down" className="px-[7px] py-2.5" />
            </a>
          </li>
          <li>
            <a href="/" className=" hover:text-amber-500 text-white">
              Lojia
            </a>
          </li>
          <li>
            <a href="/" className=" hover:text-amber-500 text-white">
              Ajura
            </a>
          </li>
        </ul>
      </div>
      <div className="flex gap-10">
        <Button text="Baixe o Launcher" />
        <div
          className="flex
        gap-6"
        >
          <div className="cursor-pointer w-12 h-12 flex justify-center items-center bg-[#1A1A1A] rounded-full hover:bg-[#FCAF17]/80">
            <img src={search} alt="search" />
          </div>
          <div className="cursor-pointer w-12 h-12 flex justify-center items-center bg-[#1A1A1A] rounded-full hover:bg-[#FCAF17]/80">
            <img src={login} alt="login" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

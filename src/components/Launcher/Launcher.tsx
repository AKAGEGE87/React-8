import Button from "../Button/Button";

const Launcher = () => {
  return (
    <section className="px-[140px] mt-28 ">
      <div className="bg-cover bg-center bg-[url('/images/launcherBG.png')] h-[535px] flex gap-20 rounded-2xl pl-[76px] py-8">
        <div>
          <div className="flex gap-5 justify-center items-center max-w-[342px] mt-8 mb-6">
            <div className="max-w-[126.75px] w-full max-h-[137.65px] h-screen bg-[#FFAB00] flex justify-center items-center rounded-2xl border-4 border-black">
              <img src="/images/LogoBlack.svg" alt="logo" />
            </div>

            <h1 className="font-extrabold text-[41.75px] text-[#020202] ">
              Games launcher
            </h1>
          </div>

          <p className="text-[30px] font-medium text-[#020202] mb-16">
            Todos os seus jogos <br />
            em um só lugar.
          </p>
          <Button
            text="Download"
            className="font-extrabold text-[20px] py-[15px] px-22"
          />
        </div>
        <div className="max-w-[660px] h-[471px]">
          <img
            src="/images/lastsection.png"
            alt="image"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default Launcher;

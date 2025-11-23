const Ultimas = () => {
  return (
    <section className="px-[140px]">
      <h2 className="text-[48px] mb-10">Últimas Notícias</h2>
      <div className="flex gap-10">
        <div className="w-[850px] ">
          <div className="flex flex-col justify-end h-[528px] max-w-[850px]  bg-cover bg-center bg-[url('/images/section2bgimg.png')] hover:cursor-pointer hover:opacity-70 transition-opacity duration-300">
            <div className="pl-8 pt-6 pb-8 rounded-b-2xl bg-[#020202] w-full ">
              <h3 className="text-[31px] mb-2 font-semibold text-white ">
                Grand Theft Auto VI - Veja o 1º trailer agora
              </h3>
              <p className="text-[#797979]  text-[16px] ">
                Rockstar Games 5 de dezembro de 2023
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10 w-[260px]">
          <div className="flex flex-col justify-end w-full h-[244px] bg-cover bg-center bg-[url('/images/section2bgimg2.png')] hover:cursor-pointer hover:opacity-70 transition-opacity duration-300">
            <div className="bg-[#020202] rounded-b-2xl px-3 pt-2">
              <h3 className="text-[13px] mb-2 font-semibold text-white ">
                1º Trailer. Terça-feira, 5 de <br />
                Dezembro. 9h Et.
              </h3>
              <p className="text-[#797979]  text-[12px] pb-3 ">
                Rockstar Games 5 de dezembro de 2023
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-end w-full h-[244px] bg-cover bg-center bg-[url('/images/section2bgimg3.png')] hover:cursor-pointer hover:opacity-70 transition-opacity duration-300">
            <div className="bg-[#020202] rounded-b-2xl px-3 pt-2">
              <h3 className="text-[13px] mb-2 font-semibold text-white ">
                Nova atualização de GTA Online chegando em dezembro
              </h3>
              <p className="text-[#797979]  text-[12px] pb-3 ">
                GTA Online 30 de novembro de 2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ultimas;

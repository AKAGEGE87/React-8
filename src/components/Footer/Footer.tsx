const socLinks = [
  { title: "/images/twitch.svg", url: "https://www.twitch.tv" },
  { title: "/images/instagram.svg", url: "https://www.instagram.com" },
  { title: "/images/twitter.svg", url: "https://www.twitter.com" },
  { title: "/images/facebook.svg", url: "https://www.facebook.com" },
  { title: "/images/youtube.svg", url: "https://www.youtube.com" }
];

const navLinks = [
  { title: "CONTANO", url: "/" },
  { title: "SOBRE", url: "/about" },
  { title: "SUPORTE", url: "/contact" },
  { title: "Empregos", url: "/blog" }
];

const Footer = () => {
  return (
    <footer className="flex justify-between items-center px-[140px] py-[91px] bg-[#020202]">
      <div className="flex gap-10">
        <div className="border-2 border-white w-[57.64px] h-[52.81px] rounded-2xl flex items-center justify-end pr-1.5">
          <a href="/">
            {" "}
            <img
              src="/images/Logo.svg"
              alt="logo"
              className="w-[34.83px] h-[35.28px]"
            />
          </a>
        </div>
        <div className="flex flex-col gap-2 text-[#797979]">
          <nav>
            <ul className="flex gap-6">
              {navLinks.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.url}
                    className="uppercase text-[16px] hover:text-white"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <p className="text-[13px]">
            ©2023 Rockstar Games, Inc. - YWR Studio.{" "}
          </p>
        </div>
      </div>
      <nav>
        <ul>
          {socLinks.map((link, index) => (
            <li key={index} className="inline-block mr-8">
              <a href={link.url} target="_blanck">
                <img
                  src={link.title}
                  alt="social link"
                  className="hover:size-8"
                />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;

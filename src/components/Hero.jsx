import { Icon } from "@iconify/react";
import FotoPerfil from "../assets/fotoperfil.jpg";
export const Hero = () => {
  const lenguaje = [
    { name: "React" },
    { name: "Tailwind" },
    { name: "Supabase" },
    { name: "MySQL" },
  ];
  const redes = [
    { icon: "lucide:github", link: "https://github.com/PentaAQ" },
    {
      icon: "lucide:linkedin",
      link: "https://www.linkedin.com/in/eddy-alexiz-yucra-amado-/",
    },
  ];
  return (
    <section
      className="h-[100vh] grid md:grid-cols-2 items-center gap-4 text-white mx-auto w-full max-w-7xl px-2 relative pt-20"
      id="home"
    >
      <div className="flex gap-5 flex-col animate-heroinfo">
        <div className="bg-gradient-to-r from-orange/30 to-orange/1 px-3 py-1 rounded-2xl border border-neutral-700 font-medium w-fit">
          <p className="animate-text overflow-hidden text-nowrap tracking-wider ">
            Full-Stack Developer
          </p>
        </div>
        <h1 className="text-6xl/20 font-bold">
          Hi, I'm <span className="text-orange">Alexiz Y. Amado</span>
        </h1>
        <p>
          I am a full stack developer passionate about creating modern,
          functional and purposeful web experiences. 🚀{" "}
        </p>
        <div className="flex gap-2">
          {lenguaje.map((item, index) => (
            <h2
              className="inline-block px-3 py-1 rounded-full text-sm tracking-wider bg-white/10 backdrop-blur-xl ring-1 ring-white/15"
              key={index}
            >
              {item.name}
            </h2>
          ))}
        </div>
        <div className="flex gap-4">
          <a
            href="#projects"
            className="w-40 bg-orange/50 hover:bg-orange focus:bg-orange rounded-lg py-2 font-medium hover:shadow-orangecenter focus:shadow-orangecenter transition-all duration-200 flex gap-3 items-center justify-center"
          >
            Projects
            <Icon
              icon="fluent-emoji-high-contrast:up-arrow"
              width="20"
              height="20"
              className="rotate-90"
            />
          </a>
          <a
            href="#contact"
            className="w-40 bg-orange/50 hover:bg-orange focus:bg-orange rounded-lg py-2 font-medium hover:shadow-orangecenter focus:shadow-orangecenter transition-all duration-200 flex gap-3 items-center justify-center"
          >
            Contact
            <Icon icon="ic:outline-email" width="20" height="20" />
          </a>
        </div>
        <div className="flex items-center gap-5 ">
          {redes.map((item, index) => (
            <a
              href={item.link}
              target="_blank"
              className="bg-white/10 p-2 ring-1 ring-white/15 rounded-md"
              key={index}
            >
              <Icon icon={item.icon} width="30" height="30" />
            </a>
          ))}
        </div>
      </div>
      <div className="animate-bounce md:animate-heroimg h-90 max-md:absolute max-md:max-h-20 top-35 right-5 transition-all duration-500">
        <img
          src={FotoPerfil}
          alt="FotoPerfil"
          className="rounded-full shadow-orangecenter h-full ml-auto"
        />
      </div>
    </section>
  );
};

import { Icon } from "@iconify/react";

export const About = () => {
  const abouts = [
    {
      title: "¿Quién soy?",
      icon: "gravity-ui:person",
      description:
        "Soy un desarrollador web fullstack enfocado en crear aplicaciones eficientes, escalables y centradas en el usuario. Me encanta aprender nuevas tecnologías y aplicar buenas prácticas de desarrollo para entregar resultados sólidos.",
    },
    {
      title: "Mi Objetivo",
      icon: "mingcute:rocket-line",
      description:
        "Significa seguir creciendo como profesional en el área tecnológica, contribuyendo a proyectos que impulsen la innovación y generen un impacto real. Busco ser parte de equipos que valoren la calidad del código y la mejora continua.",
    },
    {
      title: "Mi Perfil",
      icon: "ic:baseline-fingerprint",
      description:
        "Tengo experiencia en desarrollo front-end y back-end, trabajando con tecnologías como JavaScript, React, Django, Supabase y bases de datos SQL. Destaco por mi pensamiento analítico y habilidades para resolver problemas.",
    },
  ];
  const stack = [
    {
      name: "HTML",
      icon: "material-icon-theme:html",
    },
    {
      name: "CSS",
      icon: "devicon:css3",
    },
    {
      name: "JavaScript",
      icon: "logos:javascript",
    },
    {
      name: "Tailwind",
      icon: "logos:tailwindcss-icon",
    },
    {
      name: "React",
      icon: "material-icon-theme:react",
    },
    {
      name: "MySQL",
      icon: "streamline-cyber-color:database",
    },
    {
      name: "Python",
      icon: "material-icon-theme:python",
    },
    {
      name: "Django",
      icon: "material-icon-theme:django",
    },
    {
      name: "Supabase",
      icon: "logos:supabase-icon",
    },
    {
      name: "Git",
      icon: "devicon:git",
    },
  ];
  return (
    <section
      className="w-full max-w-7xl mx-auto text-white px-2 flex gap-10 md:gap-20 flex-col md:h-screen"
      id="about"
    >
      <h1 className="text-5xl font-bold border-b-2 border-orange w-fit">
        Sobre Mí
      </h1>
      <div className=" flex gap-10 flex-wrap justify-center">
        {abouts.map((item, index) => (
          <div
            key={index}
            className="w-full max-w-xs bg-orange/10 p-5 rounded-2xl shadow-orangecardabout h-60 overflow-hidden hover:-translate-y-5 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-5">
              <Icon
                icon={item.icon}
                width="40"
                height="40"
                className="p-1 bg-orange/30 rounded-full"
              />
              <h2 className="text-2xl font-bold text-orange">{item.title}</h2>
            </div>
            <p className="text-sm">{item.description}</p>
          </div>
        ))}
      </div>
      <div className="bg-orange/10 w-full max-md:max-w-xs max-lg:max-w-3xl lg:max-w-5xl mx-auto rounded-xl flex flex-col gap-10 p-5">
        <h2 className="text-3xl font-bold text-center text-orange">Mi Stack</h2>
        <div className="flex gap-2 justify-around max-lg:flex-wrap">
          {stack.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 hover:-translate-y-5  transition-all duration-300 bg-orange-900/10 p-2 w-25 h-fit overflow-hidden rounded-lg cursor-pointer"
            >
              <Icon icon={item.icon} width="40" height="40" />
              <h3 className="text-sm">{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

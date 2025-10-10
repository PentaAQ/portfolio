import RampalContadores from "../assets/rampal.png";
export const Projects = () => {
  const proyects = [
    {
      title: "Rampal Contadores",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur laborum porro libero nulla quas. Dicta autem voluptates doloribus vero eius voluptatibus in temporibus laboriosam nam, deserunt, cumque corrupti deleniti sed!",
      lenguajes: "Tailwind - JavaScript - React - Astro",
      img: RampalContadores,
    },
    {
      title: "UTP+Foro",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur laborum porro libero nulla quas. Dicta autem voluptates doloribus vero eius voluptatibus in temporibus laboriosam nam, deserunt, cumque corrupti deleniti sed!",
      lenguajes: "Python - Django - SQL",
      img: RampalContadores,
    },
    {
      title: "Personal Website",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur laborum porro libero nulla quas. Dicta autem voluptates doloribus vero eius voluptatibus in temporibus laboriosam nam, deserunt, cumque corrupti deleniti sed!",
      lenguajes: "React - Tailwind",
      img: RampalContadores,
    },
  ];
  return (
    <section
      id="projects"
      className="w-full max-w-7xl mx-auto text-white px-2 flex flex-col gap-10"
    >
      <h1 className="text-5xl font-bold border-b-2 border-orange w-fit">
        Projects
      </h1>
      <div className="flex gap-10 flex-wrap max-w-5xl mx-auto w-full justify-around">
        {proyects.map((item, index) => (
          <div key={index} className="w-full max-w-md rounded-2xl bg-orange/10 overflow-hidden h-fit">
            <img src={item.img} alt={item.title} className="object-cover object-top h-40 w-full" />
            <div className="flex flex-col p-3 gap-3">
              <h2 className="text-xl font-medium">{item.title}</h2>
              <p className="text-xs">{item.description}</p>
              <p className="text-orange text-xs">{item.lenguajes}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

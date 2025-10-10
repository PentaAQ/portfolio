import RampalContadores from "../assets/rampal.png";
import PersonPage from '../assets/personpage.png'
import UtpForo from '../assets/utpforo.png'
export const Projects = () => {
  const proyects = [
    {
      title: "Rampal Contadores",
      description:
        "I designed and developed a corporate website that conveys trust and professionalism. Its objective was to improve the company's digital presence and facilitate communication with its customers.",
      lenguajes: "Tailwind - JavaScript - React - Astro",
      img: RampalContadores,
      to:'https://www.rampalcontadores.com/'
    },
    {
      title: "UTP+Foro",
      description:
        "Academic team project where I developed a forum system with user management and administrative panels. It allowed me to reinforce technical and collaborative work skills.",
      lenguajes: "Python - Django - SQL",
      img: UtpForo,
      to:'https://github.com/PentaAQ/UTPForoPadre'
    },
    {
      title: "Personal Website",
      description:
        "I created my web portfolio to showcase my projects and professional career, with a design focused on visual clarity, organization, and user experience.",
      lenguajes: "React - Tailwind",
      img: PersonPage,
      to:''
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
          <a href={item.to} target="_blank" key={index} className="w-full max-w-md rounded-2xl bg-orange/10 overflow-hidden h-fit hover:-translate-y-3 transition-all duration-300 cursor-pointer shadow-2xl">
            <img src={item.img} alt={item.title} className="object-cover object-top h-40 w-full" />
            <div className="flex flex-col p-3 gap-3">
              <h2 className="text-xl font-medium">{item.title}</h2>
              <p className="text-xs">{item.description}</p>
              <p className="text-orange text-xs">{item.lenguajes}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

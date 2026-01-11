import RampalContadores from "../assets/rampal.png";
import PersonPage from '../assets/personpage.png'
import UtpForo from '../assets/utpforo.png'
import EcomWS from '../assets/ecomws.png'
export const Projects = () => {
  const proyects = [
    {
      title: "Rampal Contadores",
      description:
        "Diseñé y desarrollé un sitio web corporativo que transmite confianza y profesionalismo. Su objetivo fue mejorar la presencia digital de la empresa y facilitar la comunicación con sus clientes.",
      lenguajes: "Tailwind - JavaScript - React - Astro",
      img: RampalContadores,
      to:'https://www.rampalcontadores.com/'
    },
    {
      title: "UTP+Foro",
      description:
        "Proyecto académico en equipo donde desarrollé un sistema de foro con gestión de usuarios y paneles administrativos. Me permitió reforzar habilidades técnicas y de trabajo colaborativo.",
      lenguajes: "Python - Django - SQL",
      img: UtpForo,
      to:'https://utpforopadre.onrender.com/'
    },
    {
      title: "Sitio Web Personal",
      description:
        "Creé mi portafolio web para mostrar mis proyectos y trayectoria profesional, con un diseño enfocado en la claridad visual, organización y experiencia del usuario.",
      lenguajes: "React - Tailwind",
      img: PersonPage,
      to:''
    },
    {
      title: "EcomWS",
      description:
        "Plataforma de e-commerce para emprendedores: Página informativa pública, login con redirección automática, y administrador con CRUD para productos, listados y detalles, gestión de precios, fotos y stock.",
      lenguajes: "React - Tailwind - Supabase",
      img: EcomWS,
      to:'https://ecomws.vercel.app/'
    },
  ];
  return (
    <section
      id="projects"
      className="w-full max-w-7xl mx-auto text-white px-2 flex flex-col gap-10"
    >
      <h1 className="text-5xl font-bold border-b-2 border-orange w-fit">
      Proyectos
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

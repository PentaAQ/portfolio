import { Icon } from "@iconify/react";

export const About = () => {
  const abouts = [
    {
      title: "Who am I?",
      icon: "gravity-ui:person",
      description:
        "I am a fullstack web developer with a focus on creating efficient, scalable, and user-centric applications. I love learning new technologies and applying good development practices to deliver solid results.",
    },
    {
      title: "My Goal",
      icon: "mingcute:rocket-line",
      description:
        "It means continuing to grow as a professional in the technological area, contributing to projects that drive innovation and generate a real impact. I seek to be part of teams that value code quality and continuous improvement.",
    },
    {
      title: "My Profile",
      icon: "ic:baseline-fingerprint",
      description:
        "I have experience in front-end and back-end development, working with technologies such as JavaScript, React, Django, supabase and SQL databases. I stand out for my analytical thinking and problem-solving abilities.",
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
        About Me
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
              className="flex flex-col items-center gap-2 hover:-translate-y-5  transition-all duration-300 bg-amber-900/10 p-2 w-25 h-fit overflow-hidden rounded-lg cursor-pointer"
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

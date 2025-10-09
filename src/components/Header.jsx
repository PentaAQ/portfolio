import { Icon } from "@iconify/react";

export const Header = () => {
  return (
    <header className="w-full fixed backdrop-blur-sm shadow-sm py-3 text-white bg-transparent">
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center px-2">
        <div className="flex gap-2 items-end">
          <img
            src="/logo.svg"
            alt="Logo de Alexiz Yucra"
            className="h-13 fill-amber-500"
          />
          <h1 className="text-3xl font-bold text-orange">Alexiz Yucra</h1>
        </div>

        <label htmlFor="menu-toggle" className="cursor-pointer md:hidden">
          <Icon icon="solar:hamburger-menu-outline" width="24" height="24" />
        </label>
        <input type="checkbox" id="menu-toggle" className="peer hidden" />

        <nav
          className="md:flex flex-col md:flex-row 
                max-md:absolute max-md:top-20 max-md:right-0 max-md:w-full 
                max-md:h-0 max-md:overflow-hidden 
                peer-checked:max-md:h-44 transition-all duration-700 ease-in-out max-md:border-b max-md:border-b-gray-500"
        >
          <ul className="capitalize flex md:gap-6 text-lg font-medium max-md:flex-col">
            <li className="">
              <a className="a-header" href="#home">
                home
              </a>
            </li>
            <li>
              <a className="a-header" href="#about">
                about
              </a>
            </li>
            <li>
              <a className="a-header" href="#projects">
                projects
              </a>
            </li>
            <li>
              <a className="a-header" href="#contact">
                contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

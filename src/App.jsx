import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";

function App() {
  return (
    <section className="bg-neutral-900 w-full overflow-hidden">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </section>
  );
}

export default App;

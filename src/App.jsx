import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/Nav/NavBar";
import Parallax from "./components/Parallax/Parallax";
import Portfolio from "./components/Portfolio/Portfolio";
import Services from "./components/Services/Services";

const App = () => {
  return (
    <>
      <section className="h-screen snap-center" id="Home">
        <NavBar />
        <Hero />
      </section>
      <section className="h-screen  snap-center">
        <Parallax isService={true} />
      </section>
      <section className="h-screen  snap-center" id="Services">
        <Services />
      </section>
      <section className="h-screen snap-center">
        <Parallax isService={false} />
      </section>
      <Portfolio />
      <section className="h-screen flex justify-center items-center  snap-center">
        <Contact />
      </section>
    </>
  );
};

export default App;

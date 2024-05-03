import Hero from "./components/Hero";
import NavBar from "./components/Nav/NavBar";
import Parallax from "./components/Parallax/Parallax";

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
      <section className="h-screen  snap-center">Hehe</section>
      <section className="h-screen snap-center">
        <Parallax isService={false} />
      </section>
    </>
  );
};

export default App;

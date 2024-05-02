import Hero from "./components/Hero";
import NavBar from "./components/Nav/NavBar";

const App = () => {
  return (
    <>
      <section className="h-screen snap-center" id="Home">
        <NavBar />
        <Hero />
      </section>
      <section className="h-screen  snap-center">Hehe</section>
      <section className="h-screen snap-center">Hehe</section>
    </>
  );
};

export default App;

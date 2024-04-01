import Navbar from "../Components/navbar";
import HeroComponent from "../Components/heroComponent.jsx";
import FooterComponent from "../Components/footer_Component.jsx";

function Home({ Student }) {
  return (
    <div className="flex flex-row min-h-screen bg-zinc-6f00">
      <Navbar />
      <HeroComponent Student={Student} />
      <FooterComponent Student={Student} />
    </div>
  );
}

export default Home;

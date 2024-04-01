import Navbar from "../Components/navbar";
import HeroComponent from "../Components/heroComponent";
import FooterComponent from "../Components/footer_Component";
import ReallocationConsent from "../Components/Reallocation_Consent";
import Form from "../Components/Form";

function Reallocation_Request({ Student }) {
  return (
    <div className="flex flex-row min-h-screen bg-zinc-6f00">
      <Navbar />
      <ReallocationConsent Student={Student} />
    </div>
  );
}

export default Reallocation_Request;

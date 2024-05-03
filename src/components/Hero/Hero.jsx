import HeroImage from "./HeroImage";
import HeroInfo from "./HeroInfo";
import MovingText from "./MovingText";

export default function Hero() {
  return (
    <div className="h-hero relative overflow-hidden bg-primary">
      <HeroInfo />
      <HeroImage />
      <MovingText />
    </div>
  );
}

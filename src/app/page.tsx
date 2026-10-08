import Hero from "@/components/sections/hero";
import WhoWeAre from "@/components/sections/who-we-are";
import Explore from "@/components/sections/explore";
import Cta from "@/components/sections/cta";
import Initiative from "@/components/sections/initiative";

export default function Home() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <Initiative />
      <Explore />
      <Cta />
    </>
  );
}

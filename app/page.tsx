import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import SheSaidYes from "@/components/SheSaidYes";
// import SaveTheDate from "@/components/SaveTheDate";
import Programme from "@/components/Programme";
import Breakfast from "@/components/Breakfast";
import DressCode from "@/components/DressCode";
import Location from "@/components/Location";
import RSVP from "@/components/RSVP";
import Details from "@/components/Details";
import Countdown from "@/components/Countdown";
import WithLove from "@/components/WithLove";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <SheSaidYes />
      {/* <SaveTheDate /> */}
      <Programme />
      <Breakfast />
      <DressCode />
      <Location />
      <RSVP />
      <Details />
      <Countdown />
      <WithLove />
    </main>
  );
}

import CoursesSection from "../components/CoursesSection";
import HeroSection from "../components/hero_section";
import JoinUsSection from "../components/joinusSection";
import Ratings from "../components/rating";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <CoursesSection />
        <Ratings />
        <JoinUsSection/>
      </main>
    </>
  );
}

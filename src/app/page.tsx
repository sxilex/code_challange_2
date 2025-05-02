import HeroSection from "@/components/hero-section";
import AboutMe from "@/components/about-section";
import Skill from "@/components/skill-section";
import PortoFolio from "@/components/portofolio-section";
import Experience from "@/components/experience-section";
import Testimonial from "@/components/testimonial-section";
import Contacts from "@/components/contact-section";
// import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <main className="absolute flex flex-col justify-center items-start w-full overflow-x-hidden">
      <HeroSection />
      <AboutMe />
      <Skill />
      <PortoFolio />
      <Experience />
      <Testimonial />
      <Contacts />
      {/* <Footer /> */}
    </main>
  );
}

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <nav className="aboslute h-auto  bottom-0 py-4 px-8 w-screen bg-stone-900 text-white">
      <div className="mx-auto flex justify-between max-w-[90%] ">
        <nav className="grid lg:flex gap-2 lg:gap-8 right-0">
          <Link href="#about-section">About</Link>
          <Link href="#skill-section">Skill</Link>
          <Link href="#portofolio-section">Portofolio</Link>
        </nav>
        <nav>
          <Link href="#hero-section"> I did the Code wow </Link>
        </nav>
        <nav className="grid lg:flex gap-2 lg:gap-8 left-0">
          <Link href="#experience-section">Experience</Link>
          <Link href="#testimonial-section">Testimonial</Link>
          <Link href="#contact-section">Contact</Link>
        </nav>
      </div>
    </nav>
  );
}

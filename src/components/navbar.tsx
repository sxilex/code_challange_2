import Link from "next/link";

export default function Header() {
  return (
    <nav className="fixed py-4 lg:px-8 px-2 w-screen z-50 bg-stone-900 text-white ">
      <div className="mx-auto flex right-0 justify-between w-[90%] ">
        <nav className="text-white text-sm lg:text-lg">
          <Link href="#hero-section"> (っ◔◡◔)っ🍔</Link>
        </nav>
        <nav className="grid grid-cols-3 text-center sm:grid-cols-6 text-sm lg:text-lg gap-4 lg:gap-8">
          <Link href="#about-section">About</Link>
          <Link href="#skill-section">Skill</Link>
          <Link href="#portofolio-section">Portofolio</Link>
          <Link href="#experience-section">Experience</Link>
          <Link href="#testimonial-section">Testimonial</Link>
          <Link href="#contact-section">Contact</Link>
        </nav>
      </div>
    </nav>
  );
}

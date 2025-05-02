import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section id="hero-section">
      <div className="w-screen min-h-screen pt-[56px] grid bg-black place-items-center">
        <div className="bg-gray-700 shadow-md w-[90%] md:w-[80%] lg:h-[75%] md:h- flex flex-col md:flex-row justify-between items-center p-6 md:px-12 rounded-3xl gap-6">
          {/* Text Section */}
          <div className="bg-stone-700 text-yellow-300 grid gap-4 p-6 rounded-xl w-full md:w-[60%] text-center md:text-left h-[60%] overflow-y-auto">
            <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold">
              Raihan Firdaus
            </p>
            <p className="text-lg sm:text-xl md:text-2xl font-medium">
              Full-Stack Web Developer
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed">
              A junior coder learning full-stack web development, willing to
              meet your needs.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2 text-sm sm:text-base md:text-lg font-semibold">
              <Link href="#about-section" className="hover:underline">
                About
              </Link>
              <Link href="#portofolio-section" className="hover:underline">
                Portfolio
              </Link>
              <Link href="#testimonial-section" className="hover:underline">
                Client Testimonies
              </Link>
              <Link href="#contact-section" className="hover:underline">
                Contact
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-40 h-40 sm:w-52 sm:h-52 md:w-[30%] md:h-[65%] overflow-hidden flex justify-center items-center">
            <Image
              className="rounded-full object-cover w-full h-full"
              src={"/big-brain.png"}
              alt="Big Brain"
              width={30000}
              height={30000}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

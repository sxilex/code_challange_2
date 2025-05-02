export default function AboutMe() {
  return (
    <section
      id="about-section"
      className="w-screen min-h-screen lg:pt-[56px] pt-[0px] bg-black p-4 grid place-items-center"
    >
      <div className="bg-gray-700 text-white shadow-md w-[80%] h-[75%] grid place-items-center py-8 px-4 sm:px-8 md:px-12 rounded-3xl">
        <p className="text-3xl sm:text-4xl font-bold mb-6">About Me</p>

        <div className="flex flex-col lg:flex-row gap-6 w-full h-full overflow-y-auto">
          {/* Left Column */}
          <div className="lg:w-1/3 bg-stone-700 rounded-xl p-4 h-full overflow-y-auto">
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              Full-stack developer passionate about clean code, elegant UI, and
              solving real-world problems. I specialize in JavaScript (React,
              Node.js) and enjoy working with Python, TypeScript, and even a bit
              of Rust for fun. From personal apps to enterprise systems, I build
              responsive frontends, powerful backends, and smart automations —
              all with a focus on scalability and user experience. Open to
              freelance and collaborative projects.
            </p>
          </div>

          {/* Middle Column */}
          <div className="lg:w-1/3 bg-stone-700 rounded-xl p-4 grid gap-4 h-full overflow-y-auto">
            <div className="text-center">
              <p className="font-semibold text-lg text-red-300">
                Frontend Development
              </p>
              <p className="text-sm sm:text-base text-yellow-100">
                HTML5, CSS3, JavaScript, React.js, Next.js, Tailwind CSS, and
                more!
              </p>
            </div>
            <div className="text-center">
              <p className="font-semibold text-lg text-green-400">
                Backend Development
              </p>
              <p className="text-sm sm:text-base text-yellow-100">
                Node.js, Express.js, Authentication (OAuth, JWT), and more
              </p>
            </div>
            <div className="text-center">
              <p className="font-semibold text-lg text-blue-300">
                Development Tools I Use
              </p>
              <p className="text-sm sm:text-base text-yellow-100">
                Git & GitHub, VSCode, Postman, Figma, Docker, and more!
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:w-1/3 bg-stone-700 rounded-xl p-4 grid gap-4 h-full overflow-y-auto">
            <p className="text-center text-lg font-semibold border-b-gray-700">
              Aspiring Developer
            </p>
            <p className="text-center text-base">Junior Full-Stack Developer</p>
            <div className="grid grid-cols-1 sm:grid-cols-[40%_1fr] gap-2">
              <p className="text-center font-medium text-red-200">Languages</p>
              <p className="text-amber-200">
                JavaScript, HTML, CSS, Python (basic)
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-[40%_1fr] gap-2">
              <p className="text-center font-medium text-green-200">
                Frameworks & Libraries
              </p>
              <p className="text-amber-200">
                React, Node.js, Express, Bootstrap
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-[40%_1fr] gap-2">
              <p className="text-center font-medium text-blue-200">Tools</p>
              <p className="text-amber-200">Git, VS Code, Postman, Figma</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
